import { DailyChallenge } from '../types';

export const DAILY_CHALLENGES: DailyChallenge[] = [
  {
    id: 'daily_0',
    dayIndex: 0,
    title: 'Emoji Movie Decryption',
    type: 'word',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'Can you decode which blockbuster movie is represented by these emojis? 🦁 👑 🌅 🐗 🐒',
    options: ['Madagascar', 'The Lion King', 'Tarzan', 'The Jungle Book'],
    correctIndex: 1,
    explanation: 'The Lion King! Features the young lion prince, the sunrise over Pride Rock, Pumbaa the warthog, and Rafiki the mandrill.'
  },
  {
    id: 'daily_1',
    dayIndex: 1,
    title: 'Speed Calculation',
    type: 'math',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the ball. How much does the ball cost?',
    options: ['$0.10', '$0.05', '$0.01', '$0.15'],
    correctIndex: 1,
    explanation: 'If the ball costs $0.05 and the bat costs $1.05 ($1.00 more), their total sum is exactly $1.10.'
  },
  {
    id: 'daily_2',
    dayIndex: 2,
    title: 'Astro Trivia',
    type: 'quiz',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'Which planet rotates in the opposite direction (retrograde) compared to most other planets in our solar system?',
    options: ['Mars', 'Venus', 'Saturn', 'Mercury'],
    correctIndex: 1,
    explanation: 'Venus rotates from east to west (clockwise), meaning the Sun rises in the west and sets in the east on Venus!'
  },
  {
    id: 'daily_3',
    dayIndex: 3,
    title: 'Riddle of the Ages',
    type: 'riddle',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'I speak without a mouth and hear without ears. I have no body, but I come alive with wind and walls. What am I?',
    options: ['A cloud', 'An echo', 'A shadow', 'A whistle'],
    correctIndex: 1,
    explanation: 'An echo! It bounces sound waves off walls and physical surfaces.'
  },
  {
    id: 'daily_4',
    dayIndex: 4,
    title: 'Sequence Sleuth',
    type: 'brain',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'Find the missing number in this progressive sequence: 1, 1, 2, 3, 5, 8, 13, ?',
    options: ['18', '20', '21', '24'],
    correctIndex: 2,
    explanation: 'This is the famed Fibonacci sequence where each number is the sum of the previous two: 8 + 13 = 21.'
  },
  {
    id: 'daily_5',
    dayIndex: 5,
    title: 'World Wonder Quiz',
    type: 'quiz',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'Machu Picchu, the 15th-century Inca citadel, is set high in the Andes Mountains of which South American country?',
    options: ['Ecuador', 'Colombia', 'Peru', 'Chile'],
    correctIndex: 2,
    explanation: 'Machu Picchu is situated above the Sacred Valley in Peru.'
  },
  {
    id: 'daily_6',
    dayIndex: 6,
    title: 'Linguistic Oddity',
    type: 'word',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'What unique linguistic property does the sentence "The quick brown fox jumps over a lazy dog" possess?',
    options: [
      'It contains every letter of the English alphabet (Pangram)',
      'Every word rhymes with the next',
      'It reads the exact same backwards (Palindrome)',
      'It uses only words with five letters'
    ],
    correctIndex: 0,
    explanation: 'It is a pangram: a sentence containing every single letter of the English alphabet from A to Z.'
  },
  {
    id: 'daily_7',
    dayIndex: 7,
    title: 'Number Mystery',
    type: 'math',
    difficulty: 'Hard',
    pointsReward: 60,
    prompt: 'If you multiply all the numbers on a standard telephone or smartphone dial pad, what is the product?',
    options: ['362,880', '1,000,000', '0', '45,360'],
    correctIndex: 2,
    explanation: 'The dial pad includes 0 (1, 2, 3, 4, 5, 6, 7, 8, 9, 0). Multiplying anything by zero equals 0!'
  },
  {
    id: 'daily_8',
    dayIndex: 8,
    title: 'Curious Animal Fact',
    type: 'quiz',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'Which mammal is known to have fingerprints that are virtually indistinguishable from human fingerprints?',
    options: ['Koala', 'Chimpanzee', 'Otter', 'Sloth'],
    correctIndex: 0,
    explanation: 'Koala fingerprints are so remarkably similar to human fingerprints that even electron microscope analysis can struggle to distinguish them!'
  },
  {
    id: 'daily_9',
    dayIndex: 9,
    title: 'Emoji Song Code',
    type: 'word',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'Identify this iconic Queen song from the emojis: 👑 📻 👶 🚗 🎸 ⚡',
    options: ['Bohemian Rhapsody', 'Radio Ga Ga', 'Under Pressure', 'We Will Rock You'],
    correctIndex: 1,
    explanation: 'Radio Ga Ga! Written by Roger Taylor, celebrating the golden era of radio broadcasting.'
  },
  {
    id: 'daily_10',
    dayIndex: 10,
    title: 'Geometric Deduction',
    type: 'brain',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'How many triangles are visible in a classic five-pointed star (pentagram) enclosed inside a pentagon?',
    options: ['10', '20', '35', '50'],
    correctIndex: 2,
    explanation: 'A standard pentagram figure with internal lines contains a total of 35 distinct triangles across various scales.'
  },
  {
    id: 'daily_11',
    dayIndex: 11,
    title: 'Ancient Technology',
    type: 'quiz',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'The Antikythera Mechanism, recovered from a shipwreck off Greece, is celebrated as the world\'s oldest known what?',
    options: ['Analog astronomical computer', 'Magnetic navigation compass', 'Steam pressure engine', 'Mechanical clockwork telescope'],
    correctIndex: 0,
    explanation: 'Dating back to ~150-100 BC, it was an intricate bronze geared analog computer predicting astronomical positions and eclipses.'
  },
  {
    id: 'daily_12',
    dayIndex: 12,
    title: 'Double Trouble Logic',
    type: 'riddle',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'What has keys but opens no locks, space but no room, and allows you to enter but never go outside?',
    options: ['A piano', 'A computer keyboard', 'A map', 'A riddle book'],
    correctIndex: 1,
    explanation: 'A computer keyboard! It has keys, a space bar, and an Enter key.'
  },
  {
    id: 'daily_13',
    dayIndex: 13,
    title: 'Clock Angles',
    type: 'math',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'How many times do the hour and minute hands of a standard 12-hour clock overlap in a full 24-hour day?',
    options: ['24 times', '22 times', '20 times', '12 times'],
    correctIndex: 1,
    explanation: 'The hands overlap 11 times every 12 hours (since the 11:00-1:00 period has only 1 overlap at 12:00), totalling 22 times in 24 hours.'
  },
  {
    id: 'daily_14',
    dayIndex: 14,
    title: 'Oceanic Wonder',
    type: 'quiz',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'The Great Barrier Reef, the world\'s largest living coral reef system, lies off the coast of which nation?',
    options: ['Indonesia', 'Australia', 'Fiji', 'Philippines'],
    correctIndex: 1,
    explanation: 'The Great Barrier Reef spans over 2,300 km off the coast of Queensland in northeastern Australia.'
  },
  {
    id: 'daily_15',
    dayIndex: 15,
    title: 'Emoji City Challenge',
    type: 'word',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'Which famous global city is represented by: 🗼 🥐 🍷 🎨 🥖?',
    options: ['Rome', 'Paris', 'Vienna', 'Barcelona'],
    correctIndex: 1,
    explanation: 'Paris! The City of Light, famous for the Eiffel Tower, bakeries, wine, and world-class art at the Louvre.'
  },
  {
    id: 'daily_16',
    dayIndex: 16,
    title: 'Mental Speed Math',
    type: 'math',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'What is 15% of 80?',
    options: ['10', '12', '14', '16'],
    correctIndex: 1,
    explanation: '10% of 80 is 8, and 5% is 4. Therefore 8 + 4 = 12!'
  },
  {
    id: 'daily_17',
    dayIndex: 17,
    title: 'Color Perception',
    type: 'brain',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'When mixing pure colored light in the RGB additive color model, what color is produced by combining Red and Green light?',
    options: ['Yellow', 'Cyan', 'Magenta', 'Brown'],
    correctIndex: 0,
    explanation: 'In additive light mixing, Red + Green = Yellow light (unlike subtractive paint mixing where red and green make brown).'
  },
  {
    id: 'daily_18',
    dayIndex: 18,
    title: 'The Heavy Feather',
    type: 'riddle',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'What weighs more: a kilogram of steel nails or a kilogram of soft feathers?',
    options: ['The steel nails', 'The soft feathers', 'They weigh the exact same', 'Depends on gravity'],
    correctIndex: 2,
    explanation: 'They weigh the exact same: one kilogram is one kilogram regardless of the material!'
  },
  {
    id: 'daily_19',
    dayIndex: 19,
    title: 'Botanical Lore',
    type: 'quiz',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'Scientifically speaking, which of the following is actually a berry?',
    options: ['Strawberry', 'Banana', 'Raspberry', 'Blackberry'],
    correctIndex: 1,
    explanation: 'Botanically, a berry comes from a flower with a single ovary. Bananas, tomatoes, and watermelons are true berries; strawberries are aggregate fruits!'
  },
  {
    id: 'daily_20',
    dayIndex: 20,
    title: 'Calendar Logic',
    type: 'brain',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'Some months have 30 days, and some have 31. How many months have 28 days?',
    options: ['1 month', '2 months', '6 months', 'All 12 months'],
    correctIndex: 3,
    explanation: 'All 12 months have at least 28 days!'
  },
  {
    id: 'daily_21',
    dayIndex: 21,
    title: 'Emoji Book Title',
    type: 'word',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'Decode this literary classic: 🧙‍♂️ 💍 🌋 🧝‍♀️ 🗡️',
    options: ['Harry Potter', 'The Lord of the Rings', 'The Chronicles of Narnia', 'Game of Thrones'],
    correctIndex: 1,
    explanation: 'The Lord of the Rings by J.R.R. Tolkien! Featuring Gandalf, the One Ring, Mount Doom, elves, and legendary blades.'
  },
  {
    id: 'daily_22',
    dayIndex: 22,
    title: 'Speed Physics',
    type: 'quiz',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'Does sound travel faster through air, water, or solid steel?',
    options: ['Air', 'Water', 'Solid steel', 'Same in all mediums'],
    correctIndex: 2,
    explanation: 'Sound travels fastest in dense solids (about 5,960 m/s in steel vs ~1,480 m/s in water and ~343 m/s in air) due to tightly packed molecular bonds.'
  },
  {
    id: 'daily_23',
    dayIndex: 23,
    title: 'The River Bank Mystery',
    type: 'riddle',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'What can run all day and night without legs, has a bed but never sleeps, and has a mouth but never talks?',
    options: ['A clock', 'A river', 'An automobile', 'A waterfall'],
    correctIndex: 1,
    explanation: 'A river! It runs continuously, has a river bed, and has a river mouth where it empties.'
  },
  {
    id: 'daily_24',
    dayIndex: 24,
    title: 'Pattern Grid Master',
    type: 'brain',
    difficulty: 'Hard',
    pointsReward: 60,
    prompt: 'If CAT = 24 (3+1+20), and DOG = 26 (4+15+7), what is the letter value sum of SUN (19+21+14)?',
    options: ['52', '54', '56', '58'],
    correctIndex: 1,
    explanation: 'S = 19, U = 21, N = 14. Adding them together: 19 + 21 + 14 = 54.'
  },
  {
    id: 'daily_25',
    dayIndex: 25,
    title: 'Historic Discovery',
    type: 'quiz',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'Alexander Fleming famously discovered the first modern antibiotic, Penicillin, in 1928 from what organism?',
    options: ['A desert cactus', 'A fungal mold (Penicillium)', 'Sea sponge bacteria', 'Fermented barley'],
    correctIndex: 1,
    explanation: 'Fleming observed that a green mold contamination (Penicillium notatum) had killed surrounding Staphylococcus bacteria colonies on a petri dish.'
  },
  {
    id: 'daily_26',
    dayIndex: 26,
    title: 'Coin Weighing Teaser',
    type: 'brain',
    difficulty: 'Hard',
    pointsReward: 60,
    prompt: 'You have 9 identical-looking gold coins, but one is counterfeit and slightly lighter. Using a two-pan balance scale, what is the minimum weighings needed to guarantee finding the fake?',
    options: ['1 weighing', '2 weighings', '3 weighings', '4 weighings'],
    correctIndex: 1,
    explanation: 'Divide into 3 groups of 3. Weigh group A against group B. The lighter group holds the fake (if balanced, group C has it). Weigh 2 coins from that group: in just 2 weighings, the light coin is found!'
  },
  {
    id: 'daily_27',
    dayIndex: 27,
    title: 'Language Roots',
    type: 'quiz',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'What ancient classical language is the ancestor of Romance languages including Spanish, French, Italian, and Portuguese?',
    options: ['Ancient Greek', 'Latin', 'Sanskrit', 'Aramaic'],
    correctIndex: 1,
    explanation: 'Vulgar Latin spoken across the Roman Empire evolved over centuries into the modern Romance language family.'
  },
  {
    id: 'daily_28',
    dayIndex: 28,
    title: 'The Barber\'s Shop Paradox',
    type: 'riddle',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'You enter a town with only two barbers. Barber A has neatly styled hair and a spotless shop. Barber B has disheveled hair and a messy shop. Who should cut your hair?',
    options: ['Barber A', 'Barber B', 'Neither', 'Cut your own hair'],
    correctIndex: 1,
    explanation: 'Barber B! In a two-barber town, each barber cuts the other\'s hair. Barber B gave Barber A that handsome haircut!'
  },
  {
    id: 'daily_29',
    dayIndex: 29,
    title: 'Olympic Ring Symbolism',
    type: 'quiz',
    difficulty: 'Easy',
    pointsReward: 50,
    prompt: 'How many interlocking rings are featured on the official Olympic flag?',
    options: ['4', '5', '6', '7'],
    correctIndex: 1,
    explanation: 'The five interlocking rings represent the five inhabited continents united by Olympism: Africa, the Americas, Asia, Europe, and Oceania.'
  },
  {
    id: 'daily_30',
    dayIndex: 30,
    title: 'Month Finale Mystery',
    type: 'word',
    difficulty: 'Medium',
    pointsReward: 50,
    prompt: 'What occurs once in every minute, twice in every moment, but never in a thousand years?',
    options: ['The letter M', 'A breath', 'A heartbeat', 'A second'],
    correctIndex: 0,
    explanation: 'The letter "M"! Found once in "Minute", twice in "MoMent", and 0 times in "thousand years".'
  }
];

/**
 * Returns today's deterministic challenge based on the date.
 * Guarantees the same challenge for all users on the same calendar day.
 */
export function getTodayChallenge(date: Date = new Date()): DailyChallenge {
  const day = date.getDate(); // 1 to 31
  const month = date.getMonth(); // 0 to 11
  const year = date.getFullYear();
  // Deterministic seed:
  const seed = (year * 372 + (month + 1) * 31 + day) % DAILY_CHALLENGES.length;
  return DAILY_CHALLENGES[seed];
}

export function getTodayDateString(date: Date = new Date()): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}
