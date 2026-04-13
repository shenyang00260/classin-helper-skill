# ClassIn Helper Skill

**ClassIn 帮助中心 AI 助手** —— 基于官方知识库，用自然语言回答所有 ClassIn 操作问题，支持图文并茂的步骤说明。

---

## ✨ 功能特色

- 📚 **完整知识库**：涵盖 ClassIn 帮助中心 368 篇官方文档，包含教师端、学生端、管理后台的全部功能
- 🖼️ **图文并茂**：每个操作步骤都附带截图，一看就懂
- 🔍 **自然语言问答**：直接用中文提问，无需记忆菜单路径
- 🔄 **自动周刷新**：GitHub Actions 每周一自动爬取最新图片 URL 并 push 到仓库，知识库始终保持最新
- 🛠️ **故障引导**：遇到无法自助解决的问题，自动提示联系官方客服渠道

---

## 📖 知识库覆盖范围

| 分类 | 内容 |
|------|------|
| **ClassIn 教室** | 进入教室、音视频设置、白板工具、互动功能、录课、考勤 |
| **ClassIn 软件** | 安装下载、账号登录、消息通知、个人设置 |
| **管理后台** | 组织架构、课程管理、监课、数据报告、财务中心 |
| **直播回放** | 直播设置、回放管理、防盗录、观看权限 |
| **成员与考勤** | 添加教师/学生、考勤统计、账号管理 |
| **文件与存储** | 云盘管理、录课视频、存储扩容 |
| **自定义教室** | 功能开关、界面定制、权限控制 |

---

## 💬 使用示例

### 示例1：进入教室上课
**用户提问：** 老师怎么进入教室开始上课？

**助手回答：**
1. 打开 ClassIn 客户端，在课表中找到对应课堂
2. 点击「进入教室」按钮，等待加载完成即可开始上课
3. 进入后可在底部工具栏访问白板、互动、录课等功能

![进入教室上课截图](https://cofile.eeo.cn/res-store%2Fe5e0c5809ea0f0e45d9bae70b12d9bfa25be0212ad4ebad5afe45b51aae9ae23_125600?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1776009600;1776614400&q-key-time=1776009600;1776614400&q-header-list=host&q-url-param-list=&q-signature=ea42ccf09a7259fa357963cc679106a8b2b55bf6)

---

### 示例2：教学工具使用
**用户提问：** 教室里有哪些教学工具？怎么用？

**助手回答：**
ClassIn 教室提供丰富的教学工具，包括白板、PPT、视频、答题器、计时器等，点击底部工具栏即可调用：

![教学工具截图](https://cofile.eeo.cn/res-store%2Fa4fdbf826a3a1c4227aeefc092a5aed5491be6ad9bdc529cd9ef6ce4e69348ff_242988?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1776009600;1776614400&q-key-time=1776009600;1776614400&q-header-list=host&q-url-param-list=&q-signature=ac24dfdef1ba7577de040ab76a6cf845cf40edcf)

---

### 示例3：管理后台监课
**用户提问：** 管理员如何进入监课教室？

**助手回答：**
1. 登录管理后台，点击左侧「监课管理」
2. 找到正在上课的课堂，点击「进入监课」
3. 可实时查看教室画面，也可截图留存

![进入监课教室截图](https://cofile.eeo.cn/res-store%2F84df856d92c6ccb20184b9fcd545a3243e085fe1ab2702b34f41a6eba0c0a652_236880?q-sign-algorithm=sha1&q-ak=AKIDJQGsEOK2TfbFdEZifMnxrWx85mpdHj6H&q-sign-time=1776009600;1776614400&q-key-time=1776009600;1776614400&q-header-list=host&q-url-param-list=&q-signature=0f15775306ac727570b6f3a625ae4553038e8725)

---

### 示例4：故障排查
**用户提问：** 学生进不了教室怎么办？

**助手回答：**
可能原因及解决方法：
1. **网络问题**：检查网络连接，尝试切换 WiFi 或移动数据
2. **版本过低**：前往官网下载最新版 ClassIn 客户端
3. **课程未开始**：确认课程开始时间，提前 15 分钟方可进入
4. **账号未加入课程**：联系老师确认已将账号加入该课程

如以上方法无法解决，建议联系 ClassIn 官方客服：
- 官方网站：[https://www.classin.com](https://www.classin.com)
- 帮助中心：[https://flowin.cn/publish/...](https://flowin.cn/publish/c3ab35aafc9442a08cd78f700c6a02f3/568cbe38b29d4e51a6509bc946fb6661)

---

## 🚀 安装方法

> **推荐使用方法二（git clone）**，可以自动保持知识库同步最新图片 URL。

### 方法一：从 GitHub 克隆安装（推荐）

```bash
# 1. 克隆仓库到 OpenClaw skills 目录
git clone https://github.com/shenyang00260/classin-helper-skill.git ~/.openclaw/skills/classin-helper

# 2. 运行安装脚本（自动 git pull + 安装 Playwright）
cd ~/.openclaw/skills/classin-helper
node scripts/setup.js
```

安装完成后重启 OpenClaw，skill 会自动加载。

#### 🔄 保持知识库最新

本仓库通过 **GitHub Actions 每周一自动刷新**知识库中的图片 URL（ClassIn 帮助中心图片每周更换签名）。

有两种方式让本地保持同步：

**方式 A：每次使用前手动 pull（推荐）**
```bash
cd ~/.openclaw/skills/classin-helper
git pull
```

**方式 B：运行 setup.js 自动 pull（一键更新）**
```bash
cd ~/.openclaw/skills/classin-helper
node scripts/setup.js
# setup.js 会自动执行 git pull，再确认依赖完整
```

> ⚠️ 如果不定期 `git pull`，知识库中的图片 URL 可能在 1 周后过期导致图片无法显示。

---

### 方法二：从 .skill 文件安装

1. 前往 [Releases](https://github.com/shenyang00260/classin-helper-skill/releases) 页面下载最新的 `classin-helper.skill` 文件
2. 在 OpenClaw 中安装该文件
3. 安装后**强烈建议**切换为 git clone 方式以获得自动更新能力

---

### 方法三：手动安装（离线环境）

1. 下载本仓库 zip：点击页面右上角 **Code → Download ZIP**
2. 解压到 `~/.openclaw/skills/classin-helper/`
3. 运行 `node scripts/setup.js` 安装依赖   ```
3. 安装 Playwright（首次使用需要）：
   ```
   cd ~/.openclaw/skills/classin-helper
   node scripts/setup.js
   ```

---

### 方法二：从 GitHub 克隆安装

```bash
# 1. 克隆仓库到 OpenClaw skills 目录
git clone https://github.com/shenyang00260/classin-helper-skill.git ~/.openclaw/skills/classin-helper

# 2. 安装 Playwright（用于自动爬取最新截图）
cd ~/.openclaw/skills/classin-helper
node scripts/setup.js
```

安装完成后重启 OpenClaw，skill 会自动加载。

---

### 方法三：手动安装（离线环境）

1. 下载本仓库 zip：点击页面右上角 **Code → Download ZIP**
2. 解压到 `~/.openclaw/skills/classin-helper/`
3. 运行 `node scripts/setup.js` 安装依赖

---

## 🔧 Playwright 说明

本 skill 使用 [Playwright](https://playwright.dev/) 在需要时爬取最新截图（当本地图片 URL 失效时）。

- **首次安装后必须运行一次** `node scripts/setup.js`
- 脚本会自动安装 `playwright` 包和 Chromium 浏览器（约 100MB）
- **没有安装 Playwright 时**：助手仍可正常回答，但图片部分会退化为文字描述 + 帮助中心链接

---

## 📁 目录结构

```
classin-helper/
├── SKILL.md                          # Skill 行为规范（AI 读取）
├── README.md                         # 本文件
├── package.json                      # Node.js 依赖
├── scripts/
│   ├── fetch_classin_images.js       # Playwright 爬图脚本
│   └── setup.js                      # 首次安装脚本
└── references/
    └── knowledge/                    # 知识库（368 篇 MD 文档）
        ├── ClassIn/                  # 客户端相关
        └── 管理后台/                 # 管理后台相关
```

---

## ❓ 常见问题

**Q: 问了问题但没有图片怎么办？**
A: 检查是否已运行 `node scripts/setup.js`。如果已安装，可能是网络原因导致爬图失败，助手会自动提供帮助中心原文链接。

**Q: 安装 Playwright 报错？**
A: 确保 Node.js >= 16，然后手动运行：
```bash
cd ~/.openclaw/skills/classin-helper
npm install
npx playwright install chromium
```

**Q: 知识库内容不是最新的怎么办？**
A: 运行 `git pull` 或 `node scripts/setup.js` 拉取最新版本。GitHub Actions 每周一自动刷新图片 URL，pull 后即可恢复正常显示。

**Q: 支持哪些 OpenClaw 渠道？**
A: 支持所有 OpenClaw 渠道，包括 QQ、微信、Telegram、Discord、Web Chat 等。

---

## 📬 反馈与贡献

- 提 Issue：[GitHub Issues](https://github.com/shenyang00260/classin-helper-skill/issues)
- 更新知识库：直接 PR 修改 `references/knowledge/` 下的 MD 文件

---

## 📄 License

MIT License — 知识库内容版权归 ClassIn 官方所有，本项目仅用于辅助查询。
