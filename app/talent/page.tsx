'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Search, Filter, Star, MapPin, ExternalLink, Zap, Globe, Brain, Terminal, User, Briefcase } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function TalentPage() {
  const talents = [
    {
      name: 'Sarah Chen',
      role: 'Senior ML Engineer',
      location: 'Singapore',
      expertise: ['PyTorch', 'Computer Vision', 'NLP'],
      experience: '8 years',
      vetted: true,
      avatar: 'https://picsum.photos/200/200?random=101',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Fullstack AI Architect',
      location: 'Berlin, Germany',
      expertise: ['Next.js', 'Python', 'OpenAI API'],
      experience: '10 years',
      vetted: true,
      avatar: 'https://picsum.photos/200/200?random=102',
    },
    {
      name: 'Aisha Patel',
      role: 'Lead AI Product Designer',
      location: 'London, UK',
      expertise: ['Figma', 'AI UX', 'Prototyping'],
      experience: '6 years',
      vetted: true,
      avatar: 'https://picsum.photos/200/200?random=103',
    },
  ];

  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <Star size={20} className="text-white" fill="currentColor" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Elite Talent Pool</h1>
          </div>
          <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-500">
            <Filter size={20} />
          </button>
        </div>
        <div className="mt-6 max-w-screen-xl mx-auto">
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-600 transition-colors" size={20} />
            <input 
              className="w-full bg-slate-50 border border-slate-200 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all text-base outline-none" 
              placeholder="Search by skill, role, or location..." 
              type="text"
            />
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto p-6 space-y-8 py-10">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-display font-bold text-slate-900">Top 1% Vetted Talent</h2>
            <p className="text-sm text-slate-500 font-medium">Verified experts ready for immediate placement.</p>
          </div>
          <span className="bg-indigo-50 text-indigo-600 text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest border border-indigo-100">
            1,240 Active Profiles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {talents.map((talent, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-indigo-100/50 transition-all group"
            >
              <div className="flex items-start gap-5 mb-8">
                <div className="relative size-20 rounded-2xl overflow-hidden border-2 border-indigo-50 shadow-sm">
                  <Image src={talent.avatar} alt={talent.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors">{talent.name}</h3>
                    <div className="bg-indigo-600 p-0.5 rounded-full">
                      <Zap size={10} className="text-white" fill="currentColor" />
                    </div>
                  </div>
                  <p className="text-indigo-600 font-bold text-sm">{talent.role}</p>
                  <div className="flex items-center gap-1.5 text-slate-400 text-xs mt-2 font-medium">
                    <MapPin size={14} />
                    {talent.location}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex flex-wrap gap-2">
                  {talent.expertise.map((skill) => (
                    <span key={skill} className="bg-slate-50 text-slate-500 text-[9px] font-black px-2.5 py-1.5 rounded-lg uppercase tracking-widest border border-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                  <div className="space-y-0.5">
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">Experience</p>
                    <p className="text-slate-900 font-black text-base">{talent.experience}</p>
                  </div>
                  <button className="bg-indigo-50 text-indigo-600 font-bold py-2.5 px-5 rounded-xl hover:bg-indigo-600 hover:text-white transition-all flex items-center gap-2 text-sm">
                    View Profile <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
