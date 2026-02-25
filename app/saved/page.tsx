'use client';

import React from 'react';
import { Bookmark, Search, Filter, Zap, Globe, Brain, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function SavedPage() {
  const savedJobs = [
    {
      id: 2,
      title: 'Lead Product Designer (AI/ML)',
      company: 'Synthetix Cloud',
      icon: Globe,
      salary: '$165k – $210k',
      tags: ['Fully Remote', 'Top 1% Talent'],
    },
  ];

  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <Bookmark size={20} className="text-white" fill="currentColor" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Saved Jobs</h1>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto p-6 space-y-8 py-10">
        {savedJobs.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {savedJobs.map((job) => (
              <div key={job.id} className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all group">
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center gap-5">
                    <div className="size-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                      <job.icon size={32} className="text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                      <p className="text-slate-500 font-semibold mt-1">{job.company}</p>
                    </div>
                  </div>
                  <button className="text-indigo-600 p-2 hover:bg-indigo-50 rounded-xl transition-all">
                    <Bookmark size={24} fill="currentColor" />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {job.tags.map((tag, i) => (
                    <span key={i} className={`text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest ${
                      tag === 'Fully Remote' ? 'bg-indigo-50 text-indigo-600' : 'bg-slate-50 text-slate-500'
                    }`}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="space-y-0.5">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Annual Salary</p>
                    <p className="text-slate-900 font-black text-xl">{job.salary} <span className="text-slate-400 text-sm font-normal">USD</span></p>
                  </div>
                  <Link href="/applied/success" className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg shadow-indigo-100 transition-all active:scale-95 flex items-center justify-center">
                    Apply Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-8">
            <div className="size-32 rounded-[2.5rem] bg-slate-50 flex items-center justify-center text-slate-200 border border-slate-100 shadow-inner">
              <Bookmark size={64} />
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-display font-bold text-slate-900">No saved jobs yet.</h2>
              <p className="text-slate-500 max-w-xs mx-auto font-medium">Start exploring elite AI roles and save the ones that match your expertise.</p>
            </div>
            <Link href="/jobs" className="bg-indigo-600 text-white font-black py-4 px-10 rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 transition-all uppercase tracking-widest text-sm">
              Explore Jobs
            </Link>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
