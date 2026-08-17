import React from 'react';
import { t } from '../translations';

export default function StatsBar({ lang }) {
  const stats = t[lang].stats;

  return (
    <div className="border-y border-slate-900 bg-slate-950/60 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-1">
            <h4 className="text-3xl sm:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              {stat.value}
            </h4>
            <p className="text-slate-400 text-xs sm:text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
