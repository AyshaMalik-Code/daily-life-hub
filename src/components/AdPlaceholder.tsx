import React from 'react';

interface AdPlaceholderProps {
  slotName?: string;
  format?: 'banner' | 'rectangle' | 'in-feed';
  className?: string;
}

/**
 * AdSense-Ready Component:
 * Clean, standard-compliant placeholder that reserves proper layout dimensions
 * without deceptive clicks or layout shifts.
 */
export const AdPlaceholder: React.FC<AdPlaceholderProps> = ({
  slotName = 'General Ad Slot',
  format = 'in-feed',
  className = ''
}) => {
  const getFormatClasses = () => {
    switch (format) {
      case 'banner':
        return 'h-24 md:h-28 max-w-4xl';
      case 'rectangle':
        return 'h-64 max-w-sm';
      case 'in-feed':
      default:
        return 'h-28 md:h-32 max-w-2xl';
    }
  };

  return (
    <div
      className={`my-8 mx-auto w-full px-4 ${className}`}
      aria-label="Advertisement area"
    >
      <div
        className={`w-full ${getFormatClasses()} mx-auto rounded-xl border border-dashed border-slate-300 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-900/40 flex flex-col items-center justify-center p-3 text-center transition-colors`}
      >
        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-1">
          Advertisement
        </span>
        <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
          {slotName}
        </p>
        <span className="text-[11px] text-slate-400 dark:text-slate-600 mt-0.5">
          Ad space reserved for Google AdSense integration
        </span>
      </div>
    </div>
  );
};
