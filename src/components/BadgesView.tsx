import React from 'react';
import { UserStats, Badge } from '../types';
import { BADGES_DATA } from '../data/badgesData';
import { 
  Trophy, 
  Flame, 
  Star, 
  Lock, 
  CheckCircle2, 
  Crown, 
  Shield, 
  Zap, 
  BookOpen, 
  Compass, 
  Utensils, 
  Award 
} from 'lucide-react';

interface BadgesViewProps {
  stats: UserStats;
}

export const BadgesView: React.FC<BadgesViewProps> = ({ stats }) => {
  const renderBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Flame': return <Flame className="w-6 h-6 text-amber-500" />;
      case 'Crown': return <Crown className="w-6 h-6 text-yellow-500" />;
      case 'Shield': return <Shield className="w-6 h-6 text-blue-500" />;
      case 'Star': return <Star className="w-6 h-6 text-indigo-500" />;
      case 'Award': return <Award className="w-6 h-6 text-purple-500" />;
      case 'BookOpen': return <BookOpen className="w-6 h-6 text-emerald-500" />;
      case 'Zap': return <Zap className="w-6 h-6 text-amber-500" />;
      case 'Compass': return <Compass className="w-6 h-6 text-pink-500" />;
      case 'Utensils': return <Utensils className="w-6 h-6 text-orange-500" />;
      default: return <Trophy className="w-6 h-6 text-indigo-500" />;
    }
  };

  const unlockedCount = stats.unlockedBadgeIds.length;
  const totalCount = BADGES_DATA.length;

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      {/* Header & Stats Overview */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Achievements & Badges
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Track your milestones, consistency, and mastery across games and challenges.
          </p>
        </div>

        {/* Unlocked Counter */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 self-start sm:self-auto">
          <Trophy className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
          <span className="text-xs font-bold text-indigo-900 dark:text-indigo-200 tabular-nums">
            {unlockedCount} of {totalCount} Badges Unlocked
          </span>
        </div>
      </div>

      {/* Summary Scoreboard Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 flex items-center justify-center text-amber-500">
            <Flame className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500">Current Streak</span>
            <p className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">
              {stats.currentStreak} Days
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-yellow-50 dark:bg-yellow-950/40 flex items-center justify-center text-yellow-500">
            <Crown className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500">Longest Streak</span>
            <p className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">
              {stats.longestStreak} Days
            </p>
          </div>
        </div>

        <div className="p-4 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center text-indigo-500">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs text-slate-500">Lifetime Points</span>
            <p className="text-xl font-bold text-slate-900 dark:text-white tabular-nums">
              {stats.totalPoints} Points
            </p>
          </div>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {BADGES_DATA.map((badge) => {
          const isUnlocked = stats.unlockedBadgeIds.includes(badge.id);

          return (
            <div
              key={badge.id}
              className={`p-5 rounded-2xl border transition-all flex flex-col justify-between ${
                isUnlocked
                  ? 'border-indigo-200 dark:border-indigo-800/60 bg-white dark:bg-slate-900 shadow-sm'
                  : 'border-slate-200/60 dark:border-slate-800/40 bg-slate-50/50 dark:bg-slate-950/40 opacity-70'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                    isUnlocked
                      ? 'bg-indigo-50 dark:bg-indigo-950/40'
                      : 'bg-slate-200/60 dark:bg-slate-800/60 grayscale'
                  }`}>
                    {renderBadgeIcon(badge.icon)}
                  </div>

                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Unlocked</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-400">
                      <Lock className="w-3.5 h-3.5" />
                      <span>Locked</span>
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {badge.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {badge.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 text-[11px] text-slate-400 flex items-center justify-between">
                <span>Goal: {badge.targetCount}</span>
                <span className="capitalize">{badge.category}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Trust & Ethics Note */}
      <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-900 text-center text-xs text-slate-500 dark:text-slate-400">
        💡 Daily Life Hub badges and points are strictly gamified rewards for personal enjoyment and habit-building. They have no monetary or cash value.
      </div>
    </div>
  );
};
