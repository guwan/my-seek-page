# MySeek 宣传页

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange?logo=cloudflare)](https://pages.cloudflare.com/)

[MySeek](https://gitee.com/wu6789/my-seek) 开源项目的官方宣传站点。基于 **Vite + React 19 + Tailwind CSS 4 + React Router 7** 构建的 SPA，部署在 Cloudflare Pages。

## 页面

| 路由 | 说明 |
| --- | --- |
| `/` | 首页：项目介绍、界面预览、核心亮点 |
| `/features` | 功能特性详情与整体架构 |
| `/docs` | 快速开始、环境要求、环境变量 |
| `/about` | 开源协议、贡献指南、项目组成 |

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

> 如果使用 Wrangler CLI 部署，仓库中的 `wrangler.toml` 已配置好 `pages_build_output_dir`。

## 技术栈

- Vite 6
- React 19
- React Router 7
- Tailwind CSS 4
- TypeScript 5
- lucide-react

## 开源协议

[MIT License](./LICENSE)