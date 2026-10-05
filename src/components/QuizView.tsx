import React, { useState } from 'react';
import { QuizCategoryId, QuizQuestion, QuizSessionSummary } from '../types';
import { QUIZ_CATEGORIES, QUIZ_QUESTIONS } from '../data/quizData';
import { shareContent } from '../utils/share';
import { trackEvent } from '../utils/analytics';
import { AdPlaceholder } from './AdPlaceholder';
import { 
  HelpCircle, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Share2, 
  ArrowRight, 
  Trophy, 
  Search,
  Globe,
  Atom,
  Cpu,
  UtensilsCrossed,
  Film,
  Landmark,
  Hourglass
} from 'lucide-react';

interface QuizViewProps {
  onQuizCompleted: (points: number, categoryId: string) => void;
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'award') => void;
}

export const QuizView: React.FC<QuizViewProps> = ({ onQuizCompleted, showToast }) => {
  const [selectedCategory, setSelectedCategory] = useState<QuizCategoryId | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [userAnswers, setUserAnswers] = useState<QuizSessionSummary['answers']>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  // Category Icon Resolver
  const renderCategoryIcon = (id: QuizCategoryId) => {
    switch (id) {
      case 'general': return <Globe className="w-5 h-5" />;
      case 'science': return <Atom className="w-5 h-5" />;
      case 'technology': return <Cpu className="w-5 h-5" />;
      case 'food': return <UtensilsCrossed className="w-5 h-5" />;
      case 'entertainment': return <Film className="w-5 h-5" />;
      case 'india': return <Landmark className="w-5 h-5" />;
      case 'sports': return <Trophy className="w-5 h-5" />;
      case 'history': return <Hourglass className="w-5 h-5" />;
      default: return <HelpCircle className="w-5 h-5" />;
    }
  };

  const startQuiz = (catId: QuizCategoryId) => {
    setSelectedCategory(catId);
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setShowExplanation(false);
    setUserAnswers([]);
    setQuizFinished(false);
    trackEvent('quiz_started', { category: catId });
  };

  const questions: QuizQuestion[] = selectedCategory ? QUIZ_QUESTIONS[selectedCategory] || [] : [];
  const currentQuestion = questions[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (selectedOption !== null) return; // Prevent changing after answer chosen
    setSelectedOption(index);
    setShowExplanation(true);

    const isCorrect = index === currentQuestion.correctIndex;
    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: currentQuestion.id,
        question: currentQuestion.question,
        selectedOption: index,
        correctOption: currentQuestion.correctIndex,
        isCorrect,
        explanation: currentQuestion.explanation
      }
    ]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOption(null);
      setShowExplanation(false);
    } else {
      // Finished quiz!
      const correctCount = userAnswers.filter((a) => a.isCorrect).length + (selectedOption === currentQuestion.correctIndex ? 0 : 0);
      const points = correctCount * 10;
      onQuizCompleted(points, selectedCategory!);
      setQuizFinished(true);
      trackEvent('quiz_completed', { category: selectedCategory, score: correctCount, points });
      showToast('Quiz Completed!', `You earned +${points} points!`, 'award');
    }
  };

  const handleShareResult = async () => {
    const correctCount = userAnswers.filter((a) => a.isCorrect).length;
    const catName = QUIZ_CATEGORIES.find((c) => c.id === selectedCategory)?.name || 'Daily Quiz';
    const text = `I scored ${correctCount}/${questions.length} on the "${catName}" quiz on Daily Life Hub! Can you beat my score?`;

    const res = await shareContent({
      title: 'Daily Life Hub Quiz Score',
      text
    });

    if (res.method === 'clipboard') {
      showToast('Score Copied to Clipboard!', 'Share it with your friends or colleagues.', 'success');
    }
  };

  // Filter categories by search
  const filteredCategories = QUIZ_CATEGORIES.filter((cat) =>
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // If no category selected, show category picker
  if (!selectedCategory) {
    return (
      <div className="space-y-6 max-w-5xl mx-auto pb-16">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
            Daily Trivia Quizzes
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
            Choose from 8 curated knowledge categories with 80 original trivia questions.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search categories (e.g. Science, India, Tech)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-slate-900 dark:text-white placeholder:text-slate-400"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => startQuiz(cat.id)}
              className="cursor-pointer group p-5 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:border-indigo-400 dark:hover:border-indigo-600 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${cat.badgeColor}`}>
                  {renderCategoryIcon(cat.id)}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-2">
                  {cat.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-indigo-600 dark:text-indigo-400">
                <span>{cat.questionCount} Questions</span>
                <span className="group-hover:translate-x-1 transition-transform">Start →</span>
              </div>
            </div>
          ))}
        </div>

        <AdPlaceholder slotName="Quiz Category Footer" format="in-feed" />
      </div>
    );
  }

  // Quiz Finished Screen
  if (quizFinished) {
    const correctCount = userAnswers.filter((a) => a.isCorrect).length;
    const totalCount = questions.length;
    const percentage = Math.round((correctCount / totalCount) * 100);

    const getPerformanceFeedback = () => {
      if (percentage === 100) return { title: 'Flawless Mastery! 🌟', desc: 'Outstanding! You answered every single question correctly.' };
      if (percentage >= 80) return { title: 'Brilliant Knowledge! 👏', desc: 'Great score! You have deep mastery in this domain.' };
      if (percentage >= 60) return { title: 'Solid Effort! 👍', desc: 'Good performance! A little review will make you invincible.' };
      return { title: 'Learning Opportunity! 💡', desc: 'Trivia is about discovery. Check the answer explanations below!' };
    };

    const feedback = getPerformanceFeedback();

    return (
      <div className="max-w-2xl mx-auto space-y-6 pb-16">
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 text-center space-y-4">
          <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-50 dark:bg-amber-950/40 text-amber-500 flex items-center justify-center border border-amber-200/60 dark:border-amber-900/40">
            <Trophy className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Quiz Completed
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              {feedback.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
              {feedback.desc}
            </p>
          </div>

          {/* Score Metric Ring */}
          <div className="py-4 flex justify-center items-center gap-6">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 min-w-[120px]">
              <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tabular-nums">
                {correctCount}/{totalCount}
              </span>
              <p className="text-xs text-slate-500 mt-0.5">Score</p>
            </div>
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/80 min-w-[120px]">
              <span className="text-3xl sm:text-4xl font-extrabold text-indigo-600 dark:text-indigo-400 tabular-nums">
                {percentage}%
              </span>
              <p className="text-xs text-slate-500 mt-0.5">Accuracy</p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <button
              onClick={handleShareResult}
              className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors shadow-sm"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Result</span>
            </button>
            <button
              onClick={() => startQuiz(selectedCategory)}
              className="px-5 py-3 rounded-xl border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Try Again</span>
            </button>
            <button
              onClick={() => setSelectedCategory(null)}
              className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-colors"
            >
              Pick Another Quiz
            </button>
          </div>
        </div>

        {/* Detailed Question Review */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">
            Answers & Explanations Review
          </h3>
          <div className="space-y-3">
            {userAnswers.map((ans, idx) => (
              <div
                key={ans.questionId}
                className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-left space-y-2"
              >
                <div className="flex items-start gap-2">
                  {ans.isCorrect ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                  )}
                  <div>
                    <span className="text-xs text-slate-400 font-medium">Question {idx + 1}</span>
                    <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0.5">
                      {ans.question}
                    </p>
                  </div>
                </div>

                <div className="text-xs text-slate-600 dark:text-slate-400 pl-7 space-y-1">
                  <p>
                    Your Answer:{' '}
                    <strong className={ans.isCorrect ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}>
                      {questions[idx].options[ans.selectedOption]}
                    </strong>
                  </p>
                  {!ans.isCorrect && (
                    <p>
                      Correct Answer:{' '}
                      <strong className="text-emerald-600 dark:text-emerald-400">
                        {questions[idx].options[ans.correctOption]}
                      </strong>
                    </p>
                  )}
                  <p className="mt-1 text-slate-500 italic bg-slate-50 dark:bg-slate-800/50 p-2 rounded-lg">
                    💡 {ans.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Active Quiz Question Interface
  const currentCategoryInfo = QUIZ_CATEGORIES.find((c) => c.id === selectedCategory);
  const progressPercent = ((currentQuestionIndex + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-6 pb-16">
      {/* Top Breadcrumb & Progress */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setSelectedCategory(null)}
          className="text-xs font-semibold text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 flex items-center gap-1 transition-colors"
        >
          ← Categories
        </button>
        <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
          {currentCategoryInfo?.name}
        </span>
        <span className="text-xs font-medium text-slate-500 tabular-nums">
          Question {currentQuestionIndex + 1} of {questions.length}
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 rounded-full bg-slate-200 dark:bg-slate-800 overflow-hidden">
        <div
          className="h-full bg-indigo-600 transition-all duration-300 rounded-full"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Question Card */}
      <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white leading-snug">
          {currentQuestion.question}
        </h2>

        {/* 4 Options */}
        <div className="space-y-3">
          {currentQuestion.options.map((opt, idx) => {
            const isSelected = selectedOption === idx;
            const isCorrect = idx === currentQuestion.correctIndex;
            
            let buttonClasses = "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800/80 text-slate-800 dark:text-slate-200";
            
            if (selectedOption !== null) {
              if (isCorrect) {
                buttonClasses = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-semibold";
              } else if (isSelected) {
                buttonClasses = "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-semibold";
              } else {
                buttonClasses = "border-slate-200 dark:border-slate-800 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(idx)}
                disabled={selectedOption !== null}
                className={`w-full min-h-[52px] p-4 text-left rounded-xl border text-sm transition-all flex items-center justify-between gap-3 ${buttonClasses}`}
              >
                <span>{opt}</span>
                {selectedOption !== null && isCorrect && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                )}
                {selectedOption !== null && isSelected && !isCorrect && (
                  <XCircle className="w-5 h-5 text-rose-600 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Card upon Selection */}
        {showExplanation && (
          <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 animate-slide-up space-y-1">
            <span className="font-bold flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400">
              💡 Did you know?
            </span>
            <p className="leading-relaxed">
              {currentQuestion.explanation}
            </p>
          </div>
        )}

        {/* Next Question CTA */}
        {selectedOption !== null && (
          <button
            onClick={handleNextQuestion}
            className="w-full py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-md shadow-indigo-600/20 transition-all"
          >
            <span>{currentQuestionIndex + 1 === questions.length ? 'View Final Results' : 'Next Question'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

      <AdPlaceholder slotName="Active Quiz Question In-Feed" format="in-feed" />
    </div>
  );
};
