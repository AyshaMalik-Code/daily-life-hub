import { NumberSequencePuzzle, OddOneOutPuzzle, LogicPuzzle, PatternPuzzle } from '../types';

export const NUMBER_SEQUENCE_PUZZLES: NumberSequencePuzzle[] = [
  {
    id: 'seq_1',
    sequence: [2, 6, 12, 20, 30, '?'],
    options: [36, 40, 42, 44],
    correctAnswer: 42,
    patternExplanation: 'The differences between consecutive numbers increase by 2 each time: +4, +6, +8, +10, so +12 -> 30 + 12 = 42 (also n × (n + 1)).',
    difficulty: 'Easy'
  },
  {
    id: 'seq_2',
    sequence: [3, 7, 15, 31, 63, '?'],
    options: [120, 125, 127, 131],
    correctAnswer: 127,
    patternExplanation: 'Each number is doubled and then 1 is added: (3×2)+1=7, (7×2)+1=15, ..., (63×2)+1 = 127 (or 2^(n+1) - 1).',
    difficulty: 'Easy'
  },
  {
    id: 'seq_3',
    sequence: [1, 4, 9, 16, 25, '?'],
    options: [30, 34, 36, 49],
    correctAnswer: 36,
    patternExplanation: 'These are squares of consecutive integers: 1², 2², 3², 4², 5², and 6² = 36.',
    difficulty: 'Easy'
  },
  {
    id: 'seq_4',
    sequence: [2, 3, 5, 8, 13, 21, '?'],
    options: [31, 33, 34, 36],
    correctAnswer: 34,
    patternExplanation: 'Fibonacci series where each term is the sum of the preceding two numbers: 13 + 21 = 34.',
    difficulty: 'Medium'
  },
  {
    id: 'seq_5',
    sequence: [4, 9, 20, 43, 90, '?'],
    options: [181, 185, 187, 192],
    correctAnswer: 185,
    patternExplanation: 'Each term is multiplied by 2, plus consecutive counting integers: 4×2+1=9, 9×2+2=20, 20×2+3=43, 43×2+4=90, 90×2+5 = 185.',
    difficulty: 'Hard'
  },
  {
    id: 'seq_6',
    sequence: [100, 96, 88, 72, 40, '?'],
    options: [-24, -16, 0, 8],
    correctAnswer: -24,
    patternExplanation: 'The subtractions double each step: -4, -8, -16, -32, so next is -64 -> 40 - 64 = -24.',
    difficulty: 'Medium'
  },
  {
    id: 'seq_7',
    sequence: [7, 14, 16, 32, 34, '?'],
    options: [64, 68, 70, 72],
    correctAnswer: 68,
    patternExplanation: 'Alternating operations: multiply by 2, then add 2: 7×2=14, 14+2=16, 16×2=32, 32+2=34, 34×2 = 68.',
    difficulty: 'Medium'
  },
  {
    id: 'seq_8',
    sequence: [1, 8, 27, 64, 125, '?'],
    options: [196, 216, 225, 256],
    correctAnswer: 216,
    patternExplanation: 'Consecutive integer cubes: 1³, 2³, 3³, 4³, 5³, and 6³ = 216.',
    difficulty: 'Medium'
  }
];

export const ODD_ONE_OUT_PUZZLES: OddOneOutPuzzle[] = [
  {
    id: 'odd_1',
    items: ['Copper', 'Silver', 'Gold', 'Bronze'],
    oddIndex: 3,
    explanation: 'Bronze is a man-made alloy (copper and tin), whereas Copper, Silver, and Gold are pure chemical elements.',
    difficulty: 'Easy'
  },
  {
    id: 'odd_2',
    items: ['Dolphin', 'Shark', 'Whale', 'Seal'],
    oddIndex: 1,
    explanation: 'A shark is a cartilaginous fish with gills, while Dolphins, Whales, and Seals are warm-blooded mammals that breathe air.',
    difficulty: 'Easy'
  },
  {
    id: 'odd_3',
    items: ['Square', 'Hexagon', 'Cube', 'Triangle'],
    oddIndex: 2,
    explanation: 'Cube is a 3-dimensional solid, whereas Square, Hexagon, and Triangle are 2-dimensional planar polygons.',
    difficulty: 'Easy'
  },
  {
    id: 'odd_4',
    items: ['Canberra', 'Sydney', 'Ottawa', 'Brasília'],
    oddIndex: 1,
    explanation: 'Sydney is not a national capital (Canberra is the capital of Australia), whereas Ottawa, Brasília, and Canberra are all national capitals.',
    difficulty: 'Medium'
  },
  {
    id: 'odd_5',
    items: ['Oxygen', 'Hydrogen', 'Water', 'Nitrogen'],
    oddIndex: 2,
    explanation: 'Water (H2O) is a chemical compound consisting of two elements, whereas Oxygen, Hydrogen, and Nitrogen are pure diatomic elements.',
    difficulty: 'Medium'
  },
  {
    id: 'odd_6',
    items: ['Violin', 'Cello', 'Flute', 'Guitar'],
    oddIndex: 2,
    explanation: 'Flute is a woodwind instrument played by airflow, whereas Violin, Cello, and Guitar are stringed instruments.',
    difficulty: 'Easy'
  },
  {
    id: 'odd_7',
    items: ['Pineapple', 'Strawberry', 'Carrot', 'Watermelon'],
    oddIndex: 2,
    explanation: 'A carrot is a root vegetable that grows underground, while pineapple, strawberry, and watermelon are botanical fruits grown above ground.',
    difficulty: 'Easy'
  },
  {
    id: 'odd_8',
    items: ['121', '169', '144', '289'],
    oddIndex: 2,
    explanation: '144 is an even square (12²), while 121 (11²), 169 (13²), and 289 (17²) are squares of prime/odd numbers.',
    difficulty: 'Hard'
  }
];

export const LOGIC_PUZZLES: LogicPuzzle[] = [
  {
    id: 'log_1',
    scenario: 'A farmer needs to cross a river in a small boat with a wolf, a goat, and a cabbage. The boat can only carry the farmer and one item at a time. If left alone together, the wolf will eat the goat, or the goat will eat the cabbage.',
    question: 'What is the farmer\'s crucial first crossing move?',
    options: [
      'Take the wolf across first',
      'Take the cabbage across first',
      'Take the goat across first',
      'Take both wolf and cabbage'
    ],
    correctIndex: 2,
    explanation: 'Taking the goat first leaves the wolf alone with the cabbage (the wolf will not eat cabbage!). The farmer can then return and plan subsequent trips safely.',
    difficulty: 'Easy'
  },
  {
    id: 'log_2',
    scenario: 'You are standing in front of three light switches outside a closed room. Each switch controls one of three light bulbs inside the room. You can flip the switches as much as you like, but you may only enter the room once to inspect.',
    question: 'How can you determine with 100% certainty which switch controls which bulb?',
    options: [
      'Turn on Switch 1 for 10 minutes, turn it off, turn on Switch 2, then enter the room to check heat and light.',
      'Turn on all three switches simultaneously and count the shadows.',
      'Flip Switch 1 and 3 together, then quickly run in before the light fades.',
      'Flip Switch 2 on and off rapidly 50 times to trigger a flicker.'
    ],
    correctIndex: 0,
    explanation: 'The bulb that is lit corresponds to Switch 2. The bulb that is off but warm to the touch corresponds to Switch 1. The bulb that is off and cold is Switch 3!',
    difficulty: 'Medium'
  },
  {
    id: 'log_3',
    scenario: 'A clock shows exactly 3:15. At this specific moment, what is the exact angle between the hour hand and the minute hand?',
    question: 'What is the angle between the two hands at 3:15?',
    options: ['0 degrees', '7.5 degrees', '12.5 degrees', '15 degrees'],
    correctIndex: 1,
    explanation: 'At 3:15, the minute hand points precisely at 15 minutes (90°). However, in 15 minutes, the hour hand has moved forward by 15 × 0.5° = 7.5° past the 3 mark. Thus the angle is 7.5°.',
    difficulty: 'Medium'
  },
  {
    id: 'log_4',
    scenario: 'Three friends — Arjun, Bhavna, and Chetan — sit in a straight row. Arjun is not on either end. Chetan is to the immediate right of Arjun.',
    question: 'Who is sitting on the far left?',
    options: ['Arjun', 'Bhavna', 'Chetan', 'Cannot be determined'],
    correctIndex: 1,
    explanation: 'Since Arjun cannot be on either end, Arjun must be in the middle (position 2). Since Chetan is to Arjun\'s right (position 3), Bhavna must be in the far left seat (position 1).',
    difficulty: 'Easy'
  },
  {
    id: 'log_5',
    scenario: 'If five machines can manufacture five widgets in exactly five minutes, how many minutes would it take one hundred machines to manufacture one hundred widgets?',
    question: 'How many minutes are required?',
    options: ['100 minutes', '20 minutes', '5 minutes', '1 minute'],
    correctIndex: 2,
    explanation: 'Each machine produces 1 widget in 5 minutes. Working in parallel, 100 machines will produce 100 widgets in the exact same 5 minutes.',
    difficulty: 'Hard'
  }
];

export const PATTERN_PUZZLES: PatternPuzzle[] = [
  {
    id: 'pat_1',
    title: 'Symbolic Rotation Matrix',
    visualRows: [
      ['▲ (Up)', '▶ (Right)', '▼ (Down)'],
      ['◀ (Left)', '▲ (Up)', '▶ (Right)'],
      ['▼ (Down)', '◀ (Left)', '?']
    ],
    questionPrompt: 'Following the 90° clockwise rotation rule, which orientation replaces the question mark?',
    options: ['▲ (Up)', '▶ (Right)', '▼ (Down)', '◀ (Left)'],
    correctIndex: 0,
    explanation: 'Each symbol rotates 90° clockwise across the row and column. The sequence from ◀ (Left) rotated 90° clockwise is ▲ (Up).',
    difficulty: 'Medium'
  },
  {
    id: 'pat_2',
    title: 'Geometric Line Count',
    visualRows: [
      ['Triangle (3 lines)', 'Square (4 lines)', 'Pentagon (5 lines)'],
      ['Square (4 lines)', 'Pentagon (5 lines)', 'Hexagon (6 lines)'],
      ['Pentagon (5 lines)', 'Hexagon (6 lines)', '?']
    ],
    questionPrompt: 'Based on the linear sum pattern of sides, what shape belongs in the bottom-right corner?',
    options: ['Octagon (8 lines)', 'Heptagon (7 lines)', 'Square (4 lines)', 'Nonagon (9 lines)'],
    correctIndex: 1,
    explanation: 'The number of sides increases by +1 across rows and columns: 5, 6, so the next polygon must have 7 sides (Heptagon).',
    difficulty: 'Easy'
  },
  {
    id: 'pat_3',
    title: 'Letter Shift Progression',
    visualRows: [
      ['A (+2)', 'C (+2)', 'E'],
      ['D (+2)', 'F (+2)', 'H'],
      ['G (+2)', 'I (+2)', '?']
    ],
    questionPrompt: 'Which English alphabet letter logically completes the third row?',
    options: ['J', 'K', 'L', 'M'],
    correctIndex: 1,
    explanation: 'Each step advances by 2 letters in the alphabet. G (7) + 2 = I (9), and I (9) + 2 = K (11).',
    difficulty: 'Easy'
  }
];
