import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, BookOpen, Shield } from 'lucide-react'
import { useI18n } from '../i18n'

const highlights = [
  { icon: Sparkles, title: 'home.hl0.title', desc: 'home.hl0.desc' },
  { icon: Zap, title: 'home.hl1.title', desc: 'home.hl1.desc' },
  { icon: BookOpen, title: 'home.hl2.title', desc: 'home.hl2.desc' },
  { icon: Shield, title: 'home.hl3.title', desc: 'home.hl3.desc' },
] as const

const stats = [
  { n: '4', label: 'home.stat1' },
  { n: '3', label: 'home.stat2' },
  { n: '100%', label: 'home.stat3' },
] as const

export default function Home() {
  const { t } = useI18n()

  return (
    <>
      <section className="max-w-6xl mx-auto px-5 pt-24 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-sm text-slate-400 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_10px_#4ade80]" />
          {t('home.badge')}
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
          {t('home.title1')}
          <span className="gradient-text block">{t('home.title2')}</span>
        </h1>
        <p className="max-w-2xl mx-auto mt-7 text-lg text-slate-400">
          {t('home.desc')}
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-9">
          <a
            href="https://gitee.com/wu6789/my-seek"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg shadow-indigo-500/25"
          >
            {t('home.viewSource')} <ArrowRight size={18} />
          </a>
          <Link to="/features" className="px-7 py-3.5 rounded-xl border border-white/10 bg-white/5 font-semibold hover:bg-white/10 transition-colors">
            {t('home.learnMore')}
          </Link>
        </div>

        <div className="flex justify-center gap-12 mt-16">
          {stats.map(s => (
            <div key={s.label}>
              <div className="text-3xl font-extrabold">{s.n}</div>
              <div className="text-sm text-slate-500 mt-1">{t(s.label)}</div>
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
            <span className="ms-4 text-xs text-slate-500 font-mono">localhost:5173</span>
          </div>
          <img
            src={`${import.meta.env.BASE_URL}screenshot.png`}
            alt={t('home.screenshotAlt')}
            className="w-full block"
          />
        </div>
        <p className="text-center text-sm text-slate-500 mt-5">{t('home.screenshotCaption')}</p>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16">
        <div className="text-center mb-12">
          <div className="text-indigo-400 text-xs font-bold tracking-[3px] mb-3">{t('home.eyebrow')}</div>
          <h2 className="text-4xl font-bold">{t('home.whyTitle')}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="card-hover p-6 rounded-2xl border border-white/10 bg-white/[0.03]">
              <div className="w-11 h-11 rounded-xl grid place-items-center bg-indigo-500/15 text-indigo-300 mb-5">
                <Icon size={22} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{t(title)}</h3>
              <p className="text-sm text-slate-400">{t(desc)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-5 py-16 text-center">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 px-8 py-14">
          <h2 className="text-3xl md:text-4xl font-bold">{t('home.ctaTitle')}</h2>
          <p className="text-slate-400 mt-4 mb-8">{t('home.ctaDesc')}</p>
          <Link to="/docs" className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
            {t('home.quickStart')} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
