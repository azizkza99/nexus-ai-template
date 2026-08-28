import { t } from '../translations'

export default function Hero({ lang, onOpenDemo }) {
  const currentText = t[lang].hero

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-950 px-4 pb-24 pt-32 text-center sm:px-6 lg:px-8"
    >
      <div className="hero-orb" aria-hidden="true" />
      <div className="relative mx-auto max-w-5xl space-y-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-950/50 px-4 py-2 text-xs font-semibold text-indigo-300 shadow-inner">
          <span className="h-2 w-2 rounded-full bg-indigo-400" aria-hidden="true" />
          {currentText.badge}
        </div>

        <h1 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
          {currentText.title1}{' '}
          <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {currentText.title2}
          </span>
        </h1>

        <p className="mx-auto max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          {currentText.desc}
        </p>

        <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row">
          <button
            type="button"
            onClick={onOpenDemo}
            className="w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-indigo-500/25 transition hover:-translate-y-0.5 hover:from-indigo-500 hover:to-violet-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 sm:w-auto"
          >
            {currentText.ctaPrimary}
          </button>
          <a
            href="#features"
            className="w-full rounded-xl border border-slate-800 bg-slate-900 px-8 py-4 text-sm font-semibold text-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 sm:w-auto"
          >
            {currentText.ctaSecondary}
          </a>
        </div>

        <p className="text-xs text-slate-600">{currentText.trust}</p>
      </div>
    </section>
  )
}
