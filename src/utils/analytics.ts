/**
 * Analytics Event Dispatcher
 * Prepares events for Google Analytics / Plausible / Tag Manager
 */

export type AnalyticsEvent = 
  | 'quiz_started'
  | 'quiz_completed'
  | 'brain_game_started'
  | 'brain_game_completed'
  | 'daily_challenge_completed'
  | 'streak_updated'
  | 'meal_generated'
  | 'share_clicked'
  | 'theme_toggled';

export function trackEvent(eventName: AnalyticsEvent, params: Record<string, any> = {}): void {
  try {
    // If Google Analytics gtag is present
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', eventName, params);
    }
    // Safe dev log
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Analytics Event] ${eventName}:`, params);
    }
  } catch (err) {
    // Never fail application due to telemetry/analytics
    console.debug('Analytics dispatch error ignored:', err);
  }
}
