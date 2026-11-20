import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Github, ExternalLink, Languages } from 'lucide-react'
import { useI18n } from '../i18n'
import { locales, languageNames } from '../i18n/translations'
import type { Locale } from '../i18n/translations'

function LanguageSelect() {
  const { locale, setLocale, t } = useI18n()
  return (
    <label className="inline-flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors" title={t('nav.language')}>
      <Languages size={16} aria-hidden="true" />
      <select
        value={locale}
        onChange={e => setLocale(e.target.value as Locale)}
        aria-label={t('nav.language')}
        className="bg-transparent text-sm text-slate-300 outline-none cursor-pointer [&>option]:bg-[#111]"
      >
        {locales.map(l => <option key={l} value={l}>{languageNames[l]}</option>)}
      </select>
    </label>
  )
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const { t } = useI18n()

  const navItems = [
    { to: '/', label: t('nav.home') },
    { to: '/features', label: t('nav.features') },
    { to: '/docs', label: t('nav.docs') },
    { to: '/about', label: t('nav.about') },
  ]

  useEffect(() => {
    setMenuOpen(false)
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="glow w-[600px] h-[600px] bg-indigo-600/25 -top-48 -left-40" />
      <div className="glow w-[500px] h-[500px] bg-purple-600/15 top-80 -right-52" />

      <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#08080d]/80 backdrop-blur-xl">
        <div className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2.5 font-bold text-xl">
            <span className="w-9 h-9 rounded-lg grid place-items-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white">M</span>
            <span>MySeek</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `text-sm transition-colors ${isActive ? 'text-white font-medium' : 'text-slate-400 hover:text-white'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <LanguageSelect />
            <a
              href="https://gitee.com/wu6789/my-seek"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-lg border border-white/10 hover:border-indigo-500/60 hover:bg-indigo-500/10 transition-colors"
            >
              Gitee
            </a>
            <a
              href="https://github.com/guwan/my-seek-page"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <Github size={16} /> GitHub
            </a>
          </div>

          <button
            className="md:hidden p-2 text-slate-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={t('nav.menu')}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0d0d16] px-5 py-4 space-y-3">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block py-2 text-sm ${isActive ? 'text-indigo-400' : 'text-slate-400'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex flex-wrap gap-3 pt-3 border-t border-white/10">
              <LanguageSelect />
              <a href="https://gitee.com/wu6789/my-seek" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 flex items-center gap-1">
                Gitee <ExternalLink size={13} />
              </a>
              <a href="https://github.com/guwan/my-seek-page" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 flex items-center gap-1">
                GitHub <ExternalLink size={13} />
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="relative z-10">{children}</main>

      <footer className="relative z-10 border-t border-white/10 mt-24">
        <div className="max-w-6xl mx-auto px-5 py-10 flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <div className="font-bold text-lg">MySeek</div>
            <div className="text-sm text-slate-500 mt-1">{t('footer.tagline')}</div>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-slate-400">
            <Link to="/features" className="hover:text-white">{t('footer.features')}</Link>
            <Link to="/docs" className="hover:text-white">{t('footer.docs')}</Link>
            <Link to="/about" className="hover:text-white">{t('footer.license')}</Link>
            <a href="https://gitee.com/wu6789/my-seek" target="_blank" rel="noopener noreferrer" className="hover:text-white">{t('footer.backend')}</a>
          </div>
          <div className="text-sm text-slate-600">{t('footer.copyright')}</div>
        </div>
      </footer>
    </div>
  )
}
