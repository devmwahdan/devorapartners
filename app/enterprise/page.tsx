'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Globe, Search, User, Zap, Factory, Headset, MessageSquare, ArrowRight, ChevronRight, CheckCircle2, Building2, Users2, ShieldCheck } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function EnterprisePage() {
  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <Building2 size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Enterprise Solutions</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-500">
              <Search size={20} />
            </button>
            <Link href="/dashboard" className="p-2.5 bg-indigo-50 rounded-xl text-indigo-600 border border-indigo-100">
              <User size={20} />
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto p-6 space-y-24 py-16">
        {/* Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-xs font-black text-indigo-600 uppercase tracking-widest"
            >
              <ShieldCheck size={14} /> Trusted by Fortune 500
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-display font-black tracking-tight text-slate-900 leading-[1.1]"
            >
              The End of Traditional <br />
              <span className="text-indigo-600">Recruiting.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed font-medium"
            >
              devorapartners is an AI-first platform for global top 1% talent. Streamline your enterprise hiring with automated vetting, predictive matching, and global compliance.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link href="/register" className="h-14 bg-indigo-600 text-white font-black px-10 rounded-2xl shadow-xl shadow-indigo-100 transition-all hover:bg-indigo-700 hover:scale-[1.02] flex items-center justify-center uppercase tracking-widest text-sm">
                Get Started
              </Link>
              <button className="h-14 bg-white border-2 border-slate-200 text-slate-900 font-black px-10 rounded-2xl hover:bg-slate-50 transition-all uppercase tracking-widest text-sm">
                Book Demo
              </button>
            </motion.div>
          </div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square rounded-[3rem] overflow-hidden bg-slate-100 shadow-2xl shadow-indigo-100 border-8 border-white"
          >
            <Image src="https://picsum.photos/1200/1200?random=35" alt="Enterprise office" fill className="object-cover" referrerPolicy="no-referrer" />
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/20 to-transparent" />
          </motion.div>
        </div>

        {/* Specialized Factories */}
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-xs font-black text-indigo-600 uppercase tracking-[0.2em]">Our Infrastructure</h2>
            <p className="text-4xl font-display font-bold text-slate-900 tracking-tight">Specialized Talent Factories.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: 'Engineering Factory',
                desc: 'Top 1% developers vetted by specialized AI protocols and domain experts.',
                img: 'https://picsum.photos/600/400?random=36',
                icon: Zap,
              },
              {
                title: 'Support Factory',
                desc: '24/7 technical support experts for global scale operations and customer success.',
                img: 'https://picsum.photos/600/400?random=37',
                icon: Headset,
              },
            ].map((factory, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden group hover:shadow-2xl hover:shadow-indigo-100/50 transition-all"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image src={factory.img} alt={factory.title} fill className="object-cover group-hover:scale-110 transition-transform duration-700" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-6 left-6">
                    <div className="size-12 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <factory.icon size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-10 space-y-4">
                  <h3 className="text-2xl font-display font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{factory.title}</h3>
                  <p className="text-slate-500 font-medium leading-relaxed">{factory.desc}</p>
                  <div className="pt-4 flex items-center gap-2 text-indigo-600 font-black text-xs uppercase tracking-widest group-hover:gap-4 transition-all">
                    Explore Roster <ArrowRight size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Consultation Form */}
        <div className="bg-slate-50 p-12 lg:p-20 rounded-[4rem] border border-slate-200/60 shadow-inner">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-black text-slate-900 leading-tight">Request <br />Consultation.</h2>
              <p className="text-xl text-slate-500 font-medium leading-relaxed">
                Partner with us to scale your high-performance teams. Our experts will help you design a custom talent pipeline.
              </p>
              <div className="space-y-6">
                {[
                  'Custom vetting protocols',
                  'Dedicated account manager',
                  'Global compliance & payroll',
                  'Predictive hiring insights',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-4 text-slate-900 font-bold">
                    <div className="size-6 rounded-full bg-indigo-600 flex items-center justify-center text-white">
                      <CheckCircle2 size={14} />
                    </div>
                    {item}
                  </div>
                ))}
              </div>
            </div>
            
            <form className="bg-white p-10 rounded-[3rem] shadow-xl shadow-indigo-100/50 space-y-6 border border-slate-100">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Company Name</label>
                <input type="text" placeholder="e.g. Acme Corp" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Industry</label>
                  <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium appearance-none">
                    <option>Fintech</option>
                    <option>Healthtech</option>
                    <option>AI/ML</option>
                    <option>SaaS</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Target Role</label>
                  <input type="text" placeholder="e.g. Lead Engineer" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
                <textarea placeholder="Describe your hiring needs..." rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium resize-none"></textarea>
              </div>
              <button type="button" className="w-full bg-indigo-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-200 flex items-center justify-center gap-3 hover:bg-indigo-700 hover:scale-[1.01] transition-all uppercase tracking-widest text-sm">
                Submit Request <ArrowRight size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
