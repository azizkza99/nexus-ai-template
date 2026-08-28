import { t } from '../translations'

export default function Features({ lang }) {
  const currentText = t[lang].features

  return (
    <section id="features" className="scroll-mt-20 border-t border-slate-900 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
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

        <div id="architecture" className="scroll-mt-28 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {currentText.items.map((item, index) => (
            <article key={item.title} className="group rounded-2xl border border-slate-800 bg-slate-900/40 p-8 transition-all hover:-translate-y-1 hover:border-indigo-500/50">
              <div className="w-12 h-12 rounded-xl bg-indigo-600/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                0{index + 1}
              </div>
              <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
