import React, { useState } from 'react';
import { t } from '../translations';

export default function FAQ({ lang }) {
  const currentText = t[lang].faq;
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
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
            <div key={index} className="rounded-2xl bg-slate-900/40 border border-slate-800 overflow-hidden">
              <button 
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-start flex items-center justify-between font-bold text-white text-sm sm:text-base cursor-pointer"
              >
                <span>{item.q}</span>
                <span className="text-indigo-400 text-lg font-normal">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
