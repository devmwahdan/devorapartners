'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Zap, CheckCircle, Globe, Award, Database, Terminal, Brain, ArrowRight, Star, Users, Briefcase } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';

export default function HomePage() {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 lg:pt-32 lg:pb-40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold uppercase tracking-widest"
              >
                <span className="flex size-2 rounded-full bg-indigo-600 animate-pulse" />
                AI-First Recruitment Platform
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-5xl font-display font-extrabold tracking-tight text-slate-900 sm:text-7xl leading-[1.1]"
              >
                Hire the World&apos;s <br />
                <span className="text-indigo-600">Top 1%</span> Tech Talent.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl text-slate-600 leading-relaxed max-w-2xl"
              >
                devorapartners connects innovative global enterprises with pre-vetted, world-class engineers. Our AI-driven vetting process ensures a 98% placement success rate.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/register"
                  className="inline-flex h-14 items-center justify-center rounded-2xl bg-indigo-600 px-8 text-base font-bold text-white shadow-xl shadow-indigo-200 hover:bg-indigo-700 hover:scale-[1.02] transition-all"
                >
                  Start Hiring Now
                </Link>
                <Link
                  href="/jobs"
                  className="inline-flex h-14 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white px-8 text-base font-bold text-slate-900 hover:bg-slate-50 transition-all"
                >
                  Explore Opportunities
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex items-center gap-6 pt-4"
              >
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="size-10 rounded-full border-2 border-white bg-slate-100 overflow-hidden">
                      <Image src={`https://picsum.photos/100/100?random=${i + 10}`} alt="User" width={40} height={40} referrerPolicy="no-referrer" />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <span className="font-bold text-slate-900">500+</span> companies trust devorapartners
                </div>
              </motion.div>
            </div>
            
            <div className="hidden lg:block lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-indigo-100 border-8 border-white"
              >
                <Image
                  src="https://picsum.photos/800/1000?random=1"
                  alt="devorapartners Talent"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/90 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="size-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Live Placement</span>
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-snug">
                    &quot;devorapartners matched us with a Senior AI Engineer in just 48 hours. The quality is unmatched.&quot;
                  </p>
                  <p className="text-[10px] text-slate-500 mt-2 font-medium">CTO, NeuralMind Labs</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 size-[600px] bg-indigo-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 size-[400px] bg-blue-50 rounded-full blur-3xl opacity-50" />
      </section>

      {/* Stats Section */}
      <section className="bg-slate-900 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { label: 'Talent Vetted', value: '12k+' },
              { label: 'Success Rate', value: '98%' },
              { label: 'Avg. Match Time', value: '48h' },
              { label: 'Global Hubs', value: '40+' },
            ].map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <p className="text-4xl font-display font-black text-white">{stat.value}</p>
                <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-xs font-bold text-indigo-600 uppercase tracking-widest">Why devorapartners?</h2>
            <p className="text-4xl font-display font-bold text-slate-900 tracking-tight">Built for the next generation of global teams.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'AI-First Vetting',
                desc: 'Our proprietary AI protocols assess technical depth, communication, and cultural fit with 99.9% accuracy.',
                icon: Brain,
              },
              {
                title: 'Global Payroll',
                desc: 'Hire anywhere. We handle contracts, compliance, and international payroll in 150+ currencies.',
                icon: Globe,
              },
              {
                title: 'Expert Matching',
                desc: 'Every match is verified by a domain expert to ensure the candidate meets your specific technical stack.',
                icon: Zap,
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-10 rounded-[2rem] border border-slate-200/60 shadow-sm hover:shadow-xl hover:shadow-indigo-100 transition-all group"
              >
                <div className="size-14 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 pt-20 pb-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2 lg:col-span-2 space-y-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                  <Zap size={24} fill="currentColor" />
                </div>
                <h2 className="text-xl font-display font-bold tracking-tight text-slate-900">devorapartners</h2>
              </Link>
              <p className="text-slate-500 max-w-xs leading-relaxed">
                The world&apos;s most advanced AI-first recruitment platform for top 1% global tech talent.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Platform</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><Link href="/jobs" className="hover:text-indigo-600 transition-colors">Jobs</Link></li>
                <li><Link href="/talent" className="hover:text-indigo-600 transition-colors">Talent Pool</Link></li>
                <li><Link href="/process" className="hover:text-indigo-600 transition-colors">Our Process</Link></li>
                <li><Link href="/vetting" className="hover:text-indigo-600 transition-colors">Vetting</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><Link href="/about" className="hover:text-indigo-600 transition-colors">About Us</Link></li>
                <li><Link href="/enterprise" className="hover:text-indigo-600 transition-colors">Enterprise</Link></li>
                <li><Link href="/contact" className="hover:text-indigo-600 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-widest mb-6">Resources</h4>
              <ul className="space-y-4 text-sm text-slate-500 font-medium">
                <li><Link href="/calculator" className="hover:text-indigo-600 transition-colors">Pay Calculator</Link></li>
                <li><Link href="/market" className="hover:text-indigo-600 transition-colors">Market Insights</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-slate-400 font-medium">© 2026 devorapartners Recruitment AI. All rights reserved.</p>
            <div className="flex gap-6 text-xs text-slate-400 font-medium">
              <Link href="#" className="hover:text-indigo-600">Privacy Policy</Link>
              <Link href="#" className="hover:text-indigo-600">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </PageLayout>
  );
}
