import { trackEvent } from './analytics';

export interface ShareOptions {
  title?: string;
  text: string;
  url?: string;
}

/**
 * Shares text using Web Share API or falls back to navigator.clipboard
 * Returns true if shared/copied successfully
 */
export async function shareContent(options: ShareOptions): Promise<{ success: boolean; method: 'native' | 'clipboard' | 'failed' }> {
  const shareData = {
    title: options.title || 'Daily Life Hub',
    text: options.text,
    url: options.url || window.location.href
  };

  trackEvent('share_clicked', { text: options.text.substring(0, 30) });

  // Try Native Web Share first (mobile platforms)
  if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
    try {
      await navigator.share(shareData);
      return { success: true, method: 'native' };
    } catch (err: any) {
      if (err.name === 'AbortError') {
        // User cancelled native share sheet
        return { success: false, method: 'native' };
      }
      // If error occurred, proceed to fallback
    }
  }

  // Fallback to Clipboard copy
  try {
    const fullText = options.url ? `${options.text}\n${options.url}` : options.text;
    await navigator.clipboard.writeText(fullText);
    return { success: true, method: 'clipboard' };
  } catch (err) {
    console.warn('Clipboard write failed:', err);
    return { success: false, method: 'failed' };
  }
}
