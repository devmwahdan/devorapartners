'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, Briefcase, Home } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Link from 'next/link';

export default function SuccessPage() {
  return (
    <PageLayout>
      <div className="min-h-[calc(100vh-128px)] flex flex-col items-center justify-center p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md space-y-8"
        >
          <div className="flex justify-center">
            <div className="size-24 rounded-[2rem] bg-indigo-600 flex items-center justify-center text-white shadow-2xl shadow-indigo-200">
              <CheckCircle2 size={48} />
            </div>
          </div>
          
          <div className="space-y-4">
            <h1 className="text-4xl font-display font-black text-slate-900 tracking-tight">Application Sent!</h1>
            <p className="text-slate-500 font-medium text-lg leading-relaxed">
              Your profile has been submitted to the hiring team. Our AI matching engine is now verifying your technical alignment.
            </p>
          </div>

          <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100 space-y-4">
            <div className="flex items-center gap-3 text-left">
              <div className="size-10 rounded-xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                <Briefcase size={20} />
              </div>
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Next Step</p>
                <p className="text-sm font-bold text-slate-900">Technical Assessment</p>
              </div>
            </div>
            <p className="text-xs text-slate-400 font-medium">
              You will receive an email with the assessment link within 24 hours if your profile matches the role requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/jobs" className="flex-1 h-14 bg-indigo-600 text-white font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-indigo-700 transition-all shadow-xl shadow-indigo-100 uppercase tracking-widest text-xs">
              Browse More Jobs <ArrowRight size={18} />
            </Link>
            <Link href="/dashboard" className="flex-1 h-14 bg-white border-2 border-slate-200 text-slate-900 font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-slate-50 transition-all uppercase tracking-widest text-xs">
              Go to Dashboard <Home size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
}
