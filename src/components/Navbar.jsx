import React, { useState } from 'react';
import { t } from '../translations';

export default function Navbar({ onOpenAuth, lang, onToggleLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const currentText = t[lang].nav;

  return (
    <nav className="sticky top-0 z-40 w-full backdrop-blur-xl bg-slate-950/80 border-b border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-indigo-500/20">
            N
          </div>
          <span className="text-xl font-extrabold tracking-tight text-white">
            Nexus<span className="text-indigo-400">-AI</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-indigo-400 transition-colors">{currentText.features}</a>
          <a href="#solutions" className="hover:text-indigo-400 transition-colors">{currentText.solutions}</a>
          <a href="#pricing" className="hover:text-indigo-400 transition-colors">{currentText.pricing}</a>
          <a href="#contact" className="hover:text-indigo-400 transition-colors">{currentText.contact}</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={onToggleLang}
            className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold hover:bg-slate-800 hover:text-white transition-all cursor-pointer"
          >
            {currentText.langBtn}
          </button>
          
          <button 
            onClick={onOpenAuth}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/20 transition-all cursor-pointer"
          >
            {currentText.login}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button 
            onClick={onToggleLang}
            className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-semibold"
          >
            {currentText.langBtn}
          </button>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white"
          >
            ☰
          </button>
        </div>

      </div>
    </nav>
  );
}
