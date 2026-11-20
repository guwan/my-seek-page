import { Terminal, Database, Server, Cpu } from 'lucide-react'
import { useI18n } from '../i18n'

const steps = [
  { n: '1', title: 'docs.step0.title', cmd: 'docs.step0.cmd' },
  { n: '2', title: 'docs.step1.title', cmd: 'docs.step1.cmd' },
  { n: '3', title: 'docs.step2.title', cmd: 'docs.step2.cmd' },
  { n: '4', title: 'docs.step3.title', cmd: 'docs.step3.cmd' },
] as const

const envVars = [
  { name: 'JWT_SECRET_KEY', desc: 'docs.env0.desc', def: 'docs.env0.def' },
  { name: 'DB_URL / DB_USERNAME / DB_PASSWORD', desc: 'docs.env1.desc', def: 'docs.env1.def' },
  { name: 'REDIS_HOST / REDIS_PORT', desc: 'docs.env2.desc', def: 'docs.env2.def' },
  { name: 'OLLAMA_BASE_URL', desc: 'docs.env3.desc', def: 'docs.env3.def' },
  { name: 'DOUBAO_API_KEY / QWEN_API_KEY', desc: 'docs.env4.desc', def: 'docs.env4.def' },
] as const

export default function Docs() {
  const { t } = useI18n()

  const requirements = [
    { icon: Cpu, t: 'docs.req0.t', d: 'docs.req0.d' },
    { icon: Database, t: 'docs.req1.t', d: 'docs.req1.d' },
    { icon: Server, t: 'docs.req2.t', d: 'docs.req2.d' },
  ] as const

  return (
    <div className="max-w-5xl mx-auto px-5 py-20">
      <div className="text-center mb-16">
        <div className="text-indigo-400 text-xs font-bold tracking-[3px] mb-3">{t('docs.eyebrow')}</div>
        <h1 className="text-4xl md:text-5xl font-extrabold">{t('docs.title')}</h1>
        <p className="text-slate-400 mt-5 text-lg">{t('docs.desc')}</p>
      </div>
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Terminal size={22} className="text-indigo-400" /> {t('docs.stepsTitle')}</h2>
        <div className="space-y-3">
          {steps.map(s => (
            <div key={s.n} className="flex items-start gap-5 p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <span className="shrink-0 w-8 h-8 rounded-full grid place-items-center bg-gradient-to-br from-indigo-500 to-purple-600 font-bold text-sm">{s.n}</span>
              <div className="min-w-0 flex-1">
                <div className="font-semibold mb-2">{t(s.title)}</div>
                <code className="text-sm text-indigo-300 break-all font-mono" dir="ltr">{t(s.cmd)}</code>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Server size={22} className="text-indigo-400" /> {t('docs.reqTitle')}</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {requirements.map(({ icon: Icon, t: titleKey, d }) => (
            <div key={titleKey} className="p-5 rounded-xl border border-white/10 bg-white/[0.03] text-center">
              <Icon size={24} className="text-indigo-400 mx-auto mb-3" />
              <div className="font-semibold">{t(titleKey)}</div>
              <div className="text-sm text-slate-500 mt-1">{t(d)}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6">{t('docs.envTitle')}</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm text-start">
            <thead className="bg-white/5 text-slate-400">
              <tr><th className="px-5 py-3 font-medium">{t('docs.var')}</th><th className="px-5 py-3 font-medium">{t('docs.descCol')}</th><th className="px-5 py-3 font-medium">{t('docs.default')}</th></tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {envVars.map(v => (
                <tr key={v.name} className="text-slate-300">
                  <td className="px-5 py-3 font-mono text-indigo-300 text-xs" dir="ltr">{v.name}</td>
                  <td className="px-5 py-3">{t(v.desc)}</td>
                  <td className="px-5 py-3 text-slate-500" dir="ltr">{t(v.def)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-500 text-sm mt-5">{t('docs.envNote')}</p>
      </section>
    </div>
  )
}
