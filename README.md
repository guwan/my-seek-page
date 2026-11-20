# MySeek 宣传页

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange?logo=cloudflare)](https://pages.cloudflare.com/)
[![GitHub stars](https://img.shields.io/github/stars/guwan/my-seek-page?style=social)](https://github.com/guwan/my-seek-page)

[MySeek](https://github.com/guwan/my-seek) 开源项目的官方宣传站点。基于 **Vite + React 19 + Tailwind CSS 4 + React Router 7** 构建的 SPA，部署在 Cloudflare Pages。

## 页面

| 路由 | 说明 |
| --- | --- |
| `/` | 首页：项目介绍、界面预览、核心亮点 |
| `/features` | 功能特性详情与整体架构 |
| `/docs` | 快速开始、环境要求、环境变量 |
| `/about` | 开源协议、贡献指南、项目组成 |

## 相关项目

| 项目 | 说明 |
| --- | --- |
| [guwan/my-seek](https://github.com/guwan/my-seek) | 后端服务：鉴权、对话、知识库、联网搜索、供应商管理 |
| [guwan/my-seek-web](https://github.com/guwan/my-seek-web) | Web 对话工作台：多模型聊天、会话管理、AI 写作 |

## 本地开发

```bash
pnpm install
pnpm dev
```

访问 `http://localhost:5173`。

## 构建

```bash
pnpm build      # 输出到 dist/
pnpm preview    # 本地预览构建产物
```

## 部署到 Cloudflare Pages

1. 在 Cloudflare Dashboard 中创建 Pages 项目，连接本 GitHub 仓库
2. 构建配置：
   - **Framework preset**: `Vite`
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
3. 点击「Save and Deploy」

SPA 路由回退通过 `public/_redirects`（`/* /index.html 200`）实现，确保直接访问 `/docs` 等路径也能正确加载。

### 关于 pnpm 的兼容性（重要）

Cloudflare Pages 的构建镜像使用 **pnpm 9.x**。它只要发现仓库根目录存在 `pnpm-workspace.yaml`，
就会按 monorepo 处理，并要求该文件包含 `packages` 字段，否则直接报
`packages field missing or empty`。本项目虽是单包，但为放行 esbuild 构建脚本保留了这个文件，
因此 `pnpm-workspace.yaml` 中声明了 `packages: ['.']`（根包即唯一工作区包）。

- `pnpm-lock.yaml` 为 lockfile v9.0，与 pnpm 9 兼容，已提交到仓库
- 仓库中**没有** `package-lock.json`，避免双锁文件冲突
- 本地使用 pnpm 11 开发无影响；已用 pnpm 9.15.9 实际验证 install 与 build 均通过

> 不要为了让 monorepo 校验通过而往 `package.json` 加 `packages` 字段——pnpm 不读取该字段，
> 报错来自 `pnpm-workspace.yaml`。

> 如果使用 Wrangler CLI 部署，仓库中的 `wrangler.toml` 已配置好 `pages_build_output_dir`。

## 部署到 GitHub Pages

仓库已提供 `.github/workflows/jekyll-gh-pages.yml`。默认构建为项目站点，访问路径为 `https://<用户名>.github.io/<仓库名>/`。

1. 进入仓库 Settings → Pages，将 **Build and deployment → Source** 设为 `GitHub Actions`。
2. 推送到 `main` 或 `master`，或在 Actions 页面手动运行 `Deploy to GitHub Pages`。
3. workflow 会自动：
   - 使用 pnpm 9 + Node.js 22 构建；
   - 根据仓库名设置 Vite `base`；
   - 复制 `dist/index.html` 为 `dist/404.html` 以支持 SPA 路由回退；
   - 创建 `.nojekyll`，避免 GitHub Pages 的 Jekyll 处理；
   - 通过官方 Pages Actions 发布。

如果使用自定义域名并希望站点根目录为 `/`，在仓库 Variables 中设置：

```text
VITE_BASE_PATH=/
```

重新运行 workflow 即可。

## 技术栈

- Vite 6
- React 19
- React Router 7
- Tailwind CSS 4
- TypeScript 5
- lucide-react

## 开源协议

[MIT License](./LICENSE)
