import { chromium } from 'playwright-core';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUT_DIR =
  '/home/antigravity/.gemini/jetski/brain/v1/default/jetski_remote_agents_3p_devbox/1be41ae0-5f74-4cc2-b058-af961ab03b93/shots_v6';
fs.mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5192;
const URL = `http://127.0.0.1:${PORT}/`;
const CHROME_PATH = fs.existsSync('/usr/bin/google-chrome') ? '/usr/bin/google-chrome' : '/usr/bin/chromium';

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['vite', '--host', '127.0.0.1', '--port', String(PORT)], {
      cwd: '/home/antigravity/abdrahman20091228-ux/sarab-desert-story',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const timer = setTimeout(() => reject(new Error('Vite startup timeout')), 15000);
    proc.stdout.on('data', (d) => {
      if (d.toString().includes(`:${PORT}`)) {
        clearTimeout(timer);
        resolve(proc);
      }
    });
    proc.stderr.on('data', (d) => process.stderr.write(d));
  });
}

async function waitFrames(page, n = 2) {
  await page.evaluate(
    (count) =>
      new Promise((res) => {
        let i = 0;
        const step = () => (++i >= count ? res() : requestAnimationFrame(step));
        requestAnimationFrame(step);
      }),
    n
  );
}

async function main() {
  const server = await startServer();
  const errors = [];

  try {
    const browser = await chromium.launch({
      executablePath: CHROME_PATH,
      headless: true,
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--use-gl=angle',
        '--use-angle=swiftshader',
        '--enable-webgl',
        '--ignore-gpu-blocklist',
      ],
    });

    const page = await browser.newPage({ viewport: { width: 1024, height: 576 } });
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(`[desktop] ${msg.text()}`);
    });
    page.on('pageerror', (err) => errors.push(`[desktop] ${String(err)}`));

    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => Boolean(window.__SARAB__), { timeout: 20000 });
    await waitFrames(page, 2);

    const defaults = await page.evaluate(() => window.__SARAB__.getDefaults());
    console.log('v6.0 Defaults:', JSON.stringify(defaults));

    // ===== 1. STAGE 1 (NOON): Abandoned Camp, Watertight Boulders, Cracked Sabkha, Realistic Sky Clouds & New HUD =====
    await page.evaluate(async () => {
      await window.__SARAB__.loadStage(1);
      // Frame the Abandoned Camp (-16, 42) + boulders + sabkha & mesas cleanly!
      window.__SARAB__.teleport(-7.5, 53.0, 0.56, -0.05);
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '01_v6_stage1_camp_sabkha_boulders.png'), animations: 'disabled', timeout: 60000 });
    const s1Stats = await page.evaluate(() => window.__SARAB__.getStats());
    const s1Col = await page.evaluate(() => window.__SARAB__.testCollision());
    console.log('Stage 1 Stats:', JSON.stringify(s1Stats));
    console.log('Stage 1 Collision:', JSON.stringify(s1Col));

    // ===== 2. STAGE 1 MESA BASE CLOSE-UP =====
    await page.evaluate(() => {
      window.__SARAB__.teleport(4.0, -82.0, 0.28, 0.06);
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '02_v6_stage1_mesa_base_closeup.png'), animations: 'disabled', timeout: 60000 });

    // ===== 3. STAGE 2 (AFTERNOON): Wide Rocky Canyon, Grounded Ruins + Realistic Feathered Palms =====
    await page.evaluate(async () => {
      await window.__SARAB__.loadStage(2);
      window.__SARAB__.teleport(22.0, 62.0, 0.16, 0.02);
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '03_v6_stage2_canyon_ruins_palms.png'), animations: 'disabled', timeout: 60000 });
    console.log('Captured 03 Stage 2 Ruins');

    // Close-up of Oasis Palms & Stone Well
    await page.evaluate(() => {
      window.__SARAB__.teleport(-2.0, 6.0, 0.34, 0.05);
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '03b_v6_stage2_oasis_palms_closeup.png'), animations: 'disabled', timeout: 60000 });
    console.log('Captured 03b Stage 2 Oasis Palms');

    // ===== 4. SUN OCCLUSION TEST (Looking directly toward the sun behind a solid canyon cliff!) =====
    const sunOccResult = await page.evaluate(() => {
      window.__SARAB__.teleport(12.0, 42.0, 1.05, 0.22);
      return window.__SARAB__.getSunOcclusion();
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '04_v6_stage2_sun_occlusion_behind_cliff.png'), animations: 'disabled', timeout: 60000 });
    console.log('Stage 2 Sun Occlusion (behind cliff):', JSON.stringify(sunOccResult));

    const s2Stats = await page.evaluate(() => window.__SARAB__.getStats());
    const s2Col = await page.evaluate(() => window.__SARAB__.testCollision());
    console.log('Stage 2 Stats:', JSON.stringify(s2Stats));
    console.log('Stage 2 Collision:', JSON.stringify(s2Col));

    // ===== 5. STAGE 3 (SUNSET): 92m Summit Panorama, Brass Spyglass, Unified Seamless Dune Sea, Distant Glowing House =====
    await page.evaluate(async () => {
      await window.__SARAB__.loadStage(3);
      window.__SARAB__.teleport(-14.5, -94.0, -0.05, -0.22);
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '05_v6_stage3_sunset_summit_panorama.png'), animations: 'disabled', timeout: 60000 });
    const s3Stats = await page.evaluate(() => window.__SARAB__.getStats());
    const s3Col = await page.evaluate(() => window.__SARAB__.testCollision());
    console.log('Stage 3 Stats:', JSON.stringify(s3Stats));
    console.log('Stage 3 Collision:', JSON.stringify(s3Col));

    // ===== 6. STAGE 4 (NIGHT — FLASHLIGHT OFF): Bright silver-blue moonlit visibility + stars + Milky Way! =====
    await page.evaluate(async () => {
      await window.__SARAB__.loadStage(4);
      window.__SARAB__.teleport(-4.0, 26.0, 0.08, 0.08);
      window.__SARAB__.setFlashlight(false);
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '06_v6_stage4_night_NO_flashlight.png'), animations: 'disabled', timeout: 60000 });
    console.log('Captured 06 Stage 4 Night NO Flashlight');

    // ===== 7. STAGE 4 (NIGHT — FLASHLIGHT ON) + Measure toggle latency =====
    const flashMs1 = await page.evaluate(() => window.__SARAB__.measureFlashlightToggleMs());
    const flashMs2 = await page.evaluate(() => window.__SARAB__.measureFlashlightToggleMs());
    const flashMs3 = await page.evaluate(() => window.__SARAB__.measureFlashlightToggleMs());
    await page.evaluate(() => {
      window.__SARAB__.setFlashlight(true);
      window.__SARAB__.teleport(-4.0, 22.0, 0.08, -0.04);
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '07_v6_stage4_night_WITH_flashlight.png'), animations: 'disabled', timeout: 60000 });
    console.log('Flashlight toggle timings (ms, incl SwiftShader render):', { flashMs1, flashMs2, flashMs3 });

    // ===== 8. STAGE 4 HOUSE INTERIOR + CLUE DISCOVERY MODAL =====
    await page.evaluate(() => {
      window.__SARAB__.teleport(0.5, -36.5, 0.14, -0.05);
      window.__SARAB__.setFlashlight(true);
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '08_v6_stage4_interior_clean.png'), animations: 'disabled', timeout: 60000 });

    await page.evaluate(() => {
      window.__SARAB__.setStep(1);
      window.__SARAB__.openCurrentClue();
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '08b_v6_discovery_modal.png'), animations: 'disabled', timeout: 60000 });
    await page.evaluate(() => window.__SARAB__.closeClue());

    const s4Stats = await page.evaluate(() => window.__SARAB__.getStats());
    const s4Col = await page.evaluate(() => window.__SARAB__.testCollision());
    console.log('Stage 4 Stats:', JSON.stringify(s4Stats));
    console.log('Stage 4 Collision:', JSON.stringify(s4Col));

    // ===== GPU MEMORY LEAK CHECK =====
    await page.evaluate(async () => {
      await window.__SARAB__.loadStage(1);
    });
    await waitFrames(page, 2);
    const s1CycleStats = await page.evaluate(() => window.__SARAB__.getStats());
    console.log('GPU Memory Check (Stage 1 initial vs after 4-stage cycle):', {
      initialGeos: s1Stats.geometriesInMemory,
      afterCycleGeos: s1CycleStats.geometriesInMemory,
      delta: s1CycleStats.geometriesInMemory - s1Stats.geometriesInMemory,
    });

    // ===== 9. MOBILE LANDSCAPE HUD CHECK (844x390) =====
    const mobilePage = await browser.newPage({
      viewport: { width: 844, height: 390 },
      isMobile: true,
      hasTouch: true,
    });
    mobilePage.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(`[mobile] ${msg.text()}`);
    });
    mobilePage.on('pageerror', (err) => errors.push(`[mobile] ${String(err)}`));

    await mobilePage.goto(URL, { waitUntil: 'networkidle' });
    await mobilePage.waitForFunction(() => Boolean(window.__SARAB__), { timeout: 20000 });
    await waitFrames(mobilePage, 2);
    await mobilePage.evaluate(async () => {
      await window.__SARAB__.loadStage(1);
      window.__SARAB__.teleport(-7.5, 53.0, 0.56, -0.05);
    });
    await waitFrames(mobilePage, 2);
    await mobilePage.screenshot({ path: path.join(OUT_DIR, '09_v6_mobile_hud_844x390.png') });
    await mobilePage.close();

    console.log('Total console/page errors:', errors.length);
    if (errors.length) console.error('ERRORS:', errors);

    await browser.close();
  } finally {
    server.kill('SIGTERM');
  }

  process.exit(errors.length > 0 ? 1 : 0);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
