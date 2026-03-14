import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { i18n, type Language } from '../content/i18n'

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const LANG_KEY = 'bilink-lang'

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem(LANG_KEY) as Language | null
    return saved ?? 'zh-Hans'
  })

  useEffect(() => {
    document.documentElement.lang = lang
    document.body.dataset.lang = lang
    localStorage.setItem(LANG_KEY, lang)
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: (key: string) => i18n[lang][key] ?? key,
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
