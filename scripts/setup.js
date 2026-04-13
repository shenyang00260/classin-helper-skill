#!/usr/bin/env node
/**
 * setup.js - 首次安装依赖
 * 运行: node scripts/setup.js
 */
const { execSync } = require('child_process');
const path = require('path');

const skillDir = path.resolve(__dirname, '..');

console.log('Installing playwright...');
execSync('npm install playwright', { cwd: skillDir, stdio: 'inherit' });

console.log('Installing Chromium browser...');
execSync('npx playwright install chromium', { cwd: skillDir, stdio: 'inherit' });

console.log('\n✅ Setup complete! classin-helper skill is ready.');
