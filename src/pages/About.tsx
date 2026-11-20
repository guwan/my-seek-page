import { Link } from 'react-router-dom'
import { Scale, HeartHandshake, Github, ExternalLink } from 'lucide-react'
import { useI18n } from '../i18n'

const projects = [
  { n: 'my-seek', d: 'about.projects0.d', u: 'https://github.com/guwan/my-seek' },
  { n: 'my-seek-web', d: 'about.projects1.d', u: 'https://github.com/guwan/my-seek-web' },
  { n: 'my-seek-page', d: 'about.projects2.d', u: 'https://github.com/guwan/my-seek-page' },
] as const

export default function About() {
  const { t } = useI18n()

  return (
    <div className="max-w-4xl mx-auto px-5 py-20">
      <div className="text-center mb-16">
        <div className="text-indigo-400 text-xs font-bold tracking-[3px] mb-3">{t('about.eyebrow')}</div>
        <h1 className="text-4xl md:text-5xl font-extrabold">{t('about.title')}</h1>
        <p className="text-slate-400 mt-5 text-lg">{t('about.desc')}</p>
      </div>

      <section className="mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><Scale size={22} className="text-indigo-400" /> {t('about.licenseTitle')}</h2>
        <p className="text-slate-300 leading-relaxed">
          {t('about.licenseP1')} <strong className="text-white">{t('about.licenseStrong')}</strong> {t('about.licenseP2')}
        </p>
        <p className="text-slate-500 text-sm mt-4">{t('about.licenseNote')}</p>
      </section>

      <section className="mb-12 p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-3"><HeartHandshake size={22} className="text-indigo-400" /> {t('about.contributeTitle')}</h2>
        <p className="text-slate-300 leading-relaxed mb-5">
          {t('about.contributeDesc')}
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/guwan/my-seek" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-white/10 text-sm flex items-center gap-2 hover:border-indigo-500/50 transition-colors">
            {t('about.backendSource')} <ExternalLink size={14} />
          </a>
          <a href="https://github.com/guwan/my-seek-page" target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 rounded-lg border border-white/10 text-sm flex items-center gap-2 hover:border-indigo-500/50 transition-colors">
            <Github size={14} /> {t('about.pageSource')}
          </a>
        </div>
      </section>

      <section className="p-8 rounded-2xl border border-white/10 bg-white/[0.03]">
        <h2 className="text-2xl font-bold mb-5">{t('about.projectsTitle')}</h2>
        <div className="space-y-4">
          {projects.map(p => (
            <a key={p.n} href={p.u} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-4 rounded-xl bg-black/20 hover:bg-black/30 transition-colors">
              <div>
                <div className="font-semibold text-indigo-300">{p.n}</div>
                <div className="text-sm text-slate-500 mt-1">{t(p.d)}</div>
              </div>
              <ExternalLink size={16} className="text-slate-600" />
            </a>
          ))}
        </div>
      </section>

      <div className="text-center mt-14">
        <Link to="/docs" className="text-indigo-400 hover:text-indigo-300">{t('about.quickStartLink')}</Link>
      </div>
    </div>
  )
}
