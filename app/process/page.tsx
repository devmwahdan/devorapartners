'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Brain, Terminal, Wrench, Handshake, ChevronLeft, Zap, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Link from 'next/link';

export default function ProcessPage() {
  const steps = [
    {
      icon: Brain,
      title: 'AI-Screening',
      desc: 'Neural networks analyze hundreds of data points to ensure perfect cultural and technical alignment.',
      image: 'https://picsum.photos/600/400?random=10',
    },
    {
      icon: Terminal,
      title: 'Cognitive Testing',
      desc: 'Advanced problem-solving scenarios designed to evaluate raw logic and architectural thinking.',
      image: 'https://picsum.photos/600/400?random=11',
    },
    {
      icon: Wrench,
      title: 'Work Assessment',
      desc: 'Practical verification through production-level challenges and collaborative coding environments.',
      image: 'https://picsum.photos/600/400?random=12',
    },
    {
      icon: Handshake,
      title: 'Direct Hire',
      desc: 'Bypass recruiters with direct integration into top global engineering teams instantly.',
      image: 'https://picsum.photos/600/400?random=13',
    },
  ];

  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <Zap size={20} className="text-white" fill="currentColor" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Selection Process</h1>
          </div>
          <Link href="/vetting" className="text-sm font-bold text-indigo-600 hover:underline">
            Vetting Details
          </Link>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-16">
        <div className="text-center space-y-6">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 text-[10px] font-black tracking-[0.2em] uppercase text-indigo-600 bg-indigo-50 border border-indigo-100 rounded-full"
          >
            Elite AI-First Recruitment
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-900 text-5xl font-display font-black leading-tight tracking-tight sm:text-6xl"
          >
            How it Works.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-xl font-medium leading-relaxed max-w-2xl mx-auto"
          >
            Connecting global top 1% tech talent with leading enterprises through automated high-fidelity assessments.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link 
                href="/vetting"
                className="group flex flex-col bg-white p-8 rounded-[2.5rem] shadow-sm border border-slate-200/60 hover:shadow-2xl hover:shadow-indigo-100/50 transition-all h-full"
              >
                <div className="size-14 flex items-center justify-center bg-indigo-50 rounded-2xl mb-6 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <step.icon size={28} />
                </div>
                <h3 className="text-slate-900 text-2xl font-display font-bold mb-3 group-hover:text-indigo-600 transition-colors">{step.title}</h3>
                <p className="text-slate-500 text-base leading-relaxed mb-8 font-medium">
                  {step.desc}
                </p>
                <div className="mt-auto aspect-video w-full rounded-2xl bg-slate-50 flex items-center justify-center overflow-hidden border border-slate-100 relative shadow-inner">
                  <Image 
                    src={step.image} 
                    alt={step.title} 
                    fill 
                    className="object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="mt-6 flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-[-10px] group-hover:translate-x-0">
                  Learn More <ArrowRight size={16} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-[3rem] p-12 text-center space-y-8 shadow-2xl shadow-indigo-100">
          <h2 className="text-3xl font-display font-bold text-white">Ready to start your journey?</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-medium">
            Join the elite network of developers and designers working at the forefront of AI and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="bg-indigo-600 text-white font-black py-4 px-10 rounded-2xl hover:bg-indigo-700 transition-all uppercase tracking-widest text-sm">
              Apply to Join
            </Link>
            <Link href="/jobs" className="bg-white/10 text-white font-black py-4 px-10 rounded-2xl hover:bg-white/20 transition-all uppercase tracking-widest text-sm border border-white/10">
              Browse Jobs
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
