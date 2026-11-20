import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, BookOpen, Shield } from 'lucide-react'

const highlights = [
  { icon: Sparkles, title: '多模型切换', desc: 'Ollama / 豆包 / 千问' },
  { icon: Zap, title: '流式输出', desc: '逐字返回，实时渲染' },
  { icon: BookOpen, title: '知识库问答', desc: 'RAG 检索增强生成' },
  { icon: Shield, title: '私有化部署', desc: '数据完全自主可控' },
]

export default function Home() {
  return (
    <>
      <section className="max-w-6xl mx-auto px-5 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-slate-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
          开源 · 可私有化部署
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          让 AI 真正
          <span className="gradient-text block">服务于你的团队</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-7 text-lg text-slate-400">
          一个面向企事业内部的 AI 对话工作台。多模型自由切换、流式输出、知识库问答（RAG），
          从对话到私有知识，一套系统全部搞定。
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-9">
          <a
            href="https://gitee.com/wu6789/my-seek"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
          >
            查看源码 <ArrowRight size={18} />
          </a>
          <Link to="/features" className="px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-colors">
            了解更多
          </Link>
        </div>

        <div className="flex justify-center gap-12 mt-16">
          {[
            { n: '4', l: '后端核心技术' },
            { n: '3', l: '模型提供方' },
            { n: '100%', l: '数据自主可控' },
          ].map(s => (
            <div key={s.l}>
              <div className="text-3xl font-extrabold">{s.n}</div>
              <div className="text-sm text-slate-500 mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-5 py-14">
        <div className="rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/50 bg-[#111]">
          <div className="flex items-center gap-2 px-4 py-3 bg-[#1a1a24] border-b border-white/10">
            <span className="w-3 h-3 rounded-full bg-red-500" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-500" />
            <span className="ml-4 text-xs text-slate-500 font-mono">localhost:5173</span>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}screenshot.png`}
            alt="MySeek 聊天界面"
            className="w-full block"
          />
        </div>
        <p className="text-center text-sm text-slate-500 mt-5">聊天页：多轮对话、Markdown 渲染、模型切换与会话列表</p>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <div className="text-indigo-400 text-xs font-bold tracking-[3px] mb-3">HIGHLIGHTS</div>
          <h2 className="text-4xl font-bold">为什么选择 MySeek</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-hover p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="w-11 h-11 rounded-xl grid place-items-center bg-indigo-500/15 text-indigo-300 mb-5">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-sm text-slate-400">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 px-8 py-14">
          <h2 className="text-3xl md:text-4xl font-bold">准备好搭建自己的 AI 工作台了吗？</h2>
          <p className="text-slate-400 mt-4 mb-8">开源、可定制、可私有化部署。</p>
          <Link to="/docs" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            快速开始 <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}