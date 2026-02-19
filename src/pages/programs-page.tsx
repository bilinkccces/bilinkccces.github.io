import { Layout } from '../components/layout'
import { useLanguage } from '../components/language-context'

export default function ProgramsPage() {
  const { t } = useLanguage()

  return (
    <Layout>
      <section className="mx-auto w-[min(1000px,92vw)] py-16">
        <h1 className="text-4xl font-bold text-slate-900">{t('programs.title')}</h1>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {['programs.p1', 'programs.p2', 'programs.p3'].map((key) => (
            <article key={key} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">{t(key)}</h2>
              <p className="mt-2 text-sm text-slate-600">BILINK CCCES</p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
