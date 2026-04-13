# ClassIn Helper Skill

**ClassIn 帮助中心 AI 助手** —— 基于官方知识库，用自然语言回答所有 ClassIn 操作问题，支持图文并茂的步骤说明。

---

## ✨ 功能特色

- 📚 **完整知识库**：涵盖 ClassIn 帮助中心 368 篇官方文档，包含教师端、学生端、管理后台的全部功能
- 🖼️ **图文并茂**：每个操作步骤都附带截图，一看就懂
- 🔍 **自然语言问答**：直接用中文提问，无需记忆菜单路径
- 🔄 **自动爬图**：图片 URL 失效时自动用 Playwright 从帮助中心重新爬取最新截图
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

### 示例1：基础操作
**用户提问：** 老师怎么开启举手功能？

**助手回答：**
1. 进入 ClassIn 教室后，点击底部工具栏的「互动」按钮
2. 在弹出菜单中点击「举手」开关，开启后学生可点击举手按钮
3. 老师可在右侧成员列表看到举手学生，点击头像进行连麦

*（附操作截图）*

---

### 示例2：管理后台
**用户提问：** 如何在管理后台导出课堂数据？

**助手回答：**
1. 登录管理后台 → 点击左侧「数据与报告」
2. 选择「课堂列表」，设置时间范围和班级筛选条件
3. 点击右上角「导出」按钮，选择导出格式（Excel/CSV）
4. 文件生成后在「下载中心」获取

*（附操作截图）*

---

### 示例3：故障排查
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

### 方法一：从 .skill 文件安装（推荐）

1. 前往 [Releases](https://github.com/shenyang00260/classin-helper-skill/releases) 页面下载最新的 `classin-helper.skill` 文件
2. 在 OpenClaw 中安装：
   ```
   openclaw skill install /path/to/classin-helper.skill
   ```
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

本 skill 使用 [Playwright](https://playwright.dev/) 在知识库图片 URL 过期时自动爬取最新截图。

- **首次安装后必须运行一次** `node scripts/setup.js`
- 脚本会自动安装 `playwright` 包和 Chromium 浏览器（约 100MB）
- 如果网络不好，可以手动执行：
  ```bash
  npm install
  npx playwright install chromium
  ```
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
A: 本知识库基于 2026 年 4 月版本。如 ClassIn 更新了新功能，可提 Issue 或 PR 更新知识库文档。

**Q: 支持哪些 OpenClaw 渠道？**
A: 支持所有 OpenClaw 渠道，包括 QQ、微信、Telegram、Discord、Web Chat 等。

---

## 📬 反馈与贡献

- 提 Issue：[GitHub Issues](https://github.com/shenyang00260/classin-helper-skill/issues)
- 更新知识库：直接 PR 修改 `references/knowledge/` 下的 MD 文件

---

## 📄 License

MIT License — 知识库内容版权归 ClassIn 官方所有，本项目仅用于辅助查询。
