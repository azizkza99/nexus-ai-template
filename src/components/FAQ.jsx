import { useState } from 'react'
import { t } from '../translations'

export default function FAQ({ lang }) {
  const currentText = t[lang].faq
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index))
  }

  return (
    <section className="border-t border-slate-900 bg-slate-950 px-4 py-24 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-16">
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

        <div className="space-y-4">
          {currentText.list.map((item, index) => (
            <article key={item.q} className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
              <button 
                type="button"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-panel-${index}`}
                className="flex w-full items-center justify-between gap-5 p-6 text-start text-sm font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-indigo-400 sm:text-base"
              >
                <span>{item.q}</span>
                <span className="text-indigo-400 text-lg font-normal">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index ? (
                <div
                  id={`faq-panel-${index}`}
                  role="region"
                  className="border-t border-slate-800/50 px-6 pb-6 pt-4 text-sm leading-relaxed text-slate-400"
                >
                  {item.a}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
