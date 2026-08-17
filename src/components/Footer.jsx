import React from 'react';
import { t } from '../translations';

export default function Footer({ lang }) {
  const currentText = t[lang].footer;

  return (
    <footer className="border-t border-slate-900 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-center">
      <div className="max-w-7xl mx-auto space-y-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-sm">
            N
          </div>
          <span className="text-lg font-extrabold text-white">
            Nexus<span className="text-indigo-400">-AI</span>
          </span>
        </div>
        <p className="text-slate-400 text-xs">{currentText.desc}</p>
        <p className="text-slate-600 text-xs">{currentText.rights}</p>
      </div>
    </footer>
  );
}
