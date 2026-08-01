import { cp, mkdir, readFile, readdir, rm, unlink, writeFile } from "node:fs/promises";
import { spawn } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(dirname(fileURLToPath(import.meta.url)));
const docsRoot = join(repoRoot, "docs");

const projects = [
  { dir: "babyface", port: 4101 },
  { dir: "over-racing", port: 4102 },
  { dir: "beta-tools", port: 4103 },
];

function startProject({ dir, port }) {
  return spawn("npm", ["run", "start"], {
    cwd: join(repoRoot, dir),
    env: { ...process.env, PORT: String(port) },
    stdio: ["ignore", "pipe", "pipe"],
  });
}

async function waitForPage(port) {
  let lastError;
  for (let attempt = 0; attempt < 50; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${port}/`);
      if (response.ok) return response.text();
      lastError = new Error(`HTTP ${response.status}`);
    } catch (error) {
      lastError = error;
    }
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw lastError ?? new Error(`Server on ${port} did not start`);
}

function makeStatic(html) {
  return html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<link\b[^>]*rel=["']modulepreload["'][^>]*\/?>(?:\s*)/gi, "")
    .replace(/\b(href|src|content)="\/(?!\/)/g, '$1="./')
    .replace(/\sdata-rsc-css-href="[^"]*"/g, "")
    .replace(/\sdata-precedence="[^"]*"/g, "")
    .replace("</head>", '<meta name="generator" content="Static export for GitHub Pages"/></head>');
}

async function rewriteCss(outputDir) {
  const assetDir = join(outputDir, "assets");
  const manifest = JSON.parse(await readFile(join(outputDir, ".vite", "manifest.json"), "utf8"));
  const cssFiles = new Set();
  for (const entry of Object.values(manifest)) {
    for (const css of entry.css ?? []) cssFiles.add(css);
  }
  for (const cssFile of cssFiles) {
    const path = join(outputDir, cssFile);
    const css = await readFile(path, "utf8");
    await writeFile(path, css.replace(/url\((["']?)\/(?!\/)/g, "url($1../"));
  }
  await mkdir(assetDir, { recursive: true });
}

async function removeRuntimeFiles(outputDir) {
  await Promise.all([
    rm(join(outputDir, ".vite"), { recursive: true, force: true }),
    rm(join(outputDir, ".assetsignore"), { force: true }),
    rm(join(outputDir, "_headers"), { force: true }),
  ]);
  const assetDir = join(outputDir, "assets");
  const assets = await readdir(assetDir);
  await Promise.all(
    assets.filter((name) => name.endsWith(".js")).map((name) => unlink(join(assetDir, name))),
  );
}

async function exportProject(project) {
  const child = startProject(project);
  let stderr = "";
  child.stderr.on("data", (chunk) => { stderr += String(chunk); });
  try {
    const html = await waitForPage(project.port);
    const outputDir = join(docsRoot, project.dir);
    await mkdir(outputDir, { recursive: true });
    await cp(join(repoRoot, project.dir, "dist", "client"), outputDir, { recursive: true });
    await rewriteCss(outputDir);
    await removeRuntimeFiles(outputDir);
    await writeFile(join(outputDir, "index.html"), makeStatic(html));
  } catch (error) {
    throw new Error(`${project.dir} export failed: ${error.message}\n${stderr}`);
  } finally {
    child.kill("SIGTERM");
  }
}

const hub = `<!doctype html>
<html lang="ja">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <title>Brand Presentation | Custom Japan</title>
  <meta name="description" content="BabyFace、OVER Racing、BETA Toolsの社内向けブランド戦略資料"/>
  <style>
    :root{--bg:#0e0f11;--card:#181a1e;--line:#303238;--text:#f5f3ee;--muted:#9a9ca2;--gold:#c9a45c;--orange:#f47a00}*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--text);font-family:Arial,'Noto Sans JP',sans-serif}main{max-width:1240px;margin:auto;padding:72px 36px 90px}.eyebrow{font-size:11px;letter-spacing:.2em;color:var(--gold);font-weight:800}h1{font-size:clamp(48px,8vw,108px);line-height:.86;letter-spacing:-.07em;margin:26px 0 24px}.lead{max-width:620px;color:var(--muted);line-height:1.8}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:60px}.card{min-height:430px;position:relative;overflow:hidden;border:1px solid var(--line);display:flex;align-items:flex-end;background:var(--card)}.card:before{content:'';position:absolute;inset:0;background:linear-gradient(180deg,transparent 22%,rgba(0,0,0,.9));z-index:1}.card img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;filter:saturate(.75);transition:.35s}.card:hover img{transform:scale(1.035);filter:saturate(1)}.copy{position:relative;z-index:2;padding:30px;width:100%}.copy small{font-size:9px;letter-spacing:.16em;color:#bbb}.copy h2{font-size:34px;margin:12px 0 10px}.copy p{color:#bbb;font-size:12px;line-height:1.65}.copy span{display:inline-block;margin-top:18px;font-size:10px;font-weight:800;letter-spacing:.12em;border-bottom:2px solid var(--gold);padding-bottom:7px}.beta .copy span{border-color:var(--orange)}footer{margin-top:55px;padding-top:20px;border-top:1px solid var(--line);color:#6f7278;font-size:10px;display:flex;justify-content:space-between}@media(max-width:800px){main{padding:50px 20px}.grid{grid-template-columns:1fr}.card{min-height:380px}}
  </style>
</head>
<body><main>
  <p class="eyebrow">CUSTOM JAPAN / BRANDING SECTION</p>
  <h1>BRAND<br/>PRESENTATION</h1>
  <p class="lead">取扱ブランドの背景、商品、競合環境、社内資産の活用、部門横断施策をまとめたWeb資料です。</p>
  <div class="grid">
    <a class="card" href="./babyface/"><img src="./babyface/babyface/ducati-bike.jpg" alt="BabyFace"/><div class="copy"><small>01 / CUSTOM PARTS</small><h2>BabyFace</h2><p>精密な操作系パーツとレース由来の機能美。</p><span>OPEN STUDY →</span></div></a>
    <a class="card" href="./over-racing/"><img src="./over-racing/over/hero.webp" alt="OVER Racing"/><div class="copy"><small>02 / PERFORMANCE</small><h2>OVER Racing</h2><p>鈴鹿発、走りと造形をつなぐ総合カスタムブランド。</p><span>OPEN STUDY →</span></div></a>
    <a class="card beta" href="./beta-tools/"><img src="./beta-tools/og.png" alt="BETA Tools"/><div class="copy"><small>03 / PROFESSIONAL TOOLS</small><h2>BETA Tools</h2><p>オレンジの工具でワークショップ全体を変える。</p><span>OPEN STUDY →</span></div></a>
  </div>
  <footer><span>INTERNAL BRAND STUDIES</span><span>2026 CUSTOM JAPAN</span></footer>
</main></body></html>`;

await rm(docsRoot, { recursive: true, force: true });
await mkdir(docsRoot, { recursive: true });
await Promise.all(projects.map(exportProject));
await writeFile(join(docsRoot, "index.html"), hub);
await writeFile(join(docsRoot, ".nojekyll"), "");
console.log(`Exported GitHub Pages site to ${docsRoot}`);
