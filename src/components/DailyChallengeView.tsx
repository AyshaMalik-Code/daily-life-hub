import React, { useState } from 'react';
import { UserStats } from '../types';
import { getTodayChallenge, getTodayDateString } from '../data/dailyChallengesData';
import { shareContent } from '../utils/share';
import { trackEvent } from '../utils/analytics';
import { AdPlaceholder } from './AdPlaceholder';
import { 
  Zap, 
  Flame, 
  Trophy, 
  CheckCircle2, 
  XCircle, 
  Share2, 
  Calendar, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface DailyChallengeViewProps {
  stats: UserStats;
  onCompleteDaily: (points: number) => void;
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'award') => void;
}

export const DailyChallengeView: React.FC<DailyChallengeViewProps> = ({
  stats,
  onCompleteDaily,
  showToast
}) => {
  const today = getTodayDateString();
  const challenge = getTodayChallenge();
  const isAlreadyCompleted = stats.completedDailyDates.includes(today);

  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(isAlreadyCompleted);

  // Formatted date string for human readability
  const formattedToday = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });

  const handleSubmit = (optionIndex: number) => {
    if (hasSubmitted || isAlreadyCompleted) return;
    setSelectedOption(optionIndex);
    setHasSubmitted(true);

    const isCorrect = optionIndex === challenge.correctIndex;
    if (isCorrect) {
      onCompleteDaily(challenge.pointsReward);
      showToast('Daily Challenge Solved! 🎉', `+${challenge.pointsReward} Points & Streak Updated!`, 'award');
      trackEvent('daily_challenge_completed', { success: true, title: challenge.title });
    } else {
      showToast('Incorrect Attempt', 'Review the explanation to see the answer. Check back tomorrow!', 'info');
      trackEvent('daily_challenge_completed', { success: false, title: challenge.title });
    }
  };

  const handleShare = async () => {
    const text = `🔥 I just conquered today's Daily Challenge on Daily Life Hub! Current streak: ${stats.currentStreak} days! Can you crack it?`;
    const res = await shareContent({
      title: "Today's Daily Life Hub Challenge",
      text
    });

    if (res.method === 'clipboard') {
      showToast('Challenge Copied!', 'Share your streak with friends.', 'success');
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      {/* Top Banner Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600 dark:text-indigo-400 mb-1">
            <Calendar className="w-3.5 h-3.5" />
            <span>{formattedToday}</span>
            <span aria-hidden="true">·</span>
            <span>Deterministic Calendar Mission</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Daily Challenge
          </h1>
        </div>

        {/* Current Active Streak Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40 self-start sm:self-auto">
          <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
          <span className="text-xs font-bold text-amber-700 dark:text-amber-400">
            {stats.currentStreak} Day Streak
          </span>
        </div>
      </div>

      {/* Main Challenge Card */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
            {challenge.title} · Difficulty: {challenge.difficulty}
          </span>
          <span className="font-bold text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/40 px-2 py-0.5 rounded-full">
            +{challenge.pointsReward} Points
          </span>
        </div>

        {/* Question Prompt */}
        <div className="space-y-2">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
            {challenge.prompt}
          </h2>
        </div>

        {/* 4 Options */}
        <div className="space-y-3">
          {challenge.options.map((opt, idx) => {
            const isCorrect = idx === challenge.correctIndex;
            const isUserSelected = selectedOption === idx;

            let btnStyle = "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200";

            if (hasSubmitted || isAlreadyCompleted) {
              if (isCorrect) {
                btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold";
              } else if (isUserSelected) {
                btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-bold";
              } else {
                btnStyle = "opacity-50 border-slate-200 dark:border-slate-800";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSubmit(idx)}
                disabled={hasSubmitted || isAlreadyCompleted}
                className={`w-full min-h-[52px] p-4 text-left rounded-xl border text-sm transition-all flex items-center justify-between gap-3 ${btnStyle}`}
              >
                <span>{opt}</span>
                {(hasSubmitted || isAlreadyCompleted) && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {(hasSubmitted || isAlreadyCompleted) && isUserSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Post-Submission Result & Explanation */}
        {(hasSubmitted || isAlreadyCompleted) && (
          <div className="space-y-4 pt-2 animate-slide-up">
            <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400">
                💡 Challenge Solution & Context:
              </span>
              <p className="leading-relaxed">
                {challenge.explanation}
              </p>
            </div>

            {/* Streak & Come Back Tomorrow Banner */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-300/40 dark:border-amber-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 font-bold flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white">
                    {isAlreadyCompleted ? "Today's Challenge Completed!" : "Daily Reward Secured!"}
                  </h4>
                  <p className="text-[11px] text-slate-600 dark:text-slate-300">
                    Come back tomorrow for a new rotating challenge to keep your {stats.currentStreak}-day streak alive!
                  </p>
                </div>
              </div>

              <button
                onClick={handleShare}
                className="w-full sm:w-auto px-4 py-2 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs flex items-center justify-center gap-1.5 shrink-0"
              >
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Streak</span>
              </button>
            </div>
          </div>
        )}
      </div>

      <AdPlaceholder slotName="Daily Challenge In-Feed Unit" format="in-feed" />
    </div>
  );
};
