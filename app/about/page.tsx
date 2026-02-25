'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Globe, ShieldCheck, Users, Zap, CheckCircle2, Award, ArrowRight, ChevronLeft } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform">
              <Zap size={22} fill="currentColor" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Elite<span className="text-indigo-600">Recruit</span></h1>
          </Link>
          <button className="md:hidden p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-500">
            <ArrowRight size={20} />
          </button>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* Hero */}
        <div className="space-y-8 text-center lg:text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-xs font-black text-indigo-600 uppercase tracking-widest"
          >
            <Globe size={14} /> Global Top 1% Network
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl font-display font-black tracking-tight text-slate-900 sm:text-7xl leading-[1.1]"
          >
            Eliminating Bias. <br />
            <span className="text-indigo-600">Empowering Merit.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto lg:mx-0"
          >
            Elite is a world-class AI-first recruitment platform designed to connect the most innovative global tech enterprises with exceptional, pre-vetted talent.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <Link href="/register" className="inline-flex h-14 items-center justify-center rounded-2xl bg-indigo-600 px-10 text-base font-bold text-white shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:scale-[1.02] transition-all">
              Join the Elite 1%
            </Link>
            <Link href="/enterprise" className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-10 text-base font-bold text-slate-900 hover:bg-slate-50 transition-all">
              Enterprise Solutions
            </Link>
          </motion.div>
        </div>

        {/* Mission */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em]">Our Mission</h2>
            <p className="text-4xl font-display font-bold text-slate-900 tracking-tight">Redefining the Global Talent Landscape.</p>
          </div>
          
          <div className="relative p-12 bg-slate-900 rounded-[3rem] text-white overflow-hidden shadow-2xl shadow-indigo-100">
            <div className="relative z-10 space-y-6">
              <p className="text-2xl font-display font-medium leading-relaxed italic opacity-90">
                &quot;We are building a future where opportunities are accessible based on skill, not geography. Our platform leverages advanced AI to ensure a fair and meritocratic hiring process for everyone, everywhere.&quot;
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="size-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black">E</div>
                <div>
                  <p className="font-bold">Elite Leadership Team</p>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">San Francisco • Remote First</p>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-96 bg-indigo-600/20 rounded-full blur-3xl" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm space-y-6 hover:shadow-xl hover:shadow-indigo-100/50 transition-all group">
              <div className="size-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Users size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900">Bias Removal</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                Our proprietary algorithms focus purely on technical output, problem-solving depth, and cultural alignment rather than pedigree or location.
              </p>
            </div>
            <div className="p-10 bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm space-y-6 hover:shadow-xl hover:shadow-indigo-100/50 transition-all group">
              <div className="size-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <Globe size={28} />
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900">Global Access</h3>
              <p className="text-slate-500 leading-relaxed font-medium">
                We bridge the gap between world-class engineers in emerging markets and the most innovative tech companies in Silicon Valley and beyond.
              </p>
            </div>
          </div>
        </div>

        {/* Remote First */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em]">Our Culture</h2>
            <p className="text-4xl font-display font-bold text-slate-900 tracking-tight">Remote First, Excellence Always.</p>
          </div>
          
          <div className="relative aspect-[21/9] rounded-[3rem] overflow-hidden bg-slate-900 shadow-2xl">
            <Image src="https://picsum.photos/1600/800?random=30" alt="Remote work" fill className="object-cover opacity-60" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-[2rem] text-center shadow-2xl">
                <div className="flex -space-x-3 justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="size-12 rounded-full border-2 border-white bg-slate-200 overflow-hidden shadow-lg">
                      <Image src={`https://picsum.photos/100/100?random=${i + 40}`} alt="User" width={48} height={48} referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <p className="text-white font-black text-xs uppercase tracking-[0.2em]">Distributed in 40+ Countries</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                We don&apos;t just advocate for remote work; we embody it. Our team spans across 12 time zones, united by a singular focus on excellence. We believe that your impact is what matters, not where you sit.
              </p>
              <ul className="space-y-4">
                {[
                  'Asynchronous workflows by default',
                  'Full autonomy and trust-based culture',
                  'Home office & hardware stipends',
                  'Annual global team retreats',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-4 text-slate-900 font-bold">
                    <div className="size-6 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
                      <CheckCircle2 size={16} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-indigo-600 p-12 rounded-[3rem] text-white space-y-6 shadow-xl shadow-indigo-100">
              <h3 className="text-3xl font-display font-bold">Join our mission.</h3>
              <p className="text-indigo-100 font-medium leading-relaxed">
                We are always looking for exceptional people to help us build the future of global recruitment.
              </p>
              <Link href="/jobs" className="inline-flex items-center gap-2 font-black text-sm uppercase tracking-widest hover:gap-4 transition-all">
                View Internal Roles <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
