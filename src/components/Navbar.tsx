import React, { useState } from 'react';
import { TabType, UserStats } from '../types';
import { Sun, Moon, Flame, Star, Menu, X, Compass, HelpCircle } from 'lucide-react';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  stats: UserStats;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  stats,
  theme,
  onToggleTheme
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { label: string; tab: TabType }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'Daily Challenge', tab: 'challenge' },
    { label: 'Quizzes', tab: 'quiz' },
    { label: 'Brain Games', tab: 'brain' },
    { label: 'This or That', tab: 'this-or-that' },
    { label: 'Cook', tab: 'cook' },
    { label: 'Badges', tab: 'badges' }
  ];

  const handleNavClick = (tab: TabType) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 md:h-16 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg p-1"
          aria-label="Daily Life Hub Home"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-amber-300 font-bold text-base shadow-sm group-hover:scale-105 transition-transform">
            ⚡
          </div>
          <span className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white">
            Daily Life Hub
          </span>
        </button>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => handleNavClick(item.tab)}
              className={`hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap ${
                currentTab === item.tab
                  ? 'text-indigo-600 dark:text-indigo-400 font-semibold border-b-2 border-indigo-600 dark:border-indigo-400 pb-0.5'
                  : ''
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Interactive Affordances & Stats */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Streak Indicator */}
          <button
            onClick={() => handleNavClick('challenge')}
            className="flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-semibold hover:bg-amber-100 transition-colors border border-amber-200/60 dark:border-amber-900/40"
            title="Current Daily Streak"
            aria-label={`${stats.currentStreak} day streak`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" />
            <span className="tabular-nums">{stats.currentStreak}d</span>
          </button>

          {/* Points Indicator */}
          <button
            onClick={() => handleNavClick('badges')}
            className="hidden sm:flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-semibold hover:bg-indigo-100 transition-colors border border-indigo-200/60 dark:border-indigo-900/40"
            title="Total Earned Points"
            aria-label={`${stats.totalPoints} total points`}
          >
            <Star className="w-3.5 h-3.5 text-indigo-500" />
            <span className="tabular-nums">{stats.totalPoints}</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-100 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 space-y-1 shadow-xl animate-slide-down">
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-100 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400">
            <span>Points: <strong className="text-indigo-600 dark:text-indigo-400 tabular-nums">{stats.totalPoints}</strong></span>
            <span>Today: <strong className="text-emerald-600 dark:text-emerald-400 tabular-nums">+{stats.dailyPoints} pts</strong></span>
            <span>Best Streak: <strong className="text-amber-600 dark:text-amber-400 tabular-nums">{stats.longestStreak}d</strong></span>
          </div>
          {navItems.map((item) => (
            <button
              key={item.tab}
              onClick={() => handleNavClick(item.tab)}
              className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                currentTab === item.tab
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 mt-2 border-t border-slate-100 dark:border-slate-800 flex gap-4 text-xs text-slate-500">
            <button onClick={() => handleNavClick('about')} className="hover:text-slate-800 dark:hover:text-slate-200">About</button>
            <button onClick={() => handleNavClick('contact')} className="hover:text-slate-800 dark:hover:text-slate-200">Contact</button>
            <button onClick={() => handleNavClick('privacy')} className="hover:text-slate-800 dark:hover:text-slate-200">Privacy Policy</button>
            <button onClick={() => handleNavClick('terms')} className="hover:text-slate-800 dark:hover:text-slate-200">Terms</button>
          </div>
        </div>
      )}
    </header>
  );
};
