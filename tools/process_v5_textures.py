"""
SARAB v5.0 PBR Texture Processor
- Takes Nano Banana generated Arabian desert sand, rocky canyon floor, and cracked sabkha textures
- Performs low-frequency illumination leveling + periodic toroidal seamless edge blending
- Derives clean multi-scale Sobel tangent-space normal maps (OpenGL +Y up) & calibrated roughness maps
- Outputs crisp WebP sets at 1024x1024 (desktop) and 512x512 (mobile)
"""
import os
import glob
import numpy as np
from PIL import Image, ImageFilter

ARTIFACT_DIR = "/home/antigravity/.gemini/jetski/brain/v1/default/jetski_remote_agents_3p_devbox/1be41ae0-5f74-4cc2-b058-af961ab03b93"
OUT_DIR = "/home/antigravity/abdrahman20091228-ux/sarab-desert-story/public/textures"
os.makedirs(OUT_DIR, exist_ok=True)

TARGETS = {
    # output_prefix: (glob_pattern, normal_strength, roughness_range, blur_radius)
    "sand": ("arabian_sand_albedo_*.jpg", 2.35, (0.82, 0.96), 1.15),
    "canyon_floor": ("canyon_rock_floor_albedo_*.jpg", 3.10, (0.76, 0.96), 0.85),
    "sabkha": ("sabkha_crust_albedo_*.jpg", 2.85, (0.74, 0.95), 0.75),
}


def level_illumination(arr_f32: np.ndarray, radius: int = 96) -> np.ndarray:
    """Remove subtle low-frequency brightness drift so large desert terrains never show tiling patches."""
    img = Image.fromarray(np.clip(arr_f32, 0, 255).astype(np.uint8), mode="RGB")
    low = np.array(img.filter(ImageFilter.GaussianBlur(radius=radius)), dtype=np.float32)
    mean_col = low.mean(axis=(0, 1), keepdims=True)
    # Soft 65% leveling preserves organic micro-variation while killing macro uneven lighting
    leveled = arr_f32 + (mean_col - low) * 0.65
    return np.clip(leveled, 0.0, 255.0)


def make_seamless_periodic(arr_f32: np.ndarray, margin: int = 64) -> np.ndarray:
    """Toroidal periodic feathering along X and Y seams with zero mirror symmetry artifacts."""
    h, w, _ = arr_f32.shape
    out = arr_f32.copy()

    # Smooth cosine-ish weight ramp across seam strip
    t = np.linspace(0.0, 1.0, margin, dtype=np.float32)
    s = 0.5 * (1.0 - np.cos(t * np.pi))  # 0 at edge -> 1 at inner end of margin

    # Roll half-width so the seam sits cleanly in the center of a temp image, blend, then roll back
    rolled_x = np.roll(out, w // 2, axis=1)
    cx = w // 2
    # Blend across [cx - margin : cx + margin] using original shifted pixels smoothly
    left_orig = np.roll(out, w // 2 + margin, axis=1)
    right_orig = np.roll(out, w // 2 - margin, axis=1)
    for i in range(margin):
        w_blend = 0.5 * (1.0 - s[i])
        rolled_x[:, cx - i - 1, :] = rolled_x[:, cx - i - 1, :] * (1.0 - w_blend) + rolled_x[:, cx + i, :] * w_blend
        rolled_x[:, cx + i, :] = rolled_x[:, cx + i, :] * (1.0 - w_blend) + out[:, (i) % w, :] * 0.0 + rolled_x[:, cx - i - 1, :] * (w_blend * 0.5) / max(0.5, 1.0 - w_blend * 0.5)
    # Direct symmetric edge-to-edge periodic cross-blend (guaranteed exact continuity at pixel 0 <-> w-1!)
    out = arr_f32.copy()
    left = out[:, :margin, :].copy()
    right = out[:, -margin:, :].copy()
    for i in range(margin):
        alpha = 0.5 * (1.0 - s[i])  # 0.5 at exact seam pixel (i=0), 0.0 at i=margin-1
        out[:, i, :] = left[:, i, :] * (1.0 - alpha) + right[:, -(i + 1), :] * alpha
        out[:, -(i + 1), :] = right[:, -(i + 1), :] * (1.0 - alpha) + left[:, i, :] * alpha

    top = out[:margin, :, :].copy()
    bottom = out[-margin:, :, :].copy()
    for i in range(margin):
        alpha = 0.5 * (1.0 - s[i])
        out[i, :, :] = top[i, :, :] * (1.0 - alpha) + bottom[-(i + 1), :, :] * alpha
        out[-(i + 1), :, :] = bottom[-(i + 1), :, :] * (1.0 - alpha) + top[i, :, :] * alpha

    return np.clip(out, 0.0, 255.0)


def periodic_blur(h: np.ndarray, passes: int = 2) -> np.ndarray:
    """Fast periodic 3x3 binomial blur so height gradients wrap seamlessly across tile edges."""
    out = h.copy()
    for _ in range(passes):
        out = (
            4.0 * out
            + 2.0 * (np.roll(out, 1, 0) + np.roll(out, -1, 0) + np.roll(out, 1, 1) + np.roll(out, -1, 1))
            + (
                np.roll(np.roll(out, 1, 0), 1, 1)
                + np.roll(np.roll(out, 1, 0), -1, 1)
                + np.roll(np.roll(out, -1, 0), 1, 1)
                + np.roll(np.roll(out, -1, 0), -1, 1)
            )
        ) / 16.0
    return out


def derive_clean_normal(arr_u8: np.ndarray, strength: float, blur_radius: float) -> Image.Image:
    """Multi-scale clean tangent-space normal map (OpenGL +Y up, zero pixel speckle)."""
    # Compute perceptual height from luminance (brighter ridge = higher, darker crack/trough = lower)
    lum = (0.299 * arr_u8[:, :, 0] + 0.587 * arr_u8[:, :, 1] + 0.114 * arr_u8[:, :, 2]).astype(np.float32) / 255.0
    # Normalize robust 2nd-98th percentile range so contrast is consistent
    lo, hi = np.percentile(lum, [2.0, 98.0])
    h = np.clip((lum - lo) / max(1e-4, hi - lo), 0.0, 1.0)

    # Multi-scale smooth heightfields (removes high-frequency JPEG/grain noise cleanly!)
    h_fine = periodic_blur(h, passes=max(1, int(round(blur_radius * 2))))
    h_med = periodic_blur(h_fine, passes=6)
    h_broad = periodic_blur(h_med, passes=14)

    def sobel(field: np.ndarray, scale: float):
        dx = (
            (np.roll(np.roll(field, -1, 1), -1, 0) + 2.0 * np.roll(field, -1, 1) + np.roll(np.roll(field, -1, 1), 1, 0))
            - (np.roll(np.roll(field, 1, 1), -1, 0) + 2.0 * np.roll(field, 1, 1) + np.roll(np.roll(field, 1, 1), 1, 0))
        ) * scale
        dy = (
            (np.roll(np.roll(field, -1, 0), -1, 1) + 2.0 * np.roll(field, -1, 0) + np.roll(np.roll(field, -1, 0), 1, 1))
            - (np.roll(np.roll(field, 1, 0), -1, 1) + 2.0 * np.roll(field, 1, 0) + np.roll(np.roll(field, 1, 0), 1, 1))
        ) * scale
        return dx, dy

    dx1, dy1 = sobel(h_fine, strength * 0.42)
    dx2, dy2 = sobel(h_med, strength * 0.40)
    dx3, dy3 = sobel(h_broad, strength * 0.28)

    dx = dx1 + dx2 + dx3
    dy = dy1 + dy2 + dy3

    nx = -dx
    ny = dy  # OpenGL tangent-space +Y up for Three.js flipY=true textures
    nz = np.ones_like(nx)
    inv_len = 1.0 / np.sqrt(nx * nx + ny * ny + nz * nz + 1e-8)
    nx *= inv_len
    ny *= inv_len
    nz *= inv_len

    rgb = np.stack([(nx * 0.5 + 0.5) * 255.0, (ny * 0.5 + 0.5) * 255.0, (nz * 0.5 + 0.5) * 255.0], axis=-1)
    return Image.fromarray(np.clip(rgb, 0, 255).astype(np.uint8), mode="RGB"), h_fine


def derive_roughness(h_fine: np.ndarray, r_range: tuple) -> Image.Image:
    r_min, r_max = r_range
    r = r_max - h_fine * (r_max - r_min)
    return Image.fromarray(np.clip(r * 255.0, 0, 255).astype(np.uint8), mode="L")


def main():
    for name, (pattern, norm_strength, r_range, blur_r) in TARGETS.items():
        matches = sorted(glob.glob(os.path.join(ARTIFACT_DIR, pattern)))
        if not matches:
            raise FileNotFoundError(f"Missing generated image matching {pattern} in {ARTIFACT_DIR}")
        src = matches[-1]
        img = Image.open(src).convert("RGB").resize((1024, 1024), Image.Resampling.LANCZOS)
        arr = np.array(img, dtype=np.float32)
        arr = level_illumination(arr, radius=96)
        arr = make_seamless_periodic(arr, margin=56)
        arr_u8 = arr.astype(np.uint8)

        albedo_1024 = Image.fromarray(arr_u8, mode="RGB")
        normal_1024, h_fine = derive_clean_normal(arr_u8, norm_strength, blur_r)
        rough_1024 = derive_roughness(h_fine, r_range)

        # Save 1024x1024 Desktop WebP
        albedo_1024.save(os.path.join(OUT_DIR, f"{name}_albedo.webp"), "WEBP", quality=88, method=6)
        normal_1024.save(os.path.join(OUT_DIR, f"{name}_normal.webp"), "WEBP", quality=92, method=6)
        rough_1024.save(os.path.join(OUT_DIR, f"{name}_roughness.webp"), "WEBP", quality=85, method=6)

        # Save 512x512 Mobile WebP
        albedo_512 = albedo_1024.resize((512, 512), Image.Resampling.LANCZOS)
        normal_512 = normal_1024.resize((512, 512), Image.Resampling.LANCZOS)
        rough_512 = rough_1024.resize((512, 512), Image.Resampling.LANCZOS)

        albedo_512.save(os.path.join(OUT_DIR, f"{name}_albedo_512.webp"), "WEBP", quality=86, method=6)
        normal_512.save(os.path.join(OUT_DIR, f"{name}_normal_512.webp"), "WEBP", quality=90, method=6)
        rough_512.save(os.path.join(OUT_DIR, f"{name}_roughness_512.webp"), "WEBP", quality=84, method=6)

        print(f"Processed v5 PBR WebP set (1024 + 512): {name} <- {os.path.basename(src)}")


if __name__ == "__main__":
    main()
