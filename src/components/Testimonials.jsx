import React from 'react';
import { t } from '../translations';

export default function Testimonials({ lang }) {
  const currentText = t[lang].testimonials;

  return (
    <section className="py-24 bg-slate-950 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
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
            <div key={index} className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 flex flex-col justify-between space-y-6">
              <p className="text-slate-300 text-sm leading-relaxed">"{item.quote}"</p>
              <div className="border-t border-slate-800/80 pt-4">
                <h4 className="text-white font-bold text-sm">{item.author}</h4>
                <p className="text-slate-500 text-xs mt-0.5">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
