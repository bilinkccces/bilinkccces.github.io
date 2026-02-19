import { Link, NavLink } from 'react-router-dom'
import { useLanguage } from './language-context'
import type { Language } from '../content/i18n'

const langs: Language[] = ['zh-Hans', 'zh-Hant', 'en']
const labels: Record<Language, string> = { 'zh-Hans': '简', 'zh-Hant': '繁', en: 'EN' }

export function Layout({ children }: { children: React.ReactNode }) {
  const { lang, setLang, t } = useLanguage()

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex w-[min(1120px,92vw)] items-center justify-between gap-4 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src="/assets/logo.svg" alt="BILINK logo" className="h-10 w-10" />
            <div>
              <p className="text-sm font-bold">{t('brand.cn')}</p>
              <p className="text-xs text-slate-500">{t('brand.en')}</p>
            </div>
          </Link>

          <nav className="hidden gap-6 text-sm text-slate-600 md:flex">
            <NavLink to="/" className="hover:text-brand-500">{t('nav.home')}</NavLink>
            <NavLink to="/about" className="hover:text-brand-500">{t('nav.about')}</NavLink>
            <NavLink to="/programs" className="hover:text-brand-500">{t('nav.programs')}</NavLink>
            <NavLink to="/news" className="hover:text-brand-500">{t('nav.news')}</NavLink>
          </nav>

          <div className="inline-flex rounded-full border border-slate-300 bg-white p-1">
            {langs.map((item) => (
              <button
                key={item}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  item === lang ? 'bg-brand-500 text-white' : 'text-slate-500'
                }`}
                onClick={() => setLang(item)}
              >
                {labels[item]}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className="mx-auto w-[min(1120px,92vw)] text-sm text-slate-500">{t('footer')}</div>
      </footer>
    </div>
  )
}
