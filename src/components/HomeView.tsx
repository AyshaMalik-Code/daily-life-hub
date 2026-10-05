import React from 'react';
import { TabType, UserStats } from '../types';
import { getTodayChallenge, getTodayDateString } from '../data/dailyChallengesData';
import { AdPlaceholder } from './AdPlaceholder';
import { 
  Sparkles, 
  Flame, 
  Trophy, 
  HelpCircle, 
  Brain, 
  Scale, 
  Utensils, 
  Zap, 
  CheckCircle2, 
  ArrowRight,
  TrendingUp,
  Clock,
  Compass,
  Award
} from 'lucide-react';

interface HomeViewProps {
  stats: UserStats;
  onNavigate: (tab: TabType) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ stats, onNavigate }) => {
  const today = getTodayDateString();
  const todayChallenge = getTodayChallenge();
  const isCompletedToday = stats.completedDailyDates.includes(today);

  return (
    <div className="space-y-8 md:space-y-12 pb-16">
      
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-indigo-50/70 via-slate-50 to-white dark:from-slate-900/70 dark:via-slate-950 dark:to-slate-950 border border-slate-200/80 dark:border-slate-800 p-6 sm:p-10 md:p-12 text-center sm:text-left transition-colors">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300 mb-3">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            <span>Daily Engagement Hub</span>
            <span aria-hidden="true">·</span>
            <span>Always Free & Instant</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15] text-balance">
            Sharpen your mind, decide fast, and fuel your day.
          </h1>

          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl">
            Quick brain teasers, trivia quizzes, fun dilemma games, and effortless meal ideas — designed to give you a meaningful 5-minute daily reset.
          </p>

          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center gap-3">
            <button
              onClick={() => onNavigate('challenge')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold text-sm shadow-md shadow-indigo-600/20 flex items-center justify-center gap-2 transition-all"
            >
              <Zap className="w-4 h-4 text-amber-300" />
              <span>{isCompletedToday ? "Review Today's Challenge" : "Start Today's Challenge"}</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>

            <button
              onClick={() => onNavigate('brain')}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-sm transition-colors flex items-center justify-center gap-2"
            >
              <Brain className="w-4 h-4 text-slate-500" />
              <span>Explore Brain Games</span>
            </button>
          </div>
        </div>

        {/* Ambient subtle glow ring */}
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none"
        />
      </section>

      {/* Daily Engagement & Streak Summary */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Streak Metric */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Daily Streak</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                {stats.currentStreak}
              </span>
              <span className="text-xs text-slate-500">days</span>
            </div>
            <span className="text-[11px] text-slate-400">Best: {stats.longestStreak} days</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 flex items-center justify-center text-amber-500">
            <Flame className="w-6 h-6 animate-bounce" />
          </div>
        </div>

        {/* Points Metric */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Total Points</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                {stats.totalPoints}
              </span>
              <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium">
                +{stats.dailyPoints} today
              </span>
            </div>
            <span className="text-[11px] text-slate-400">{stats.unlockedBadgeIds.length} Badges Unlocked</span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 flex items-center justify-center text-indigo-500">
            <Trophy className="w-6 h-6" />
          </div>
        </div>

        {/* Today's Challenge Progress */}
        <div className="p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex items-center justify-between">
          <div>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Daily Mission</span>
            <div className="flex items-center gap-2 mt-1">
              {isCompletedToday ? (
                <>
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                    Completed Today!
                  </span>
                </>
              ) : (
                <>
                  <Clock className="w-5 h-5 text-amber-500 shrink-0 animate-pulse" />
                  <span className="text-sm font-bold text-slate-800 dark:text-slate-200">
                    Waiting for you (+50 pts)
                  </span>
                </>
              )}
            </div>
            <span className="text-[11px] text-slate-400 mt-1 block truncate max-w-[180px]">
              {todayChallenge.title}
            </span>
          </div>
          <button
            onClick={() => onNavigate('challenge')}
            className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-200 transition-colors"
          >
            {isCompletedToday ? 'View' : 'Play'}
          </button>
        </div>
      </section>

      {/* Feature Cards Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Daily Hub Features
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
              Pick a category to challenge your brain, relax, or find inspiration.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          
          {/* 1. Daily Quiz */}
          <div
            onClick={() => onNavigate('quiz')}
            className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <HelpCircle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                Daily Quiz
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                8 curated categories including GK, Tech, Science, Cinema, Food, and India with instant score breakdown.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>80 Trivia Questions</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 2. Brain Challenge */}
          <div
            onClick={() => onNavigate('brain')}
            className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                Brain Challenge
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                5 interactive games: number sequence, odd one out, dynamic memory tile recall, logic riddles, and visual patterns.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span>5 Smart Game Modes</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 3. This or That */}
          <div
            onClick={() => onNavigate('this-or-that')}
            className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Scale className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                This or That
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                Fun interactive decision dilemmas: Chai vs Coffee, Hills vs Beach, Night Owl vs Early Bird, and witty personality verdicts.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-pink-600 dark:text-pink-400">
              <span>Daily Dilemma Deck</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 4. What Should I Cook? */}
          <div
            onClick={() => onNavigate('cook')}
            className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Utensils className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                What Should I Cook?
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                Smart meal decider with 32+ dishes. Filter by veg, egg, non-veg, meal time, Indian, or quick 15-minute cravings.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-amber-600 dark:text-amber-400">
              <span>Instant Recipes & Steps</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* 5. Daily Challenge */}
          <div
            onClick={() => onNavigate('challenge')}
            className="group cursor-pointer rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 hover:shadow-md hover:border-indigo-300 dark:hover:border-indigo-700 transition-all flex flex-col justify-between sm:col-span-2 lg:col-span-2"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-5 h-5" />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  Today\'s Calendar Challenge
                </h3>
                <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full">
                  +{todayChallenge.pointsReward} Points
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 max-w-xl">
                Every calendar day rotates deterministically. Solve today\'s puzzle, protect your daily streak, and unlock exclusive achievement badges.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
              <span>{isCompletedToday ? "Challenge Complete for Today!" : "Ready to play right now"}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Placement */}
      <AdPlaceholder slotName="Homepage Middle In-Feed" format="in-feed" />

      {/* Popular Today Section */}
      <section className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
          <TrendingUp className="w-4 h-4" />
          <span>Popular Across the Community</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
          Trending on Daily Life Hub
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
          <div
            onClick={() => onNavigate('quiz')}
            className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
          >
            <div className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold mb-1">Trivia Quiz</div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Incredible India Heritage</h4>
            <p className="text-xs text-slate-500 mt-1">Festivals, monuments, space milestones & culture questions.</p>
          </div>

          <div
            onClick={() => onNavigate('brain')}
            className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
          >
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-1">Brain Game</div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Interactive Memory Matrix</h4>
            <p className="text-xs text-slate-500 mt-1">Watch tiles ignite and recall the exact sequence with timer.</p>
          </div>

          <div
            onClick={() => onNavigate('this-or-that')}
            className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer transition-colors"
          >
            <div className="text-xs text-pink-600 dark:text-pink-400 font-semibold mb-1">Daily Choice</div>
            <h4 className="text-sm font-bold text-slate-800 dark:text-slate-200">Masala Chai vs Filter Coffee</h4>
            <p className="text-xs text-slate-500 mt-1">See how the community voted on the ultimate morning ritual.</p>
          </div>
        </div>
      </section>

      {/* Come Back Tomorrow / Streak Retention Section */}
      <section className="rounded-2xl bg-gradient-to-r from-amber-500/10 via-indigo-500/10 to-transparent border border-amber-300/40 dark:border-amber-900/40 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 text-xs font-bold uppercase tracking-wider">
              <Flame className="w-4 h-4" />
              <span>Daily Streak Habit</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Why return every day?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-xl">
              Consistent daily practice strengthens mental agility. Completing one challenge every day extends your active streak, earns points, and unlocks milestone badges like the 7-Day Champion and Century Club.
            </p>
          </div>
          <button
            onClick={() => onNavigate('badges')}
            className="px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs whitespace-nowrap hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors shadow-sm"
          >
            View My Badges
          </button>
        </div>
      </section>

    </div>
  );
};
