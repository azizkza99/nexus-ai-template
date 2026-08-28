import { t } from '../translations'

export default function Pricing({ lang }) {
  const currentText = t[lang].pricing

  return (
    <section id="pricing" className="scroll-mt-20 border-t border-slate-900 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-xs sm:text-sm font-semibold text-indigo-400 tracking-wider uppercase">
            {currentText.tag}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {currentText.title}
          </h3>
          <p className="text-slate-400 text-sm sm:text-base">
            {currentText.desc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {currentText.plans.map((plan) => (
            <article
              key={plan.name}
              className={`p-8 rounded-3xl flex flex-col justify-between border relative backdrop-blur-xl ${
                plan.popular 
                  ? 'bg-gradient-to-b from-indigo-950/60 to-slate-900/60 border-indigo-500/50 shadow-xl shadow-indigo-500/10' 
                  : 'bg-slate-900/40 border-slate-800'
              }`}
            >
              {plan.popular ? (
                <span className="absolute -top-3 start-8 rounded-full bg-indigo-600 px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                  {currentText.badge}
                </span>
              ) : null}

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white" dir="ltr">{plan.name}</h4>
                  <p className="text-slate-400 text-xs mt-1">{plan.desc}</p>
                </div>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-black text-white sm:text-4xl">{plan.price}</span>
                </div>

                <ul className="space-y-3 pt-4 border-t border-slate-800/80">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-slate-300">
                      <span className="text-indigo-400" aria-hidden="true">✓</span>{' '}
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a href="#planner" className={`mt-8 block w-full rounded-xl py-3.5 text-center text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 ${
                plan.popular 
                  ? 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/25' 
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
              }`}>
                {currentText.btn}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
