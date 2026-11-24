import { chromium } from 'playwright-core';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUT_DIR =
  '/home/antigravity/.gemini/jetski/brain/v1/default/jetski_remote_agents_3p/89b44aec-088e-45c1-8090-6ae0be2e2ccd/shots_v4';
fs.mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5186;
const URL = `http://127.0.0.1:${PORT}/`;

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

async function waitFrames(page, n = 4) {
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
      executablePath: '/usr/bin/chromium',
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

    // ==================== DESKTOP 1280x720 ====================
    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(`[desktop] ${msg.text()}`);
    });
    page.on('pageerror', (err) => errors.push(`[desktop] ${String(err)}`));

    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => Boolean(window.__SARAB__), { timeout: 20000 });
    await waitFrames(page, 2);

    // 1. Noon Desert — Procedural Sky, Clouds, Stratified Mesas, Soft Shadows, Dense Tumbleweed
    await page.evaluate(() => {
      window.__SARAB__.setStorm(0.0);
      window.__SARAB__.setTimeOfDay(0.0);
      window.__SARAB__.teleport(-11.0, 14.5, -0.32, 0.02, true);
      window.__SARAB__.setMission(0);
      window.__SARAB__.triggerSubtitle('بيت مهجور وسط هذه الكثبان... وهناك بوصلة تلمع على الصخرة أمامي.');
    });
    await waitFrames(page, 3);
    await page.screenshot({ path: path.join(OUT_DIR, '01_v4_noon_desert.png') });
    const statsNoon = await page.evaluate(() => window.__SARAB__.getStats());
    console.log('Shot 1 (Noon Desert):', JSON.stringify(statsNoon));

    // 2. Sky Zenith & Limb-Darkened Sun Disc Check (Zero UV Seam!)
    await page.evaluate(() => {
      window.__SARAB__.setStorm(0.0);
      window.__SARAB__.setTimeOfDay(0.0);
      window.__SARAB__.teleport(-11.0, 14.5, 2.38, 0.82, true);
    });
    await waitFrames(page, 2);
    await page.screenshot({ path: path.join(OUT_DIR, '02_v4_sky_zenith.png') });

    // 3. Estate Interior — Plaster Ceiling, Calmed Adobe Walls, Weathered Wood Desk/Chair, Sadu Rug, Open Windows
    await page.evaluate(() => {
      window.__SARAB__.setStorm(0.0);
      window.__SARAB__.setTimeOfDay(0.55);
      window.__SARAB__.teleport(0.5, -14.2, 0.56, -0.02, true);
      window.__SARAB__.setMission(3);
      window.__SARAB__.triggerSubtitle('زملائي محاصرون في القبو تحت قدميّ الآن... منذ الأمس!', 'journal');
    });
    await waitFrames(page, 3);
    await page.screenshot({ path: path.join(OUT_DIR, '03_v4_interior.png') });
    const statsInterior = await page.evaluate(() => window.__SARAB__.getStats());
    console.log('Shot 3 (Interior):', JSON.stringify(statsInterior));

    // 4. Peak GPU Dust Storm — Swirling Sand Wall, Wind Streaks, Storm Fog, Zero CPU Buffer Uploads
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.74);
      window.__SARAB__.setStorm(0.9);
      window.__SARAB__.teleport(-14.8, 6.2, -0.52, 0.03, true);
      window.__SARAB__.setMission(4);
      window.__SARAB__.triggerSubtitle('الريح تشتد وعاصفة ترابية تهبّ في الخارج... اتبع سهم البوصلة نحو قاطع الهوائي!');
    });
    await waitFrames(page, 3);
    await page.screenshot({ path: path.join(OUT_DIR, '04_v4_dust_storm.png') });
    const statsStorm = await page.evaluate(() => window.__SARAB__.getStats());
    console.log('Shot 4 (Dust Storm):', JSON.stringify(statsStorm));

    // 5. TRUE Asr Golden Hour — Procedural Golden Sky, Horizon Melt, Stratified Mesas, Weathered Jeep + Reflective Glass
    await page.evaluate(() => {
      window.__SARAB__.setStorm(0.0);
      window.__SARAB__.setTimeOfDay(0.95);
      window.__SARAB__.teleport(-14.8, 6.2, -0.52, 0.04, true);
      window.__SARAB__.setMission(4);
      window.__SARAB__.triggerSubtitle('هدأت العاصفة وحلّ العصر الذهبي... ظلال الكثبان تطول بسرعة.');
    });
    await waitFrames(page, 3);
    await page.screenshot({ path: path.join(OUT_DIR, '05_v4_true_asr.png') });
    const statsAsr = await page.evaluate(() => window.__SARAB__.getStats());
    console.log('Shot 5 (True Asr):', JSON.stringify(statsAsr));

    // Automated Physics Verification
    const rockTest = await page.evaluate(() => window.__SARAB__.testRockCollision());
    const jeepTest = await page.evaluate(() => window.__SARAB__.testJeepClimb());
    console.log('Rock 16-Angle Collision Test:', JSON.stringify(rockTest));
    console.log('Jeep Climb Test:', JSON.stringify(jeepTest));
    console.log('Storm Draw Call Delta (Storm - Asr):', statsStorm.drawCalls - statsAsr.drawCalls);

    // Close desktop WebGL context before launching mobile context so SwiftShader runs fast!
    await page.close();

    // ==================== MOBILE 844x390 TOUCH ====================
    const mCtx = await browser.newContext({
      viewport: { width: 844, height: 390 },
      hasTouch: true,
      isMobile: true,
      deviceScaleFactor: 1,
      userAgent: 'Mozilla/5.0 (Linux; Android 13; Pixel 7) AppleWebKit/537.36 Mobile Safari/537.36',
    });
    const mPage = await mCtx.newPage();
    mPage.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(`[mobile] ${msg.text()}`);
    });
    mPage.on('pageerror', (err) => errors.push(`[mobile] ${String(err)}`));

    await mPage.goto(URL, { waitUntil: 'networkidle' });
    await mPage.waitForFunction(() => Boolean(window.__SARAB__), { timeout: 20000 });
    await waitFrames(mPage, 3);

    await mPage.evaluate(() => {
      window.__SARAB__.setStorm(0.0);
      window.__SARAB__.setTimeOfDay(0.95);
      window.__SARAB__.teleport(-14.8, 6.2, -0.52, 0.04, true);
      window.__SARAB__.setMission(4);
    });
    await waitFrames(mPage, 3);
    await mPage.screenshot({ path: path.join(OUT_DIR, '06_v4_mobile_asr.png') });
    console.log('Shot 6 (Mobile Asr):', JSON.stringify(await mPage.evaluate(() => window.__SARAB__.getStats())));

    await browser.close();
  } finally {
    try {
      server.kill('SIGKILL');
    } catch {}
  }

  if (errors.length > 0) {
    console.error('CONSOLE ERRORS:', errors);
    process.exit(1);
  } else {
    console.log('ZERO console errors!');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
