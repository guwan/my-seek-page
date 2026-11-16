import { Sparkles, Zap, BookOpen, Shield, Layers, Lock } from 'lucide-react'

const features = [
  { icon: Sparkles, title: '多模型自由切换', tag: '模型层', desc: '本地 Ollama、豆包、千问统一接入，按场景随时切换，不被单一厂商绑定。前端提供模型选择器，后端通过统一的 Provider 接口动态创建对应客户端。' },
  { icon: Zap, title: '流式对话输出', tag: '交互层', desc: '基于 Flux 实现逐字返回，首屏响应更快。前端原生支持 Markdown、代码高亮、数学公式（KaTeX）渲染，带来完整的阅读体验。' },
  { icon: BookOpen, title: '知识库问答（RAG）', tag: 'AI 能力', desc: '上传 PDF / Word / TXT 等文档，自动解析、分块、向量化并存入 Redis 向量库。提问时检索相关片段，构建增强提示词，让模型基于私有资料回答。' },
  { icon: Shield, title: '统一鉴权与隔离', tag: '安全', desc: 'JWT 登录鉴权，聊天记忆与会话列表按用户维度隔离。接口权限统一管控，未授权请求自动拦截，数据不串户。' },
  { icon: Layers, title: '现代化技术栈', tag: '工程', desc: '后端 Spring Boot 4 + Spring AI 2 + Java 25，前端 React 19 + Vite 7 + TypeScript 5 + Tailwind CSS 4，全栈最新稳定版本。' },
  { icon: Lock, title: '完全私有化部署', tag: '部署', desc: '支持部署在企业内网，模型可接本地 Ollama，数据留在自己的服务器，敏感资料不出内网，满足企业内部合规要求。' },
]

export default function Features() {
  return (
    <div className="max-w-6xl mx-auto px-5 py-20">
      <div className="text-center mb-16">
        <div className="text-indigo-400 text-xs font-bold tracking-[3px] mb-3">FEATURES</div>
        <h1 className="text-4xl md:text-5xl font-extrabold">为真实业务场景而设计</h1>
        <p className="text-slate-400 mt-5 text-lg">不只是一个聊天框，而是一套可直接落地的内部 AI 基础设施。</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map(({ icon: Icon, title, desc, tag }) => (
          <article key={title} className="card-hover p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500/25 to-purple-500/15 text-indigo-300">
                <Icon size={24} />
              </div>
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-slate-500">{tag}</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">{title}</h2>
            <p className="text-slate-400 leading-relaxed">{desc}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <h2 className="text-2xl font-bold mb-6">整体架构</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {[
            { t: '前端', d: 'React 19 + Vite 7\nTypeScript + Tailwind 4' },
            { t: '后端', d: 'Spring Boot 4\nSpring AI 2 + Java 25' },
            { t: '存储与模型', d: 'MariaDB + Redis\nOllama / 豆包 / 千问' },
          ].map(item => (
            <div key={item.t} className="p-6 rounded-xl bg-black/20 border border-white/5">
              <div className="text-indigo-400 font-semibold mb-3">{item.t}</div>
              <div className="text-sm text-slate-400 whitespace-pre-line leading-relaxed">{item.d}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}