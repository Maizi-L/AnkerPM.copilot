# AnkerPM.copilot

**基于飞书生态的多 Agent 消费电子新品规划系统**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://ankerpm-copilot.pages.dev)
[![GitHub](https://img.shields.io/badge/github-repo-blue)](https://github.com/Maizi-L/AnkerPM.copilot)

---

## 📖 项目简介

AnkerPM.copilot 是一个 AI 原生产品规划工作台，旨在帮助硬件产品经理更高效地完成新品规划决策。

### 核心价值

- **🧠 AI 当超级智囊**: 搜信息、拆竞品、找机会，把社媒/投资/竞品里的信号熔铸成"机会假设"
- **🎭 AI 当用户替身**: 用真实社媒画像驱动的多智能体"挑战你的方案"，立项前打穿脆弱假设
- **🎓 AI 当行业专家**: 评估想法"站不站得住"——技术可行、竞争壁垒、合规/人因风险

---

## 🚀 快速开始

### 在线体验

访问 [https://ankerpm-copilot.pages.dev](https://ankerpm-copilot.pages.dev) 立即体验

### 本地运行

```bash
# 克隆仓库
git clone https://github.com/Maizi-L/AnkerPM.copilot.git

# 进入项目目录
cd AnkerPM.copilot

# 使用本地服务器打开（推荐）
python -m http.server 8000

# 或使用 VS Code 的 Live Server 插件
```

然后在浏览器中访问 `http://localhost:8000`

---

## 🏗️ 项目架构

### 双环架构

**外环 - 机会发现引擎（Always-On）**
- S0: 信号采集 → S1: 加权评分 → G0: PM选方向

**内环 - 人机共创定义流（Human-in-the-Loop）**
- S2: 共创孵化 → G1: PM批概念 → S3-S5: 深度分析 → G2: PM签终稿

### 工作流程

```
机会发现 → 新建项目 → 项目概览 → 信息看板 → 深度情报 
         → 人机共创 → 人机协作量化决策 → 方案对比
```

---

## 📁 项目结构

```
demo-v2/
├── index.html              # 首页（介绍页面）
├── workspace.html          # 工作台页面
├── css/
│   ├── style.css          # 全局样式
│   └── workspace.css      # 工作台样式
├── js/
│   ├── main.js            # 主JavaScript
│   └── workspace.js       # 工作台交互逻辑
├── images/                # 图片资源
└── README.md              # 项目说明
```

---

## 🎨 技术栈

- **前端**: HTML5 + CSS3 + Vanilla JavaScript
- **设计**: 现代化渐变色 + 卡片式布局
- **部署**: GitHub Pages / Cloudflare Pages

---

## 📋 功能特性

### 当前版本（v2.0 Demo）

- ✅ 介绍页面（Hero + 功能展示 + 工作流程）
- ✅ 工作台页面
  - 机会发现列表
  - 项目列表
  - 新建项目模态框
- ✅ 响应式设计

### 计划中的功能

- 🔄 项目详情页面（6个工作流页面）
- 🔄 AI 引导式对话创建
- 🔄 数据可视化
- 🔄 飞书集成

---

## 🎯 应用案例

**Soundcore 无线耳机 - 全天办公/社交 AI 耳机**

- **综合评分**: 8.85/10
- **关键发现**:
  - 社交媒体：大量"通话不清"抱怨
  - 技术资产：HearID、AI降噪、741项专利
  - 竞争缺口：无人整合"清晰通话+翻译+透传"

---

## 👥 团队信息

**copilot 队**

- 王檬 @Neya Wang
- 刘璐 @刘璐
- 袁海鑫 @袁海鑫

---

## 📝 开发日志

### 2026-07-24
- ✨ 完成架构重新梳理
- ✨ 创建 v2.0 Demo 版本
- ✨ 实现双环架构可视化

### 2026-07-23
- 📝 完成完整技术方案文档
- 📝 完成工作流优化方案

---

## 📄 许可证

MIT License

---

## 🔗 相关链接

- [飞书 AI 先锋比赛](https://www.feishu.cn/)
- [项目文档](./ARCHITECTURE_DESIGN.md)
- [技术方案](./AnkerPM.copilot%20-%20完整技术方案.md)

---

**🚀 点击快速体验 demo：[AnkerPM.copilot](https://ankerpm-copilot.pages.dev/)**
