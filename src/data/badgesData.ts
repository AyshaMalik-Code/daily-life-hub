import { Badge } from '../types';

export const BADGES_DATA: Badge[] = [
  {
    id: 'first_challenge',
    title: 'First Step',
    description: 'Completed your very first Daily Challenge.',
    icon: 'Sparkles',
    targetCount: 1,
    category: 'general'
  },
  {
    id: 'streak_3',
    title: 'Habit Builder',
    description: 'Maintained a 3-day daily streak without breaking it.',
    icon: 'Flame',
    targetCount: 3,
    category: 'streak'
  },
  {
    id: 'streak_7',
    title: 'Weekly Champion',
    description: 'Hit a full 7-day daily streak! Unstoppable consistency.',
    icon: 'Crown',
    targetCount: 7,
    category: 'streak'
  },
  {
    id: 'streak_14',
    title: 'Iron Will',
    description: 'Maintained a 14-day streak of daily challenges.',
    icon: 'Shield',
    targetCount: 14,
    category: 'streak'
  },
  {
    id: 'points_100',
    title: 'Century Club',
    description: 'Earned 100 total activity points on Daily Life Hub.',
    icon: 'Star',
    targetCount: 100,
    category: 'points'
  },
  {
    id: 'points_500',
    title: 'Point Master',
    description: 'Accumulated 500 lifetime points through games and challenges.',
    icon: 'Award',
    targetCount: 500,
    category: 'points'
  },
  {
    id: 'quiz_prodigy',
    title: 'Trivia Scholar',
    description: 'Finished quizzes across 3 or more distinct knowledge categories.',
    icon: 'BookOpen',
    targetCount: 3,
    category: 'quiz'
  },
  {
    id: 'brain_master',
    title: 'Synapse Spark',
    description: 'Successfully solved 5 or more brain puzzle games.',
    icon: 'Zap',
    targetCount: 5,
    category: 'brain'
  },
  {
    id: 'decision_maker',
    title: 'Decisive Mind',
    description: 'Answered at least 6 interactive This or That dilemmas.',
    icon: 'Compass',
    targetCount: 6,
    category: 'general'
  },
  {
    id: 'culinary_explorer',
    title: 'Kitchen Explorer',
    description: 'Discovered and rolled 5 different meal recipe ideas.',
    icon: 'Utensils',
    targetCount: 5,
    category: 'general'
  }
];
