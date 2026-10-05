import { QuizCategoryInfo, QuizQuestion } from '../types';

export const QUIZ_CATEGORIES: QuizCategoryInfo[] = [
  {
    id: 'general',
    name: 'General Knowledge',
    description: 'World wonders, flags, geography, and fun global facts.',
    iconName: 'Globe',
    questionCount: 10,
    badgeColor: 'text-blue-500 bg-blue-50 dark:bg-blue-950/40'
  },
  {
    id: 'science',
    name: 'Science & Nature',
    description: 'Physics mysteries, astronomy, biology, and the natural world.',
    iconName: 'Atom',
    questionCount: 10,
    badgeColor: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-950/40'
  },
  {
    id: 'technology',
    name: 'Technology & AI',
    description: 'Computers, internet lore, smart devices, and future innovations.',
    iconName: 'Cpu',
    questionCount: 10,
    badgeColor: 'text-indigo-500 bg-indigo-50 dark:bg-indigo-950/40'
  },
  {
    id: 'food',
    name: 'Food & Culinary',
    description: 'Spices, world dishes, baking trivia, and kitchen secrets.',
    iconName: 'UtensilsCrossed',
    questionCount: 10,
    badgeColor: 'text-amber-500 bg-amber-50 dark:bg-amber-950/40'
  },
  {
    id: 'entertainment',
    name: 'Entertainment & Cinema',
    description: 'Iconic movies, streaming shows, chart-topping music, and pop culture.',
    iconName: 'Film',
    questionCount: 10,
    badgeColor: 'text-pink-500 bg-pink-50 dark:bg-pink-950/40'
  },
  {
    id: 'india',
    name: 'Incredible India',
    description: 'Heritage, festivals, rivers, architecture, and cultural wonders.',
    iconName: 'Landmark',
    questionCount: 10,
    badgeColor: 'text-orange-500 bg-orange-50 dark:bg-orange-950/40'
  },
  {
    id: 'sports',
    name: 'Sports & Olympics',
    description: 'Cricket legends, football cups, tennis grand slams, and records.',
    iconName: 'Trophy',
    questionCount: 10,
    badgeColor: 'text-purple-500 bg-purple-50 dark:bg-purple-950/40'
  },
  {
    id: 'history',
    name: 'World History',
    description: 'Ancient empires, historic treaties, legendary explorers, and eras.',
    iconName: 'Hourglass',
    questionCount: 10,
    badgeColor: 'text-rose-500 bg-rose-50 dark:bg-rose-950/40'
  }
];

export const QUIZ_QUESTIONS: Record<string, QuizQuestion[]> = {
  general: [
    {
      id: 'gk_1',
      category: 'general',
      question: 'Which country is home to the driest non-polar desert in the world, the Atacama?',
      options: ['Peru', 'Chile', 'Namibia', 'Australia'],
      correctIndex: 1,
      explanation: 'The Atacama Desert in northern Chile is considered the driest non-polar desert on Earth, with some weather stations never recording any rain.'
    },
    {
      id: 'gk_2',
      category: 'general',
      question: 'What is the only sea on Earth that has no land boundaries?',
      options: ['Sargasso Sea', 'Red Sea', 'Baltic Sea', 'Coral Sea'],
      correctIndex: 0,
      explanation: 'The Sargasso Sea is bounded by four ocean currents in the North Atlantic rather than coastline borders.'
    },
    {
      id: 'gk_3',
      category: 'general',
      question: 'Which European city is famously situated across two different continents?',
      options: ['Athens', 'Moscow', 'Istanbul', 'Baku'],
      correctIndex: 2,
      explanation: 'Istanbul straddles the Bosphorus Strait, separating Europe from Asia.'
    },
    {
      id: 'gk_4',
      category: 'general',
      question: 'Which of the following countries has three official capital cities?',
      options: ['Bolivia', 'South Africa', 'Switzerland', 'Malaysia'],
      correctIndex: 1,
      explanation: 'South Africa has three capitals: Pretoria (executive), Bloemfontein (judicial), and Cape Town (legislative).'
    },
    {
      id: 'gk_5',
      category: 'general',
      question: 'What is the largest island in the Mediterranean Sea?',
      options: ['Sardinia', 'Cyprus', 'Sicily', 'Crete'],
      correctIndex: 2,
      explanation: 'Sicily is the largest island in the Mediterranean Sea with an area of about 25,711 square kilometers.'
    },
    {
      id: 'gk_6',
      category: 'general',
      question: 'Which international organization was founded in 1945 in San Francisco?',
      options: ['World Health Organization', 'United Nations', 'Red Cross', 'World Bank'],
      correctIndex: 1,
      explanation: 'The Charter of the United Nations was drafted and signed at the San Francisco Conference in June 1945.'
    },
    {
      id: 'gk_7',
      category: 'general',
      question: 'Which country is known as the "Land of the Midnight Sun"?',
      options: ['Norway', 'Iceland', 'Canada', 'Finland'],
      correctIndex: 0,
      explanation: 'Norway, particularly its northern regions inside the Arctic Circle, experiences continuous sunlight during summer months.'
    },
    {
      id: 'gk_8',
      category: 'general',
      question: 'What is the official currency of Japan?',
      options: ['Won', 'Yuan', 'Yen', 'Ringgit'],
      correctIndex: 2,
      explanation: 'The Japanese Yen (JPY) is the official currency of Japan and one of the world\'s most traded currencies.'
    },
    {
      id: 'gk_9',
      category: 'general',
      question: 'Which natural wonder is located between the US state of New York and the Canadian province of Ontario?',
      options: ['Grand Canyon', 'Niagara Falls', 'Angel Falls', 'Victoria Falls'],
      correctIndex: 1,
      explanation: 'Niagara Falls consists of three waterfalls straddling the international border between the USA and Canada.'
    },
    {
      id: 'gk_10',
      category: 'general',
      question: 'Mount Kilimanjaro, the highest peak in Africa, is located in which country?',
      options: ['Kenya', 'Tanzania', 'Uganda', 'Ethiopia'],
      correctIndex: 1,
      explanation: 'Mount Kilimanjaro is a dormant volcano situated in northeastern Tanzania.'
    }
  ],

  science: [
    {
      id: 'sci_1',
      category: 'science',
      question: 'What is the most abundant gas found in the Earth\'s atmosphere?',
      options: ['Oxygen', 'Carbon Dioxide', 'Nitrogen', 'Argon'],
      correctIndex: 2,
      explanation: 'Nitrogen makes up roughly 78% of Earth\'s atmosphere, while oxygen constitutes approximately 21%.'
    },
    {
      id: 'sci_2',
      category: 'science',
      question: 'What is the chemical symbol for the element Gold?',
      options: ['Ag', 'Au', 'Fe', 'Gd'],
      correctIndex: 1,
      explanation: 'Au comes from the Latin word "Aurum", which translates to shining dawn.'
    },
    {
      id: 'sci_3',
      category: 'science',
      question: 'Which planet in our solar system has the most prominent and extensive ring system?',
      options: ['Jupiter', 'Saturn', 'Uranus', 'Neptune'],
      correctIndex: 1,
      explanation: 'Saturn possesses the most extensive and visible ring system, composed mostly of ice particles and rocky debris.'
    },
    {
      id: 'sci_4',
      category: 'science',
      question: 'Roughly how many minutes does light from the Sun take to reach the Earth?',
      options: ['2 minutes', '5 minutes', '8 minutes', '15 minutes'],
      correctIndex: 2,
      explanation: 'Light travelling at ~300,000 km/s takes about 8 minutes and 20 seconds to traverse the 150 million km distance.'
    },
    {
      id: 'sci_5',
      category: 'science',
      question: 'Which cellular organelle is famously known as the "powerhouse of the cell"?',
      options: ['Nucleus', 'Mitochondria', 'Ribosome', 'Endoplasmic Reticulum'],
      correctIndex: 1,
      explanation: 'Mitochondria generate most of the chemical energy needed to power biochemical reactions in the form of ATP.'
    },
    {
      id: 'sci_6',
      category: 'science',
      question: 'What is the boiling point of pure water at sea level under standard atmospheric pressure?',
      options: ['90°C', '100°C', '110°C', '212°C'],
      correctIndex: 1,
      explanation: 'At 1 atmosphere of standard pressure, pure water boils at exactly 100 degrees Celsius (or 212° Fahrenheit).'
    },
    {
      id: 'sci_7',
      category: 'science',
      question: 'Which part of the human eye contains photoreceptor cells called rods and cones?',
      options: ['Cornea', 'Iris', 'Retina', 'Pupil'],
      correctIndex: 2,
      explanation: 'The retina is the light-sensitive layer at the back of the eyeball containing rods (night vision) and cones (color vision).'
    },
    {
      id: 'sci_8',
      category: 'science',
      question: 'What type of eclipse occurs when the Earth passes directly between the Sun and the Moon?',
      options: ['Solar Eclipse', 'Lunar Eclipse', 'Annular Eclipse', 'Hybrid Eclipse'],
      correctIndex: 1,
      explanation: 'In a Lunar Eclipse, the Earth casts its shadow across the surface of the Moon during a full moon.'
    },
    {
      id: 'sci_9',
      category: 'science',
      question: 'What is the hardest naturally occurring mineral known on Earth?',
      options: ['Quartz', 'Topaz', 'Corundum', 'Diamond'],
      correctIndex: 3,
      explanation: 'Diamond rates a maximum score of 10 on the Mohs hardness scale due to its tetrahedral carbon crystal lattice.'
    },
    {
      id: 'sci_10',
      category: 'science',
      question: 'Which fundamental force keeps planets in orbit around the Sun?',
      options: ['Electromagnetism', 'Gravity', 'Strong Nuclear Force', 'Centrifugal Force'],
      correctIndex: 1,
      explanation: 'Gravity is the attractive force that keeps celestial bodies bound in orbital paths around larger masses.'
    }
  ],

  technology: [
    {
      id: 'tech_1',
      category: 'technology',
      question: 'What does "HTTP" stand for in web addresses?',
      options: [
        'HyperText Transfer Protocol',
        'High Transfer Tech Path',
        'Hyperlink Text Translation Portal',
        'Home Text Traffic Protocol'
      ],
      correctIndex: 0,
      explanation: 'HyperText Transfer Protocol is the foundational protocol used by the World Wide Web to distribute hypermedia documents.'
    },
    {
      id: 'tech_2',
      category: 'technology',
      question: 'Which company developed the open-source Android operating system before being acquired by Google in 2005?',
      options: ['Motorola', 'Android Inc.', 'Sun Microsystems', 'Palm Inc.'],
      correctIndex: 1,
      explanation: 'Android Inc. was co-founded by Andy Rubin, Rich Miner, Nick Sears, and Chris White in 2003 before Google bought it in 2005.'
    },
    {
      id: 'tech_3',
      category: 'technology',
      question: 'In computer programming, what does the abbreviation "API" stand for?',
      options: [
        'Application Programming Interface',
        'Automated Program Integration',
        'Advanced Process Implementation',
        'Applied Parallel Interface'
      ],
      correctIndex: 0,
      explanation: 'An Application Programming Interface defines rules and mechanisms through which different software applications communicate.'
    },
    {
      id: 'tech_4',
      category: 'technology',
      question: 'Who is widely credited with inventing the World Wide Web in 1989 at CERN?',
      options: ['Alan Turing', 'Tim Berners-Lee', 'Vint Cerf', 'Steve Wozniak'],
      correctIndex: 1,
      explanation: 'British scientist Sir Tim Berners-Lee invented the World Wide Web in 1989 while working at CERN.'
    },
    {
      id: 'tech_5',
      category: 'technology',
      question: 'What was the first commercial microprocessor introduced by Intel in 1971?',
      options: ['Intel 8086', 'Intel 4004', 'Intel Pentium', 'Intel 286'],
      correctIndex: 1,
      explanation: 'The Intel 4004 was a 4-bit central processing unit and the first commercially produced microprocessor.'
    },
    {
      id: 'tech_6',
      category: 'technology',
      question: 'What does "SSD" stand for in modern computer storage?',
      options: [
        'Super Speed Drive',
        'Solid State Drive',
        'System Storage Device',
        'Synchronous Silicon Disk'
      ],
      correctIndex: 1,
      explanation: 'Solid State Drives use flash memory with no moving parts, delivering vastly faster read/write speeds than traditional HDDs.'
    },
    {
      id: 'tech_7',
      category: 'technology',
      question: 'Which programming language was created by Brendan Eich in just 10 days in May 1995?',
      options: ['Python', 'Ruby', 'JavaScript', 'PHP'],
      correctIndex: 2,
      explanation: 'JavaScript was created by Brendan Eich at Netscape in May 1995, originally named Mocha and later LiveScript.'
    },
    {
      id: 'tech_8',
      category: 'technology',
      question: 'What is the primary function of a DNS (Domain Name System) server?',
      options: [
        'Translating human domain names into numerical IP addresses',
        'Encrypting email transmission data',
        'Hosting database backup files',
        'Scanning web traffic for viruses'
      ],
      correctIndex: 0,
      explanation: 'DNS functions like the phonebook of the internet, mapping human-friendly names (e.g. google.com) to machine IP addresses.'
    },
    {
      id: 'tech_9',
      category: 'technology',
      question: 'In Artificial Intelligence, what does the "T" in GPT stand for?',
      options: ['Thinking', 'Transformer', 'Testing', 'Transfer'],
      correctIndex: 1,
      explanation: 'GPT stands for Generative Pre-trained Transformer, based on the neural network architecture introduced in 2017.'
    },
    {
      id: 'tech_10',
      category: 'technology',
      question: 'Which port number is standard for secure web traffic using HTTPS?',
      options: ['Port 80', 'Port 21', 'Port 443', 'Port 8080'],
      correctIndex: 2,
      explanation: 'Port 443 is the standard network port reserved for encrypted HTTPS communication.'
    }
  ],

  food: [
    {
      id: 'food_1',
      category: 'food',
      question: 'What gives sourdough bread its distinctive tangy taste?',
      options: [
        'Lactic acid bacteria and wild yeasts',
        'Added white vinegar',
        'Baking powder fermentation',
        'Sour cream glaze'
      ],
      correctIndex: 0,
      explanation: 'A symbiotic culture of wild yeasts and lactic acid bacteria produces acetic and lactic acids, imparting the sourdough tang.'
    },
    {
      id: 'food_2',
      category: 'food',
      question: 'Saffron, the world\'s most expensive spice by weight, is harvested from which flower?',
      options: ['Hibiscus', 'Crocus sativus', 'Marigold', 'Lavender'],
      correctIndex: 1,
      explanation: 'Saffron threads are the delicate dried crimson stigmas of Crocus sativus, needing thousands of blossoms for a single ounce.'
    },
    {
      id: 'food_3',
      category: 'food',
      question: 'Which nutrient is vital for making bread dough elastic and chewy?',
      options: ['Gluten', 'Lipids', 'Starch', 'Cellulose'],
      correctIndex: 0,
      explanation: 'Gluten is a group of proteins found in wheat that forms an elastic network trapping gas bubbles during rising.'
    },
    {
      id: 'food_4',
      category: 'food',
      question: 'What is the Japanese term for the fifth taste category alongside sweet, sour, salty, and bitter?',
      options: ['Wasabi', 'Teriyaki', 'Umami', 'Miso'],
      correctIndex: 2,
      explanation: 'Umami signifies a savory, brothy richness typically stimulated by glutamate, identified by Kikunae Ikeda in 1908.'
    },
    {
      id: 'food_5',
      category: 'food',
      question: 'Which of the following dishes originated in Valencia, Spain?',
      options: ['Paella', 'Tiramisu', 'Croissant', 'Moussaka'],
      correctIndex: 0,
      explanation: 'Paella originated in the agricultural regions around Valencia, traditionally made with rice, saffron, and savory meats or seafood.'
    },
    {
      id: 'food_6',
      category: 'food',
      question: 'What ingredient makes a regular cappuccino different from a latte?',
      options: [
        'Equal thirds of espresso, steamed milk, and thick milk foam',
        'Added cocoa powder in the coffee base',
        'Double shots of vanilla syrup',
        'Using cold brew coffee instead of espresso'
      ],
      correctIndex: 0,
      explanation: 'A traditional cappuccino features equal proportions of espresso, steamed milk, and a thick airy crown of milk foam.'
    },
    {
      id: 'food_7',
      category: 'food',
      question: 'What type of pasta translates in Italian to "little ribbons"?',
      options: ['Fettuccine', 'Spaghetti', 'Rigatoni', 'Farfalle'],
      correctIndex: 0,
      explanation: 'Fettuccine literally translates to "little ribbons" in Italian, describing its flat, ribbon-like cut.'
    },
    {
      id: 'food_8',
      category: 'food',
      question: 'Which active compound gives chili peppers their fiery heat?',
      options: ['Piperine', 'Capsaicin', 'Curcumin', 'Allicin'],
      correctIndex: 1,
      explanation: 'Capsaicin stimulates pain receptors in the mucous membranes that perceive heat, measured in Scoville Heat Units.'
    },
    {
      id: 'food_9',
      category: 'food',
      question: 'Which fruit contains an enzyme called bromelain that breaks down protein?',
      options: ['Pineapple', 'Banana', 'Mango', 'Peach'],
      correctIndex: 0,
      explanation: 'Pineapple contains bromelain, a proteolytic enzyme frequently used as a natural meat tenderizer.'
    },
    {
      id: 'food_10',
      category: 'food',
      question: 'From which part of the vanilla orchid plant is pure vanilla extract derived?',
      options: ['The roots', 'The seed pods', 'The petals', 'The bark'],
      correctIndex: 1,
      explanation: 'Vanilla extract is prepared by curing and macerating the elongated seed pods (beans) of Vanilla orchids.'
    }
  ],

  entertainment: [
    {
      id: 'ent_1',
      category: 'entertainment',
      question: 'Which film won the Academy Award for Best Picture in 2020, becoming the first non-English film to do so?',
      options: ['Parasite', 'Roma', 'Amélie', 'Life is Beautiful'],
      correctIndex: 0,
      explanation: 'Bong Joon-ho\'s South Korean thriller "Parasite" made Oscars history in 2020 by winning both Best International Film and Best Picture.'
    },
    {
      id: 'ent_2',
      category: 'entertainment',
      question: 'Who played the role of Tony Stark / Iron Man across 11 movies in the Marvel Cinematic Universe?',
      options: ['Chris Evans', 'Robert Downey Jr.', 'Mark Ruffalo', 'Hugh Jackman'],
      correctIndex: 1,
      explanation: 'Robert Downey Jr. spearheaded the MCU starting with 2008\'s Iron Man up to Avengers: Endgame.'
    },
    {
      id: 'ent_3',
      category: 'entertainment',
      question: 'Which band produced the bestselling 1973 concept album "The Dark Side of the Moon"?',
      options: ['Led Zeppelin', 'Pink Floyd', 'Queen', 'The Rolling Stones'],
      correctIndex: 1,
      explanation: 'Pink Floyd\'s iconic album stayed on the Billboard top charts for an astonishing record of 741 consecutive weeks.'
    },
    {
      id: 'ent_4',
      category: 'entertainment',
      question: 'What is the name of the fictional kingdom where most of the HBO series "Game of Thrones" takes place?',
      options: ['Narnia', 'Middle-earth', 'Westeros', 'Gondor'],
      correctIndex: 2,
      explanation: 'Westeros is the primary continent and home to the Seven Kingdoms in George R.R. Martin\'s fantasy epic.'
    },
    {
      id: 'ent_5',
      category: 'entertainment',
      question: 'Which animated movie features the hit song "Let It Go"?',
      options: ['Moana', 'Frozen', 'Tangled', 'Brave'],
      correctIndex: 1,
      explanation: '"Let It Go", sung by Idina Menzel as Queen Elsa, won the Academy Award for Best Original Song in 2014.'
    },
    {
      id: 'ent_6',
      category: 'entertainment',
      question: 'Who composed the timeless film scores for "Star Wars", "Jurassic Park", and "Indiana Jones"?',
      options: ['Hans Zimmer', 'John Williams', 'Ennio Morricone', 'Howard Shore'],
      correctIndex: 1,
      explanation: 'Legendary composer John Williams has earned over 50 Oscar nominations for his memorable orchestral scores.'
    },
    {
      id: 'ent_7',
      category: 'entertainment',
      question: 'In the sitcom "Friends", what is the name of the coffee shop where the gang regularly gathers?',
      options: ['Monk\'s Diner', 'Central Perk', 'Cafe Nervosa', 'Luke\'s Diner'],
      correctIndex: 1,
      explanation: 'Central Perk, located in Greenwich Village with its iconic orange velvet couch, was the main hangout in "Friends".'
    },
    {
      id: 'ent_8',
      category: 'entertainment',
      question: 'Which music video was the first to reach 1 billion views on YouTube in December 2012?',
      options: ['Baby by Justin Bieber', 'Gangnam Style by PSY', 'Despacito by Luis Fonsi', 'Roar by Katy Perry'],
      correctIndex: 1,
      explanation: 'South Korean artist PSY\'s viral smash "Gangnam Style" shattered YouTube view counts to pass 1 billion views in 2012.'
    },
    {
      id: 'ent_9',
      category: 'entertainment',
      question: 'What classic board game features properties named Boardwalk and Park Place?',
      options: ['Scrabble', 'Clue', 'Monopoly', 'Risk'],
      correctIndex: 2,
      explanation: 'Boardwalk and Park Place are the two most expensive dark-blue properties in the standard American Monopoly edition.'
    },
    {
      id: 'ent_10',
      category: 'entertainment',
      question: 'Which video game character is affectionately known as the "Blue Blur"?',
      options: ['Mega Man', 'Sonic the Hedgehog', 'Pac-Man', 'Crash Bandicoot'],
      correctIndex: 1,
      explanation: 'Sega\'s supersonic mascot Sonic the Hedgehog is widely called the Blue Blur.'
    }
  ],

  india: [
    {
      id: 'ind_1',
      category: 'india',
      question: 'Which Indian city is known as the "Pink City"?',
      options: ['Jodhpur', 'Jaipur', 'Udaipur', 'Amritsar'],
      correctIndex: 1,
      explanation: 'Jaipur was painted terracotta pink in 1876 under Maharaja Sawai Ram Singh to welcome the Prince of Wales, a tradition preserved to this day.'
    },
    {
      id: 'ind_2',
      category: 'india',
      question: 'The Sun Temple at Konark in Odisha is designed in the shape of what majestic object?',
      options: ['A lotus blossom', 'A colossal stone chariot', 'A celestial bow', 'A resting peacock'],
      correctIndex: 1,
      explanation: 'The 13th-century Konark Sun Temple represents the chariot of Surya, complete with 24 carved stone wheels pulled by seven horses.'
    },
    {
      id: 'ind_3',
      category: 'india',
      question: 'Which river is considered the longest river flowing entirely within India?',
      options: ['Godavari', 'Yamuna', 'Narmada', 'Kaveri'],
      correctIndex: 0,
      explanation: 'The Godavari River, often called "Dakshin Ganga", is the second longest river in India after the Ganga and the longest flowing completely within its borders.'
    },
    {
      id: 'ind_4',
      category: 'india',
      question: 'In which state is the ancient Buddhist site and university ruins of Nalanda located?',
      options: ['Uttar Pradesh', 'Bihar', 'Madhya Pradesh', 'Odisha'],
      correctIndex: 1,
      explanation: 'Nalanda Mahavihara, an internationally renowned ancient seat of learning, is situated near Rajgir in Bihar.'
    },
    {
      id: 'ind_5',
      category: 'india',
      question: 'What is the classical dance form that originated in the southern state of Kerala, known for vivid facial expressions and elaborate makeup?',
      options: ['Kathakali', 'Bharatanatyam', 'Odissi', 'Kathak'],
      correctIndex: 0,
      explanation: 'Kathakali is distinguished by dramatic makeup, towering headdresses, and intricate mudras native to Kerala.'
    },
    {
      id: 'ind_6',
      category: 'india',
      question: 'Which Indian space mission achieved a historic soft landing near the Moon\'s south pole in August 2023?',
      options: ['Mangalyaan', 'Chandrayaan-1', 'Chandrayaan-3', 'Aditya-L1'],
      correctIndex: 2,
      explanation: 'ISRO\'s Chandrayaan-3 successfully touched down on August 23, 2023, making India the first nation to land near the lunar south pole.'
    },
    {
      id: 'ind_7',
      category: 'india',
      question: 'Which monument was constructed in Mumbai to commemorate the landing of King George V in 1911?',
      options: ['India Gate', 'Gateway of India', 'Victoria Memorial', 'Charminar'],
      correctIndex: 1,
      explanation: 'The Gateway of India was built at Apollo Bunder in Mumbai to commemorate the arrival of King George V and Queen Mary in 1911.'
    },
    {
      id: 'ind_8',
      category: 'india',
      question: 'Which mountain pass in Ladakh is one of the highest motorable roads in the world, with Umling La surpassing it recently?',
      options: ['Khardung La', 'Rohtang Pass', 'Nathu La', 'Zoji La'],
      correctIndex: 0,
      explanation: 'Khardung La in Ladakh has long been celebrated by road-trippers and cyclists as a premier high-altitude motorable pass.'
    },
    {
      id: 'ind_9',
      category: 'india',
      question: 'Which spice capital state of India produces the vast majority of black pepper and cardamom?',
      options: ['Kerala', 'Gujarat', 'Assam', 'Punjab'],
      correctIndex: 0,
      explanation: 'Kerala has drawn international spice traders for millennia, earning its renown as the Spice Garden of India.'
    },
    {
      id: 'ind_10',
      category: 'india',
      question: 'Who composed India\'s national anthem, "Jana Gana Mana"?',
      options: ['Bankim Chandra Chatterjee', 'Rabindranath Tagore', 'Sarojini Naidu', 'Subhas Chandra Bose'],
      correctIndex: 1,
      explanation: 'Nobel laureate Rabindranath Tagore penned "Jana Gana Mana", first sung in 1911 and adopted as the National Anthem in 1950.'
    }
  ],

  sports: [
    {
      id: 'spt_1',
      category: 'sports',
      question: 'How many players are on the field for one team in a standard cricket match?',
      options: ['9', '10', '11', '12'],
      correctIndex: 2,
      explanation: 'A cricket team fields 11 players including the bowler and wicket-keeper during an innings.'
    },
    {
      id: 'spt_2',
      category: 'sports',
      question: 'Which country won the inaugural FIFA Men\'s World Cup in 1930?',
      options: ['Brazil', 'Uruguay', 'Argentina', 'Italy'],
      correctIndex: 1,
      explanation: 'Uruguay hosted and won the very first FIFA World Cup in 1930, defeating Argentina 4-2 in the final in Montevideo.'
    },
    {
      id: 'spt_3',
      category: 'sports',
      question: 'In tennis, what grand slam tournament is contested on traditional grass courts?',
      options: ['Australian Open', 'French Open', 'Wimbledon', 'US Open'],
      correctIndex: 2,
      explanation: 'Wimbledon, held at the All England Club in London, is the oldest Grand Slam and the only one played on natural grass.'
    },
    {
      id: 'spt_4',
      category: 'sports',
      question: 'Which sprinter holds the men\'s 100m world record time of 9.58 seconds set in Berlin in 2009?',
      options: ['Tyson Gay', 'Asafa Powell', 'Usain Bolt', 'Yohan Blake'],
      correctIndex: 2,
      explanation: 'Jamaica\'s Usain Bolt shattered the 100m sprint world record at 9.58 seconds at the 2009 World Athletics Championships.'
    },
    {
      id: 'spt_5',
      category: 'sports',
      question: 'In basketball, how many points is a shot worth if made from behind the arc line?',
      options: ['1 point', '2 points', '3 points', '4 points'],
      correctIndex: 2,
      explanation: 'Field goals released from outside the designated three-point perimeter arc yield three points.'
    },
    {
      id: 'spt_6',
      category: 'sports',
      question: 'Who was the first cricketer in international history to score 100 international centuries?',
      options: ['Ricky Ponting', 'Sachin Tendulkar', 'Virat Kohli', 'Brian Lara'],
      correctIndex: 1,
      explanation: 'Sachin Tendulkar completed his historic 100th international century in March 2012 against Bangladesh.'
    },
    {
      id: 'spt_7',
      category: 'sports',
      question: 'How long is an Olympic marathon race in kilometers?',
      options: ['40 km', '42.195 km', '45 km', '50 km'],
      correctIndex: 1,
      explanation: 'The official marathon distance is 42.195 kilometers (26 miles and 385 yards), standardized since the 1908 London Olympics.'
    },
    {
      id: 'spt_8',
      category: 'sports',
      question: 'Which country won the ICC Men\'s T20 World Cup in 2024 held in the USA and West Indies?',
      options: ['South Africa', 'India', 'Australia', 'England'],
      correctIndex: 1,
      explanation: 'India defeated South Africa in a thrilling final in Barbados to win the 2024 ICC Men\'s T20 World Cup undefeated.'
    },
    {
      id: 'spt_9',
      category: 'sports',
      question: 'What is the regulation height of a basketball rim from the floor in professional leagues?',
      options: ['9 feet (2.74 m)', '10 feet (3.05 m)', '11 feet (3.35 m)', '12 feet (3.66 m)'],
      correctIndex: 1,
      explanation: 'The regulation hoop height across FIBA, NBA, and college basketball has been 10 feet since James Naismith established the sport in 1891.'
    },
    {
      id: 'spt_10',
      category: 'sports',
      question: 'In badminton, what is the feathered projectile called that players hit back and forth?',
      options: ['Birdie / Shuttlecock', 'Featherball', 'Puck', 'Dart'],
      correctIndex: 0,
      explanation: 'The feathered or synthetic cone-shaped projectile is called a shuttlecock (or colloquially, a birdie).'
    }
  ],

  history: [
    {
      id: 'his_1',
      category: 'history',
      question: 'Which ancient wonder was located in Alexandria, Egypt and guided sailors into harbor?',
      options: ['Colossus of Rhodes', 'Lighthouse of Alexandria', 'Hanging Gardens', 'Temple of Artemis'],
      correctIndex: 1,
      explanation: 'The Pharos of Alexandria was built by the Ptolemaic Kingdom around 280 BC and stood over 100 meters tall.'
    },
    {
      id: 'his_2',
      category: 'history',
      question: 'In what year did the historic Apollo 11 mission land the first humans on the Moon?',
      options: ['1965', '1969', '1971', '1973'],
      correctIndex: 1,
      explanation: 'Neil Armstrong and Buzz Aldrin stepped onto the lunar surface on July 20, 1969.'
    },
    {
      id: 'his_3',
      category: 'history',
      question: 'Which legendary queen was the last active ruler of the Ptolemaic Kingdom of Egypt?',
      options: ['Nefertiti', 'Hatshepsut', 'Cleopatra VII', 'Sobekneferu'],
      correctIndex: 2,
      explanation: 'Cleopatra VII ruled until 30 BC, after which Egypt became a province of the Roman Empire.'
    },
    {
      id: 'his_4',
      category: 'history',
      question: 'The Magna Carta, a cornerstone of constitutional law, was signed by King John of England in which year?',
      options: ['1066', '1215', '1492', '1776'],
      correctIndex: 1,
      explanation: 'Barons forced King John to grant the Magna Carta at Runnymede in 1215, limiting arbitrary royal power.'
    },
    {
      id: 'his_5',
      category: 'history',
      question: 'Who was the first Emperor of a unified China, known for his terracotta army?',
      options: ['Kublai Khan', 'Qin Shi Huang', 'Sun Tzu', 'Emperor Wu'],
      correctIndex: 1,
      explanation: 'Qin Shi Huang unified China in 221 BC, standardizing script, currency, and building early Great Wall sections.'
    },
    {
      id: 'his_6',
      category: 'history',
      question: 'The Renaissance movement is generally considered to have begun in which European country?',
      options: ['France', 'Italy', 'England', 'Germany'],
      correctIndex: 1,
      explanation: 'The Renaissance emerged in 14th-century Italy, especially Florence, reviving classical art, literature, and humanist philosophy.'
    },
    {
      id: 'his_7',
      category: 'history',
      question: 'Which wall, built during the Cold War in 1961, divided a famous city until its fall in 1989?',
      options: ['The Great Wall', 'The Berlin Wall', 'Hadrian\'s Wall', 'Antonine Wall'],
      correctIndex: 1,
      explanation: 'The Berlin Wall separated East and West Berlin for 28 years until peaceful protests brought it down in November 1989.'
    },
    {
      id: 'his_8',
      category: 'history',
      question: 'Who was the famous Macedonian king and military commander who created one of the largest empires in ancient history by age 30?',
      options: ['Julius Caesar', 'Alexander the Great', 'Pericles', 'Leonidas'],
      correctIndex: 1,
      explanation: 'Alexander the Great conquered territories from Greece to northwestern India before dying in Babylon in 323 BC.'
    },
    {
      id: 'his_9',
      category: 'history',
      question: 'In what year did the United States formally declare its independence?',
      options: ['1770', '1776', '1783', '1789'],
      correctIndex: 1,
      explanation: 'The Continental Congress adopted the Declaration of Independence on July 4, 1776 in Philadelphia.'
    },
    {
      id: 'his_10',
      category: 'history',
      question: 'Which ancient trade network linked China and East Asia with the Mediterranean for centuries?',
      options: ['The Amber Road', 'The Silk Road', 'The Spice Route', 'The Royal Road'],
      correctIndex: 1,
      explanation: 'The Silk Road was an expansive network of overland and maritime routes facilitating commerce and cultural exchange.'
    }
  ]
};
