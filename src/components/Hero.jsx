import React from 'react';
import { t } from '../translations';

export default function Hero({ lang }) {
  const currentText = t[lang].hero;

  return (
    <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8 text-center bg-slate-950 overflow-hidden">
      <div className="max-w-4xl mx-auto space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-950/50 border border-indigo-500/30 text-indigo-300 text-xs font-semibold shadow-inner">
          <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse"></span>
          {currentText.badge}
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-tight">
          {currentText.title1}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-violet-400 to-cyan-400">
            {currentText.title2}
          </span>
        </h1>

        <p className="max-w-2xl mx-auto text-slate-400 text-base sm:text-lg">
          {currentText.desc}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 transition-all cursor-pointer">
            {currentText.ctaPrimary}
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-200 font-semibold text-sm transition-all cursor-pointer">
            {currentText.ctaSecondary}
          </button>
        </div>

      </div>
    </section>
  );
}
