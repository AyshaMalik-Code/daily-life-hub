/**
 * Daily Life Hub - Main Application Entry
 * Production-ready, mobile-first daily engagement web application.
 */

import React, { useState, useEffect, useCallback } from 'react';
import { TabType, UserStats } from './types';
import { 
  loadUserStats, 
  saveUserStats, 
  completeDailyChallengeRecord, 
  addActivityPoints, 
  recordInteraction, 
  getSavedTheme, 
  saveTheme 
} from './utils/storage';
import { BADGES_DATA } from './data/badgesData';
import { Navbar } from './components/Navbar';
import { BottomNav } from './components/BottomNav';
import { HomeView } from './components/HomeView';
import { QuizView } from './components/QuizView';
import { BrainChallengeView } from './components/BrainChallengeView';
import { ThisOrThatView } from './components/ThisOrThatView';
import { CookView } from './components/CookView';
import { DailyChallengeView } from './components/DailyChallengeView';
import { BadgesView } from './components/BadgesView';
import { TrustPages } from './components/TrustPages';
import { ToastContainer, ToastMessage } from './components/Toast';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [stats, setStats] = useState<UserStats>(() => loadUserStats());
  const [theme, setTheme] = useState<'light' | 'dark'>(() => getSavedTheme());
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  // Apply theme class to <html> root
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    saveTheme(theme);
  }, [theme]);

  // Toast notification dispatcher
  const showToast = useCallback((title: string, message?: string, type: 'success' | 'info' | 'award' = 'info') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, title, message, type }]);

    // Auto dismiss after 4.5 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4500);
  }, []);

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Announce newly unlocked badges
  const notifyNewBadges = (newlyUnlockedIds: string[]) => {
    if (!newlyUnlockedIds || newlyUnlockedIds.length === 0) return;
    newlyUnlockedIds.forEach((badgeId) => {
      const badge = BADGES_DATA.find((b) => b.id === badgeId);
      if (badge) {
        showToast(`Badge Unlocked: ${badge.title} 🏆`, badge.description, 'award');
      }
    });
  };

  const handleToggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Activity handlers
  const handleQuizCompleted = (points: number, categoryId: string) => {
    const { updatedStats, newlyUnlockedBadges } = addActivityPoints(stats, points, categoryId);
    setStats(updatedStats);
    notifyNewBadges(newlyUnlockedBadges);
  };

  const handleBrainGameCompleted = (points: number) => {
    let updated = recordInteraction(stats, 'brain');
    if (points > 0) {
      const result = addActivityPoints(updated, points);
      updated = result.updatedStats;
      notifyNewBadges(result.newlyUnlockedBadges);
    }
    setStats(updated);
  };

  const handleDilemmaChosen = () => {
    const updated = recordInteraction(stats, 'dilemma');
    setStats(updated);
  };

  const handleRecipeExplored = () => {
    const updated = recordInteraction(stats, 'recipe');
    setStats(updated);
  };

  const handleCompleteDaily = (pointsAward: number) => {
    const { updatedStats, alreadyCompleted, newlyUnlockedBadges } = completeDailyChallengeRecord(stats, pointsAward);
    setStats(updatedStats);
    if (!alreadyCompleted) {
      notifyNewBadges(newlyUnlockedBadges);
    }
  };

  const handleTabChange = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Top Bar Header */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleTabChange}
        stats={stats}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      {/* Main View Area */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 pt-6 md:pt-8 pb-20 lg:pb-12">
        {currentTab === 'home' && (
          <HomeView stats={stats} onNavigate={handleTabChange} />
        )}

        {currentTab === 'quiz' && (
          <QuizView
            onQuizCompleted={handleQuizCompleted}
            showToast={showToast}
          />
        )}

        {currentTab === 'brain' && (
          <BrainChallengeView
            onGameCompleted={handleBrainGameCompleted}
            showToast={showToast}
          />
        )}

        {currentTab === 'this-or-that' && (
          <ThisOrThatView
            onDilemmaChosen={handleDilemmaChosen}
            showToast={showToast}
          />
        )}

        {currentTab === 'cook' && (
          <CookView
            onRecipeExplored={handleRecipeExplored}
            showToast={showToast}
          />
        )}

        {currentTab === 'challenge' && (
          <DailyChallengeView
            stats={stats}
            onCompleteDaily={handleCompleteDaily}
            showToast={showToast}
          />
        )}

        {currentTab === 'badges' && (
          <BadgesView stats={stats} />
        )}

        {(currentTab === 'about' || currentTab === 'contact' || currentTab === 'privacy' || currentTab === 'terms') && (
          <TrustPages
            currentTab={currentTab}
            onNavigate={handleTabChange}
            showToast={showToast}
          />
        )}
      </main>

      {/* Toast Notification Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />

      {/* Mobile Bottom Navigation (Hidden on desktop) */}
      <BottomNav currentTab={currentTab} onSelectTab={handleTabChange} />

      {/* Professional Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 py-8 px-4 sm:px-6 text-xs text-slate-500 dark:text-slate-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white">Daily Life Hub</span>
            <span aria-hidden="true">·</span>
            <span>Your Daily Spark for Mind & Lifestyle</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button onClick={() => handleTabChange('about')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              About
            </button>
            <button onClick={() => handleTabChange('contact')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact
            </button>
            <button onClick={() => handleTabChange('privacy')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => handleTabChange('terms')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms & Disclaimer
            </button>
            <button onClick={() => handleTabChange('badges')} className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Badges
            </button>
          </div>

          <p className="text-[11px] text-slate-400">
            © {new Date().getFullYear()} Daily Life Hub. All rights reserved.
          </p>
        </div>
      </footer>

    </div>
  );
}
