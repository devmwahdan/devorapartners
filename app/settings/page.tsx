'use client';

import React from 'react';
import { Settings, User, Bell, Shield, CreditCard, Globe, Zap, LogOut, ChevronRight, ShieldCheck } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Image from 'next/image';

export default function SettingsPage() {
  const sections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Profile Information', desc: 'Name, email, and professional bio' },
        { icon: Bell, label: 'Notifications', desc: 'Job alerts and message preferences' },
        { icon: Shield, label: 'Security', desc: 'Password and two-factor authentication' },
      ],
    },
    {
      title: 'Professional',
      items: [
        { icon: Globe, label: 'Visibility', desc: 'Control who can see your profile' },
        { icon: Zap, label: 'Elite Status', desc: 'Manage your vetting and badges' },
        { icon: CreditCard, label: 'Billing', desc: 'Manage your enterprise subscription' },
      ],
    },
  ];

  return (
    <PageLayout>
      <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
        <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
              <Settings size={20} className="text-white" />
            </div>
            <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Settings</h1>
          </div>
        </div>
      </header>

      <div className="max-w-2xl mx-auto p-6 space-y-12 py-12">
        <div className="flex items-center gap-6 p-8 bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm">
          <div className="relative size-20 rounded-2xl overflow-hidden border-2 border-indigo-50 shadow-sm">
            <Image src="https://picsum.photos/100/100?random=301" alt="User" fill className="object-cover" referrerPolicy="no-referrer" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h2 className="text-2xl font-display font-bold text-slate-900">Alex Thompson</h2>
              <ShieldCheck size={18} className="text-indigo-600" />
            </div>
            <p className="text-slate-500 font-medium">alex.t@example.com</p>
          </div>
          <button className="bg-indigo-50 text-indigo-600 font-black text-[10px] uppercase tracking-widest px-4 py-2 rounded-xl hover:bg-indigo-600 hover:text-white transition-all">
            Edit
          </button>
        </div>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="space-y-6">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] pl-4">{section.title}</h3>
              <div className="bg-white rounded-[2.5rem] border border-slate-200/60 shadow-sm overflow-hidden">
                {section.items.map((item, i) => (
                  <button 
                    key={i}
                    className={`w-full flex items-center gap-5 p-6 hover:bg-slate-50 transition-all text-left group ${
                      i !== section.items.length - 1 ? 'border-b border-slate-50' : ''
                    }`}
                  >
                    <div className="size-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-all border border-slate-100 group-hover:border-indigo-100">
                      <item.icon size={22} />
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-slate-900 text-base group-hover:text-indigo-600 transition-colors">{item.label}</p>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">{item.desc}</p>
                    </div>
                    <ChevronRight size={18} className="text-slate-300 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className="w-full flex items-center justify-center gap-3 p-5 text-red-600 font-black uppercase tracking-widest text-xs bg-red-50/50 hover:bg-red-50 rounded-2xl transition-all border border-red-100/50">
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    </PageLayout>
  );
}
