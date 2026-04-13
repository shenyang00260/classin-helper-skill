#!/usr/bin/env node
/**
 * fetch_classin_images.js
 * 从 ClassIn 帮助中心页面爬取最新图片 URL
 * 用法: node fetch_classin_images.js <page_url>
 * 输出: JSON 数组，包含该页面所有内容图片的最新签名 URL
 *
 * 依赖: playwright (npm install playwright)
 */

const { chromium } = require('playwright');

const url = process.argv[2];
if (!url) {
  console.error('Usage: node fetch_classin_images.js <page_url>');
  process.exit(1);
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(2000);

    // 只抓正文区域图片（.with-toc 内，排除 .sidebar-container 导航栏）
    const imgs = await page.evaluate(() => {
      const sidebar = document.querySelector('.sidebar-container');
      const sidebarImgs = new Set(
        sidebar ? [...sidebar.querySelectorAll('img')].map(img => img.src) : []
      );
      const scope = document.querySelector('.with-toc') || document.body;
      return [...scope.querySelectorAll('img')]
        .map(img => img.src)
        .filter(src =>
          src &&
          (src.includes('cofile.eeo.cn/res-store') || src.includes('cofile.eeo.cn/business-read')) &&
          !sidebarImgs.has(src)
        );
    });

    console.log(JSON.stringify(imgs, null, 2));
  } finally {
    await browser.close();
  }
})();
