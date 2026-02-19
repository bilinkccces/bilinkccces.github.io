import { Layout } from '../components/layout'
import { useLanguage } from '../components/language-context'

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <Layout>
      <section className="bg-gradient-to-b from-brand-50 to-slate-50 py-16">
        <div className="mx-auto grid w-[min(1120px,92vw)] gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-4xl font-extrabold leading-tight text-slate-900 md:text-5xl">{t('hero.title')}</h1>
            <p className="mt-4 text-lg text-slate-600">{t('hero.text')}</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">{t('home.aboutTitle')}</h2>
            <p className="mt-4 text-slate-600">{t('home.aboutBody')}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-[min(1120px,92vw)]">
          <h2 className="text-3xl font-bold text-slate-900">{t('programs.title')}</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {['programs.p1', 'programs.p2', 'programs.p3'].map((key) => (
              <article key={key} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="font-medium text-slate-700">{t(key)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}
