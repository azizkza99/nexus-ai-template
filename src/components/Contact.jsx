import React, { useState } from 'react';
import { t } from '../translations';

export default function Contact({ lang }) {
  const [submitted, setSubmitted] = useState(false);
  const currentText = t[lang].contact;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-950 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-3xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="text-xs sm:text-sm font-semibold text-indigo-400 tracking-wider uppercase mb-3">
            {currentText.tag}
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {currentText.title}
          </h3>
          <p className="text-slate-400 text-sm mt-3">
            {currentText.desc}
          </p>
        </div>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-indigo-950/30 border border-indigo-500/30 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-indigo-600/20 text-indigo-400 flex items-center justify-center text-xl font-bold mx-auto">✓</div>
            <h4 className="text-xl font-bold text-white">{currentText.successTitle}</h4>
            <p className="text-slate-400 text-sm">{currentText.successDesc}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">{currentText.name}</label>
                <input 
                  required
                  type="text" 
                  placeholder={currentText.namePlaceholder} 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-2">{currentText.email}</label>
                <input 
                  required
                  type="email" 
                  placeholder="name@agency.com" 
                  className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">{currentText.company}</label>
              <input 
                required
                type="text" 
                placeholder={currentText.companyPlaceholder} 
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-2">{currentText.message}</label>
              <textarea 
                rows="4" 
                placeholder={currentText.messagePlaceholder} 
                className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:border-indigo-500 transition-colors resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-500/25 transition-all cursor-pointer">
              {currentText.submit}
            </button>
          </form>
        )}

      </div>
    </section>
  );
}
