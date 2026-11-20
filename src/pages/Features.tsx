import { Sparkles, Zap, BookOpen, Shield, Layers, Lock } from 'lucide-react'
import { useI18n } from '../i18n'

const features = [
  { icon: Sparkles, title: 'features.f0.title', tag: 'features.f0.tag', desc: 'features.f0.desc' },
  { icon: Zap, title: 'features.f1.title', tag: 'features.f1.tag', desc: 'features.f1.desc' },
  { icon: BookOpen, title: 'features.f2.title', tag: 'features.f2.tag', desc: 'features.f2.desc' },
  { icon: Shield, title: 'features.f3.title', tag: 'features.f3.tag', desc: 'features.f3.desc' },
  { icon: Layers, title: 'features.f4.title', tag: 'features.f4.tag', desc: 'features.f4.desc' },
  { icon: Lock, title: 'features.f5.title', tag: 'features.f5.tag', desc: 'features.f5.desc' },
] as const

const architecture = [
  { t: 'features.arch0.t', d: 'features.arch0.d' },
  { t: 'features.arch1.t', d: 'features.arch1.d' },
  { t: 'features.arch2.t', d: 'features.arch2.d' },
] as const

export default function Features() {
  const { t } = useI18n()

  return (
    <div className="max-w-6xl mx-auto px-5 py-20">
      <div className="text-center mb-16">
        <div className="text-indigo-400 text-xs font-bold tracking-[3px] mb-3">{t('features.eyebrow')}</div>
        <h1 className="text-4xl md:text-5xl font-extrabold">{t('features.title')}</h1>
        <p className="text-slate-400 mt-5 text-lg">{t('features.desc')}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {features.map(({ icon: Icon, title, desc, tag }) => (
          <article key={title} className="card-hover p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
            <div className="flex items-start justify-between mb-6">
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-gradient-to-br from-indigo-500/25 to-purple-500/15 text-indigo-300">
                <Icon size={24} />
              </div>
              <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-slate-500">{t(tag)}</span>
            </div>
            <h2 className="text-xl font-semibold mb-3">{t(title)}</h2>
            <p className="text-slate-400 leading-relaxed">{t(desc)}</p>
          </article>
        ))}
      </div>
      <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <h2 className="text-2xl font-bold mb-6">{t('features.archTitle')}</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          {architecture.map(item => (
            <div key={item.t} className="p-6 rounded-xl bg-black/20 border border-white/5">
              <div className="text-indigo-400 font-semibold mb-3">{t(item.t)}</div>
              <div className="text-sm text-slate-400 whitespace-pre-line leading-relaxed">{t(item.d)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
