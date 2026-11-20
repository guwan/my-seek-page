import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { locales, translations } from './translations'
import type { Locale, TranslationKey } from './translations'

const STORAGE_KEY = 'myseek-locale'

export function detectLocale(): Locale {
  if (typeof navigator === 'undefined') return 'en'
  const tags = [...(navigator.languages ?? []), navigator.language]
  for (const tag of tags) {
    const base = tag.toLowerCase().split('-')[0]
    if ((locales as readonly string[]).includes(base)) return base as Locale
  }
  return 'en'
}

function getInitialLocale(): Locale {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && (locales as readonly string[]).includes(saved)) return saved as Locale
  } catch {
    // localStorage may be unavailable in private mode
  }
  return detectLocale()
}

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: TranslationKey) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>(getInitialLocale)

  const changeLocale = useCallback((next: Locale) => {
    setLocale(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Ignore storage failures
    }
  }, [])

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale: changeLocale, t: key => translations[locale][key] }),
    [locale, changeLocale],
  )

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'ar' ? 'rtl' : 'ltr'
    document.title = translations[locale]['meta.title']
    document.querySelector('meta[name="description"]')?.setAttribute('content', translations[locale]['meta.description'])
  }, [locale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
