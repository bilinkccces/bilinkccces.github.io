import { Layout } from '../components/layout'
import { useLanguage } from '../components/language-context'

export default function NewsPage() {
  const { t } = useLanguage()

  return (
    <Layout>
      <section className="mx-auto w-[min(920px,92vw)] py-16">
        <h1 className="text-4xl font-bold text-slate-900">{t('news.title')}</h1>
        <div className="mt-8 space-y-4">
          {['news.item1', 'news.item2', 'news.item3'].map((key) => (
            <article key={key} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-slate-900">{t(key)}</h2>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  )
}
