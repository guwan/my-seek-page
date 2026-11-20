# MySeek Landing Page

[English](README.md) | [简体中文](README.zh-CN.md)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Cloudflare Pages](https://img.shields.io/badge/Deploy-Cloudflare%20Pages-orange?logo=cloudflare)](https://pages.cloudflare.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-blue?logo=github)](https://guwan.github.io/my-seek-page/)
[![GitHub stars](https://img.shields.io/github/stars/guwan/my-seek-page?style=social)](https://github.com/guwan/my-seek-page)

The official landing page for the open-source [MySeek](https://github.com/guwan/my-seek) project. It is a SPA built with **Vite + React 19 + Tailwind CSS 4 + React Router 7**, and can be deployed to Cloudflare Pages or GitHub Pages.

## Pages

| Route | Description |
| --- | --- |
| `/` | Home: project introduction, UI preview, and key highlights |
| `/features` | Feature details and overall architecture |
| `/docs` | Quick start, requirements, and environment variables |
| `/about` | License, contribution guide, and project structure |

## Related Projects

| Project | Description |
| --- | --- |
| [guwan/my-seek](https://github.com/guwan/my-seek) | Backend service: authentication, chat, knowledge base, web search, and provider management |
| [guwan/my-seek-web](https://github.com/guwan/my-seek-web) | Web workspace: multi-model chat, conversation management, and AI writing |

## Local Development

```bash
pnpm install
pnpm dev
```

Open `http://localhost:5173`.

## Build

```bash
pnpm build      # output: dist/
pnpm preview    # preview the production build locally
```

## Deploying to Cloudflare Pages

1. Create a Pages project in the Cloudflare Dashboard and connect this GitHub repository.
2. Use the following build settings:
   - **Framework preset**: `Vite`
   - **Build command**: `pnpm build`
   - **Build output directory**: `dist`
   - **Root directory**: `/`
3. Click **Save and Deploy**.

SPA fallback is handled by `public/_redirects` (`/* /index.html 200`), so direct visits to routes such as `/docs` work correctly.

### pnpm Compatibility (Important)

The Cloudflare Pages build image uses **pnpm 9.x**. If it finds a `pnpm-workspace.yaml` in the repository root, it treats the repository as a monorepo and requires a `packages` field; otherwise it fails with:

```text
packages field missing or empty
```

Although this project is a single package, the file is kept to allow the esbuild install script. Therefore `pnpm-workspace.yaml` declares `packages: ['.']` (the root package is the only workspace package).

- `pnpm-lock.yaml` is lockfile v9.0, compatible with pnpm 9, and committed to the repository.
- There is **no** `package-lock.json`, to avoid conflicting lockfiles.
- Local development with pnpm 11 is fine; install and build have been verified with pnpm 9.15.9.

> Do not add a `packages` field to `package.json` to satisfy the monorepo check — pnpm does not read it. The error comes from `pnpm-workspace.yaml`.

> If deploying with the Wrangler CLI, `wrangler.toml` already configures `pages_build_output_dir`.

## Deploying to GitHub Pages

The repository includes `.github/workflows/jekyll-gh-pages.yml`. By default it deploys as a project site at `https://<username>.github.io/<repository>/`.

1. Go to repository **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**.
2. Push to `main` or `master`, or manually run **Deploy to GitHub Pages** from the Actions tab.
3. The workflow will automatically:
   - build with pnpm 9 and Node.js 24;
   - set the Vite `base` path from the repository name;
   - copy `dist/index.html` to `dist/404.html` for SPA route fallback;
   - create `.nojekyll` to prevent Jekyll processing;
   - publish through the official GitHub Pages Actions.

If you use a custom domain and want the site to be served from `/`, set a repository variable:

```text
VITE_BASE_PATH=/
```

Then rerun the workflow.

## Tech Stack

- Vite 6
- React 19
- React Router 7
- Tailwind CSS 4
- TypeScript 5
- lucide-react

## License

[MIT License](./LICENSE)
