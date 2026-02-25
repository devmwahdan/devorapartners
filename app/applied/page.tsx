'use client';

import React from 'react';
import { CheckCircle2, Search, Clock, Zap, Globe, Brain, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function AppliedPage() {
  const applications = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      company: 'OpenAI',
      status: 'Interviewing',
      date: 'Applied 4 days ago',
      icon: Zap,
    },
    {
      id: 2,
      title: 'ML Researcher',
      company: 'DeepMind',
      status: 'Under Review',
      date: 'Applied 1 week ago',
      icon: Brain,
    },
  ];

  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <CheckCircle2 size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">My Applications</h1>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto p-6 space-y-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {applications.map((app) => (
            <div key={app.id} className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all group">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-5">
                  <div className="size-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                    <app.icon size={32} className="text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{app.title}</h3>
                    <p className="text-slate-500 font-semibold mt-1">{app.company}</p>
                  </div>
                </div>
                <span className={`text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest ${
                  app.status === 'Interviewing' ? 'bg-green-50 text-green-600' : 'bg-indigo-50 text-indigo-600'
                }`}>
                  {app.status}
                </span>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <div className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                  <Clock size={16} className="text-indigo-600" />
                  {app.date}
                </div>
                <button className="text-indigo-600 text-sm font-black uppercase tracking-widest flex items-center gap-2 hover:gap-3 transition-all">
                  View Status <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
