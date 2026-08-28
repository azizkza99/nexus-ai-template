import { t } from '../translations'

export default function Testimonials({ lang }) {
  const currentText = t[lang].testimonials

  return (
    <section className="border-t border-slate-900 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {currentText.list.map((item, index) => (
            <article key={item.title} className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/40 p-8">
              <span className="text-xs font-bold text-indigo-400">0{index + 1}</span>
              <h4 className="text-lg font-bold text-white">{item.title}</h4>
              <p className="text-sm leading-7 text-slate-400">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
