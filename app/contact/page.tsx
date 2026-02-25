'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, MapPin, Send, Globe, Zap, ArrowRight } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <MessageSquare size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Contact Us</h1>
          </div>
          <Link href="/about" className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors">
            Our Mission
          </Link>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-16 py-16">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 rounded-full bg-indigo-50 border border-indigo-100 px-4 py-1.5 text-xs font-black text-indigo-600 uppercase tracking-widest"
            >
              <Zap size={14} /> Get in Touch
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-display font-black text-slate-900 leading-[1.1] tracking-tight"
            >
              Let&apos;s Build the <br />
              <span className="text-indigo-600">Future of Work</span> Together.
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed max-w-md font-medium"
            >
              Have questions about our vetting process or enterprise solutions? Our team is here to help you navigate the global talent landscape.
            </motion.p>
          </div>

          <div className="space-y-8">
            {[
              { icon: Mail, label: 'Email Us', value: 'hello@elite-recruitment.ai', color: 'indigo' },
              { icon: Phone, label: 'Call Us', value: '+1 (555) 000-ELITE', color: 'indigo' },
              { icon: MapPin, label: 'Global HQ', value: 'Remote First • San Francisco, CA', color: 'indigo' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-6 group"
              >
                <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all border border-slate-100 group-hover:border-indigo-100 shadow-sm">
                  <item.icon size={24} />
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">{item.label}</p>
                  <p className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{item.value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-10 rounded-[3rem] border border-slate-200/60 shadow-2xl shadow-indigo-100/50 space-y-8"
        >
          <div className="space-y-2">
            <h3 className="text-2xl font-display font-bold text-slate-900">Send a Message</h3>
            <p className="text-slate-500 font-medium">We typically respond within 2 hours.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">First Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium" placeholder="John" />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Last Name</label>
              <input type="text" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
            <input type="email" className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium" placeholder="john@company.com" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">Message</label>
            <textarea rows={4} className="w-full bg-slate-50 border border-slate-100 rounded-2xl py-4 px-5 focus:ring-4 focus:ring-indigo-500/10 focus:border-indigo-500/50 transition-all outline-none font-medium resize-none" placeholder="How can we help you?"></textarea>
          </div>
          <button className="w-full bg-indigo-600 text-white font-black py-5 rounded-2xl shadow-xl shadow-indigo-200 flex items-center justify-center gap-3 hover:bg-indigo-700 hover:scale-[1.01] transition-all uppercase tracking-widest text-sm">
            Send Message <Send size={20} />
          </button>
        </motion.div>
      </div>
    </PageLayout>
  );
}
