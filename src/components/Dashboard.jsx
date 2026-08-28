import { useState } from 'react'
import { t } from '../translations'

export default function Dashboard({ onBack, lang, onToggleLang }) {
  const currentText = t[lang].dashboard
  const nav = t[lang].nav
  const [actionCompleted, setActionCompleted] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-6 text-slate-100 sm:px-8 sm:py-10">
      <main className="mx-auto max-w-7xl space-y-8">
        <header className="flex flex-col justify-between gap-5 border-b border-slate-900 pb-7 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-indigo-400">
              {currentText.eyebrow}
            </p>
            <h1 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">
              {currentText.title}
            </h1>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              {currentText.subtitle}
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={onToggleLang}
              aria-label={nav.languageLabel}
              className="rounded-xl border border-slate-700 bg-slate-900 px-4 py-2 text-xs font-semibold text-indigo-300 transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
              dir="ltr"
            >
              {nav.langBtn}
            </button>
            <button
              type="button"
              onClick={onBack}
              className="rounded-xl border border-slate-700 bg-slate-800 px-4 py-2 text-xs font-semibold text-slate-200 transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
            >
              {currentText.back}
            </button>
          </div>
        </header>

        <section
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
          aria-label={lang === 'ar' ? 'مقاييس نموذجية' : 'Sample metrics'}
        >
          {currentText.metrics.map((metric) => (
            <article
              key={metric.label}
              className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl"
            >
              <p className="text-xs font-medium text-slate-400">{metric.label}</p>
              <p className="mt-2 text-3xl font-extrabold text-white" dir="ltr">
                {metric.value}
              </p>
            </article>
          ))}
        </section>

        <div className="grid gap-8 lg:grid-cols-3">
          <section className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl sm:p-8 lg:col-span-2">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-lg font-bold text-white">{currentText.activity}</h2>
              <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-[10px] font-bold text-amber-300">
                DEMO
              </span>
            </div>
            <div className="space-y-3">
              {currentText.activities.map((item) => (
                <article
                  key={item.title}
                  className="flex items-center justify-between gap-5 rounded-xl border border-slate-800/80 bg-slate-950/60 p-4"
                >
                  <div>
                    <h3 className="text-sm font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">{item.time}</p>
                  </div>
                  <span className="rounded-lg bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-300">
                    {item.status}
                  </span>
                </article>
              ))}
            </div>
          </section>

          <section className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-6 backdrop-blur-xl sm:p-8">
            <h2 className="text-lg font-bold text-white">{currentText.quick}</h2>
            <div className="space-y-3">
              {currentText.actions.map((action, index) => (
                <button
                  key={action}
                  type="button"
                  onClick={() => setActionCompleted(true)}
                  className={`w-full rounded-xl px-4 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 ${
                    index === 0
                      ? 'bg-indigo-600 text-white hover:bg-indigo-500'
                      : 'bg-slate-800 text-slate-200 hover:bg-slate-700'
                  }`}
                >
                  {action}
                </button>
              ))}
            </div>
            <p className="min-h-14 text-xs leading-6 text-indigo-300" role="status">
              {actionCompleted ? currentText.actionResult : ''}
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
