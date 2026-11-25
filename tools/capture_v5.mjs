import { chromium } from 'playwright-core';
import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';

const OUT_DIR =
  '/home/antigravity/.gemini/jetski/brain/v1/default/jetski_remote_agents_3p_devbox/1be41ae0-5f74-4cc2-b058-af961ab03b93/shots_v5';
fs.mkdirSync(OUT_DIR, { recursive: true });

const PORT = 5188;
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

    const page = await browser.newPage({ viewport: { width: 1280, height: 720 } });
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push(`[desktop] ${msg.text()}`);
    });
    page.on('pageerror', (err) => errors.push(`[desktop] ${String(err)}`));

    await page.goto(URL, { waitUntil: 'networkidle' });
    await page.waitForFunction(() => Boolean(window.__SARAB__), { timeout: 20000 });
    await waitFrames(page, 4);

    // ===== STAGE 1 (NOON): Open Mirage Plains, Stone Cairns & Cracked Sabkha =====
    await page.evaluate(async () => {
      await window.__SARAB__.loadStage(1);
      window.__SARAB__.teleport(3.0, 22.0, 0.14, -0.06);
      window.__SARAB__.triggerSubtitle('أرض سبخة متشققة تحت قدميّ... ورُجُم حجرية تدلّني نحو مدخل الوادي.');
    });
    await waitFrames(page, 5);
    await page.screenshot({ path: path.join(OUT_DIR, '01_stage1_noon_sabkha_cairns.png') });
    const s1Stats = await page.evaluate(() => window.__SARAB__.getStats());
    const s1Col = await page.evaluate(() => window.__SARAB__.testCollision());
    console.log('Stage 1 Stats:', JSON.stringify(s1Stats));
    console.log('Stage 1 Collision:', JSON.stringify(s1Col));

    // ===== STAGE 2 (AFTERNOON): Rocky Canyon, Stratified Cliffs, Palms, Ruins & Light Dust Gust =====
    await page.evaluate(async () => {
      await window.__SARAB__.loadStage(2);
      // Center of canyon floor looking north through the sun-bleached ruins toward the oasis & towering cliffs!
      window.__SARAB__.teleport(26.5, 58.0, 0.28, 0.04);
      window.__SARAB__.setStorm(0.28);
      window.__SARAB__.triggerSubtitle('ظلال العصر تطول بين هذه الجروف الطبقية... وأطلال ونخيل وسط هبّة غبار خفيفة.');
    });
    await waitFrames(page, 5);
    await page.screenshot({ path: path.join(OUT_DIR, '02_stage2_asr_canyon_ruins.png') });

    // Also capture Oasis Palms & stratified cliffs in Stage 2!
    await page.evaluate(() => {
      window.__SARAB__.teleport(10.0, 12.0, 0.42, 0.04);
      window.__SARAB__.setStorm(0.24);
    });
    await waitFrames(page, 4);
    await page.screenshot({ path: path.join(OUT_DIR, '02b_stage2_asr_canyon_palms.png') });
    const s2Stats = await page.evaluate(() => window.__SARAB__.getStats());
    const s2Col = await page.evaluate(() => window.__SARAB__.testCollision());
    console.log('Stage 2 Stats:', JSON.stringify(s2Stats));
    console.log('Stage 2 Collision:', JSON.stringify(s2Col));

    // ===== STAGE 3 (SUNSET/DUSK): High Mountain Peak Overlooking Sea of Dunes + Distant House Glimmer! =====
    await page.evaluate(async () => {
      await window.__SARAB__.loadStage(3);
      // Stand right on the 92m overlook rim looking out & down over the Sea of Dunes + distant glowing Abandoned House!
      window.__SARAB__.teleport(-15.5, -96.5, -0.15, -0.26);
      window.__SARAB__.triggerSubtitle('أرى بصيص نور دافئ يلمع بعيداً وسط بحر الكثبان في الأسفل... هناك بيت مهجور!');
    });
    await waitFrames(page, 5);
    await page.screenshot({ path: path.join(OUT_DIR, '03_stage3_sunset_summit.png') });
    const s3Stats = await page.evaluate(() => window.__SARAB__.getStats());
    const s3Col = await page.evaluate(() => window.__SARAB__.testCollision());
    console.log('Stage 3 Stats:', JSON.stringify(s3Stats));
    console.log('Stage 3 Collision:', JSON.stringify(s3Col));

    // ===== STAGE 4 (NIGHT): Starry Sky, Milky Way, Crescent Moon + Abandoned House + Flashlight ON =====
    await page.evaluate(async () => {
      await window.__SARAB__.loadStage(4);
      window.__SARAB__.teleport(-3.0, -34.0, -0.10, 0.14);
      window.__SARAB__.setFlashlight(true);
      window.__SARAB__.triggerSubtitle('حلّ الليل وتلألأت المجرة والهلال... نور البيت المهجور يرحّب بي أمامي.', 'night');
    });
    await waitFrames(page, 5);
    await page.screenshot({ path: path.join(OUT_DIR, '04_stage4_night_approach_flashlight_on.png') });
    const s4Stats = await page.evaluate(() => window.__SARAB__.getStats());
    const s4Col = await page.evaluate(() => window.__SARAB__.testCollision());
    console.log('Stage 4 Stats (Flashlight ON):', JSON.stringify(s4Stats));
    console.log('Stage 4 Collision:', JSON.stringify(s4Col));

    // ===== STAGE 4 (NIGHT): Flashlight OFF comparison =====
    await page.evaluate(() => {
      window.__SARAB__.setFlashlight(false);
    });
    await waitFrames(page, 4);
    await page.screenshot({ path: path.join(OUT_DIR, '05_stage4_night_flashlight_off.png') });

    // ===== STAGE 4 (NIGHT): Inside the Abandoned House with Flashlight ON =====
    await page.evaluate(() => {
      window.__SARAB__.teleport(0.4, -63.8, 0.12, -0.04);
      window.__SARAB__.setFlashlight(true);
      window.__SARAB__.triggerSubtitle('المصباح المشتعل ينير الردهة... دفء هادئ بعد طول المسير.', 'night');
    });
    await waitFrames(page, 5);
    await page.screenshot({ path: path.join(OUT_DIR, '06_stage4_night_house_interior.png') });
    const s4IntStats = await page.evaluate(() => window.__SARAB__.getStats());
    console.log('Stage 4 Interior Stats:', JSON.stringify(s4IntStats));

    // True Zero-Leak GPU Memory Disposal Check: compare warm Stage 1 -> Stage 4 -> Stage 1 (delta MUST be 0!)
    await page.evaluate(async () => { await window.__SARAB__.loadStage(1); });
    await waitFrames(page, 2);
    const warmBaseline = (await page.evaluate(() => window.__SARAB__.getStats())).geometriesInMemory;
    await page.evaluate(async () => { await window.__SARAB__.loadStage(4); });
    await waitFrames(page, 2);
    await page.evaluate(async () => { await window.__SARAB__.loadStage(1); });
    await waitFrames(page, 2);
    const warmAfter = (await page.evaluate(() => window.__SARAB__.getStats())).geometriesInMemory;
    console.log('Zero-Leak GPU Memory Disposal Check (Warm Stage 1 -> Stage 4 -> Stage 1):', warmBaseline, '->', warmAfter);

    // Assertions
    if (Math.abs(s1Stats.walkSpeed - 3.4) > 0.05) errors.push(`Walk speed mismatch: ${s1Stats.walkSpeed}`);
    if (s1Stats.modelsLoaded.includes('jug') || s1Stats.modelsLoaded.includes('tyre')) {
      errors.push(`Forbidden old models still loaded: ${JSON.stringify(s1Stats.modelsLoaded)}`);
    }
    if (!s1Col.solid || !s2Col.solid || !s3Col.solid || !s4Col.solid) {
      errors.push(`Collision failure detected!`);
    }
    if (warmAfter > warmBaseline) {
      errors.push(`GPU geometry leak across stages: ${warmBaseline} -> ${warmAfter}`);
    }

    await page.close();

    // ==================== MOBILE 844x390 TOUCH (Stage 4 Night + Flashlight HUD) ====================
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
    await mPage.evaluate(async () => {
      await window.__SARAB__.loadStage(4);
      window.__SARAB__.teleport(-3.0, -34.0, -0.10, 0.14);
      window.__SARAB__.setFlashlight(true);
    });
    await waitFrames(mPage, 4);
    await mPage.screenshot({ path: path.join(OUT_DIR, '07_mobile_stage4_night.png') });
    const mobStats = await mPage.evaluate(() => window.__SARAB__.getStats());
    console.log('Mobile Stage 4 Stats:', JSON.stringify(mobStats));

    await browser.close();
  } finally {
    try {
      server.kill('SIGKILL');
    } catch {}
  }

  if (errors.length > 0) {
    console.error('VERIFICATION ERRORS:', errors);
    process.exit(1);
  } else {
    console.log('ALL v5.0 CHECKS PASSED — ZERO CONSOLE ERRORS!');
    process.exit(0);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
