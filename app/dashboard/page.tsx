'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Bell, LayoutDashboard, Briefcase, MessageSquare, User, Calendar, TrendingUp, Search, ExternalLink, Zap, Globe, Brain, Terminal, ArrowRight, Star, CheckCircle2 } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Image from 'next/image';
import Link from 'next/link';

export default function DashboardPage() {
  const recommendations = [
    {
      title: 'Lead ML Architect',
      company: 'Anthropic',
      location: 'Remote',
      salary: '$240k - $310k',
      tags: ['PyTorch', 'LLMs'],
      icon: Brain,
    },
    {
      title: 'Principal AI Researcher',
      company: 'DeepMind',
      location: 'London',
      salary: '$280k - $400k',
      tags: ['Research', 'PhD'],
      icon: Globe,
    },
    {
      title: 'Fullstack AI Lead',
      company: 'Perplexity',
      location: 'Palo Alto',
      salary: '$190k - $250k',
      tags: ['Next.js', 'Python'],
      icon: Zap,
    },
  ];

  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="size-10 rounded-xl bg-indigo-600 flex items-center justify-center shadow-lg shadow-indigo-100">
              <LayoutDashboard size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Talent Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-500 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
            <div className="size-10 rounded-xl bg-indigo-50 flex items-center justify-center overflow-hidden border border-indigo-100">
              <Image 
                src="https://picsum.photos/100/100?random=60" 
                alt="User" 
                width={40} 
                height={40} 
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-screen-xl mx-auto p-6 space-y-8 py-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-3xl font-display font-black text-slate-900 tracking-tight">Welcome back, Alex.</h2>
            <p className="text-slate-500 font-medium">You have <span className="text-indigo-600 font-bold">2 active interviews</span> this week.</p>
          </div>
          <div className="flex gap-3">
            <Link href="/jobs" className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-md shadow-indigo-100 hover:bg-indigo-700 transition-all">
              Find New Roles
            </Link>
            <button className="px-5 py-2.5 bg-white border border-slate-200 text-slate-600 text-sm font-bold rounded-xl hover:bg-slate-50 transition-all">
              Edit Profile
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Active Application Card */}
            <div className="bg-white p-8 rounded-[2rem] border border-slate-200/60 shadow-sm space-y-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-8">
                <div className="bg-indigo-50 text-indigo-600 text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">
                  In Progress
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="size-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                    <Image src="https://picsum.photos/100/100?random=10" alt="OpenAI" width={48} height={48} className="rounded-lg grayscale group-hover:grayscale-0 transition-all" referrerPolicy="no-referrer" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-slate-900">Senior AI Engineer</h3>
                    <p className="text-indigo-600 font-bold text-sm">OpenAI • San Francisco (Remote)</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                    <span>Application Match Score</span>
                    <span className="text-indigo-600">94%</span>
                  </div>
                  <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: '94%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-indigo-600 rounded-full shadow-[0_0_10px_rgba(79,70,229,0.3)]"
                    ></motion.div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 bg-indigo-50 rounded-2xl border border-indigo-100/50">
                  <div className="size-10 rounded-xl bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-indigo-900">Next Step: Final Technical Round</p>
                    <p className="text-[10px] text-indigo-600 font-medium">Tomorrow at 10:00 AM PST</p>
                  </div>
                  <button className="ml-auto text-indigo-600 hover:text-indigo-700">
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-display font-bold text-slate-900">devorapartners Recommendations</h3>
                <Link href="/jobs" className="text-indigo-600 text-sm font-bold hover:underline">View All</Link>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {recommendations.map((rec, i) => (
                  <motion.div 
                    key={i} 
                    whileHover={{ x: 4 }}
                    className="bg-white p-6 rounded-3xl border border-slate-200/60 shadow-sm flex items-center gap-6 hover:shadow-md transition-all group"
                  >
                    <div className="size-14 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0 group-hover:bg-indigo-50 group-hover:border-indigo-100 transition-colors">
                      <rec.icon size={28} className="text-slate-900 group-hover:text-indigo-600 transition-colors" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <h4 className="font-bold text-slate-900 truncate group-hover:text-indigo-600 transition-colors">{rec.title}</h4>
                        <span className="text-green-600 font-black text-sm whitespace-nowrap">{rec.salary}</span>
                      </div>
                      <p className="text-slate-500 text-xs font-bold mt-1 mb-3">{rec.company} • {rec.location}</p>
                      <div className="flex gap-2">
                        {rec.tags.map((tag) => (
                          <span key={tag} className="bg-slate-50 text-slate-400 text-[9px] font-black px-2.5 py-1 rounded-lg uppercase tracking-widest border border-slate-100">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <button className="p-2 text-slate-300 hover:text-indigo-600 transition-colors">
                      <Star size={20} />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="bg-slate-900 p-8 rounded-[2rem] text-white space-y-6 shadow-xl shadow-slate-200">
              <div className="flex items-center gap-4">
                <div className="size-14 rounded-2xl bg-white/10 flex items-center justify-center overflow-hidden border border-white/10">
                  <Image src="https://picsum.photos/100/100?random=60" alt="Alex" width={56} height={56} className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Alex Rivera</h4>
                  <p className="text-slate-400 text-xs font-medium">Senior ML Engineer</p>
                </div>
              </div>
              <div className="pt-6 border-t border-white/10 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Vetting Status</span>
                  <span className="text-[10px] font-black bg-indigo-600 px-2 py-1 rounded-lg uppercase tracking-widest">devorapartners 1%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-400 font-bold uppercase tracking-widest">Profile Strength</span>
                  <span className="text-xs font-bold text-white">98%</span>
                </div>
                <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-white rounded-full w-[98%]" />
                </div>
              </div>
              <button className="w-full py-4 bg-white text-slate-900 font-bold rounded-2xl hover:bg-slate-100 transition-all text-sm">
                View Public Profile
              </button>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Applied', value: '12', icon: Briefcase },
                { label: 'Interviews', value: '3', icon: Calendar },
                { label: 'Messages', value: '5', icon: MessageSquare },
                { label: 'Saved', value: '24', icon: Star },
              ].map((stat) => (
                <div key={stat.label} className="bg-white p-6 rounded-3xl border border-slate-200/60 text-center space-y-2 hover:border-indigo-200 transition-all group">
                  <div className="size-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 mx-auto group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-colors">
                    <stat.icon size={20} />
                  </div>
                  <div>
                    <p className="text-xl font-display font-black text-slate-900">{stat.value}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
