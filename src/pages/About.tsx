import { Link } from 'react-router-dom'
import { Scale, HeartHandshake, Github, ExternalLink } from 'lucide-react'

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-5 py-20">
      <div className="text-center mb-16">
        <div className="text-indigo-400 text-xs font-bold tracking-[3px] mb-3">ABOUT</div>
        <h1 className="text-4xl md:text-5xl font-extrabold">关于 MySeek</h1>
        <p className="text-slate-400 mt-5 text-lg">开源、可定制、可私有化部署的企业级 AI 对话工作台。</p>
      </div>

      <section className="mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><Scale size={22} className="text-indigo-400" /> 开源协议</h2>
        <p className="text-slate-300 leading-relaxed">
          MySeek 及其宣传页面均采用 <strong className="text-white">MIT License</strong> 开源协议。
          你可以自由地使用、复制、修改、合并、发布、分发、再许可和/或出售本软件的副本，
          只需在副本或重要部分中包含版权声明和许可声明。
        </p>
        <p className="text-slate-500 text-sm mt-4">软件按「原样」提供，不作任何明示或暗示的保证。详情见仓库中的 LICENSE 文件。</p>
      </section>

      <section className="mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><HeartHandshake size={22} className="text-indigo-400" /> 参与贡献</h2>
        <p className="text-slate-300 leading-relaxed mb-5">
          欢迎提交 Issue 反馈问题，或通过 Pull Request 贡献代码。无论是功能改进、文档完善还是 Bug 修复，都非常欢迎。
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://gitee.com/wu6789/my-seek" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-white/10 text-sm flex items-center gap-2 hover:border-indigo-500/50 transition-colors">
            后端源码 <ExternalLink size={14} />
          </a>
          <a href="https://github.com/guwan/my-seek-page" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-white/10 text-sm flex items-center gap-2 hover:border-indigo-500/50 transition-colors">
            <Github size={14} /> 宣传页源码
          </a>
        </div>
      </section>

      <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
        <h2 className="text-2xl font-bold mb-5">项目组成</h2>
        <div className="space-y-4">
          {[
            { n: 'my-seek', d: 'Spring Boot 4 + Spring AI 2 后端服务', u: 'https://gitee.com/wu6789/my-seek' },
            { n: 'my-seek-web', d: 'React 19 + Vite 7 前端应用', u: 'https://gitee.com/wu6789/my-seek' },
            { n: 'my-seek-page', d: '本站 — Vite + React + Tailwind CSS 宣传页', u: 'https://github.com/guwan/my-seek-page' },
          ].map(p => (
            <a key={p.n} href={p.u} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-black/20 hover:bg-black/30 transition-colors">
              <div>
                <div className="font-semibold text-indigo-300">{p.n}</div>
                <div className="text-sm text-slate-500 mt-1">{p.d}</div>
              </div>
              <ExternalLink size={16} className="text-slate-600" />
            </a>
          ))}
        </div>
      </section>

      <div className="text-center mt-14">
        <Link to="/docs" className="text-indigo-400 hover:text-indigo-300">查看快速开始文档 →</Link>
      </div>
    </div>
  )
}