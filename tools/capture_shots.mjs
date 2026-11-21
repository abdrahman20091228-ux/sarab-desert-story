import { chromium } from 'playwright-core';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUT_DIR =
  '/home/antigravity/.gemini/jetski/brain/v1/default/jetski_remote_agents_3p/89b44aec-088e-45c1-8090-6ae0be2e2ccd/shots_v3';
fs.mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5185;
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

    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(msg.text());
    });
    page.on('pageerror', (err) => errors.push(String(err)));

    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => Boolean(window.__SARAB__), { timeout: 20000 });
    await page.waitForTimeout(1000);
    await waitFrames(page, 5);

    // 1. Noon Gameplay — Real Poly Haven HDRI Sky, 3D Scanned Rocks & Compass, Detailed 4x4 Jeep, Compass Arrow HUD
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.0);
      window.__SARAB__.teleport(-11.0, 14.5, -0.32, -0.02, true);
      window.__SARAB__.setMission(0);
      window.__SARAB__.triggerSubtitle('بيت مهجور وسط هذه الكثبان... وهناك بوصلة تلمع على الصخرة أمامي.');
    });
    await page.waitForTimeout(900);
    await waitFrames(page, 4);
    await page.screenshot({ path: path.join(OUT_DIR, '01_v3_noon_desert.png') });
    console.log('Shot 1 (Noon Desert):', JSON.stringify(await page.evaluate(() => window.__SARAB__.getStats())));

    // 2. Sky Zenith + Real Glowing Sun Alignment Check (Zero UV Seam!)
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.0);
      window.__SARAB__.teleport(-11.0, 14.5, 2.4, 0.85, true);
    });
    await page.waitForTimeout(700);
    await waitFrames(page, 4);
    await page.screenshot({ path: path.join(OUT_DIR, '02_v3_sky_zenith.png') });

    // 3. Grand Estate Interior — Real 3D Scanned Table/Chair/Lantern/Crate/Jug, God-Rays, Wood-Iron Hatch
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.55);
      window.__SARAB__.teleport(0.5, -14.2, 0.56, -0.04, true);
      window.__SARAB__.setMission(3);
      window.__SARAB__.triggerSubtitle('زملائي محاصرون في القبو تحت قدميّ الآن... منذ الأمس!', 'journal');
    });
    await page.waitForTimeout(900);
    await waitFrames(page, 4);
    await page.screenshot({ path: path.join(OUT_DIR, '03_v3_interior.png') });
    console.log('Shot 3 (Interior):', JSON.stringify(await page.evaluate(() => window.__SARAB__.getStats())));

    // 4. TRUE Asr Golden Hour — Real Poly Haven Asr Sky + Detailed 4x4 Jeep + Mesas
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.95);
      window.__SARAB__.teleport(-14.8, 6.2, -0.52, 0.03, true);
      window.__SARAB__.setMission(4);
      window.__SARAB__.triggerSubtitle('انكسرت حدة الظهيرة وحلّ العصر... ظلال الكثبان تطول بسرعة.');
    });
    await page.waitForTimeout(900);
    await waitFrames(page, 4);
    await page.screenshot({ path: path.join(OUT_DIR, '04_v3_true_asr.png') });
    console.log('Shot 4 (True Asr):', JSON.stringify(await page.evaluate(() => window.__SARAB__.getStats())));

    // Automated Physics Verification
    const rockTest = await page.evaluate(() => window.__SARAB__.testRockCollision());
    const jeepTest = await page.evaluate(() => window.__SARAB__.testJeepClimb());
    console.log('Rock 16-Angle Collision Test:', JSON.stringify(rockTest));
    console.log('Jeep Climb Test:', JSON.stringify(jeepTest));

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
