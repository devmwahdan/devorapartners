'use client';

import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, Search, MoreVertical, Send, User, Zap } from 'lucide-react';
import { PageLayout } from '@/components/PageLayout';
import Image from 'next/image';

export default function MessagesPage() {
  const chats = [
    {
      name: 'OpenAI Recruitment',
      lastMsg: 'The technical team was very impressed with...',
      time: '2m ago',
      unread: true,
      avatar: 'https://picsum.photos/100/100?random=201',
    },
    {
      name: 'NeuralMind Labs',
      lastMsg: 'Can we schedule a follow-up for Tuesday?',
      time: '1h ago',
      unread: false,
      avatar: 'https://picsum.photos/100/100?random=202',
    },
    {
      name: 'Synthetix Cloud',
      lastMsg: 'Welcome to the team! Here is your onboarding...',
      time: 'Yesterday',
      unread: false,
      avatar: 'https://picsum.photos/100/100?random=203',
    },
  ];

  return (
    <PageLayout>
      <div className="flex flex-col h-[calc(100vh-128px)] md:h-[calc(100vh-64px)]">
        <header className="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200/60 px-4 py-4 md:top-0">
          <div className="flex items-center justify-between gap-4 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="bg-indigo-600 p-2 rounded-xl shadow-lg shadow-indigo-100">
                <MessageSquare size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-display font-bold tracking-tight text-slate-900">Messages</h1>
            </div>
            <button className="p-2.5 hover:bg-slate-100 rounded-xl transition-colors text-slate-500">
              <Search size={20} />
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto bg-slate-50/50">
          <div className="max-w-screen-xl mx-auto p-4 space-y-4">
            {chats.map((chat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-5 p-6 bg-white rounded-[2rem] border border-slate-200/60 hover:shadow-xl hover:shadow-indigo-100/50 cursor-pointer transition-all relative group"
              >
                <div className="relative size-16 rounded-2xl overflow-hidden border border-slate-100 shrink-0 shadow-sm">
                  <Image src={chat.avatar} alt={chat.name} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center mb-1">
                    <h3 className={`font-bold truncate text-lg ${chat.unread ? 'text-slate-900' : 'text-slate-600'}`}>{chat.name}</h3>
                    <span className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{chat.time}</span>
                  </div>
                  <p className={`text-sm truncate font-medium ${chat.unread ? 'text-indigo-600 font-bold' : 'text-slate-500'}`}>
                    {chat.lastMsg}
                  </p>
                </div>
                {chat.unread && (
                  <div className="absolute right-6 top-1/2 -translate-y-1/2 size-3 bg-indigo-600 rounded-full shadow-lg shadow-indigo-200 animate-pulse"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-white border-t border-slate-200/60 md:hidden">
          <div className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-2xl px-5 py-3 focus-within:ring-4 focus-within:ring-indigo-500/10 focus-within:border-indigo-500/50 transition-all">
            <input 
              type="text" 
              placeholder="Start a new conversation..." 
              className="flex-1 bg-transparent border-none focus:ring-0 text-sm font-medium outline-none"
            />
            <button className="text-indigo-600 hover:scale-110 transition-transform">
              <Send size={22} />
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
