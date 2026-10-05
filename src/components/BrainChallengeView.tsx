import React, { useState, useEffect, useRef } from 'react';
import { BrainGameType } from '../types';
import { 
  NUMBER_SEQUENCE_PUZZLES, 
  ODD_ONE_OUT_PUZZLES, 
  LOGIC_PUZZLES, 
  PATTERN_PUZZLES 
} from '../data/brainGameData';
import { trackEvent } from '../utils/analytics';
import { AdPlaceholder } from './AdPlaceholder';
import { 
  Brain, 
  Clock, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Sparkles, 
  Trophy,
  Grid,
  Zap,
  HelpCircle
} from 'lucide-react';

interface BrainChallengeViewProps {
  onGameCompleted: (points: number) => void;
  showToast: (title: string, message?: string, type?: 'success' | 'info' | 'award') => void;
}

export const BrainChallengeView: React.FC<BrainChallengeViewProps> = ({
  onGameCompleted,
  showToast
}) => {
  const [activeGameType, setActiveGameType] = useState<BrainGameType>('sequence');

  // Generic puzzle index trackers
  const [seqIndex, setSeqIndex] = useState(0);
  const [oddIndex, setOddIndex] = useState(0);
  const [logicIndex, setLogicIndex] = useState(0);
  const [patternIndex, setPatternIndex] = useState(0);

  // Answer selections & states
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerRevealed, setIsAnswerRevealed] = useState(false);
  const [score, setScore] = useState(0);

  // Timer state
  const [timerSeconds, setTimerSeconds] = useState(30);
  const [timerActive, setTimerActive] = useState(false);

  // ================= MEMORY GAME DYNAMIC STATE =================
  // A 3x3 grid (9 tiles: 0 to 8)
  const [memorySequence, setMemorySequence] = useState<number[]>([]);
  const [playerInput, setPlayerInput] = useState<number[]>([]);
  const [isFlashing, setIsFlashing] = useState(false);
  const [activeFlashingTile, setActiveFlashingTile] = useState<number | null>(null);
  const [memoryLevel, setMemoryLevel] = useState(1);
  const [memoryGameOver, setMemoryGameOver] = useState(false);
  const [memoryScore, setMemoryScore] = useState(0);

  // Timer effect for puzzles
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (timerActive && timerSeconds > 0 && !isAnswerRevealed) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [timerActive, timerSeconds, isAnswerRevealed]);

  // Reset answer states when switching games or advancing
  const resetPuzzleState = () => {
    setSelectedAnswer(null);
    setIsAnswerRevealed(false);
    setTimerSeconds(30);
    setTimerActive(true);
  };

  const handleGameTabSwitch = (game: BrainGameType) => {
    setActiveGameType(game);
    resetPuzzleState();
    trackEvent('brain_game_started', { game });
    if (game === 'memory') {
      startMemoryGame();
    }
  };

  // ================= MEMORY GAME ENGINE =================
  const startMemoryGame = () => {
    setMemoryLevel(1);
    setMemoryScore(0);
    setMemoryGameOver(false);
    setPlayerInput([]);
    // First sequence: 3 random tiles
    const firstSeq = [
      Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 9)
    ];
    setMemorySequence(firstSeq);
    playSequence(firstSeq);
  };

  const playSequence = async (seq: number[]) => {
    setIsFlashing(true);
    setPlayerInput([]);
    for (let i = 0; i < seq.length; i++) {
      await new Promise((r) => setTimeout(r, 400));
      setActiveFlashingTile(seq[i]);
      await new Promise((r) => setTimeout(r, 600));
      setActiveFlashingTile(null);
    }
    setIsFlashing(false);
  };

  const handleMemoryTileClick = (tileIndex: number) => {
    if (isFlashing || memoryGameOver) return;

    const nextInput = [...playerInput, tileIndex];
    setPlayerInput(nextInput);

    // Verify current tap against sequence
    const currentStep = nextInput.length - 1;
    if (tileIndex !== memorySequence[currentStep]) {
      // Mistake! Game over
      setMemoryGameOver(true);
      showToast('Memory Round Ended', `You reached Level ${memoryLevel}! Final score: ${memoryScore}`, 'info');
      if (memoryScore > 0) {
        onGameCompleted(memoryScore);
      }
      return;
    }

    // Checked step is correct! Check if level completed:
    if (nextInput.length === memorySequence.length) {
      // Completed level!
      const levelPoints = memoryLevel * 10;
      const newScore = memoryScore + levelPoints;
      setMemoryScore(newScore);
      setMemoryLevel((prev) => prev + 1);
      showToast(`Level ${memoryLevel} Complete!`, `+${levelPoints} points earned`, 'success');

      // Add next random tile to sequence and play after short delay
      setTimeout(() => {
        const nextSeq = [...memorySequence, Math.floor(Math.random() * 9)];
        setMemorySequence(nextSeq);
        playSequence(nextSeq);
      }, 800);
    }
  };

  // ================= STANDARD PUZZLE ANSWER HANDLING =================
  const handleSelectAnswer = (index: number, correctIdx: number) => {
    if (isAnswerRevealed) return;
    setSelectedAnswer(index);
    setIsAnswerRevealed(true);
    setTimerActive(false);

    const isCorrect = index === correctIdx;
    if (isCorrect) {
      const awardPts = 20;
      setScore((prev) => prev + awardPts);
      onGameCompleted(awardPts);
      showToast('Correct Solution! 🎯', `+${awardPts} Points awarded!`, 'award');
      trackEvent('brain_game_completed', { game: activeGameType, solved: true });
    } else {
      showToast('Not quite right!', 'Read the explanation to learn the logic pattern.', 'info');
      trackEvent('brain_game_completed', { game: activeGameType, solved: false });
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6 pb-16">
      <div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Brain Challenge Studio
        </h1>
        <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
          Lightweight cognitive workouts to exercise pattern recognition, logic deduction, and working memory.
        </p>
      </div>

      {/* Game Mode Tab Bar (Segmented Controls) */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 overflow-x-auto scrollbar-none">
        <button
          onClick={() => handleGameTabSwitch('sequence')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeGameType === 'sequence'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          1. Number Sequence
        </button>
        <button
          onClick={() => handleGameTabSwitch('odd-one-out')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeGameType === 'odd-one-out'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          2. Odd One Out
        </button>
        <button
          onClick={() => handleGameTabSwitch('memory')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeGameType === 'memory'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          3. Memory Matrix
        </button>
        <button
          onClick={() => handleGameTabSwitch('logic')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeGameType === 'logic'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          4. Logic Riddles
        </button>
        <button
          onClick={() => handleGameTabSwitch('pattern')}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
            activeGameType === 'pattern'
              ? 'bg-white dark:bg-slate-800 text-indigo-600 dark:text-indigo-400 shadow-sm'
              : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
          }`}
        >
          5. Pattern Matrix
        </button>
      </div>

      {/* GAME 1: NUMBER SEQUENCE */}
      {activeGameType === 'sequence' && (() => {
        const puzzle = NUMBER_SEQUENCE_PUZZLES[seqIndex];
        const correctIdx = puzzle.options.indexOf(puzzle.correctAnswer);

        return (
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Puzzle {seqIndex + 1} of {NUMBER_SEQUENCE_PUZZLES.length} · Difficulty: {puzzle.difficulty}
              </span>
              <div className="flex items-center gap-1.5 tabular-nums">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{timerSeconds}s</span>
              </div>
            </div>

            <div>
              <h2 className="text-sm font-semibold text-slate-500 dark:text-slate-400 mb-2">
                Identify the logic rule and determine the missing number:
              </h2>
              {/* Visual Sequence Boxes */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 py-3">
                {puzzle.sequence.map((item, idx) => (
                  <div
                    key={idx}
                    className={`w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center font-mono font-bold text-base sm:text-xl border ${
                      item === '?'
                        ? 'border-dashed border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-300 animate-pulse'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/60 text-slate-900 dark:text-white'
                    }`}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Answer Options */}
            <div className="grid grid-cols-2 gap-3">
              {puzzle.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === correctIdx;
                let btnStyle = "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800";

                if (isAnswerRevealed) {
                  if (isCorrect) btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold";
                  else if (isSelected) btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-bold";
                  else btnStyle = "opacity-50 border-slate-200 dark:border-slate-800";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx, correctIdx)}
                    disabled={isAnswerRevealed}
                    className={`p-4 rounded-xl border text-base font-mono font-bold text-center transition-all ${btnStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {/* Explanation & Next */}
            {isAnswerRevealed && (
              <div className="space-y-4 animate-slide-up">
                <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400">
                    💡 Pattern Explanation:
                  </span>
                  <p>{puzzle.patternExplanation}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={resetPuzzleState}
                    className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry</span>
                  </button>
                  <button
                    onClick={() => {
                      setSeqIndex((prev) => (prev + 1) % NUMBER_SEQUENCE_PUZZLES.length);
                      resetPuzzleState();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Next Puzzle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })()}

      {/* GAME 2: ODD ONE OUT */}
      {activeGameType === 'odd-one-out' && (() => {
        const puzzle = ODD_ONE_OUT_PUZZLES[oddIndex];

        return (
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Puzzle {oddIndex + 1} of {ODD_ONE_OUT_PUZZLES.length} · Difficulty: {puzzle.difficulty}
              </span>
              <div className="flex items-center gap-1.5 tabular-nums">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{timerSeconds}s</span>
              </div>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Which one of these four items does not belong in the group?
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Find the conceptual, scientific, or geographical anomaly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {puzzle.items.map((item, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === puzzle.oddIndex;
                let btnStyle = "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200";

                if (isAnswerRevealed) {
                  if (isCorrect) btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold";
                  else if (isSelected) btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-bold";
                  else btnStyle = "opacity-50 border-slate-200 dark:border-slate-800";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx, puzzle.oddIndex)}
                    disabled={isAnswerRevealed}
                    className={`p-5 rounded-2xl border text-sm sm:text-base font-bold text-center transition-all ${btnStyle}`}
                  >
                    {item}
                  </button>
                );
              })}
            </div>

            {isAnswerRevealed && (
              <div className="space-y-4 animate-slide-up">
                <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400">
                    💡 Anomaly Reason:
                  </span>
                  <p>{puzzle.explanation}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={resetPuzzleState}
                    className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry</span>
                  </button>
                  <button
                    onClick={() => {
                      setOddIndex((prev) => (prev + 1) % ODD_ONE_OUT_PUZZLES.length);
                      resetPuzzleState();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Next Puzzle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })()}

      {/* GAME 3: MEMORY MATRIX (INTERACTIVE) */}
      {activeGameType === 'memory' && (
        <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm text-center">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span className="font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
              Memory Challenge · Level {memoryLevel}
            </span>
            <span className="font-bold text-slate-900 dark:text-white tabular-nums">
              Score: {memoryScore} pts
            </span>
          </div>

          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">
              {isFlashing ? 'Memorize the Sequence...' : 'Reproduce the Exact Pattern!'}
            </h2>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
              Watch the glowing amber sequence, then tap the tiles in identical order.
            </p>
          </div>

          {/* 3x3 Tile Grid */}
          <div className="max-w-[280px] mx-auto grid grid-cols-3 gap-3 p-3 rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
            {Array.from({ length: 9 }).map((_, idx) => {
              const isTileActive = activeFlashingTile === idx;
              const isTapped = playerInput.includes(idx);

              return (
                <button
                  key={idx}
                  onClick={() => handleMemoryTileClick(idx)}
                  disabled={isFlashing || memoryGameOver}
                  className={`w-20 h-20 rounded-xl transition-all duration-150 transform active:scale-95 flex items-center justify-center font-bold text-lg ${
                    isTileActive
                      ? 'bg-amber-400 scale-105 shadow-lg shadow-amber-400/50 text-slate-950 border-2 border-amber-300'
                      : 'bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700/80 border border-slate-200 dark:border-slate-700 text-slate-400'
                  }`}
                  aria-label={`Tile ${idx + 1}`}
                >
                  {isTileActive && <Zap className="w-6 h-6 animate-spin text-slate-900" />}
                </button>
              );
            })}
          </div>

          {/* Progress dots */}
          <div className="flex items-center justify-center gap-1.5 py-1">
            {memorySequence.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full transition-all ${
                  i < playerInput.length
                    ? 'bg-emerald-500 scale-125'
                    : 'bg-slate-300 dark:bg-slate-700'
                }`}
              />
            ))}
          </div>

          {memoryGameOver && (
            <div className="space-y-4 animate-slide-up pt-2">
              <div className="p-4 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs sm:text-sm text-rose-900 dark:text-rose-200">
                <span className="font-bold">Round Over!</span> You successfully reached Level {memoryLevel} and earned {memoryScore} points.
              </div>
              <button
                onClick={startMemoryGame}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-sm transition-all"
              >
                Play Memory Again
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 4: LOGIC RIDDLES */}
      {activeGameType === 'logic' && (() => {
        const puzzle = LOGIC_PUZZLES[logicIndex];

        return (
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Riddle {logicIndex + 1} of {LOGIC_PUZZLES.length} · Difficulty: {puzzle.difficulty}
              </span>
              <div className="flex items-center gap-1.5 tabular-nums">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{timerSeconds}s</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80 text-sm leading-relaxed text-slate-800 dark:text-slate-200">
                {puzzle.scenario}
              </div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white pt-2">
                {puzzle.question}
              </h2>
            </div>

            <div className="space-y-3">
              {puzzle.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === puzzle.correctIndex;
                let btnStyle = "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200";

                if (isAnswerRevealed) {
                  if (isCorrect) btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold";
                  else if (isSelected) btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-bold";
                  else btnStyle = "opacity-50 border-slate-200 dark:border-slate-800";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx, puzzle.correctIndex)}
                    disabled={isAnswerRevealed}
                    className={`w-full p-4 rounded-xl border text-sm text-left transition-all ${btnStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {isAnswerRevealed && (
              <div className="space-y-4 animate-slide-up">
                <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400">
                    💡 Deduction Solution:
                  </span>
                  <p>{puzzle.explanation}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={resetPuzzleState}
                    className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry</span>
                  </button>
                  <button
                    onClick={() => {
                      setLogicIndex((prev) => (prev + 1) % LOGIC_PUZZLES.length);
                      resetPuzzleState();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Next Riddle</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })()}

      {/* GAME 5: PATTERN MATRIX */}
      {activeGameType === 'pattern' && (() => {
        const puzzle = PATTERN_PUZZLES[patternIndex];

        return (
          <div className="rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 sm:p-8 space-y-6 shadow-sm">
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span className="font-semibold text-indigo-600 dark:text-indigo-400 uppercase tracking-wider">
                Matrix {patternIndex + 1} of {PATTERN_PUZZLES.length} · Difficulty: {puzzle.difficulty}
              </span>
              <div className="flex items-center gap-1.5 tabular-nums">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>{timerSeconds}s</span>
              </div>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                {puzzle.title}
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                {puzzle.questionPrompt}
              </p>
            </div>

            {/* Matrix Visual Table */}
            <div className="max-w-md mx-auto p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 grid grid-cols-3 gap-2">
              {puzzle.visualRows.flat().map((cell, idx) => (
                <div
                  key={idx}
                  className={`h-16 rounded-xl flex items-center justify-center text-xs font-bold text-center p-2 border ${
                    cell === '?'
                      ? 'border-dashed border-indigo-500 bg-indigo-50/50 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 animate-pulse text-lg font-mono'
                      : 'border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  {cell}
                </div>
              ))}
            </div>

            {/* Options */}
            <div className="grid grid-cols-2 gap-3">
              {puzzle.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === puzzle.correctIndex;
                let btnStyle = "border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200";

                if (isAnswerRevealed) {
                  if (isCorrect) btnStyle = "border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 font-bold";
                  else if (isSelected) btnStyle = "border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 font-bold";
                  else btnStyle = "opacity-50 border-slate-200 dark:border-slate-800";
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectAnswer(idx, puzzle.correctIndex)}
                    disabled={isAnswerRevealed}
                    className={`p-4 rounded-xl border text-sm font-semibold text-center transition-all ${btnStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {isAnswerRevealed && (
              <div className="space-y-4 animate-slide-up">
                <div className="p-4 rounded-xl bg-indigo-50/70 dark:bg-indigo-950/40 border border-indigo-200/60 dark:border-indigo-900/40 text-xs sm:text-sm text-indigo-950 dark:text-indigo-200 space-y-1">
                  <span className="font-bold flex items-center gap-1.5 text-indigo-700 dark:text-indigo-400">
                    💡 Pattern Matrix Logic:
                  </span>
                  <p>{puzzle.explanation}</p>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <button
                    onClick={resetPuzzleState}
                    className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5 hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Retry</span>
                  </button>
                  <button
                    onClick={() => {
                      setPatternIndex((prev) => (prev + 1) % PATTERN_PUZZLES.length);
                      resetPuzzleState();
                    }}
                    className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm"
                  >
                    <span>Next Matrix</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })()}

      <AdPlaceholder slotName="Brain Game Bottom Container" format="in-feed" />
    </div>
  );
};
