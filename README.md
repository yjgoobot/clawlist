# ClawList

An AI Agent时代的项目管理软件 (AI Agent Era Project Management Software)

## 项目概述

ClawList 是一款专为 AI Agent 时代设计的现代化项目管理工具。它结合了传统项目管理的最佳实践与 AI Agent 协作的新模式，帮助团队更高效地协作和管理复杂的 AI 驱动项目。

## 核心特性

- **AI Agent 集成**: 无缝集成各种 AI Agent，支持任务分配和自动执行
- **智能任务管理**: 基于 AI 的任务优先级排序和资源分配
- **实时协作**: 实时同步的项目看板和团队协作功能
- **数据分析**: 内置数据分析工具，提供项目进度和效率洞察
- **灵活定制**: 高度可定制的工作流和界面

## 技术栈

- **前端**: Next.js 15, React
- **样式**: Tailwind CSS v4
- **后端**: Node.js
- **数据库**: PostgreSQL
- **部署**: Docker 容器化部署

## 安装要求

- Node.js 20+
- PostgreSQL 14+
- Docker (可选，用于容器化部署)

## 快速开始

1. 克隆项目:
   ```bash
   git clone <repository-url>
   cd clawlist
   ```

2. 安装依赖:
   ```bash
   npm install
   ```

3. 配置环境变量:
   ```bash
   cp .env.example .env.local
   # 编辑 .env.local 文件以配置您的环境变量
   ```

4. 初始化数据库:
   ```bash
   npx prisma migrate dev
   ```

5. 运行开发服务器:
   ```bash
   npm run dev
   ```

## 架构设计

ClawList 采用了模块化的架构设计，便于扩展和维护:

- **UI 层**: Next.js + Tailwind CSS 提供响应式用户界面
- **业务逻辑层**: TypeScript 实现的业务逻辑和服务层
- **数据层**: PostgreSQL 数据库配合 Prisma ORM
- **AI 集成层**: 统一的 AI Agent 接口，支持多种 AI 服务

## AI Agent 集成

ClawList 提供了专门的 AI Agent 管理界面，允许用户:

- 添加和配置不同的 AI Agent
- 分配任务给特定的 AI Agent
- 监控 AI Agent 的执行状态和性能
- 设置自动化工作流

## 贡献指南

我们欢迎社区贡献！请参考 [CONTRIBUTING.md](CONTRIBUTING.md) 了解详细信息。

## 许可证

MIT License