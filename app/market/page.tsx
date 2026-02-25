'use client';

import React from 'react';
import { motion } from 'motion/react';
import { BarChart3, TrendingUp, Globe, Zap, ArrowUpRight, ArrowDownRight, Info } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

export default function MarketPage() {
  const trends = [
    { role: 'AI Research', growth: '+42%', status: 'up', salary: '$220k avg' },
    { role: 'ML Engineering', growth: '+38%', status: 'up', salary: '$195k avg' },
    { role: 'AI Product Design', growth: '+15%', status: 'up', salary: '$165k avg' },
    { role: 'Data Science', growth: '-2%', status: 'down', salary: '$155k avg' },
  ];

  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <BarChart3 size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Market Insights</h1>
          </div>
          <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-500">
            <Info size={20} />
          </button>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto p-6 space-y-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-indigo-600 p-10 rounded-[3rem] text-white space-y-6 shadow-2xl shadow-indigo-100 relative overflow-hidden"
          >
            <div className="relative z-10 flex items-center gap-2 text-indigo-600 bg-white w-fit px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest">
              <TrendingUp size={14} /> Market Hotness
            </div>
            <h2 className="text-5xl font-display font-black relative z-10">Extreme Demand.</h2>
            <p className="text-indigo-100 text-lg leading-relaxed font-medium relative z-10">
              AI roles are currently seeing a 4x increase in demand compared to traditional software engineering roles. The global talent war for LLM experts is at an all-time high.
            </p>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-64 bg-white/10 rounded-full blur-3xl" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-10 rounded-[3rem] border border-slate-200/60 shadow-sm space-y-8"
          >
            <div className="space-y-1">
              <h3 className="text-2xl font-display font-bold text-slate-900">Global Salary Trends</h3>
              <p className="text-sm text-slate-500 font-medium">Real-time data from devorapartners placements.</p>
            </div>
            <div className="space-y-4">
              {trends.map((trend, i) => (
                <div key={i} className="flex items-center justify-between p-5 bg-slate-50 rounded-2xl border border-slate-100 group hover:border-indigo-200 transition-all">
                  <div>
                    <p className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">{trend.role}</p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mt-1">{trend.salary}</p>
                  </div>
                  <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-black text-xs ${
                    trend.status === 'up' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'
                  }`}>
                    {trend.growth}
                    {trend.status === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="text-2xl font-display font-bold text-slate-900">Top Hiring Hubs</h3>
              <p className="text-sm text-slate-500 font-medium">Cities with the highest concentration of AI opportunities.</p>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {['San Francisco', 'London', 'Singapore', 'Dubai'].map((city, i) => (
              <motion.div 
                key={city} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[2rem] border border-slate-200/60 text-center space-y-4 hover:shadow-xl hover:shadow-indigo-100/50 transition-all group"
              >
                <div className="size-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mx-auto group-hover:bg-indigo-600 group-hover:text-white transition-colors shadow-sm">
                  <Globe size={28} />
                </div>
                <div>
                  <p className="font-bold text-lg text-slate-900">{city}</p>
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mt-1">High Activity</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
