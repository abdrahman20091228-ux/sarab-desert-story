#!/usr/bin/env python3
"""
Downloads real 3D photogrammetry-scanned models from Poly Haven (CC0),
simplifies/decimates high-density meshes via vertex clustering to game-ready triangle counts,
packs them into ultra-compact binary mesh buffers (public/models/<name>.bin + manifest.json),
and converts their 1K Diffuse/Normal/ARM textures into 512x512 WebP textures.
"""

import json
import os
import urllib.request
import numpy as np
from PIL import Image

ROOT = "/home/antigravity/abdrahman20091228-ux/sarab-desert-story"
MOD_DIR = os.path.join(ROOT, "public/models")
os.makedirs(MOD_DIR, exist_ok=True)


def get_json(url):
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    return json.loads(urllib.request.urlopen(req, timeout=20).read().decode())


def download_bytes(url, cache_path):
    if os.path.exists(cache_path) and os.path.getsize(cache_path) > 128:
        with open(cache_path, "rb") as f:
            return f.read()
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    data = urllib.request.urlopen(req, timeout=45).read()
    with open(cache_path, "wb") as f:
        f.write(data)
    return data


def read_accessor(gltf, bin_data, acc_idx):
    acc = gltf["accessors"][acc_idx]
    bv = gltf["bufferViews"][acc["bufferView"]]
    offset = bv.get("byteOffset", 0) + acc.get("byteOffset", 0)
    count = acc["count"]
    ctype = acc["componentType"]
    atype = acc["type"]
    num_comp = {"SCALAR": 1, "VEC2": 2, "VEC3": 3, "VEC4": 4}[atype]
    dtype = {
        5121: np.uint8,
        5123: np.uint16,
        5125: np.uint32,
        5126: np.float32,
    }[ctype]
    stride = bv.get("byteStride", 0)
    item_bytes = np.dtype(dtype).itemsize * num_comp
    if stride and stride != item_bytes:
        arr = np.zeros((count, num_comp), dtype=dtype)
        for i in range(count):
            start = offset + i * stride
            arr[i] = np.frombuffer(bin_data, dtype=dtype, count=num_comp, offset=start)
        return arr if num_comp > 1 else arr[:, 0]
    else:
        arr = np.frombuffer(bin_data, dtype=dtype, count=count * num_comp, offset=offset)
        return arr.reshape((count, num_comp)) if num_comp > 1 else arr.copy()


def decimate_mesh(pos, norm, uv, indices, grid_res=26):
    """Fast spatial vertex-clustering decimator preserving UVs & normals."""
    tris = indices.reshape((-1, 3))
    if len(tris) <= 250:
        return pos, norm, uv, indices.astype(np.uint16)

    mn = pos.min(axis=0)
    mx = pos.max(axis=0)
    span = np.maximum(mx - mn, 1e-5)

    # Quantize position + UV bucket to avoid merging across UV seams
    q_pos = np.floor(((pos - mn) / span) * grid_res).astype(np.int32)
    q_uv = np.floor(np.clip(uv, 0, 1) * 8).astype(np.int32)
    keys = (
        q_pos[:, 0] * 10000000
        + q_pos[:, 1] * 100000
        + q_pos[:, 2] * 1000
        + q_uv[:, 0] * 32
        + q_uv[:, 1]
    )

    _, unique_first, inverse = np.unique(keys, return_index=True, return_inverse=True)
    new_pos = pos[unique_first]
    new_norm = norm[unique_first]
    new_uv = uv[unique_first]

    new_tris = inverse[tris]
    # Remove degenerate triangles where two or more vertices collapsed to the same cluster
    valid = (
        (new_tris[:, 0] != new_tris[:, 1])
        & (new_tris[:, 1] != new_tris[:, 2])
        & (new_tris[:, 2] != new_tris[:, 0])
    )
    new_tris = new_tris[valid]

    # Re-compact used vertices
    used_verts, compact_inv = np.unique(new_tris.reshape(-1), return_inverse=True)
    final_pos = new_pos[used_verts]
    final_norm = new_norm[used_verts]
    final_uv = new_uv[used_verts]
    final_indices = compact_inv.astype(np.uint16)
    return final_pos, final_norm, final_uv, final_indices


def process_polyhaven_model(ph_name, out_name, grid_res=24, tex_size=512, center_bottom=True):
    print(f"Fetching real Poly Haven 3D scan: {ph_name} -> {out_name}")
    info = get_json(f"https://api.polyhaven.com/files/{ph_name}")
    ginfo = info["gltf"]["1k"]["gltf"]
    gltf = get_json(ginfo["url"])
    inc = ginfo["include"]

    bin_key = [k for k in inc if k.endswith(".bin")][0]
    bin_data = download_bytes(inc[bin_key]["url"], f"/tmp/{ph_name}.bin")

    all_pos, all_norm, all_uv, all_idx = [], [], [], []
    v_offset = 0

    # Walk nodes or meshes
    for m in gltf.get("meshes", []):
        for p in m.get("primitives", []):
            attrs = p["attributes"]
            if "POSITION" not in attrs or "indices" not in p:
                continue
            pos = read_accessor(gltf, bin_data, attrs["POSITION"]).astype(np.float32)
            norm = (
                read_accessor(gltf, bin_data, attrs["NORMAL"]).astype(np.float32)
                if "NORMAL" in attrs
                else np.tile([0.0, 1.0, 0.0], (len(pos), 1)).astype(np.float32)
            )
            uv = (
                read_accessor(gltf, bin_data, attrs["TEXCOORD_0"]).astype(np.float32)
                if "TEXCOORD_0" in attrs
                else np.zeros((len(pos), 2), dtype=np.float32)
            )
            idx = read_accessor(gltf, bin_data, p["indices"]).astype(np.uint32) + v_offset
            all_pos.append(pos)
            all_norm.append(norm)
            all_uv.append(uv)
            all_idx.append(idx)
            v_offset += len(pos)

    pos = np.vstack(all_pos)
    norm = np.vstack(all_norm)
    uv = np.vstack(all_uv)
    idx = np.concatenate(all_idx)

    # Center horizontally, put base at y=0, and normalize max horizontal span to 1.0 unit!
    mn = pos.min(axis=0)
    mx = pos.max(axis=0)
    center = (mn + mx) * 0.5
    if center_bottom:
        pos[:, 0] -= center[0]
        pos[:, 1] -= mn[1]
        pos[:, 2] -= center[2]
    else:
        pos -= center

    horiz_span = max(float(mx[0] - mn[0]), float(mx[2] - mn[2]), 1e-5)
    pos /= horiz_span

    orig_tris = len(idx) // 3
    pos, norm, uv, idx = decimate_mesh(pos, norm, uv, idx, grid_res=grid_res)
    final_tris = len(idx) // 3

    # Compute tight bounding box for physics collider
    bmin = pos.min(axis=0).tolist()
    bmax = pos.max(axis=0).tolist()

    # Pack interleaved vertex buffer [px,py,pz, nx,ny,nz, u,v] (8 float32s per vertex) + uint16 indices
    vcount = len(pos)
    icount = len(idx)
    interleaved = np.hstack([pos, norm, uv]).astype(np.float32)

    bin_out_path = os.path.join(MOD_DIR, f"{out_name}.bin")
    with open(bin_out_path, "wb") as f:
        f.write(np.array([vcount, icount], dtype=np.uint32).tobytes())
        f.write(interleaved.tobytes())
        f.write(idx.astype(np.uint16).tobytes())

    # Process textures (Diffuse + Normal)
    diff_candidates = [k for k in inc if "diff" in k.lower() or "col" in k.lower()]
    nor_candidates = [k for k in inc if "nor" in k.lower()]

    has_diff = False
    has_nor = False
    if diff_candidates:
        dbytes = download_bytes(inc[diff_candidates[0]]["url"], f"/tmp/{ph_name}_diff.jpg")
        with open(f"/tmp/{ph_name}_diff_tmp.jpg", "wb") as f:
            f.write(dbytes)
        im = Image.open(f"/tmp/{ph_name}_diff_tmp.jpg").convert("RGB").resize((tex_size, tex_size), Image.Resampling.LANCZOS)
        im.save(os.path.join(MOD_DIR, f"{out_name}_diff.webp"), "WEBP", quality=82)
        has_diff = True

    if nor_candidates:
        nbytes = download_bytes(inc[nor_candidates[0]]["url"], f"/tmp/{ph_name}_nor.jpg")
        with open(f"/tmp/{ph_name}_nor_tmp.jpg", "wb") as f:
            f.write(nbytes)
        im = Image.open(f"/tmp/{ph_name}_nor_tmp.jpg").convert("RGB").resize((tex_size, tex_size), Image.Resampling.LANCZOS)
        im.save(os.path.join(MOD_DIR, f"{out_name}_nor.webp"), "WEBP", quality=80)
        has_nor = True

    sz_kb = os.path.getsize(bin_out_path) // 1024
    print(f"  -> {out_name}: {orig_tris} -> {final_tris} tris ({vcount} verts), bin={sz_kb} KB, bbox={[round(x,2) for x in bmin]}..{[round(x,2) for x in bmax]}")
    return {
        "name": out_name,
        "source": f"Poly Haven CC0 ({ph_name})",
        "verts": int(vcount),
        "tris": int(final_tris),
        "bmin": [round(float(x), 3) for x in bmin],
        "bmax": [round(float(x), 3) for x in bmax],
        "hasDiff": has_diff,
        "hasNor": has_nor,
    }


def main():
    manifest = {}
    models_to_fetch = [
        ("rock_07", "rock_07", 11, 512),
        ("rock_09", "rock_09", 11, 512),
        ("seadogs_compass", "compass", 11, 512),
        ("wooden_crate_01", "crate", 14, 512),
        ("painted_wooden_table", "table", 24, 512),
        ("painted_wooden_chair_01", "chair", 24, 512),
        ("barrel_03", "barrel", 18, 512),
        ("vintage_oil_lamp", "lantern", 14, 512),
        ("jug_01", "jug", 13, 512),
        ("old_tyre", "tyre", 14, 512),
    ]
    for ph_name, out_name, grid_res, tex_size in models_to_fetch:
        manifest[out_name] = process_polyhaven_model(ph_name, out_name, grid_res=grid_res, tex_size=tex_size)

    with open(os.path.join(MOD_DIR, "manifest.json"), "w") as f:
        json.dump(manifest, f, indent=2)
    print("Saved public/models/manifest.json successfully!")


if __name__ == "__main__":
    main()
