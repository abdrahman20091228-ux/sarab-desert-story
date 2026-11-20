import { chromium } from 'playwright-core';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUT_DIR = '/home/antigravity/.gemini/jetski/brain/v1/default/jetski_remote_agents_3p/89b44aec-088e-45c1-8090-6ae0be2e2ccd/shots';
fs.mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5179;
const URL = `http://127.0.0.1:${PORT}/`;

function startServer() {
  return new Promise((resolve, reject) => {
    const proc = spawn('npx', ['vite', '--host', '127.0.0.1', '--port', String(PORT)], {
      cwd: '/home/antigravity/abdrahman20091228-ux/sarab-desert-story',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    const timer = setTimeout(() => reject(new Error('Vite startup timeout')), 15000);
    proc.stdout.on('data', (d) => {
      const s = d.toString();
      if (s.includes(`:${PORT}`)) {
        clearTimeout(timer);
        resolve(proc);
      }
    });
    proc.stderr.on('data', (d) => process.stderr.write(d));
  });
}

async function waitFrames(page, n = 8) {
  await page.evaluate(
    (count) =>
      new Promise((res) => {
        let i = 0;
        const step = () => {
          if (++i >= count) res();
          else requestAnimationFrame(step);
        };
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
    // Let textures finish loading & render several frames
    await page.waitForTimeout(1400);
    await waitFrames(page, 12);

    // 1. Title Screen
    await page.screenshot({ path: path.join(OUT_DIR, '01_title_screen.png') });
    const titleStats = await page.evaluate(() => window.__SARAB__.getStats());
    console.log('Shot 1 (Title):', JSON.stringify(titleStats));

    // 2. Wake-up eyelids half-opening
    await page.evaluate(() => {
      window.__SARAB__.setWakeupAt(1.95);
      window.__SARAB__.triggerSubtitle('حرارة... رمل جاف يملأ فمي... أين أنا؟');
    });
    await page.waitForTimeout(800);
    await waitFrames(page, 6);
    await page.screenshot({ path: path.join(OUT_DIR, '02_wakeup_eyelids.png') });
    console.log('Shot 2 (Wakeup Eyelids) saved');

    // 3. Looking straight up at blazing Noon sun with glare!
    await page.evaluate(() => {
      window.__SARAB__.setWakeupAt(4.95);
      window.__SARAB__.triggerSubtitle('آه... الشمس حارقة! سطوعها يكاد يعمي عيني...');
    });
    await page.waitForTimeout(800);
    await waitFrames(page, 6);
    await page.screenshot({ path: path.join(OUT_DIR, '03_wakeup_sun_glare.png') });
    console.log('Shot 3 (Sun Glare) saved');

    // 4. Noon Gameplay — looking across desert sand & footprints toward abandoned house
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.0);
      window.__SARAB__.teleport(-8.5, 8.8, -0.36, -0.02);
      window.__SARAB__.triggerSubtitle('صحراء شاسعة... وذلك البيت المهجور أمامي. لا بد أن أجد ماءً أو إجابة.');
    });
    await page.waitForTimeout(1000);
    await waitFrames(page, 6);
    await page.screenshot({ path: path.join(OUT_DIR, '04_noon_gameplay.png') });
    const noonStats = await page.evaluate(() => window.__SARAB__.getStats());
    console.log('Shot 4 (Noon Gameplay):', JSON.stringify(noonStats));

    // 5. House Interior — verify clean stone floor, warm ceiling, desk, journal, hatch!
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.55);
      window.__SARAB__.powerAntenna();
      window.__SARAB__.teleport(0.3, -10.0, 0.72, -0.06);
      window.__SARAB__.triggerSubtitle('اسمي نادر... وهذا خطّي! لقد كنتُ جزءاً من هذه البعثة...', 'journal');
    });
    await page.waitForTimeout(1000);
    await waitFrames(page, 6);
    await page.screenshot({ path: path.join(OUT_DIR, '05_house_interior.png') });
    const indoorStats = await page.evaluate(() => window.__SARAB__.getStats());
    console.log('Shot 5 (House Interior):', JSON.stringify(indoorStats));

    // 6. Asr Golden Hour Vista — warm golden amber sun, long shadows, wind-vane silhouette!
    await page.evaluate(() => {
      window.__SARAB__.setTimeOfDay(0.95);
      window.__SARAB__.teleport(-11.8, 3.2, -0.56, 0.04);
      window.__SARAB__.triggerSubtitle('انكسرت حدة الظهيرة وحلّ العصر... ظلال الكثبان تطول بسرعة.');
    });
    await page.waitForTimeout(1000);
    await waitFrames(page, 6);
    await page.screenshot({ path: path.join(OUT_DIR, '06_asr_golden_hour.png') });
    const asrStats = await page.evaluate(() => window.__SARAB__.getStats());
    console.log('Shot 6 (Asr Golden Hour):', JSON.stringify(asrStats));

    await browser.close();
  } finally {
    try { server.kill('SIGKILL'); } catch {}
  }

  if (errors.length > 0) {
    console.error('CONSOLE ERRORS DETECTED:', errors);
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
