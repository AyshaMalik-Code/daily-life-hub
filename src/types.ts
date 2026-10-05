/**
 * Core Type Definitions for Daily Life Hub
 */

export type TabType = 
  | 'home' 
  | 'quiz' 
  | 'brain' 
  | 'this-or-that' 
  | 'cook' 
  | 'challenge' 
  | 'badges' 
  | 'about' 
  | 'contact' 
  | 'privacy' 
  | 'terms';

// ================= QUIZ TYPES =================
export type QuizCategoryId = 
  | 'general' 
  | 'science' 
  | 'technology' 
  | 'food' 
  | 'entertainment' 
  | 'india' 
  | 'sports' 
  | 'history';

export interface QuizCategoryInfo {
  id: QuizCategoryId;
  name: string;
  description: string;
  iconName: string;
  questionCount: number;
  badgeColor: string;
}

export interface QuizQuestion {
  id: string;
  category: QuizCategoryId;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty?: 'easy' | 'medium' | 'hard';
}

export interface QuizSessionSummary {
  categoryId: QuizCategoryId;
  totalQuestions: number;
  score: number;
  percentage: number;
  answers: {
    questionId: string;
    question: string;
    selectedOption: number;
    correctOption: number;
    isCorrect: boolean;
    explanation: string;
  }[];
}

// ================= BRAIN CHALLENGE TYPES =================
export type BrainGameType = 
  | 'sequence' 
  | 'odd-one-out' 
  | 'memory' 
  | 'logic' 
  | 'pattern';

export interface NumberSequencePuzzle {
  id: string;
  sequence: (number | string)[]; // e.g. [2, 5, 10, 17, '?']
  options: number[];
  correctAnswer: number;
  patternExplanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface OddOneOutPuzzle {
  id: string;
  items: string[];
  oddIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface LogicPuzzle {
  id: string;
  scenario: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface PatternPuzzle {
  id: string;
  title: string;
  visualRows: string[][]; // e.g. matrix representation
  questionPrompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

// ================= THIS OR THAT TYPES =================
export interface DilemmaItem {
  id: string;
  optionA: {
    label: string;
    iconEmoji: string;
    shortTag: string;
    initialPercent: number;
  };
  optionB: {
    label: string;
    iconEmoji: string;
    shortTag: string;
    initialPercent: number;
  };
  funCommentA: string;
  funCommentB: string;
}

// ================= WHAT SHOULD I COOK TYPES =================
export type DietaryType = 'all' | 'veg' | 'non-veg' | 'egg';
export type MealTime = 'all' | 'breakfast' | 'lunch' | 'dinner' | 'snack';
export type CuisineType = 'all' | 'indian' | 'general';
export type PrepTimeType = 'all' | 'quick' | 'normal'; // quick: <= 20 min, normal: 20-45 min

export interface MealRecipe {
  id: string;
  title: string;
  description: string;
  dietary: 'veg' | 'non-veg' | 'egg';
  mealTime: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  cuisine: 'indian' | 'general';
  prepTimeMinutes: number;
  isQuick: boolean;
  caloriesApprox?: number;
  ingredients: string[];
  steps: string[];
}

// ================= DAILY CHALLENGE TYPES =================
export type DailyChallengeType = 'quiz' | 'brain' | 'riddle' | 'word' | 'math';

export interface DailyChallenge {
  id: string;
  dayIndex: number; // 0-30 for month cycle or date hash
  title: string;
  type: DailyChallengeType;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  pointsReward: number;
  prompt: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

// ================= USER STATS & STREAK TYPES =================
export interface UserStats {
  currentStreak: number;
  longestStreak: number;
  lastCompletedDate: string | null; // 'YYYY-MM-DD'
  dailyPoints: number; // earned today
  totalPoints: number;
  completedDailyDates: string[]; // list of completed 'YYYY-MM-DD'
  completedCategories: string[];
  answeredDilemmasCount: number;
  recipesExploredCount: number;
  brainPuzzlesSolvedCount: number;
  unlockedBadgeIds: string[];
}

// ================= BADGE TYPES =================
export interface Badge {
  id: string;
  title: string;
  description: string;
  icon: string;
  targetCount: number;
  category: 'streak' | 'points' | 'quiz' | 'brain' | 'general';
}
