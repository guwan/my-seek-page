import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages 项目站点的访问路径是 /<repo>/；本地与自定义域名仍使用 /。
const repoName = (process.env.VITE_BASE_PATH ?? '').replace(/^\/+|\/+$/g, '')
const base = repoName ? `/${repoName}/` : '/'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base,
})
