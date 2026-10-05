import { MealRecipe } from '../types';

export const RECIPES_DATA: MealRecipe[] = [
  // --- VEG INDIAN ---
  {
    id: 'rec_1',
    title: 'Aloo Poha (Flattened Rice Delight)',
    description: 'A light, fluffy, turmeric-infused breakfast staple with roasted peanuts and fresh cilantro.',
    dietary: 'veg',
    mealTime: 'breakfast',
    cuisine: 'indian',
    prepTimeMinutes: 15,
    isQuick: true,
    caloriesApprox: 240,
    ingredients: ['Flattened rice (Poha)', 'Boiled potato cubes', 'Mustard seeds', 'Curry leaves', 'Green chilies', 'Roasted peanuts', 'Lemon juice', 'Turmeric'],
    steps: [
      'Rinse poha in a colander until soft; drain well and sprinkle a pinch of salt and turmeric.',
      'Heat oil in a pan, sputter mustard seeds, curry leaves, and green chilies.',
      'Add boiled potato cubes and peanuts, sauté for 2 minutes.',
      'Gently fold in damp poha, cover and steam on low flame for 3 minutes.',
      'Finish with fresh coriander and a squeeze of fresh lemon juice.'
    ]
  },
  {
    id: 'rec_2',
    title: 'Paneer Butter Masala & Paratha',
    description: 'Velvety cottage cheese cubes simmered in a spiced tomato-cashew gravy with warm whole-wheat parathas.',
    dietary: 'veg',
    mealTime: 'dinner',
    cuisine: 'indian',
    prepTimeMinutes: 30,
    isQuick: false,
    caloriesApprox: 480,
    ingredients: ['Fresh paneer cubes', 'Tomato puree', 'Cashew paste', 'Butter & cream', 'Garam masala', 'Kasuri methi', 'Ginger-garlic paste'],
    steps: [
      'Sauté ginger-garlic paste and onions in melted butter until golden.',
      'Add tomato puree, chili powder, and cashew paste; cook until oil gently separates.',
      'Pour in warm water, simmer into a silky gravy, and drop in fresh paneer cubes.',
      'Crush fragrant dried fenugreek leaves (kasuri methi) on top with a dash of cream.',
      'Serve steaming hot with tawa parathas.'
    ]
  },
  {
    id: 'rec_3',
    title: 'Dal Tadka with Jeera Rice',
    description: 'Golden yellow lentils tempered with aromatic cumin, garlic, and ghee over fragrant cumin rice.',
    dietary: 'veg',
    mealTime: 'lunch',
    cuisine: 'indian',
    prepTimeMinutes: 25,
    isQuick: false,
    caloriesApprox: 380,
    ingredients: ['Toor dal / Moong dal', 'Desi ghee', 'Cumin seeds (Jeera)', 'Garlic cloves', 'Dry red chilies', 'Turmeric', 'Basmati rice'],
    steps: [
      'Pressure cook rinsed lentils with turmeric and salt until tender and smooth.',
      'Cook fragrant basmati rice with whole cumin seeds and a spoonful of ghee.',
      'In a small tadka ladle, heat ghee, crackle cumin seeds, sliced garlic, and dry red chilies until aromatic.',
      'Pour the sizzling tadka directly over the simmering dal and cover immediately to trap aromas.',
      'Serve alongside crispy papad and pickled onions.'
    ]
  },
  {
    id: 'rec_4',
    title: 'Crispy Vegetable Pakoras & Mint Chutney',
    description: 'Golden, crunchy spiced gram flour fritters packed with sliced onions, spinach, and potatoes.',
    dietary: 'veg',
    mealTime: 'snack',
    cuisine: 'indian',
    prepTimeMinutes: 18,
    isQuick: true,
    caloriesApprox: 290,
    ingredients: ['Gram flour (Besan)', 'Thin sliced onions & potatoes', 'Fresh spinach leaves', 'Carom seeds (Ajwain)', 'Green chilies', 'Chaat masala', 'Oil for frying'],
    steps: [
      'Mix sliced onions, potatoes, and spinach in a bowl with besan, ajwain, salt, and spices.',
      'Sprinkle just enough water to coat vegetables in a thick, sticky batter.',
      'Drop small bite-sized clusters into hot oil and fry until deeply golden and crispy.',
      'Drain on paper towels and dust generously with tangy chaat masala.',
      'Dip in spicy mint-coriander chutney while sipping hot chai.'
    ]
  },
  {
    id: 'rec_5',
    title: 'Vegetable Biryani with Cucumber Raita',
    description: 'Layered fragrant basmati rice cooked on dum with marinated vegetables, mint, and saffron milk.',
    dietary: 'veg',
    mealTime: 'lunch',
    cuisine: 'indian',
    prepTimeMinutes: 40,
    isQuick: false,
    caloriesApprox: 450,
    ingredients: ['Aged Basmati rice', 'Carrots, beans & cauliflower', 'Yogurt (Dahi)', 'Fried crispy onions (Birista)', 'Biryani masala', 'Saffron strands', 'Fresh mint'],
    steps: [
      'Parboil basmati rice with whole aromatic spices until 70% done.',
      'Sauté mixed vegetables in spiced yogurt marinade until semi-tender.',
      'Layer the fragrant rice over the vegetable base, topping with fried onions, mint, and saffron milk.',
      'Seal tightly with a lid and cook on low heat (dum) for 15 minutes.',
      'Fluff gently with a fork and serve with cool cucumber raita.'
    ]
  },
  {
    id: 'rec_6',
    title: 'Palak Paneer with Butter Roti',
    description: 'Nutritious vibrant spinach puree delicately simmered with cottage cheese cubes and mild spices.',
    dietary: 'veg',
    mealTime: 'dinner',
    cuisine: 'indian',
    prepTimeMinutes: 30,
    isQuick: false,
    caloriesApprox: 360,
    ingredients: ['Fresh spinach bunches', 'Paneer cubes', 'Onion-tomato gravy', 'Cumin & coriander powder', 'Fresh cream', 'Green chilies'],
    steps: [
      'Blanch spinach in boiling water for 2 minutes, then shock in ice-cold water to retain brilliant green color.',
      'Blend blanched spinach with green chilies into a silky smooth puree.',
      'Sauté finely chopped onions and tomatoes with cumin until tender.',
      'Add the spinach puree and simmer for 5 minutes, adding salt and mild spices.',
      'Toss in paneer cubes, drizzle a swirl of fresh cream, and serve with hot rotis.'
    ]
  },
  {
    id: 'rec_7',
    title: 'Masala Oats with Crunchy Veggies',
    description: 'A comforting, savory 10-minute bowl of rolled oats tossed with colorful peppers, peas, and mild spices.',
    dietary: 'veg',
    mealTime: 'breakfast',
    cuisine: 'indian',
    prepTimeMinutes: 12,
    isQuick: true,
    caloriesApprox: 210,
    ingredients: ['Rolled oats', 'Finely diced bell peppers & carrots', 'Green peas', 'Mustard seeds', 'Turmeric & garam masala', 'Coriander'],
    steps: [
      'Heat a teaspoon of olive oil in a skillet, add mustard seeds and green chili.',
      'Toss in diced carrots, bell peppers, and peas; sauté for 3 minutes.',
      'Add 1 cup of water, turmeric, salt, and bring to a gentle boil.',
      'Stir in oats and cook for 3-4 minutes until creamy and tender.',
      'Garnish with chopped cilantro and squeeze fresh lemon.'
    ]
  },
  {
    id: 'rec_8',
    title: 'Chole Tikki Chaat',
    description: 'Warm spiced chickpeas served over golden pan-seared potato patties with sweet tamarind chutney.',
    dietary: 'veg',
    mealTime: 'snack',
    cuisine: 'indian',
    prepTimeMinutes: 20,
    isQuick: true,
    caloriesApprox: 340,
    ingredients: ['Boiled chickpeas (Chole)', 'Boiled potato patties (Aloo Tikki)', 'Tamarind chutney', 'Mint chutney', 'Sev', 'Chopped onions', 'Chaat masala'],
    steps: [
      'Shallow fry potato patties on a griddle until both sides are ultra crispy.',
      'Place 2 patties in a bowl and gently crush with a spoon.',
      'Ladle piping hot spiced chickpea curry over the tikkis.',
      'Drizzle tangy sweet tamarind chutney and refreshing mint-coriander chutney.',
      'Top with finely diced onions, fresh coriander, and crunchy nylon sev.'
    ]
  },

  // --- EGG INDIAN & GENERAL ---
  {
    id: 'rec_9',
    title: 'Street-Style Egg Bhurji & Butter Toast',
    description: 'Indian scrambled eggs cooked with chopped onions, tomatoes, fresh green chilies, and pav bhaji masala.',
    dietary: 'egg',
    mealTime: 'breakfast',
    cuisine: 'indian',
    prepTimeMinutes: 15,
    isQuick: true,
    caloriesApprox: 320,
    ingredients: ['3 Fresh eggs', 'Finely chopped onions & tomatoes', 'Green chilies', 'Butter & oil', 'Pav bhaji masala', 'Fresh coriander'],
    steps: [
      'Heat butter in a tawa, sauté onions and green chilies until translucent.',
      'Add chopped tomatoes, pav bhaji masala, salt, and cook until juicy.',
      'Whisk eggs lightly and pour into the pan, scrambling continuously over medium flame.',
      'Cook until soft curds form; avoid drying out.',
      'Garnish with coriander and serve alongside butter-toasted pav or bread.'
    ]
  },
  {
    id: 'rec_10',
    title: 'Dhaba-Style Egg Curry with Steamed Rice',
    description: 'Golden shallow-fried hard-boiled eggs simmered in a robust, rustic onion-tomato masala gravy.',
    dietary: 'egg',
    mealTime: 'dinner',
    cuisine: 'indian',
    prepTimeMinutes: 25,
    isQuick: false,
    caloriesApprox: 390,
    ingredients: ['4 Hard-boiled eggs', 'Onion paste', 'Ginger-garlic paste', 'Tomato puree', 'Coriander powder', 'Kashmiri red chili', 'Desi ghee'],
    steps: [
      'Pierce boiled eggs with a fork, coat in turmeric and chili, and lightly fry in oil until blistered golden.',
      'In the same pan, fry onion paste and ginger-garlic paste until rich mahogany brown.',
      'Add tomato puree and ground spices; sauté until fragrant.',
      'Add water to create a semi-thick curry, nestle the fried eggs, and simmer for 5 minutes.',
      'Serve over hot steamed basmati rice with fresh coriander.'
    ]
  },
  {
    id: 'rec_11',
    title: 'Classic French Omelette with Herbs',
    description: 'Silky, buttery folded eggs with a soft custardy center and fresh chives.',
    dietary: 'egg',
    mealTime: 'breakfast',
    cuisine: 'general',
    prepTimeMinutes: 10,
    isQuick: true,
    caloriesApprox: 260,
    ingredients: ['3 Large eggs', 'Unsalted European butter', 'Fresh chives or parsley', 'Sea salt & white pepper'],
    steps: [
      'Vigorously whisk eggs with a pinch of salt until thoroughly homogeneous.',
      'Melt butter in a non-stick skillet over medium-low heat without browning.',
      'Pour eggs in and shake the pan while swirling rapidly with a fork for 60 seconds.',
      'When the top is creamy yet set, tilt the pan and roll into an elegant cylinder.',
      'Brush with butter and sprinkle with freshly snipped chives.'
    ]
  },
  {
    id: 'rec_12',
    title: 'Mediterranean Shakshuka with Crusty Bread',
    description: 'Eggs gently poached in a simmering, rich stew of crushed tomatoes, sweet bell peppers, cumin, and feta.',
    dietary: 'egg',
    mealTime: 'breakfast',
    cuisine: 'general',
    prepTimeMinutes: 20,
    isQuick: true,
    caloriesApprox: 330,
    ingredients: ['4 Eggs', 'Crushed whole tomatoes', 'Red bell peppers', 'Garlic & onions', 'Ground cumin & paprika', 'Crumbled feta cheese'],
    steps: [
      'Sauté diced onions, bell peppers, and garlic in olive oil until sweet and tender.',
      'Add crushed tomatoes, cumin, paprika, and simmer for 8 minutes into a thick sauce.',
      'Create 4 shallow wells in the sauce with a spoon and crack an egg into each well.',
      'Cover with a lid and simmer gently until egg whites are set but yolks remain runny.',
      'Scatter crumbled feta and cilantro; scoop up with crusty sourdough bread.'
    ]
  },
  {
    id: 'rec_13',
    title: 'Egg Fried Rice with Spring Onions',
    description: 'Wok-tossed chilled rice with scrambled eggs, soy sauce, garlic, and crisp vegetables.',
    dietary: 'egg',
    mealTime: 'lunch',
    cuisine: 'general',
    prepTimeMinutes: 15,
    isQuick: true,
    caloriesApprox: 350,
    ingredients: ['Day-old cooked jasmine/long grain rice', '3 Eggs', 'Toasted sesame oil', 'Light & dark soy sauce', 'Finely sliced scallions', 'White pepper'],
    steps: [
      'Scramble beaten eggs in a smoking hot wok with oil; break into fluffy pieces and remove.',
      'Add garlic and white parts of spring onions, stir-frying for 30 seconds.',
      'Add cold cooked rice, breaking clumps on high heat.',
      'Drizzle soy sauce, sesame oil, and white pepper, tossing continuously for smoky wok hei.',
      'Toss scrambled eggs back in along with green scallions and serve hot.'
    ]
  },
  {
    id: 'rec_14',
    title: 'Deviled Eggs with Paprika & Chives',
    description: 'Creamy, whipped yolk filling piped into hard-boiled egg whites with Dijon mustard and smoked paprika.',
    dietary: 'egg',
    mealTime: 'snack',
    cuisine: 'general',
    prepTimeMinutes: 15,
    isQuick: true,
    caloriesApprox: 220,
    ingredients: ['6 Hard-boiled eggs', 'Mayonnaise', 'Dijon mustard', 'A splash of apple cider vinegar', 'Smoked paprika', 'Fresh chives'],
    steps: [
      'Slice peeled hard-boiled eggs in half lengthwise and scoop yolks into a mixing bowl.',
      'Mash yolks with mayonnaise, Dijon mustard, vinegar, salt, and pepper until velvety smooth.',
      'Spoon or pipe the yolk filling generously back into the egg white cavities.',
      'Dust with vibrant smoked paprika and finely chopped chives.',
      'Serve chilled as an elegant protein-packed bite.'
    ]
  },

  // --- NON-VEG INDIAN ---
  {
    id: 'rec_15',
    title: 'Classic Butter Chicken (Murgh Makhani)',
    description: 'Tender tandoori-spiced chicken chunks cooked in a mildly sweet, rich tomato cream and butter sauce.',
    dietary: 'non-veg',
    mealTime: 'dinner',
    cuisine: 'indian',
    prepTimeMinutes: 35,
    isQuick: false,
    caloriesApprox: 540,
    ingredients: ['Boneless chicken thighs', 'Yogurt marinade with Kashmiri chili', 'Ripe tomato puree', 'Butter & fresh cream', 'Kasuri methi', 'Garam masala'],
    steps: [
      'Marinate chicken in spiced yogurt and sear in a smoking hot grill pan until lightly charred.',
      'Cook smooth tomato puree with butter, ginger, and aromatic spices until thick and fragrant.',
      'Stir in grilled chicken chunks along with any rendered pan juices.',
      'Simmer on gentle heat with crushed kasuri methi and heavy cream.',
      'Serve with garlic butter naan or steamed basmati rice.'
    ]
  },
  {
    id: 'rec_16',
    title: 'Homestyle Chicken Curry & Steamed Rice',
    description: 'Traditional comforting curry with chicken on the bone, potatoes, and whole spices in a flavorful broth.',
    dietary: 'non-veg',
    mealTime: 'lunch',
    cuisine: 'indian',
    prepTimeMinutes: 35,
    isQuick: false,
    caloriesApprox: 420,
    ingredients: ['Chicken pieces', 'Sliced onions & ginger-garlic paste', 'Potatoes cut in halves', 'Turmeric, cumin & coriander', 'Mustard oil or ghee'],
    steps: [
      'Heat oil, fry potato halves until lightly golden and set aside.',
      'Caramelize sliced onions slowly until deep brown, then add ginger-garlic and spice powders.',
      'Add chicken pieces and sear on high heat (bhunai) for 8 minutes.',
      'Add warm water and potatoes, cover and simmer until chicken is fall-apart tender.',
      'Garnish with cilantro and enjoy over steaming hot white rice.'
    ]
  },
  {
    id: 'rec_17',
    title: 'Kerala Style Fish Moilee',
    description: 'Mild, fragrant coastal fish stew simmered in rich coconut milk with curry leaves and green chilies.',
    dietary: 'non-veg',
    mealTime: 'dinner',
    cuisine: 'indian',
    prepTimeMinutes: 25,
    isQuick: false,
    caloriesApprox: 380,
    ingredients: ['Firm white fish fillets (Kingfish or Pomfret)', 'Coconut milk (thin and thick)', 'Curry leaves', 'Slit green chilies', 'Ginger slices', 'Coconut oil'],
    steps: [
      'Marinate fish slices in turmeric, pepper, and salt for 10 minutes; shallow fry lightly.',
      'In coconut oil, sauté sliced onions, julienned ginger, green chilies, and curry leaves.',
      'Pour in thin coconut milk, season with salt, and bring to a gentle simmer.',
      'Slide in the fried fish fillets and tomato wedges, cooking for 4-5 minutes.',
      'Finish with rich thick coconut milk, turn off heat immediately, and serve with appam or rice.'
    ]
  },
  {
    id: 'rec_18',
    title: 'Chicken Tikka Skewers (Air-Fryer / Tawa)',
    description: 'Smoky, charred boneless chicken cubes marinated in hung curd, lemon, and tandoori spices.',
    dietary: 'non-veg',
    mealTime: 'snack',
    cuisine: 'indian',
    prepTimeMinutes: 20,
    isQuick: true,
    caloriesApprox: 280,
    ingredients: ['Boneless chicken cubes', 'Hung curd (Greek yogurt)', 'Ginger-garlic paste', 'Kashmiri chili powder', 'Lemon juice', 'Mustard oil', 'Chaat masala'],
    steps: [
      'Coat chicken thoroughly in mustard oil, yogurt, garlic paste, and tandoori spices for 15 minutes.',
      'Thread onto skewers alternating with bell peppers and onion petals.',
      'Cook on a hot stovetop grill pan or air fryer at 200°C for 12-14 minutes until edges char.',
      'Brush with melted butter and dust with chaat masala.',
      'Serve with sliced red onions and lemon wedges.'
    ]
  },
  {
    id: 'rec_19',
    title: 'Spicy Chicken Keema Pav',
    description: 'Minced chicken cooked with green peas, onions, and bold spices, served with buttered bakery pavs.',
    dietary: 'non-veg',
    mealTime: 'dinner',
    cuisine: 'indian',
    prepTimeMinutes: 25,
    isQuick: false,
    caloriesApprox: 410,
    ingredients: ['Minced chicken (Keema)', 'Green peas', 'Finely chopped onions & tomatoes', 'Garam masala & red chili', 'Butter toasted pavs'],
    steps: [
      'Sauté whole spices and onions until golden brown; stir in ginger-garlic paste.',
      'Add minced chicken, breaking up clumps with a wooden spatula on high flame.',
      'Stir in tomatoes, spice powders, and green peas; cover and cook for 12 minutes.',
      'Adjust seasoning and finish with chopped mint and butter.',
      'Toast fluffy pav rolls in butter and serve with lemon wedges.'
    ]
  },

  // --- GENERAL / GLOBAL DISHES (VEG, NON-VEG) ---
  {
    id: 'rec_20',
    title: 'Creamy Garlic Mushroom Pasta',
    description: 'Fettuccine or penne coated in a velvety garlic and parmesan mushroom sauce with fresh parsley.',
    dietary: 'veg',
    mealTime: 'dinner',
    cuisine: 'general',
    prepTimeMinutes: 20,
    isQuick: true,
    caloriesApprox: 460,
    ingredients: ['Pasta of choice', 'Cremini or button mushrooms', 'Heavy cream or mascarpone', 'Minced garlic', 'Grated Parmesan cheese', 'Fresh parsley'],
    steps: [
      'Boil pasta in well-salted water until al dente; reserve 1/2 cup of starchy pasta water.',
      'Sauté sliced mushrooms in olive oil and butter until deeply browned and caramelized.',
      'Add minced garlic, cook for 1 minute, then pour in cream and parmesan.',
      'Toss drained pasta directly into the sauce with splashes of reserved water to emulsify.',
      'Season with black pepper and fresh parsley.'
    ]
  },
  {
    id: 'rec_21',
    title: 'Fresh Greek Salad with Feta',
    description: 'Crisp cucumbers, ripe tomatoes, Kalamata olives, and red onions tossed with extra virgin olive oil and oregano.',
    dietary: 'veg',
    mealTime: 'lunch',
    cuisine: 'general',
    prepTimeMinutes: 10,
    isQuick: true,
    caloriesApprox: 220,
    ingredients: ['Crisp cucumbers', 'Cherry or vine tomatoes', 'Kalamata olives', 'Red onion thinly sliced', 'Block of Greek feta cheese', 'Dried oregano', 'Extra virgin olive oil'],
    steps: [
      'Chop cucumbers and tomatoes into hearty bite-sized chunks.',
      'Combine in a shallow bowl with sliced red onions and pitted olives.',
      'Place a generous slab of feta cheese right on top.',
      'Drizzle liberally with good olive oil, red wine vinegar, sea salt, and wild oregano.',
      'Serve fresh with warm pita wedges.'
    ]
  },
  {
    id: 'rec_22',
    title: 'Avocado Toast with Chili Flakes & Seeds',
    description: 'Creamy smashed ripe avocado on toasted artisan sourdough with lime juice and toasted sesame seeds.',
    dietary: 'veg',
    mealTime: 'breakfast',
    cuisine: 'general',
    prepTimeMinutes: 8,
    isQuick: true,
    caloriesApprox: 250,
    ingredients: ['1 Ripe Hass avocado', 'Sourdough bread slices', 'Fresh lime juice', 'Red pepper flakes', 'Toasted pumpkin/sesame seeds', 'Flaky sea salt'],
    steps: [
      'Toast sourdough slices in a toaster or skillet until golden and crusty.',
      'Mash avocado flesh with a fork, mixing with lime juice, salt, and black pepper.',
      'Spread thick layer onto the warm bread.',
      'Sprinkle chili flakes, toasted seeds, and a drizzle of extra virgin olive oil.',
      'Enjoy immediately.'
    ]
  },
  {
    id: 'rec_23',
    title: 'Margherita Flatbread Pizza',
    description: 'Crisp oven-baked flatbread topped with simple marinara, fresh mozzarella, and aromatic basil.',
    dietary: 'veg',
    mealTime: 'snack',
    cuisine: 'general',
    prepTimeMinutes: 15,
    isQuick: true,
    caloriesApprox: 340,
    ingredients: ['Naan or flatbread base', 'Tomato pizza sauce', 'Fresh mozzarella slices', 'Fresh basil leaves', 'Olive oil & oregano'],
    steps: [
      'Preheat oven or toaster oven to 220°C (425°F).',
      'Spread a thin layer of seasoned tomato sauce over the flatbread.',
      'Tear fresh mozzarella cheese over the sauce evenly.',
      'Bake for 8-10 minutes until cheese is bubbly and edges are crisp golden.',
      'Top with fresh basil leaves and a swirl of olive oil.'
    ]
  },
  {
    id: 'rec_24',
    title: 'Grilled Lemon Herb Chicken Breast',
    description: 'Juicy, marinated chicken breast with fresh rosemary, lemon zest, garlic, and steamed greens.',
    dietary: 'non-veg',
    mealTime: 'dinner',
    cuisine: 'general',
    prepTimeMinutes: 20,
    isQuick: true,
    caloriesApprox: 360,
    ingredients: ['Chicken breast fillets', 'Lemon zest & juice', 'Olive oil', 'Minced garlic & dried rosemary', 'Black pepper', 'Steamed broccoli / green beans'],
    steps: [
      'Pound chicken breasts to an even thickness for uniform cooking.',
      'Coat in olive oil, lemon zest, lemon juice, garlic, and herbs for 10 minutes.',
      'Sear on a hot grill pan for 5-6 minutes per side until internal temperature reaches 75°C.',
      'Let rest on a cutting board for 5 minutes before slicing so juices redistribute.',
      'Serve alongside steamed broccoli or roasted baby potatoes.'
    ]
  },
  {
    id: 'rec_25',
    title: 'Speedy Chicken Burrito Bowl',
    description: 'Flavor-packed Mexican bowl layered with seasoned shredded chicken, black beans, corn, and salsa.',
    dietary: 'non-veg',
    mealTime: 'lunch',
    cuisine: 'general',
    prepTimeMinutes: 18,
    isQuick: true,
    caloriesApprox: 460,
    ingredients: ['Cooked chicken strips', 'Brown or white rice', 'Canned black beans', 'Sweet corn kernels', 'Pico de gallo or salsa', 'Guacamole or sour cream'],
    steps: [
      'Warm cooked rice in a bowl and season with a squeeze of lime and chopped cilantro.',
      'Warm shredded chicken with a sprinkle of cumin and taco seasoning.',
      'Assemble the bowl with sections of chicken, black beans, corn, and fresh salsa.',
      'Top with a dollop of creamy guacamole or sour cream.',
      'Mix and enjoy with crunchy tortilla chips.'
    ]
  },
  {
    id: 'rec_26',
    title: 'Pan-Seared Garlic Butter Salmon',
    description: 'Crispy skin salmon fillet basted with rich garlic butter, lemon, and tender asparagus.',
    dietary: 'non-veg',
    mealTime: 'dinner',
    cuisine: 'general',
    prepTimeMinutes: 20,
    isQuick: true,
    caloriesApprox: 440,
    ingredients: ['Salmon fillets with skin', 'Butter & olive oil', 'Crushed garlic', 'Lemon wedges', 'Asparagus spears', 'Fresh dill'],
    steps: [
      'Pat salmon skin completely dry with paper towels and season with salt and pepper.',
      'Heat oil in a cast-iron skillet over medium-high heat until shimmering.',
      'Place salmon skin-side down; press lightly and cook for 4-5 minutes until skin is extra crisp.',
      'Flip gently, add butter, crushed garlic, and asparagus spears, basting the fish continuously for 3 minutes.',
      'Finish with fresh lemon juice and dill.'
    ]
  },
  {
    id: 'rec_27',
    title: 'Classic Club Sandwich',
    description: 'Triple-decker toasted sandwich packed with sliced roast chicken, crisp lettuce, juicy tomato, and mayo.',
    dietary: 'non-veg',
    mealTime: 'lunch',
    cuisine: 'general',
    prepTimeMinutes: 15,
    isQuick: true,
    caloriesApprox: 420,
    ingredients: ['3 Slices white or whole wheat bread', 'Cooked sliced chicken', 'Crispy lettuce leaves', 'Tomato slices', 'Mayonnaise', 'Cheddar cheese slice'],
    steps: [
      'Toast all 3 bread slices until crisp and golden.',
      'Spread mayonnaise on the first slice, layer with lettuce, tomato, and cheese.',
      'Place the middle bread slice, spread mayo, and layer generously with chicken slices.',
      'Crown with the third slice, secure with toothpicks, and slice diagonally into triangles.',
      'Serve with potato crisps on the side.'
    ]
  },
  {
    id: 'rec_28',
    title: 'Warm Vegetable Lentil Minestrone Soup',
    description: 'Hearty Italian vegetable soup with diced zucchini, carrots, tomatoes, and small pasta shells.',
    dietary: 'veg',
    mealTime: 'dinner',
    cuisine: 'general',
    prepTimeMinutes: 30,
    isQuick: false,
    caloriesApprox: 290,
    ingredients: ['Vegetable broth', 'Diced zucchini & carrots', 'Diced tomatoes', 'Cannellini beans', 'Ditalini or elbow pasta', 'Italian herbs'],
    steps: [
      'Sauté onions, celery, and carrots in olive oil until aromatic.',
      'Add canned tomatoes, vegetable broth, and Italian herbs; bring to a rolling boil.',
      'Add zucchini and pasta, cooking for 8 minutes until pasta is tender.',
      'Stir in cannellini beans and season with sea salt and cracked black pepper.',
      'Ladle into warm bowls and grate parmesan cheese on top.'
    ]
  },
  {
    id: 'rec_29',
    title: 'Peanut Butter Banana Smoothie Bowl',
    description: 'Thick, creamy smoothie bowl loaded with peanut butter, chia seeds, sliced bananas, and granola.',
    dietary: 'veg',
    mealTime: 'breakfast',
    cuisine: 'general',
    prepTimeMinutes: 8,
    isQuick: true,
    caloriesApprox: 320,
    ingredients: ['2 Frozen bananas', 'Natural peanut butter', 'Almond milk or regular milk', 'Granola', 'Chia seeds', 'Dark chocolate chips'],
    steps: [
      'Blend frozen bananas, peanut butter, and a splash of milk until thick and ice-cream-like.',
      'Spoon into a serving bowl.',
      'Decorate with fresh banana coins, crunchy granola, and chia seeds.',
      'Scatter dark chocolate chips for an energizing morning treat.'
    ]
  },
  {
    id: 'rec_30',
    title: 'Loaded Cheesy Nachos Supreme',
    description: 'Crunchy corn tortilla chips baked with melted cheddar, black beans, jalapeños, and fresh salsa.',
    dietary: 'veg',
    mealTime: 'snack',
    cuisine: 'general',
    prepTimeMinutes: 14,
    isQuick: true,
    caloriesApprox: 380,
    ingredients: ['Corn tortilla chips', 'Shredded cheddar & Monterey Jack', 'Pickled jalapeño slices', 'Black beans', 'Pico de gallo', 'Sour cream'],
    steps: [
      'Spread tortilla chips across a baking sheet in a single even layer.',
      'Scatter black beans and a heavy blanket of shredded cheese over chips.',
      'Bake at 200°C for 6-8 minutes until cheese is bubbly and melted.',
      'Scatter sliced jalapeños and fresh tomato salsa over the top.',
      'Serve warm straight from the tray with sour cream.'
    ]
  },
  {
    id: 'rec_31',
    title: 'Stir-Fried Tofu & Broccoli in Ginger Sauce',
    description: 'Crispy pan-fried tofu cubes and tender-crisp broccoli florets glazed in a savory ginger-garlic soy reduction.',
    dietary: 'veg',
    mealTime: 'lunch',
    cuisine: 'general',
    prepTimeMinutes: 18,
    isQuick: true,
    caloriesApprox: 290,
    ingredients: ['Firm tofu pressed and cubed', 'Broccoli florets', 'Soy sauce & maple syrup', 'Minced ginger & garlic', 'Cornstarch slurry', 'Sesame seeds'],
    steps: [
      'Dust pressed tofu cubes with cornstarch and pan-fry in oil until every side is golden and crispy.',
      'Steam or stir-fry broccoli florets in a wok for 3 minutes until vibrant green.',
      'In a small bowl, whisk soy sauce, minced ginger, garlic, water, and cornstarch.',
      'Pour sauce into wok; let it bubble and thicken into a glossy glaze.',
      'Toss tofu and broccoli in the glaze and garnish with toasted sesame seeds.'
    ]
  },
  {
    id: 'rec_32',
    title: 'Classic Tomato Bruschetta',
    description: 'Toasted baguette slices rubbed with fresh garlic and piled with ripe basil-marinated tomatoes.',
    dietary: 'veg',
    mealTime: 'snack',
    cuisine: 'general',
    prepTimeMinutes: 12,
    isQuick: true,
    caloriesApprox: 190,
    ingredients: ['Baguette slices', 'Ripe plum tomatoes seeded and diced', 'Fresh basil chiffonade', 'Garlic cloves', 'Balsamic glaze', 'Extra virgin olive oil'],
    steps: [
      'Toss finely diced tomatoes with olive oil, basil, salt, and pepper; let sit for 5 minutes.',
      'Toast baguette slices until crisp.',
      'Rub the cut side of a raw garlic clove directly across the rough surface of the warm bread.',
      'Spoon tomato mixture onto the toasts.',
      'Drizzle with thick balsamic glaze and serve immediately.'
    ]
  }
];
