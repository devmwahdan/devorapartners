'use client';

import React, { useState } from 'react';
import { Search, Bell, Filter, Bookmark, Zap, Globe, Brain, Briefcase } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Image from 'next/image';
import { motion } from 'motion/react';
import Link from 'next/link';

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState('All Roles');

  const categories = ['All Roles', 'Engineering', 'ML/Data Science', 'Design', 'Product'];

  const jobs = [
    {
      id: 1,
      title: 'Senior AI Research Engineer',
      company: 'NeuralMind Labs',
      icon: Brain,
      salary: '$180k – $250k',
      tags: ['Fully Remote', 'Full Time'],
      bookmarked: false,
    },
    {
      id: 2,
      title: 'Lead Product Designer (AI/ML)',
      company: 'Synthetix Cloud',
      icon: Globe,
      salary: '$165k – $210k',
      tags: ['Fully Remote', 'Top 1% Talent'],
      bookmarked: true,
    },
    {
      id: 3,
      title: 'Generative AI Specialist',
      company: 'Horizon Ventures',
      icon: Zap,
      salary: '$190k – $275k',
      tags: ['Fully Remote', 'Hybrid Option'],
      bookmarked: false,
    },
  ];

  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <Briefcase size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Elite Opportunities</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-500">
              <Bell size={20} />
            </button>
            <div className="size-10 rounded-xl bg-indigo-50 flex items-center justify-center overflow-hidden border border-indigo-100">
              <Image 
                src="https://picsum.photos/100/100?random=50" 
                alt="User" 
                width={40} 
                height={40} 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 max-w-screen-xl mx-auto">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
            <input 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all text-base outline-none" 
              placeholder="Search elite AI roles (e.g. 'LLM Engineer', 'Product Designer')..." 
              type="text"
            />
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto p-6">
        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-6 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`flex h-11 shrink-0 items-center justify-center gap-x-2 rounded-xl px-6 text-sm font-bold transition-all ${
                activeTab === cat 
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200" 
                  : "bg-white border border-slate-200 text-slate-600 hover:border-indigo-400/50 hover:bg-slate-50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex flex-col gap-8 mt-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-display font-bold text-slate-900">Featured Opportunities</h2>
              <p className="text-sm text-slate-500 font-medium">Hand-picked roles from top-tier AI companies.</p>
            </div>
            <button className="bg-white border border-slate-200 p-3 rounded-xl text-slate-600 hover:text-indigo-600 hover:border-indigo-200 transition-all flex items-center gap-2 text-sm font-bold">
              <Filter size={18} /> Filters
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {jobs.map((job) => (
              <motion.div 
                key={job.id} 
                whileHover={{ y: -4 }}
                className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all group"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-5">
                    <div className="size-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                      <job.icon size={32} className="text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 leading-tight group-hover:text-indigo-600 transition-colors">{job.title}</h3>
                      <p className="text-slate-500 font-semibold mt-1">{job.company}</p>
                    </div>
                  </div>
                  <button className={`${job.bookmarked ? 'text-indigo-600' : 'text-slate-300'} hover:text-indigo-600 transition-colors p-2`}>
                    <Bookmark size={24} fill={job.bookmarked ? "currentColor" : "none"} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
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
                  <Link 
                    href="/applied/success"
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-2xl shadow-lg shadow-indigo-100 transition-all active:scale-95 flex items-center justify-center"
                  >
                    Apply Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
