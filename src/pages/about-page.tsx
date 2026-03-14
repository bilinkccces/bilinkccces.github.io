import { Layout } from '../components/layout'
import { useLanguage } from '../components/language-context'

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <Layout>
      <section className="mx-auto w-[min(920px,92vw)] py-16">
        <h1 className="text-4xl font-bold text-slate-900">{t('about.title')}</h1>
        <p className="mt-4 text-slate-600">{t('about.body')}</p>
        <ul className="mt-8 space-y-3 text-slate-700">
          {['about.m1', 'about.m2', 'about.m3', 'about.m4', 'about.m5'].map((key) => (
            <li key={key} className="rounded-lg border border-slate-200 bg-white px-4 py-3 shadow-sm">
              {t(key)}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
