import { UserStats } from '../types';
import { getTodayDateString } from '../data/dailyChallengesData';

const STATS_KEY = 'daily_life_hub_stats_v1';
const THEME_KEY = 'daily_life_hub_theme';

export const DEFAULT_USER_STATS: UserStats = {
  currentStreak: 0,
  longestStreak: 0,
  lastCompletedDate: null,
  dailyPoints: 0,
  totalPoints: 0,
  completedDailyDates: [],
  completedCategories: [],
  answeredDilemmasCount: 0,
  recipesExploredCount: 0,
  brainPuzzlesSolvedCount: 0,
  unlockedBadgeIds: []
};

/**
 * Safely parse and retrieve stats from localStorage
 */
export function loadUserStats(): UserStats {
  try {
    const raw = localStorage.getItem(STATS_KEY);
    if (!raw) return { ...DEFAULT_USER_STATS };
    const parsed = JSON.parse(raw);
    const today = getTodayDateString();

    // Reset dailyPoints counter if it's a new day
    const isToday = parsed.lastCompletedDate === today;
    const dailyPoints = isToday ? (parsed.dailyPoints || 0) : 0;

    return {
      currentStreak: typeof parsed.currentStreak === 'number' ? parsed.currentStreak : 0,
      longestStreak: typeof parsed.longestStreak === 'number' ? parsed.longestStreak : 0,
      lastCompletedDate: parsed.lastCompletedDate || null,
      dailyPoints,
      totalPoints: typeof parsed.totalPoints === 'number' ? parsed.totalPoints : 0,
      completedDailyDates: Array.isArray(parsed.completedDailyDates) ? parsed.completedDailyDates : [],
      completedCategories: Array.isArray(parsed.completedCategories) ? parsed.completedCategories : [],
      answeredDilemmasCount: typeof parsed.answeredDilemmasCount === 'number' ? parsed.answeredDilemmasCount : 0,
      recipesExploredCount: typeof parsed.recipesExploredCount === 'number' ? parsed.recipesExploredCount : 0,
      brainPuzzlesSolvedCount: typeof parsed.brainPuzzlesSolvedCount === 'number' ? parsed.brainPuzzlesSolvedCount : 0,
      unlockedBadgeIds: Array.isArray(parsed.unlockedBadgeIds) ? parsed.unlockedBadgeIds : []
    };
  } catch (err) {
    console.warn('Could not read user stats from localStorage:', err);
    return { ...DEFAULT_USER_STATS };
  }
}

/**
 * Safely save stats to localStorage
 */
export function saveUserStats(stats: UserStats): void {
  try {
    localStorage.setItem(STATS_KEY, JSON.stringify(stats));
  } catch (err) {
    console.warn('Could not save user stats to localStorage:', err);
  }
}

/**
 * Checks if a date string is exactly yesterday compared to today
 */
function isYesterday(prevDateStr: string, todayDateStr: string): boolean {
  try {
    const prev = new Date(prevDateStr);
    const today = new Date(todayDateStr);
    const diffTime = today.getTime() - prev.getTime();
    const diffDays = Math.round(diffTime / (1000 * 60 * 60 * 24));
    return diffDays === 1;
  } catch {
    return false;
  }
}

/**
 * Checks and updates unlocked badges based on current stats
 */
export function checkBadges(stats: UserStats): { updatedBadgeIds: string[]; newlyUnlocked: string[] } {
  const currentUnlocked = new Set(stats.unlockedBadgeIds);
  const newlyUnlocked: string[] = [];

  const addIf = (badgeId: string, condition: boolean) => {
    if (condition && !currentUnlocked.has(badgeId)) {
      currentUnlocked.add(badgeId);
      newlyUnlocked.push(badgeId);
    }
  };

  addIf('first_challenge', stats.completedDailyDates.length >= 1);
  addIf('streak_3', stats.currentStreak >= 3 || stats.longestStreak >= 3);
  addIf('streak_7', stats.currentStreak >= 7 || stats.longestStreak >= 7);
  addIf('streak_14', stats.currentStreak >= 14 || stats.longestStreak >= 14);
  addIf('points_100', stats.totalPoints >= 100);
  addIf('points_500', stats.totalPoints >= 500);
  addIf('quiz_prodigy', stats.completedCategories.length >= 3);
  addIf('brain_master', stats.brainPuzzlesSolvedCount >= 5);
  addIf('decision_maker', stats.answeredDilemmasCount >= 6);
  addIf('culinary_explorer', stats.recipesExploredCount >= 5);

  return {
    updatedBadgeIds: Array.from(currentUnlocked),
    newlyUnlocked
  };
}

/**
 * Records completion of the Daily Challenge.
 * Prevents duplicate rewards on the same day.
 */
export function completeDailyChallengeRecord(
  currentStats: UserStats,
  pointsAward: number = 50
): { updatedStats: UserStats; alreadyCompleted: boolean; newlyUnlockedBadges: string[] } {
  const today = getTodayDateString();

  if (currentStats.completedDailyDates.includes(today)) {
    return {
      updatedStats: currentStats,
      alreadyCompleted: true,
      newlyUnlockedBadges: []
    };
  }

  let newStreak = 1;
  if (currentStats.lastCompletedDate) {
    if (isYesterday(currentStats.lastCompletedDate, today)) {
      newStreak = currentStats.currentStreak + 1;
    } else {
      newStreak = 1;
    }
  }

  const longest = Math.max(currentStats.longestStreak, newStreak);
  const totalPts = currentStats.totalPoints + pointsAward;
  const dailyPts = (currentStats.lastCompletedDate === today ? currentStats.dailyPoints : 0) + pointsAward;

  const tempStats: UserStats = {
    ...currentStats,
    currentStreak: newStreak,
    longestStreak: longest,
    lastCompletedDate: today,
    dailyPoints: dailyPts,
    totalPoints: totalPts,
    completedDailyDates: [...currentStats.completedDailyDates, today]
  };

  const { updatedBadgeIds, newlyUnlocked } = checkBadges(tempStats);
  const finalStats: UserStats = {
    ...tempStats,
    unlockedBadgeIds: updatedBadgeIds
  };

  saveUserStats(finalStats);

  return {
    updatedStats: finalStats,
    alreadyCompleted: false,
    newlyUnlockedBadges: newlyUnlocked
  };
}

/**
 * Adds general activity points (from quiz, brain game, etc.)
 */
export function addActivityPoints(
  currentStats: UserStats,
  points: number,
  categoryTag?: string
): { updatedStats: UserStats; newlyUnlockedBadges: string[] } {
  const today = getTodayDateString();
  const dailyPts = (currentStats.lastCompletedDate === today ? currentStats.dailyPoints : 0) + points;

  let categories = currentStats.completedCategories;
  if (categoryTag && !categories.includes(categoryTag)) {
    categories = [...categories, categoryTag];
  }

  const tempStats: UserStats = {
    ...currentStats,
    totalPoints: currentStats.totalPoints + points,
    dailyPoints: dailyPts,
    completedCategories: categories
  };

  const { updatedBadgeIds, newlyUnlocked } = checkBadges(tempStats);
  const finalStats: UserStats = {
    ...tempStats,
    unlockedBadgeIds: updatedBadgeIds
  };

  saveUserStats(finalStats);
  return { updatedStats: finalStats, newlyUnlockedBadges: newlyUnlocked };
}

/**
 * Increments miscellaneous interaction counters
 */
export function recordInteraction(
  currentStats: UserStats,
  type: 'dilemma' | 'recipe' | 'brain'
): UserStats {
  const tempStats = { ...currentStats };
  if (type === 'dilemma') tempStats.answeredDilemmasCount += 1;
  if (type === 'recipe') tempStats.recipesExploredCount += 1;
  if (type === 'brain') tempStats.brainPuzzlesSolvedCount += 1;

  const { updatedBadgeIds } = checkBadges(tempStats);
  tempStats.unlockedBadgeIds = updatedBadgeIds;

  saveUserStats(tempStats);
  return tempStats;
}

/**
 * Theme persistence
 */
export function getSavedTheme(): 'light' | 'dark' {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  } catch {
    return 'light';
  }
}

export function saveTheme(theme: 'light' | 'dark'): void {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (err) {
    console.warn('Could not save theme:', err);
  }
}
