#!/usr/bin/env node
/**
 * refresh_urls.js
 * 用 playwright 爬取 ClassIn 帮助中心，刷新 references/knowledge/ 下所有 MD 文件中的图片 URL。
 * 每周运行一次（由 GitHub Actions 触发，也可手动运行）。
 *
 * 用法：node scripts/refresh_urls.js
 */

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

// 相对于脚本位置的知识库目录
const KNOWLEDGE_DIR = path.resolve(__dirname, '..', 'references', 'knowledge');

function getAllMdFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results = results.concat(getAllMdFiles(full));
    else if (entry.name.endsWith('.md')) results.push(full);
  }
  return results;
}

function extractFrontmatterUrl(content) {
  const m = content.match(/^---\n[\s\S]*?url:\s*"([^"]+)"[\s\S]*?---/);
  return m ? m[1] : null;
}

function extractImageUrls(content) {
  return [...content.matchAll(/!\[.*?\]\((https?:\/\/[^)]+)\)/g)].map(m => m[1]);
}

async function getContentImages(page) {
  return page.evaluate(() => {
    const sidebar = document.querySelector('.sidebar-container');
    const sidebarImgs = new Set(
      sidebar ? [...sidebar.querySelectorAll('img')].map(img => img.src) : []
    );
    const scope = document.querySelector('.with-toc') || document.body;
    return [...scope.querySelectorAll('img')]
      .map(img => img.src)
      .filter(src => src && src.includes('cofile.eeo.cn') && !sidebarImgs.has(src));
  });
}

async function refreshFile(page, filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const pageUrl = extractFrontmatterUrl(content);
  const oldImgs = extractImageUrls(content);

  if (!pageUrl || oldImgs.length === 0) return { skipped: true, reason: 'no url or no images' };

  try {
    await page.goto(pageUrl, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1500);
    const newImgs = await getContentImages(page);

    if (newImgs.length === 0) return { skipped: true, reason: 'page has no images' };

    const matchCount = Math.min(oldImgs.length, newImgs.length);
    if (newImgs.length !== oldImgs.length) {
      console.warn(`  ⚠ 数量不符(MD:${oldImgs.length} 页:${newImgs.length})，替换前${matchCount}张: ${path.basename(filePath)}`);
    }

    let newContent = content;
    let changed = false;
    for (let i = 0; i < matchCount; i++) {
      if (oldImgs[i] !== newImgs[i]) {
        newContent = newContent.split(oldImgs[i]).join(newImgs[i]);
        changed = true;
      }
    }

    if (changed) {
      fs.writeFileSync(filePath, newContent, 'utf-8');
      return { replaced: matchCount };
    }
    return { skipped: true, reason: 'urls unchanged' };
  } catch (e) {
    return { error: e.message };
  }
}

async function main() {
  if (!fs.existsSync(KNOWLEDGE_DIR)) {
    console.error('Knowledge dir not found:', KNOWLEDGE_DIR);
    process.exit(1);
  }

  const files = getAllMdFiles(KNOWLEDGE_DIR);
  const withImages = files.filter(f => {
    try {
      const c = fs.readFileSync(f, 'utf-8');
      return extractImageUrls(c).length > 0 && extractFrontmatterUrl(c);
    } catch { return false; }
  });

  console.log(`总文件: ${files.length}, 含图片且有URL: ${withImages.length}`);

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();

  let replaced = 0, skipped = 0, errors = 0;

  for (const f of withImages) {
    const result = await refreshFile(page, f);
    if (result.error) {
      errors++;
      console.error(`✗ 错误: ${path.basename(f)}: ${result.error}`);
    } else if (result.skipped) {
      skipped++;
    } else {
      replaced++;
      console.log(`✓ 替换: ${path.basename(f)}`);
    }

    const total = replaced + skipped + errors;
    if (total % 30 === 0) {
      console.log(`进度: ${total}/${withImages.length} (替换:${replaced} 跳过:${skipped} 错误:${errors})`);
    }
  }

  await browser.close();
  console.log(`\n完成！替换: ${replaced}, 跳过: ${skipped}, 错误: ${errors}`);

  if (errors > 0) process.exit(1);
}

main().catch(e => { console.error(e); process.exit(1); });
