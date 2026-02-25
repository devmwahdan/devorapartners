'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, Brain, Languages, Terminal, Award, Clock, CheckCircle2, ShieldCheck, Zap, ArrowRight, Globe } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Link from 'next/link';

export default function VettingPage() {
  const phases = [
    {
      icon: Brain,
      title: 'CCAT Cognitive Assessment',
      phase: 'PHASE 1: APTITUDE',
      desc: 'Industry-leading cognitive ability test measuring critical thinking, problem-solving, and the ability to learn new tasks quickly.',
      details: [
        { icon: Clock, text: '15 Minutes' },
        { icon: Award, text: '99th Percentile Required' }
      ],
      color: 'bg-indigo-600'
    },
    {
      icon: Languages,
      title: 'English Proficiency',
      phase: 'PHASE 2: COMMUNICATION',
      desc: 'Advanced C1/C2 level fluency assessment. We evaluate verbal clarity, written precision, and professional nuance.',
      details: [
        { icon: Zap, text: 'AI Interview' },
        { icon: Globe, text: 'Native-level Fluency' }
      ],
      color: 'bg-indigo-500'
    },
    {
      icon: Terminal,
      title: 'Proctored Technical Exams',
      phase: 'PHASE 3: HARD SKILLS',
      desc: 'Intensive hands-on coding challenges in a secure environment. Real-world scenarios testing architecture and optimization.',
      details: [
        { icon: Terminal, text: 'Live Proctored' },
        { icon: ShieldCheck, text: 'Anti-Plagiarism' }
      ],
      color: 'bg-indigo-700'
    },
    {
      icon: Award,
      title: 'Final Domain Review',
      phase: 'FINAL: EXPERT MATCHING',
      desc: 'Manual review by our subject matter experts to ensure cultural fit and deep domain expertise for high-impact projects.',
      color: 'bg-slate-900'
    }
  ];

  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center gap-4 max-w-screen-xl mx-auto">
          <Link href="/process" className="p-2.5 bg-indigo-50 text-indigo-600 rounded-xl hover:bg-indigo-100 transition-colors border border-indigo-100">
            <ChevronLeft size={20} />
          </Link>
          <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Vetting Process</h1>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-16 space-y-16">
        <div className="text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full"
          >
            Elite Network
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-display font-black tracking-tight text-slate-900 sm:text-6xl"
          >
            Rigorous Vetting.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Ensuring only the top 1% of global talent joins our elite AI-first network.
          </motion.p>
        </div>

        <div className="relative space-y-16 before:absolute before:left-8 before:top-4 before:bottom-4 before:w-0.5 before:bg-slate-100">
          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-20"
            >
              <div className={`absolute left-0 top-0 size-16 rounded-2xl ${phase.color} flex items-center justify-center text-white shadow-xl shadow-indigo-100 z-10 border-4 border-white`}>
                <phase.icon size={28} />
              </div>
              <div className="space-y-3">
                <p className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.2em]">{phase.phase}</p>
                <h3 className="text-2xl font-display font-bold text-slate-900">{phase.title}</h3>
                <p className="text-slate-500 leading-relaxed text-base font-medium max-w-2xl">{phase.desc}</p>
                {phase.details && (
                  <div className="flex flex-wrap gap-6 pt-3">
                    {phase.details.map((detail, j) => (
                      <div key={j} className="flex items-center gap-2 text-slate-400 text-xs font-bold uppercase tracking-widest">
                        <detail.icon size={16} className="text-indigo-600" />
                        {detail.text}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-center space-y-8 shadow-2xl shadow-indigo-100 relative overflow-hidden">
          <div className="relative z-10 space-y-2">
            <p className="text-6xl font-display font-black text-indigo-500">1:100</p>
            <p className="text-xs font-black text-white uppercase tracking-[0.3em] opacity-60">Acceptance Ratio</p>
          </div>
          <p className="text-slate-400 font-medium text-lg max-w-md mx-auto relative z-10">
            Our selection process is 5x more selective than Ivy League admissions, ensuring absolute excellence.
          </p>
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-64 bg-indigo-600/20 rounded-full blur-3xl" />
        </div>

        <button className="w-full bg-indigo-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-200 flex items-center justify-center gap-3 hover:bg-indigo-700 hover:scale-[1.01] transition-all uppercase tracking-widest text-sm">
          Start Hiring Elite Talent <ArrowRight size={20} />
        </button>
      </div>
    </PageLayout>
  );
}
