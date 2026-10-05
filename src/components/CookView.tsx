import React, { useState, useMemo } from 'react';
import { RECIPES_DATA } from '../data/recipesData';
import { 
  MealRecipe, 
  DietaryType, 
  MealTime, 
  CuisineType, 
  PrepTimeType 
} from '../types';
import { shareContent } from '../utils/share';
import { trackEvent } from '../utils/analytics';
import { AdPlaceholder } from './AdPlaceholder';
import { 
  Utensils, 
  Dices, 
  Clock, 
  Check, 
  Share2, 
  Sparkles, 
  RotateCcw,
  ChefHat,
  Filter
} from 'lucide-react';

interface CookViewProps {
  onRecipeExplored: () => void;
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'award') => void;
}

export const CookView: React.FC<CookViewProps> = ({ onRecipeExplored, showToast }) => {
  const [dietary, setDietary] = useState<DietaryType>('all');
  const [mealTime, setMealTime] = useState<MealTime>('all');
  const [cuisine, setCuisine] = useState<CuisineType>('all');
  const [prepTime, setPrepTime] = useState<PrepTimeType>('all');

  const [currentRecipeIndex, setCurrentRecipeIndex] = useState(0);
  const [isRolling, setIsRolling] = useState(false);

  // Filter recipes based on selected criteria
  const matchingRecipes = useMemo(() => {
    return RECIPES_DATA.filter((r) => {
      if (dietary !== 'all' && r.dietary !== dietary) return false;
      if (mealTime !== 'all' && r.mealTime !== mealTime) return false;
      if (cuisine !== 'all' && r.cuisine !== cuisine) return false;
      if (prepTime === 'quick' && !r.isQuick) return false;
      if (prepTime === 'normal' && r.isQuick) return false;
      return true;
    });
  }, [dietary, mealTime, cuisine, prepTime]);

  const activeRecipe: MealRecipe | undefined = 
    matchingRecipes.length > 0 
      ? matchingRecipes[currentRecipeIndex % matchingRecipes.length] 
      : undefined;

  const handleRollRecipe = () => {
    setIsRolling(true);
    trackEvent('meal_generated', { dietary, mealTime, cuisine, prepTime });
    setTimeout(() => {
      if (matchingRecipes.length > 1) {
        setCurrentRecipeIndex((prev) => (prev + 1) % matchingRecipes.length);
      }
      setIsRolling(false);
      onRecipeExplored();
    }, 250);
  };

  const handleShareRecipe = async () => {
    if (!activeRecipe) return;
    const text = `🍽️ Meal Idea: ${activeRecipe.title}\nPrep time: ~${activeRecipe.prepTimeMinutes} mins\n"${activeRecipe.description}"\nFound on Daily Life Hub!`;

    const res = await shareContent({
      title: activeRecipe.title,
      text
    });

    if (res.method === 'clipboard') {
      showToast('Recipe Copied to Clipboard!', 'Send it to family or your cooking group.', 'success');
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          What Should I Cook?
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Stop staring at an empty fridge. Filter by preference and discover your next delicious meal idea.
        </p>
      </div>

      {/* Filter Controls Bar */}
      <div className="p-5 rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm space-y-4">
        <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5" />
          <span>Meal Filters</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {/* Dietary Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
              Dietary Preference
            </label>
            <select
              value={dietary}
              onChange={(e) => {
                setDietary(e.target.value as DietaryType);
                setCurrentRecipeIndex(0);
              }}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Diets (Veg & Non-Veg)</option>
              <option value="veg">Vegetarian Only</option>
              <option value="egg">Egg Dishes</option>
              <option value="non-veg">Non-Vegetarian</option>
            </select>
          </div>

          {/* Meal Time Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
              Meal Time
            </label>
            <select
              value={mealTime}
              onChange={(e) => {
                setMealTime(e.target.value as MealTime);
                setCurrentRecipeIndex(0);
              }}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">Any Meal Time</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snack">Teatime Snack</option>
            </select>
          </div>

          {/* Cuisine Style Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
              Cuisine Style
            </label>
            <select
              value={cuisine}
              onChange={(e) => {
                setCuisine(e.target.value as CuisineType);
                setCurrentRecipeIndex(0);
              }}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">All Cuisines</option>
              <option value="indian">Indian Delights</option>
              <option value="general">Global / Continental</option>
            </select>
          </div>

          {/* Prep Effort Filter */}
          <div>
            <label className="block text-xs font-semibold text-slate-600 dark:text-slate-400 mb-1.5">
              Cooking Speed
            </label>
            <select
              value={prepTime}
              onChange={(e) => {
                setPrepTime(e.target.value as PrepTimeType);
                setCurrentRecipeIndex(0);
              }}
              className="w-full px-3 py-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-xs font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option value="all">Any Duration</option>
              <option value="quick">Quick (&lt; 20 Mins)</option>
              <option value="normal">Standard (20-45 Mins)</option>
            </select>
          </div>
        </div>

        {/* Matches Counter & Shuffle CTA */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-100 dark:border-slate-800">
          <span className="text-xs text-slate-500">
            Found <strong className="text-slate-900 dark:text-white tabular-nums">{matchingRecipes.length}</strong> delicious match{matchingRecipes.length === 1 ? '' : 'es'}
          </span>

          <button
            onClick={handleRollRecipe}
            disabled={matchingRecipes.length === 0}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-amber-500/20 active:scale-95 transition-all"
          >
            <Dices className={`w-4 h-4 ${isRolling ? 'animate-spin' : ''}`} />
            <span>Roll Another Idea</span>
          </button>
        </div>
      </div>

      {/* Recipe Card Output */}
      {activeRecipe ? (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm transition-all animate-slide-up">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold mb-2">
                <span className={`px-2 py-0.5 rounded-md ${
                  activeRecipe.dietary === 'veg'
                    ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                    : activeRecipe.dietary === 'egg'
                    ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800'
                    : 'bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-400 border border-rose-200 dark:border-rose-800'
                }`}>
                  {activeRecipe.dietary === 'veg' ? '🌱 Pure Veg' : activeRecipe.dietary === 'egg' ? '🥚 Egg' : '🍗 Non-Veg'}
                </span>

                <span className="capitalize px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {activeRecipe.mealTime}
                </span>

                <span className="capitalize px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {activeRecipe.cuisine === 'indian' ? 'Desi Indian' : 'Global Cuisine'}
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {activeRecipe.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-1">
                {activeRecipe.description}
              </p>
            </div>

            <div className="shrink-0 flex sm:flex-col items-center sm:items-end justify-between gap-2 p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/60 dark:border-amber-900/40">
              <div className="flex items-center gap-1.5 text-amber-800 dark:text-amber-300 font-bold text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                <span>~{activeRecipe.prepTimeMinutes} mins</span>
              </div>
              <span className="text-[11px] text-amber-700 dark:text-amber-400 font-medium">
                {activeRecipe.isQuick ? '⚡ Quick Bite' : '🍲 Standard Cook'}
              </span>
            </div>
          </div>

          {/* Ingredients & Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Ingredients */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <Utensils className="w-3.5 h-3.5 text-indigo-500" />
                <span>Ingredients You Will Need</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
                {activeRecipe.ingredients.map((ing, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 shrink-0 mt-1.5" />
                    <span>{ing}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Preparation Summary Steps */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/60 dark:border-slate-800 space-y-3">
              <h3 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-1.5">
                <ChefHat className="w-3.5 h-3.5 text-amber-500" />
                <span>Simple Preparation Steps</span>
              </h3>
              <ol className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
                {activeRecipe.steps.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-800 font-bold text-[10px] text-slate-700 dark:text-slate-300 flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
            <button
              onClick={handleShareRecipe}
              className="w-full sm:w-auto px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-center gap-2 transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Recipe Idea</span>
            </button>

            <button
              onClick={handleRollRecipe}
              className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all hover:bg-slate-800 dark:hover:bg-slate-100"
            >
              <Dices className="w-4 h-4" />
              <span>Give Me Another Idea</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="p-12 text-center rounded-3xl border border-dashed border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-3">
          <Utensils className="w-8 h-8 text-slate-400 mx-auto" />
          <h3 className="text-base font-bold text-slate-800 dark:text-slate-200">
            No exact dish matches this combination
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting one or two filters (e.g. set Cuisine or Meal Time to "All") to discover delicious ideas.
          </p>
          <button
            onClick={() => {
              setDietary('all');
              setMealTime('all');
              setCuisine('all');
              setPrepTime('all');
            }}
            className="px-4 py-2 rounded-xl bg-indigo-600 text-white text-xs font-semibold shadow-sm"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Culinary Disclaimer */}
      <p className="text-[11px] text-slate-400 dark:text-slate-500 text-center italic">
        Disclaimer: Recipe suggestions are for culinary inspiration and meal planning only. Daily Life Hub does not offer medical or personalized dietary advice.
      </p>

      <AdPlaceholder slotName="What Should I Cook Bottom" format="in-feed" />
    </div>
  );
};
