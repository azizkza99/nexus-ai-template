import React from 'react';
import { t } from '../translations';

export default function Dashboard({ onLogout, lang }) {
  const currentText = t[lang].dashboard;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 sm:p-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-900 pb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white">{currentText.title}</h1>
            <p className="text-slate-400 text-sm mt-1">{currentText.subtitle}</p>
          </div>
          <button 
            onClick={onLogout}
            className="px-4 py-2 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-semibold hover:bg-red-600/30 transition-colors cursor-pointer"
          >
            {currentText.logout}
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl">
            <p className="text-slate-400 text-xs font-medium">{currentText.m1}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2">24,850</h3>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl">
            <p className="text-slate-400 text-xs font-medium">{currentText.m2}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2">310 hrs</h3>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl">
            <p className="text-slate-400 text-xs font-medium">{currentText.m3}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2">18</h3>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl">
            <p className="text-slate-400 text-xs font-medium">{currentText.m4}</p>
            <h3 className="text-3xl font-extrabold text-white mt-2">99.9%</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl space-y-4">
            <h3 className="text-lg font-bold text-white">{currentText.activity}</h3>
            <div className="space-y-3">
              {[
                { title: "CRM Data Synchronization", time: "5 mins ago", status: "Success" },
                { title: "Weekly Performance Report Dispatch", time: "2 hours ago", status: "Success" },
                { title: "AI Generative Models Update", time: "5 hours ago", status: "Success" },
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-slate-950/60 border border-slate-800/80">
                  <div>
                    <h4 className="text-sm font-semibold text-white">{item.title}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{item.time}</p>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-8 rounded-2xl bg-slate-900/40 border border-slate-800 backdrop-blur-xl space-y-4">
            <h3 className="text-lg font-bold text-white">{currentText.quick}</h3>
            <div className="space-y-3">
              <button className="w-full py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold transition-colors cursor-pointer">
                {currentText.btn1}
              </button>
              <button className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors cursor-pointer">
                {currentText.btn2}
              </button>
              <button className="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-colors cursor-pointer">
                {currentText.btn3}
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
