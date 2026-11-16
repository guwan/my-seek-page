import { Terminal, Database, Server, Cpu } from 'lucide-react'

const steps = [
  { n: '1', title: '克隆代码', cmd: 'git clone https://gitee.com/wu6789/my-seek.git' },
  { n: '2', title: '启动依赖服务', cmd: 'MariaDB + Redis + Ollama（本地或远程）' },
  { n: '3', title: '启动后端', cmd: 'cd my-seek; ./gradlew bootRun' },
  { n: '4', title: '启动前端', cmd: 'cd my-seek-web; pnpm install; pnpm dev' },
]

const envVars = [
  { name: 'JWT_SECRET_KEY', desc: 'JWT 签名密钥，生产环境必填', def: '无' },
  { name: 'DB_URL / DB_USERNAME / DB_PASSWORD', desc: '数据库连接', def: 'localhost:3306/seek' },
  { name: 'REDIS_HOST / REDIS_PORT', desc: 'Redis 连接', def: 'localhost:6379' },
  { name: 'OLLAMA_BASE_URL', desc: '本地模型服务地址', def: 'http://localhost:11434' },
  { name: 'DOUBAO_API_KEY / QWEN_API_KEY', desc: '云端模型密钥（可选）', def: '空' },
]

export default function Docs() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-20">
      <div className="text-center mb-16">
        <div className="text-indigo-400 text-xs font-bold tracking-[3px] mb-3">DOCUMENTATION</div>
        <h1 className="text-4xl md:text-5xl font-extrabold">快速开始</h1>
        <p className="text-slate-400 mt-5 text-lg">几分钟内把 MySeek 跑起来。</p>
      </div>
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Terminal size={22} className="text-indigo-400" /> 启动步骤</h2>
        <div className="space-y-3">
          {steps.map(s => (
            <div key={s.n} className="flex items-start gap-5 p-5 rounded-xl border border-white/10 bg-white/[0.03]">
              <span className="shrink-0 w-8 h-8 rounded-full grid place-items-center bg-gradient-to-br from-indigo-500 to-purple-600 font-bold text-sm">{s.n}</span>
              <div className="min-w-0 flex-1">
                <div className="font-semibold mb-2">{s.title}</div>
                <code className="text-sm text-indigo-300 break-all font-mono">{s.cmd}</code>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-3"><Server size={22} className="text-indigo-400" /> 环境要求</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { icon: Cpu, t: 'JDK 25', d: 'Gradle toolchain 自动解析' },
            { icon: Database, t: 'MariaDB', d: '或 MySQL 8+' },
            { icon: Server, t: 'Node.js 22+', d: 'pnpm 11+' },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="p-5 rounded-xl border border-white/10 bg-white/[0.03] text-center">
              <Icon size={24} className="text-indigo-400 mx-auto mb-3" />
              <div className="font-semibold">{t}</div>
              <div className="text-sm text-slate-500 mt-1">{d}</div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6">关键环境变量</h2>
        <div className="overflow-x-auto rounded-xl border border-white/10">
          <table className="w-full text-sm text-left">
            <thead className="bg-white/5 text-slate-400">
              <tr><th className="px-5 py-3 font-medium">变量</th><th className="px-5 py-3 font-medium">说明</th><th className="px-5 py-3 font-medium">默认值</th></tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {envVars.map(v => (
                <tr key={v.name} className="text-slate-300">
                  <td className="px-5 py-3 font-mono text-indigo-300 text-xs">{v.name}</td>
                  <td className="px-5 py-3">{v.desc}</td>
                  <td className="px-5 py-3 text-slate-500">{v.def}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-slate-500 text-sm mt-5">完整配置请参考后端仓库的 README.md。</p>
      </section>
    </div>
  )
}