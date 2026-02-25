'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Info, User, Calculator, Zap, Search, Star, MessageSquare, BarChart3, Settings, Bookmark, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200 group-hover:scale-105 transition-transform">
            <Zap size={22} fill="currentColor" />
          </div>
          <h2 className="text-xl font-display font-bold tracking-tight text-slate-900">devora<span className="text-indigo-600">partners</span></h2>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/jobs" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Jobs</Link>
          <Link href="/process" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Process</Link>
          <Link href="/talent" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Talent</Link>
          <Link href="/enterprise" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Enterprise</Link>
          <Link href="/about" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">About</Link>
          <Link href="/contact" className="text-sm font-semibold text-slate-600 hover:text-indigo-600 transition-colors">Contact</Link>
        </div>
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden md:block text-sm font-bold text-slate-600 hover:text-indigo-600 transition-colors">Log in</Link>
          <Link href="/register" className="hidden md:block px-5 py-2.5 bg-indigo-600 text-white text-sm font-bold rounded-xl shadow-md shadow-indigo-100 hover:bg-indigo-700 transition-all">
            Join devorapartners
          </Link>
          <Link href="/messages" className="hidden md:flex p-2 text-slate-500 hover:text-indigo-600 transition-colors">
            <MessageSquare size={20} />
          </Link>
          <Link href="/dashboard" className="flex items-center justify-center size-10 rounded-full bg-slate-100 hover:bg-slate-200 transition-colors">
            <User size={20} className="text-slate-600" />
          </Link>
        </div>
      </div>
    </header>
  );
}

export function BottomNav() {
  const pathname = usePathname();

  // Determine nav items based on current section
  let navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Briefcase, label: 'Jobs', href: '/jobs' },
    { icon: Star, label: 'Talent', href: '/talent' },
    { icon: User, label: 'Profile', href: '/dashboard' },
  ];

  if (pathname.startsWith('/jobs') || pathname.startsWith('/saved') || pathname.startsWith('/applied')) {
    navItems = [
      { icon: Briefcase, label: 'Jobs', href: '/jobs' },
      { icon: Bookmark, label: 'Saved', href: '/saved' },
      { icon: CheckCircle2, label: 'Applied', href: '/applied' },
      { icon: User, label: 'Profile', href: '/dashboard' },
    ];
  } else if (pathname.startsWith('/calculator') || pathname.startsWith('/market') || pathname.startsWith('/settings')) {
    navItems = [
      { icon: Briefcase, label: 'Jobs', href: '/jobs' },
      { icon: Calculator, label: 'Pay', href: '/calculator' },
      { icon: BarChart3, label: 'Market', href: '/market' },
      { icon: Settings, label: 'Settings', href: '/settings' },
    ];
  } else if (pathname.startsWith('/dashboard') || pathname.startsWith('/messages')) {
    navItems = [
      { icon: Home, label: 'Home', href: '/' },
      { icon: Briefcase, label: 'Jobs', href: '/jobs' },
      { icon: MessageSquare, label: 'Chat', href: '/messages' },
      { icon: User, label: 'Profile', href: '/dashboard' },
    ];
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-t border-slate-200/60 pb-safe md:hidden">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-all",
                isActive ? "text-indigo-600" : "text-slate-400 hover:text-indigo-600"
              )}
            >
              <item.icon size={20} strokeWidth={isActive ? 2.5 : 2} className={cn(isActive && "scale-110")} />
              <span className="text-[10px] font-bold uppercase tracking-widest">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
