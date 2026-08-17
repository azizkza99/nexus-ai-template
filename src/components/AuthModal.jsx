import React from 'react';
import { t } from '../translations';

export default function AuthModal({ isOpen, onClose, onSuccess, lang }) {
  if (!isOpen) return null;
  const currentText = t[lang].auth;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSuccess();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-sm p-4">
      <div className="w-full max-w-md p-8 rounded-3xl bg-slate-900 border border-slate-800 shadow-2xl space-y-6 relative">
        
        <div className="text-center space-y-2">
          <h3 className="text-xl font-extrabold text-white">{currentText.title}</h3>
          <p className="text-slate-400 text-xs">{currentText.subtitle}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">{currentText.emailLabel}</label>
            <input 
              required
              type="email" 
              placeholder="name@agency.com" 
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">{currentText.passLabel}</label>
            <input 
              required
              type="password" 
              placeholder="••••••••" 
              className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500"
            />
          </div>

          <button type="submit" className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors cursor-pointer shadow-lg shadow-indigo-500/20">
            {currentText.submit}
          </button>
        </form>

        <button 
          onClick={onClose}
          className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
        >
          {currentText.close}
        </button>

      </div>
    </div>
  );
}
