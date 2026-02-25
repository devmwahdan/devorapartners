'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Zap, Mail, Lock, ArrowRight, Github, Chrome } from 'lucide-react';
import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';

export default function LoginPage() {
  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-128px)] bg-slate-50/50 flex flex-col items-center justify-center p-6 py-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-md space-y-8"
        >
          <div className="text-center space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 mb-4 group">
              <div className="bg-indigo-600 p-2.5 rounded-xl shadow-lg shadow-indigo-100 group-hover:scale-110 transition-transform">
                <Zap size={32} className="text-white" fill="currentColor" />
              </div>
              <h1 className="text-4xl font-display font-black tracking-tighter text-slate-900">devorapartners</h1>
            </Link>
            <div className="space-y-1">
              <h2 className="text-3xl font-display font-bold text-slate-900">Welcome Back.</h2>
              <p className="text-slate-500 font-medium">Log in to your devorapartners talent dashboard</p>
            </div>
          </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-200/60 shadow-2xl shadow-indigo-100/50 space-y-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="email" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium" 
                  placeholder="name@example.com" 
                />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Password</label>
                <button className="text-[10px] font-black text-indigo-600 uppercase tracking-widest hover:underline">Forgot?</button>
              </div>
              <div className="relative">
                <Lock className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input 
                  type="password" 
                  className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 pl-14 pr-5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium" 
                  placeholder="••••••••" 
                />
              </div>
            </div>
          </div>

          <button className="w-full bg-indigo-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-200 flex items-center justify-center gap-3 hover:bg-indigo-700 hover:scale-[1.01] transition-all uppercase tracking-widest text-sm">
            Sign In <ArrowRight size={20} />
          </button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase">
              <span className="bg-white px-4 text-slate-400 font-black tracking-[0.2em]">Or continue with</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm shadow-sm">
              <Github size={20} /> GitHub
            </button>
            <button className="flex items-center justify-center gap-3 py-4 border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all font-bold text-sm shadow-sm">
              <Chrome size={20} /> Google
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500 font-medium">
          Don&apos;t have an account? <Link href="/register" className="text-indigo-600 font-bold hover:underline">Register Now</Link>
        </p>
      </motion.div>
    </div>
    </PageLayout>
  );
}
