'use client';

import React, { useState } from 'react';
import { Calculator, Bell, TrendingUp, Info, Settings, User, Briefcase, BarChart3, Zap, Globe } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';

export default function CalculatorPage() {
  const [salary, setSalary] = useState(85000);

  const devoraSalary = salary * 2.17;
  const annualIncrease = devoraSalary - salary;

  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <Calculator size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Remote Pay Calculator</h1>
          </div>
          <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-500">
            <TrendingUp size={20} />
          </button>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6 space-y-12 py-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-display font-black text-slate-900 tracking-tight">Unlock Your Global Value.</h2>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">See how much more you could earn by switching to a world-class remote role at a Silicon Valley-tier company.</p>
        </div>

        <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-indigo-100/50 space-y-10">
          <div className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Current Annual Salary (USD)</label>
              <span className="text-3xl font-display font-black text-indigo-600">${salary.toLocaleString()}</span>
            </div>
            <input 
              type="range" 
              min="30000" 
              max="300000" 
              step="5000"
              value={salary}
              onChange={(e) => setSalary(parseInt(e.target.value))}
              className="w-full h-3 bg-slate-100 rounded-full appearance-none cursor-pointer accent-indigo-600"
            />
            <div className="flex justify-between text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              <span>$30k</span>
              <span>$300k+</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 space-y-2">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">devorapartners Remote Salary</p>
              <p className="text-4xl font-display font-black text-slate-900">${Math.round(devoraSalary).toLocaleString()}</p>
              <p className="text-xs font-bold text-green-600 flex items-center gap-1">
                <TrendingUp size={14} /> 2.17x Increase
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-indigo-600 text-white space-y-2 shadow-xl shadow-indigo-200">
              <p className="text-[10px] font-black text-indigo-200 uppercase tracking-widest">Annual Increase</p>
              <p className="text-4xl font-display font-black text-white">+${Math.round(annualIncrease).toLocaleString()}</p>
              <p className="text-xs font-bold text-indigo-100">Pure Buying Power</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-display font-bold text-slate-900">Top Remote Hubs</h3>
            <Link href="/market" className="text-indigo-600 text-sm font-bold hover:underline">View Market Data</Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { city: 'Singapore', mult: '1.8x', icon: Globe },
              { city: 'London', mult: '1.5x', icon: Globe },
              { city: 'Dubai', mult: '2.1x', icon: Globe },
              { city: 'Berlin', mult: '1.4x', icon: Globe },
            ].map((hub) => (
              <div key={hub.city} className="bg-white p-6 rounded-2xl border border-slate-100 text-center space-y-3 hover:border-indigo-200 transition-all group">
                <div className="size-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 mx-auto group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                  <hub.icon size={24} />
                </div>
                <div>
                  <p className="font-bold text-slate-900">{hub.city}</p>
                  <p className="text-[10px] font-black text-indigo-600 uppercase tracking-widest mt-1">{hub.mult} Buying Power</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
