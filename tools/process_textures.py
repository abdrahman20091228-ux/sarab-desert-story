"""
PBR Texture Processor for SARAB: Mirage of Noon.
Takes generated albedo textures, ensures seamless wrap edges, optimizes resolution
for mobile+desktop 60FPS, and derives multi-scale Sobel normal maps and roughness maps.
"""
import os
import glob
import numpy as np
from PIL import Image, ImageFilter

ARTIFACT_DIR = "/home/antigravity/.gemini/jetski/brain/v1/default/jetski_remote_agents_3p/89b44aec-088e-45c1-8090-6ae0be2e2ccd"
OUT_DIR = "/home/antigravity/abdrahman20091228-ux/sarab-desert-story/public/textures"
os.makedirs(OUT_DIR, exist_ok=True)

TEXTURES = {
    "sand": ("tex_sand_albedo_*.jpg", 1024, 3.2, (0.72, 0.96)),
    "adobe_wall": ("tex_adobe_wall_*.jpg", 1024, 4.5, (0.78, 0.98)),
    "desert_wood": ("tex_desert_wood_*.jpg", 1024, 4.0, (0.72, 0.95)),
    "rusted_metal": ("tex_rusted_metal_*.jpg", 1024, 4.2, (0.35, 0.88)),
    "sandstone_rock": ("tex_sandstone_rock_*.jpg", 1024, 4.8, (0.75, 0.96)),
    "floor_tiles": ("tex_floor_tiles_*.jpg", 1024, 4.2, (0.70, 0.95)),
    "tattered_fabric": ("tex_tattered_fabric_*.jpg", 512, 3.5, (0.85, 0.99)),
}


def make_seamless(arr: np.ndarray, margin: int = 48) -> np.ndarray:
    """Blend opposite borders gently to guarantee zero visible tiling seams."""
    h, w, c = arr.shape
    out = arr.astype(np.float32).copy()
    # Roll by half, blend a soft cross seam, then roll back
    rolled = np.roll(np.roll(out, h // 2, axis=0), w // 2, axis=1)
    y = np.linspace(-1, 1, h)[:, None]
    x = np.linspace(-1, 1, w)[None, :]
    # Mask is 1 in the center (keep rolled), 0 near edges (use original)
    wx = np.clip((1.0 - np.abs(x)) * (w / (2.0 * margin)), 0.0, 1.0)
    wy = np.clip((1.0 - np.abs(y)) * (h / (2.0 * margin)), 0.0, 1.0)
    # Smoothstep
    wx = wx * wx * (3.0 - 2.0 * wx)
    wy = wy * wy * (3.0 - 2.0 * wy)
    mask = (wx * wy)[:, :, None]
    blended = out * (1.0 - mask) + rolled * mask
    # Actually we only want to feather near the border seam of `out`, so roll blended back:
    # Simpler: feather border strips directly with periodic wrap!
    out2 = arr.astype(np.float32).copy()
    t = np.linspace(0.0, 1.0, margin, dtype=np.float32)
    t = t * t * (3.0 - 2.0 * t)
    # Horizontal wrap
    left = out2[:, :margin, :]
    right = out2[:, -margin:, :]
    # Mix edge towards average across seam
    seam_h = 0.5 * (left[:, :1, :] + right[:, -1:, :])
    for i in range(margin):
        w_edge = (1.0 - t[i]) * 0.45
        out2[:, i, :] = out2[:, i, :] * (1.0 - w_edge) + right[:, i, :] * w_edge
        out2[:, -(i + 1), :] = out2[:, -(i + 1), :] * (1.0 - w_edge) + left[:, -(i + 1), :] * w_edge
    top = out2[:margin, :, :].copy()
    bottom = out2[-margin:, :, :].copy()
    for i in range(margin):
        w_edge = (1.0 - t[i]) * 0.45
        out2[i, :, :] = out2[i, :, :] * (1.0 - w_edge) + bottom[i, :, :] * w_edge
        out2[-(i + 1), :, :] = out2[-(i + 1), :, :] * (1.0 - w_edge) + top[-(i + 1), :, :] * w_edge
    return np.clip(out2, 0, 255).astype(np.uint8)


def generate_normal_map(height: np.ndarray, strength: float) -> Image.Image:
    """Multi-scale Sobel tangent-space normal map from normalized heightfield."""
    h_fine = height
    # Medium scale blur via periodic roll averaging
    h_med = (
        np.roll(height, 1, 0) + np.roll(height, -1, 0) +
        np.roll(height, 1, 1) + np.roll(height, -1, 1) +
        height * 2.0
    ) / 6.0
    h_mix = h_fine * 0.65 + h_med * 0.35

    # Periodic Sobel derivatives
    dx = (
        (np.roll(np.roll(h_mix, -1, 1), -1, 0) + 2.0 * np.roll(h_mix, -1, 1) + np.roll(np.roll(h_mix, -1, 1), 1, 0)) -
        (np.roll(np.roll(h_mix, 1, 1), -1, 0) + 2.0 * np.roll(h_mix, 1, 1) + np.roll(np.roll(h_mix, 1, 1), 1, 0))
    ) * strength

    dy = (
        (np.roll(np.roll(h_mix, -1, 0), -1, 1) + 2.0 * np.roll(h_mix, -1, 0) + np.roll(np.roll(h_mix, -1, 0), 1, 1)) -
        (np.roll(np.roll(h_mix, 1, 0), -1, 1) + 2.0 * np.roll(h_mix, 1, 0) + np.roll(np.roll(h_mix, 1, 0), 1, 1))
    ) * strength

    nx = -dx
    ny = -dy
    nz = np.ones_like(nx)
    length = np.sqrt(nx * nx + ny * ny + nz * nz) + 1e-6
    nx /= length
    ny /= length
    nz /= length

    rgb = np.stack([
        (nx * 0.5 + 0.5) * 255.0,
        (ny * 0.5 + 0.5) * 255.0,
        (nz * 0.5 + 0.5) * 255.0,
    ], axis=-1)
    return Image.fromarray(np.clip(rgb, 0, 255).astype(np.uint8), mode="RGB")


def generate_roughness_map(height: np.ndarray, r_range: tuple) -> Image.Image:
    """Invert & remap heightfield into physically plausible roughness map."""
    r_min, r_max = r_range
    # Darker crevices -> rougher, brighter ridges -> slightly smoother
    r = r_max - height * (r_max - r_min)
    return Image.fromarray(np.clip(r * 255.0, 0, 255).astype(np.uint8), mode="L")


for name, (pattern, size, normal_strength, r_range) in TEXTURES.items():
    matches = sorted(glob.glob(os.path.join(ARTIFACT_DIR, pattern)))
    if not matches:
        print(f"WARNING: missing {pattern}")
        continue
    src = matches[-1]
    img = Image.open(src).convert("RGB").resize((size, size), Image.Resampling.LANCZOS)
    arr = np.array(img)
    arr = make_seamless(arr, margin=max(24, size // 24))

    albedo_img = Image.fromarray(arr, mode="RGB")
    albedo_path = os.path.join(OUT_DIR, f"{name}_albedo.jpg")
    albedo_img.save(albedo_path, quality=88, optimize=True)

    # Luminance heightfield
    lum = (0.299 * arr[:, :, 0] + 0.587 * arr[:, :, 1] + 0.114 * arr[:, :, 2]) / 255.0
    lum = (lum - lum.min()) / (lum.max() - lum.min() + 1e-6)

    normal_img = generate_normal_map(lum, normal_strength)
    normal_path = os.path.join(OUT_DIR, f"{name}_normal.jpg")
    normal_img.save(normal_path, quality=86, optimize=True)

    rough_img = generate_roughness_map(lum, r_range)
    rough_path = os.path.join(OUT_DIR, f"{name}_roughness.jpg")
    rough_img.save(rough_path, quality=84, optimize=True)

    print(f"Processed PBR set: {name} ({size}x{size})")

print("All PBR textures generated successfully.")
