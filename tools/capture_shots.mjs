import { chromium } from 'playwright-core';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/antigravity/.gemini/jetski/brain/v1/default/jetski_remote_agents_3p/89b44aec-088e-45c1-8090-6ae0be2e2ccd/shots_v2';
fs.mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5181;
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
    await page.waitForFunction(() => Boolean(window.__SARAB__), { timeout: 15000 });
    await page.waitForTimeout(1000);
    await waitFrames(page, 5);

    // 1. Title Screen with new Reem Kufi + Changa font & enlarged grand house
    await page.evaluate(() => window.__SARAB__.showTitle());
    await page.waitForTimeout(500);
    await waitFrames(page, 4);
    await page.screenshot({ path: path.join(OUT_DIR, '01_v2_title.png') });
    console.log('Shot 1 (Title):', JSON.stringify(await page.evaluate(() => window.__SARAB__.getStats())));

    // 2. Noon Gameplay — clean HUD, single mission bar, buried 4x4 Jeep, compass rock, grand estate & palms!
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.0);
      window.__SARAB__.teleport(-11.0, 14.5, -0.32, -0.02);
      window.__SARAB__.setMission(0);
      window.__SARAB__.triggerSubtitle('بيت مهجور وسط هذه الكثبان... وهناك بوصلة تلمع على الصخرة أمامي.');
    });
    await page.waitForTimeout(900);
    await waitFrames(page, 4);
    await page.screenshot({ path: path.join(OUT_DIR, '02_v2_noon_living_desert.png') });
    console.log('Shot 2 (Noon Living Desert):', JSON.stringify(await page.evaluate(() => window.__SARAB__.getStats())));

    // 3. Enlarged 3-Room House Interior (Main Hall + Study view + Hatch)
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.5);
      window.__SARAB__.teleport(0.5, -14.2, 0.56, -0.04);
      window.__SARAB__.setMission(3);
      window.__SARAB__.triggerSubtitle('زملائي محاصرون في القبو تحت قدميّ الآن... منذ الأمس!', 'journal');
    });
    await page.waitForTimeout(900);
    await waitFrames(page, 4);
    await page.screenshot({ path: path.join(OUT_DIR, '03_v2_grand_interior.png') });
    console.log('Shot 3 (Grand Interior):', JSON.stringify(await page.evaluate(() => window.__SARAB__.getStats())));

    // 4. Asr Golden Hour — Buried Jeep + Enlarged Estate + Swaying Palms + Mesas!
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.95);
      window.__SARAB__.teleport(-15.5, 6.2, -0.52, 0.03);
      window.__SARAB__.setMission(4);
      window.__SARAB__.triggerSubtitle('انكسرت حدة الظهيرة وحلّ العصر... ظلال الكثبان تطول بسرعة.');
    });
    await page.waitForTimeout(900);
    await waitFrames(page, 4);
    await page.screenshot({ path: path.join(OUT_DIR, '04_v2_asr_living_world.png') });
    console.log('Shot 4 (Asr Living World):', JSON.stringify(await page.evaluate(() => window.__SARAB__.getStats())));

    // Physics verification: 360-degree rock collision test!
    const rockTest = await page.evaluate(() => window.__SARAB__.testRockCollision());
    console.log('Rock 360° Collision Test:', JSON.stringify(rockTest));

    await browser.close();
  } finally {
    try { server.kill('SIGKILL'); } catch {}
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
