import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Github, ExternalLink, Languages, ChevronDown, Check } from 'lucide-react'
import { useI18n } from '../i18n'
import { locales, languageNames } from '../i18n/translations'

function LanguageSelect() {
  const { locale, setLocale, t } = useI18n()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const onPointerDown = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(v => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={t('nav.language')}
        title={t('nav.language')}
        className={`inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-sm text-slate-300 transition-colors hover:border-indigo-500/60 hover:bg-indigo-500/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500/60 ${open ? 'border-indigo-500/60 bg-indigo-500/10 text-white' : 'border-white/10 bg-white/[0.03]'}`}
      >
        <Languages size={16} className="text-slate-400" aria-hidden="true" />
        <span>{languageNames[locale]}</span>
        <ChevronDown size={14} className={`text-slate-500 transition-transform ${open ? 'rotate-180' : ''}`} aria-hidden="true" />
      </button>

      {open && (
        <div
          role="listbox"
          aria-label={t('nav.language')}
          className="absolute start-0 top-full z-50 mt-2 w-44 max-w-[calc(100vw-2.5rem)] rounded-xl border border-white/10 bg-[#14141f]/95 p-1.5 shadow-2xl shadow-black/60 backdrop-blur-xl md:start-auto md:end-0"
        >
          {locales.map(l => (
            <button
              key={l}
              type="button"
              role="option"
              aria-selected={l === locale}
              onClick={() => {
                setLocale(l)
                setOpen(false)
              }}
              className={`flex w-full items-center justify-between gap-2 rounded-lg px-3 py-2 text-start text-sm transition-colors ${l === locale ? 'bg-indigo-500/15 text-indigo-300' : 'text-slate-300 hover:bg-white/5 hover:text-white'}`}
            >
              <span>{languageNames[l]}</span>
              {l === locale && <Check size={15} aria-hidden="true" />}
            </button>
          ))}
        </div>
      )}
    </div>
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
              href="https://github.com/guwan/my-seek-web"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm rounded-lg border border-white/10 hover:border-indigo-500/60 hover:bg-indigo-500/10 transition-colors"
            >
              Web
            </a>
            <a
              href="https://github.com/guwan/my-seek"
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
              <a href="https://github.com/guwan/my-seek-web" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 flex items-center gap-1">
                Web <ExternalLink size={13} />
              </a>
              <a href="https://github.com/guwan/my-seek" target="_blank" rel="noopener noreferrer" className="text-sm text-slate-400 flex items-center gap-1">
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
            <a href="https://github.com/guwan/my-seek" target="_blank" rel="noopener noreferrer" className="hover:text-white">{t('footer.backend')}</a>
          </div>
          <div className="text-sm text-slate-600">{t('footer.copyright')}</div>
        </div>
      </footer>
    </div>
  )
}
