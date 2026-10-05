import React, { useState } from 'react';
import { THIS_OR_THAT_ITEMS } from '../data/thisOrThatData';
import { DilemmaItem } from '../types';
import { shareContent } from '../utils/share';
import { AdPlaceholder } from './AdPlaceholder';
import { Scale, Share2, ArrowRight, RotateCcw, Sparkles } from 'lucide-react';

interface ThisOrThatProps {
  onDilemmaChosen: () => void;
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'award') => void;
}

export const ThisOrThatView: React.FC<ThisOrThatProps> = ({ onDilemmaChosen, showToast }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState<'A' | 'B' | null>(null);
  const [completedCount, setCompletedCount] = useState(0);

  const currentDilemma: DilemmaItem = THIS_OR_THAT_ITEMS[currentIndex];

  const handlePick = (choice: 'A' | 'B') => {
    if (selectedChoice !== null) return;
    setSelectedChoice(choice);
    setCompletedCount((prev) => prev + 1);
    onDilemmaChosen();
  };

  const handleNext = () => {
    setSelectedChoice(null);
    setCurrentIndex((prev) => (prev + 1) % THIS_OR_THAT_ITEMS.length);
  };

  const handleShare = async () => {
    const pickedLabel = selectedChoice === 'A' ? currentDilemma.optionA.label : currentDilemma.optionB.label;
    const text = `I picked "${pickedLabel}" in today's This-or-That dilemma on Daily Life Hub! What would you choose?`;

    const res = await shareContent({
      title: 'Daily Life Hub: This or That',
      text
    });

    if (res.method === 'clipboard') {
      showToast('Dilemma Copied to Clipboard!', 'Paste and ask your friends in chat.', 'success');
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6 pb-16">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          This or That?
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Pick your side, see how the community thinks, and uncover your quirky daily profile.
        </p>
      </div>

      {/* Progress & Disclaimer */}
      <div className="flex items-center justify-between text-xs text-slate-500">
        <span className="font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
          Dilemma #{currentIndex + 1} of {THIS_OR_THAT_ITEMS.length}
        </span>
        <span className="tabular-nums">
          Completed: {completedCount}
        </span>
      </div>

      {/* The Two Large Selectable Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* OPTION A */}
        <button
          onClick={() => handlePick('A')}
          disabled={selectedChoice !== null}
          className={`group text-left p-6 sm:p-8 rounded-3xl border transition-all duration-200 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] active:scale-[0.98] ${
            selectedChoice === 'A'
              ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/60 ring-2 ring-indigo-500'
              : selectedChoice === 'B'
              ? 'opacity-60 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg'
          }`}
          aria-label={`Choose ${currentDilemma.optionA.label}`}
        >
          <div>
            <span className="text-4xl sm:text-5xl block mb-3 group-hover:scale-110 transition-transform">
              {currentDilemma.optionA.iconEmoji}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {currentDilemma.optionA.label}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {currentDilemma.optionA.shortTag}
            </p>
          </div>

          {selectedChoice !== null && (
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                <span>Community Vote</span>
                <span className="tabular-nums text-lg font-black">{currentDilemma.optionA.initialPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 mt-1.5 overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${currentDilemma.optionA.initialPercent}%` }}
                />
              </div>
            </div>
          )}
        </button>

        {/* OPTION B */}
        <button
          onClick={() => handlePick('B')}
          disabled={selectedChoice !== null}
          className={`group text-left p-6 sm:p-8 rounded-3xl border transition-all duration-200 flex flex-col justify-between min-h-[220px] sm:min-h-[260px] active:scale-[0.98] ${
            selectedChoice === 'B'
              ? 'border-indigo-600 bg-indigo-50/70 dark:bg-indigo-950/60 ring-2 ring-indigo-500'
              : selectedChoice === 'A'
              ? 'opacity-60 border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900'
              : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-lg'
          }`}
          aria-label={`Choose ${currentDilemma.optionB.label}`}
        >
          <div>
            <span className="text-4xl sm:text-5xl block mb-3 group-hover:scale-110 transition-transform">
              {currentDilemma.optionB.iconEmoji}
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
              {currentDilemma.optionB.label}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {currentDilemma.optionB.shortTag}
            </p>
          </div>

          {selectedChoice !== null && (
            <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between text-xs font-bold text-indigo-600 dark:text-indigo-400">
                <span>Community Vote</span>
                <span className="tabular-nums text-lg font-black">{currentDilemma.optionB.initialPercent}%</span>
              </div>
              <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 mt-1.5 overflow-hidden">
                <div
                  className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                  style={{ width: `${currentDilemma.optionB.initialPercent}%` }}
                />
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Fun Commentary & Next CTA */}
      {selectedChoice !== null && (
        <div className="rounded-2xl p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4 animate-slide-up">
          <div className="flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
            <div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Fun Verdict
              </span>
              <p className="text-sm text-slate-800 dark:text-slate-200 mt-0.5 leading-relaxed">
                {selectedChoice === 'A' ? currentDilemma.funCommentA : currentDilemma.funCommentB}
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
            <button
              onClick={handleShare}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Dilemma</span>
            </button>

            <button
              onClick={handleNext}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm transition-all"
            >
              <span>Next Dilemma</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Casual Disclaimer */}
      <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center italic">
        Disclaimer: This or That is designed for casual daily entertainment only and does not constitute a psychometric or scientifically validated personality test.
      </p>

      <AdPlaceholder slotName="This or That Bottom Unit" format="in-feed" />
    </div>
  );
};
