#!/usr/bin/env node
/**
 * setup.js - 首次安装及后续自动更新
 * 运行: node scripts/setup.js
 *
 * 功能：
 * 1. git pull 拉取最新知识库（含每周刷新的图片 URL）
 * 2. 安装 playwright 依赖
 * 3. 安装 Chromium 浏览器（用于实时爬取图片）
 */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const skillDir = path.resolve(__dirname, '..');

function run(cmd, opts = {}) {
  try {
    execSync(cmd, { cwd: skillDir, stdio: 'inherit', ...opts });
    return true;
  } catch (e) {
    return false;
  }
}

// 1. git pull 同步最新知识库
const isGitRepo = fs.existsSync(path.join(skillDir, '.git'));
if (isGitRepo) {
  console.log('📥 正在从 GitHub 拉取最新知识库...');
  const ok = run('git pull --ff-only');
  if (ok) {
    console.log('✅ 知识库已是最新');
  } else {
    console.warn('⚠️  git pull 失败（可能有本地修改），跳过更新');
  }
} else {
  console.log('ℹ️  未检测到 git 仓库，跳过 git pull');
  console.log('   建议通过 git clone 安装以启用自动更新：');
  console.log('   git clone https://github.com/shenyang00260/classin-helper-skill.git');
}

// 2. 安装 playwright
console.log('\n📦 安装 playwright...');
run('npm install playwright');

// 3. 安装 Chromium
console.log('\n🌐 安装 Chromium 浏览器...');
run('npx playwright install chromium');

console.log('\n✅ Setup 完成！classin-helper skill 已就绪。');
console.log('   每次使用前运行 node scripts/setup.js 可同步最新知识库。');
