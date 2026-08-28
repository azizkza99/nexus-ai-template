import { t } from '../translations'

export default function StatsBar({ lang }) {
  const stats = t[lang].stats

  return (
    <section
      className="border-y border-slate-900 bg-slate-950/60 px-4 py-12 sm:px-6 lg:px-8"
      aria-label={lang === 'ar' ? 'حدود النموذج' : 'Concept boundaries'}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 text-center md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="space-y-1">
            <p className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              {stat.value}
            </p>
            <p className="text-slate-400 text-xs sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
