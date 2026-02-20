// =========================================================
// LITTLE BLOOM ACADEMY — DATA.JS
// Shared pools + 5-day weekly themed content
// =========================================================

// ── Shared helpers ────────────────────────────────────────
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function choices(arr, n) { return shuffle(arr).slice(0, n); }

// ── Shared content pools ──────────────────────────────────
const DATA = {

    // --- General ---
    dayNames: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],

    weatherOptions: [
        { icon: '☀️', label: 'Sunny', bg: '#fffde7', border: '#f9a825' },
        { icon: '🌧️', label: 'Rainy', bg: '#e3f2fd', border: '#1565c0' },
        { icon: '☁️', label: 'Cloudy', bg: '#f5f5f5', border: '#757575' },
        { icon: '🌬️', label: 'Windy', bg: '#e8f5e9', border: '#2e7d32' },
        { icon: '⛈️', label: 'Stormy', bg: '#ede7f6', border: '#4527a0' },
        { icon: '🌈', label: 'Rainbow', bg: '#fce4ec', border: '#ad1457' },
    ],
    weatherFeelings: [
        { icon: '😊', label: 'Happy' }, { icon: '😴', label: 'Sleepy' },
        { icon: '😤', label: 'Excited' }, { icon: '😢', label: 'Sad' },
        { icon: '😂', label: 'Silly' }, { icon: '🤒', label: 'Not well' },
    ],
    weatherActivities: [
        'wear a raincoat?', 'play outside?', 'wear sunscreen?',
        'bring an umbrella?', 'wear a jersey?',
    ],
    calendarQuestions: [
        'What day is it today?', 'What month are we in?', 'What season is it?',
        'How many days are in a week?', 'What day comes after today?',
    ],

    // --- Full alphabet, counting icons, shapes, colours ---
    letters: [
        { letter: 'A', icon: '🍎', word: 'Apple' }, { letter: 'B', icon: '🏀', word: 'Ball' },
        { letter: 'C', icon: '🐱', word: 'Cat' }, { letter: 'D', icon: '🐶', word: 'Dog' },
        { letter: 'E', icon: '🥚', word: 'Egg' }, { letter: 'F', icon: '🐸', word: 'Frog' },
        { letter: 'G', icon: '🍇', word: 'Grapes' }, { letter: 'H', icon: '🏠', word: 'House' },
        { letter: 'I', icon: '🍦', word: 'Ice cream' }, { letter: 'J', icon: '🪁', word: 'Jump rope' },
        { letter: 'K', icon: '🪁', word: 'Kite' }, { letter: 'L', icon: '🦁', word: 'Lion' },
        { letter: 'M', icon: '🌙', word: 'Moon' }, { letter: 'N', icon: '🦅', word: 'Nest' },
        { letter: 'O', icon: '🐙', word: 'Octopus' }, { letter: 'P', icon: '🐧', word: 'Penguin' },
        { letter: 'Q', icon: '👑', word: 'Queen' }, { letter: 'R', icon: '🌈', word: 'Rainbow' },
        { letter: 'S', icon: '⭐', word: 'Star' }, { letter: 'T', icon: '🐢', word: 'Turtle' },
        { letter: 'U', icon: '☂️', word: 'Umbrella' }, { letter: 'V', icon: '🐝', word: 'Voom-voom' },
        { letter: 'W', icon: '🐳', word: 'Whale' }, { letter: 'X', icon: '🎸', word: 'Xylophone' },
        { letter: 'Y', icon: '🪀', word: 'Yo-yo' }, { letter: 'Z', icon: '🦓', word: 'Zebra' },
    ],
    countingIcons: ['🌸', '🦋', '🐝', '🍎', '⭐', '🎈', '🐟', '🌻', '🧁', '🦀', '🐞', '🍓'],
    shapes: [
        { name: 'Circle', icon: '⭕', sides: 0 }, { name: 'Triangle', icon: '🔺', sides: 3 },
        { name: 'Square', icon: '🟥', sides: 4 }, { name: 'Rectangle', icon: '🟦', sides: 4 },
        { name: 'Star', icon: '⭐', sides: 5 }, { name: 'Heart', icon: '❤️', sides: 0 },
        { name: 'Diamond', icon: '🔷', sides: 4 }, { name: 'Oval', icon: '🥚', sides: 0 },
    ],
    colours: [
        { name: 'Red', hex: '#f44336' }, { name: 'Blue', hex: '#2196F3' },
        { name: 'Green', hex: '#4CAF50' }, { name: 'Yellow', hex: '#FFEB3B' },
        { name: 'Pink', hex: '#E91E63' }, { name: 'Purple', hex: '#9C27B0' },
        { name: 'Orange', hex: '#FF9800' }, { name: 'White', hex: '#EEEEEE' },
        { name: 'Brown', hex: '#795548' }, { name: 'Black', hex: '#333333' },
    ],
    animals: [
        { name: 'Lion', icon: '🦁', sound: 'ROAR!', move: 'jump up and down', SA: true },
        { name: 'Elephant', icon: '🐘', sound: 'TRUMPET!', move: 'stomp your feet', SA: true },
        { name: 'Meerkat', icon: '🧍', sound: 'SQUEAK!', move: 'stand very still on tiptoe', SA: true },
        { name: 'Giraffe', icon: '🦒', sound: 'HMM!', move: 'stretch your arms up high', SA: true },
        { name: 'Zebra', icon: '🦓', sound: 'BARK!', move: 'gallop on the spot', SA: true },
        { name: 'Springbok', icon: '🦌', sound: 'BLEAT!', move: 'leap as high as you can', SA: true },
        { name: 'Hippo', icon: '🦛', sound: 'GRUNT!', move: 'open your mouth as wide as you can', SA: true },
        { name: 'Crocodile', icon: '🐊', sound: 'SNAP!', move: 'snap your arms like jaws', SA: true },
        { name: 'Rhino', icon: '🦏', sound: 'SNORT!', move: 'charge forward with your fist as a horn', SA: true },
        { name: 'Cheetah', icon: '🐆', sound: 'CHIRP!', move: 'run in place as fast as you can', SA: true },
        { name: 'Dog', icon: '🐶', sound: 'WOOF!', move: 'pant and wag your bottom', SA: false },
        { name: 'Cat', icon: '🐱', sound: 'MEOW!', move: 'sit and lick your paw', SA: false },
        { name: 'Frog', icon: '🐸', sound: 'RIBBIT!', move: 'jump from a crouch', SA: false },
        { name: 'Bird', icon: '🐦', sound: 'TWEET!', move: 'flap your arms and spin', SA: false },
        { name: 'Fish', icon: '🐟', sound: 'blub blub!', move: 'swim with your whole body', SA: false },
        { name: 'Rabbit', icon: '🐰', sound: 'SQUEAK!', move: 'hop hop hop on the spot', SA: false },
    ],
    rhymes: [
        { title: 'Twinkle Twinkle', lines: ['Twinkle twinkle little star ⭐', 'How I wonder what you are', 'Up above the world so high', 'Like a diamond in the sky', 'Twinkle twinkle little star ⭐'] },
        { title: 'Rain Rain Go Away', lines: ['Rain rain go away 🌧️', 'Come again another day', 'Little one wants to play', 'Rain rain go away'] },
        { title: 'Baa Baa Black Sheep', lines: ['Baa baa black sheep 🐑', 'Have you any wool?', 'Yes sir yes sir, three bags full!', 'One for the master, one for the dame', 'And one for the little girl down the lane!'] },
        { title: 'Old MacDonald', lines: ['Old MacDonald had a farm 🐄', 'E-I-E-I-O!', 'And on his farm he had a cow', 'E-I-E-I-O!', 'With a moo moo here, and a moo moo there!'] },
        { title: 'Humpty Dumpty', lines: ['Humpty Dumpty sat on a wall 🥚', 'Humpty Dumpty had a great fall!', 'All the king\'s horses and all the king\'s men', 'Couldn\'t put Humpty together again!'] },
        { title: 'Incy Wincy Spider', lines: ['Incy Wincy spider 🕷️', 'Climbed up the water spout', 'Down came the rain and washed the spider out', 'Out came the sunshine and dried up all the rain', 'Incy Wincy spider climbed up the spout again!'] },
        { title: 'Head Shoulders Knees', lines: ['Head and shoulders, knees and toes 🙋', 'Knees and toes!', 'Head and shoulders, knees and toes', 'Eyes and ears and mouth and nose!'] },
    ],
    memoryItems: [
        { icon: '📺', label: 'News Report' }, { icon: '🏺', label: 'Clay Time' },
        { icon: '🛣️', label: 'Obstacle Course' }, { icon: '🔎', label: 'Scavenger Hunt' },
        { icon: '🦁', label: 'Animal Charades' }, { icon: '📖', label: 'Story Time' },
        { icon: '🎵', label: 'Singing' }, { icon: '🌤️', label: 'Sunny Day' },
        { icon: '🍎', label: 'Letter A' }, { icon: '✨', label: 'Counting Stars' },
        { icon: '🎨', label: 'Drawing' }, { icon: '🌿', label: 'Nature Walk' },
        { icon: '🧁', label: 'Baking' }, { icon: '🎭', label: 'Drama' },
        { icon: '🧩', label: 'Puzzle Time' },
    ],
};

// ── PER-DAY WEEKLY THEME DATA ─────────────────────────────
// Each day has: theme, emoji, accentColor, focusLetters, focusNumbers,
// activities (6 parallel to sidebar slots), and full guardian tips

const WEEKLY = {

    // ── MONDAY ─────────────────────────────────────────────
    monday: {
        day: 'Monday', emoji: '🌅', accentColor: '#ffb703',
        theme: 'Our World — Introduction',
        tagline: 'A brand new week starts today!',
        focusLetters: ['A', 'B', 'C', 'D', 'E'],
        focusNumbers: [1, 2, 3, 4, 5],
        activities: {
            weather: {
                theme: 'Monday Morning Check-In',
                extraPrompts: ['Tell me one thing you did on the weekend!', 'What is your favourite food?', 'Who do you love most?'],
            },
            sculptor: {
                theme: 'Playdough Introduction',
                drawPrompt: 'Draw something from your weekend! 🏖️',
                shapeFocus: ['Circle', 'Square', 'Triangle'],
                colourFocus: ['Red', 'Blue', 'Yellow'],
            },
            obstacle: {
                theme: 'Wake-Up Body Course',
                extraQ: { question: 'Is the ball ABOVE or BELOW the box?', img: '🏐 📦', answer: 'Above', options: ['Above', 'Below', 'Inside', 'Around'] },
            },
            scavenger: {
                letters: ['A', 'B', 'C', 'D', 'E'],
                countMax: 5,
                theme: 'Find the letter — A to E',
            },
            charades: {
                animalSet: ['Lion', 'Elephant', 'Giraffe', 'Zebra', 'Dog'],
                rhymeSet: ['Twinkle Twinkle', 'Baa Baa Black Sheep'],
                theme: 'Animal Stars!',
            },
            suitcase: {
                theme: 'Monday Memory Pack',
                quizFocus: ['News Report', 'Clay Time', 'Letter A', 'Counting Stars'],
            },
        },
        guardianTips: {
            weather: { intro: 'Start the week gently. Ask her what she is looking forward to this week.', steps: ['Discuss the weather together — look outside.', 'Ask: "What day is it? What comes after Monday?"', 'Share one thing YOU are looking forward to this week.', 'Ask how she slept and how she feels.', 'Draw the weather in a notebook — start a weekly weather chart!'], extend: 'Make a weekly planner together on paper. Draw a box for each day and add a tiny drawing each morning.' },
            sculptor: { intro: 'Introduce the week\'s theme through art.', steps: ['Roll clay/playdough into a ball TOGETHER.', 'Ask: "What shape is this? Can we make it flat?"', 'Give her the theme: Draw the flag of a place you want to visit.', 'Name each colour as she picks it up.', 'Ask her to show you something round, then something with corners.'], extend: 'Make real playdough together: 2 cups flour, 1 cup salt, 1 cup water, food colouring.' },
            obstacle: { intro: 'Get the body awake after the weekend!', steps: ['Do 10 jumping jacks TOGETHER before starting the screen game.', 'Use real furniture: jump over a pillow, crawl under a table.', 'Ask: "What is OVER the table?" and "What is UNDER the chair?"', 'Time her and let her try to beat her score.', 'Teach the word "beside" — put two objects beside each other.'], extend: 'Make an obstacle map on paper — she draws the course, then you build it!' },
            scavenger: { intro: 'Focus on A–E sounds only today.', steps: ['"A" is for Apple — find ANYTHING that starts with A!', '"B" is for Ball — clap when you name a B word.', '"C" is for Cat — can she find 3 C words?', 'Write the letters A–E on paper and she decorates each one.', 'Say a word and she must guess the first letter.'], extend: 'Make alphabet flash cards together out of cardboard — draw the picture, she writes the letter.' },
            charades: { intro: 'Monday energy is high — use it for big movement!', steps: ['You act an animal first, she guesses.', 'She picks an animal card, acts it, you guess.', 'After each animal: "Where does this animal live?"', 'SA focus: Lion and Elephant are game animals — are they dangerous?', 'Sing "Old MacDonald" together substituting SA animals.'], extend: 'Search YouTube for 2-min clips of real SA wildlife. Watch after the game.' },
            suitcase: { intro: 'Recap the WHOLE day together — this is the most important 15 minutes.', steps: ['Ask her to pick the 3 best things from today.', 'For each: "Tell me one thing you learned about that."', 'Ask: "What was HARD today? What was EASY?"', 'Ask: "What do you want to do tomorrow?"', 'Help her call Dad/Grandma and tell them ONE thing from today.'], extend: 'Start a "Bloom Journal" — a notebook where she draws one thing she learned each day.' },
        },
    },

    // ── TUESDAY ────────────────────────────────────────────
    tuesday: {
        day: 'Tuesday', emoji: '🎨', accentColor: '#ff85a2',
        theme: 'Creative Day — Art & Imagination',
        tagline: 'Today we make beautiful things!',
        focusLetters: ['F', 'G', 'H', 'I', 'J'],
        focusNumbers: [1, 2, 3, 4, 5, 6],
        activities: {
            weather: { theme: 'Artist\'s Morning', extraPrompts: ['What colour is the sky today?', 'If the sky could be ANY colour, what would you pick?', 'Draw the weather in your mind!'] },
            sculptor: { theme: 'Big Art Project', drawPrompt: 'Create a self-portrait! Draw YOUR face 🧒', shapeFocus: ['Heart', 'Star', 'Diamond'], colourFocus: ['Pink', 'Purple', 'Orange'] },
            obstacle: { theme: 'Artist\'s Runway', extraQ: { question: 'Is the paintbrush INSIDE or OUTSIDE the pot?', img: '🖌️ 🪣', answer: 'Inside', options: ['Inside', 'Outside', 'On top', 'Beside'] } },
            scavenger: { letters: ['F', 'G', 'H', 'I', 'J'], countMax: 6, theme: 'Find the letter — F to J' },
            charades: { animalSet: ['Meerkat', 'Springbok', 'Cat', 'Rabbit', 'Bird'], rhymeSet: ['Twinkle Twinkle', 'Incy Wincy Spider'], theme: 'Creative Animal Poses!' },
            suitcase: { theme: 'Tuesday Memory Pack', quizFocus: ['Drawing', 'Story Time', 'Singing', 'Puzzle Time'] },
        },
        guardianTips: {
            weather: { intro: 'Tuesday is creative day — connect everything to colour and art.', steps: ['Ask her to name every colour she can see outside.', 'Ask: "What colour makes you feel happy? What colour makes you feel calm?"', 'Draw the weather using only shapes — no words!', 'Ask her to make up a weather "dance" (sunny = wiggle, rainy = tap fingers).', 'Name a colour and she finds something that colour in the room.'], extend: 'Start a "colour of the week" — tape a coloured strip somewhere visible and she finds matching things all week.' },
            sculptor: { intro: 'Big creative project day!', steps: ['Give her a BIG piece of paper and the biggest brush/crayon you have.', 'Theme: "Make a portrait of someone you love."', 'Name shapes as she draws: "That\'s a circle for the face!"', 'Ask her to tell a STORY about the picture when finished.', 'Let her choose the colours with no correction — this builds confidence.'], extend: 'Frame her artwork and put it up at home — tell her why it\'s beautiful.' },
            obstacle: { intro: 'Connect movement to art — be a paintbrush!', steps: ['Say "You are a GIANT paintbrush!" — she moves her whole body as if painting.', 'Fast music = small strokes (tiny jumps). Slow music = big strokes (big arm sweeps).', 'Ask "Is the couch IN FRONT of or BEHIND the table?"', 'Ask her to make a "sculpture" with her body — freeze the pose.', 'Take a photo of her best pose!'], extend: 'Do "body tracing" — trace around her whole body on paper, she colours it in.' },
            scavenger: { intro: 'F–J letters today.', steps: ['"F" is for Frog — hop 3 times and say an F word!', '"G" is for Grapes — find something that starts with G.', '"H" is for House — draw a tiny house together.', '"I" is for Ice cream — if you could have any flavour, what letter does it start with?', '"J" is for Jump — count how many times she can jump in 10 seconds.'], extend: 'Make "sound bags" — put mystery objects in a bag, she touches inside and names the sound.' },
            charades: { intro: 'Creative movement day — be dramatic!', steps: ['Add drama: be a SCARED Meerkat, a HAPPY Springbok.', 'Ask her to make a "sad" animal face vs a "happy" animal face.', 'Invent a new animal together — what sound does it make?', 'Sing "Head Shoulders Knees" but replace body parts with animal parts.', 'She teaches YOU an animal pose you\'ve never done.'], extend: 'Make animal masks from paper plates — paint them together.' },
            suitcase: { intro: 'Creative recap — use drawing instead of words.', steps: ['Ask her to draw, not tell, her favourite part of today.', 'Ask: "If today was a colour, what colour would it be?"', 'Ask: "If today was an animal, which one?"', 'She shows you her drawing and you have to guess what it is.', 'Add the drawing to the Bloom Journal.'], extend: 'Make a "Tuesday Art Box" — collect art she makes and review it at the end of each month.' },
        },
    },

    // ── WEDNESDAY ──────────────────────────────────────────
    wednesday: {
        day: 'Wednesday', emoji: '🌿', accentColor: '#52b788',
        theme: 'Science & Discovery Day',
        tagline: 'Let\'s explore and discover today!',
        focusLetters: ['K', 'L', 'M', 'N', 'O'],
        focusNumbers: [1, 2, 3, 4, 5, 6, 7],
        activities: {
            weather: { theme: 'Scientist\'s Weather Station', extraPrompts: ['Is it hot or cold outside?', 'What do clouds look like today?', 'Can you feel wind on your skin?'] },
            sculptor: { theme: 'Nature Sculpting', drawPrompt: 'Draw a plant or animal from outside 🌿', shapeFocus: ['Oval', 'Triangle', 'Circle'], colourFocus: ['Green', 'Brown', 'Blue'] },
            obstacle: { theme: 'Nature Explorer Trail', extraQ: { question: 'Is the butterfly ABOVE or ON the flower?', img: '🦋 🌸', answer: 'Above', options: ['Above', 'On', 'Under', 'Beside'] } },
            scavenger: { letters: ['K', 'L', 'M', 'N', 'O'], countMax: 7, theme: 'Find the letter — K to O' },
            charades: { animalSet: ['Rhino', 'Hippo', 'Crocodile', 'Fish', 'Frog'], rhymeSet: ['Rain Rain Go Away', 'Incy Wincy Spider'], theme: 'Water & Wild Animals!' },
            suitcase: { theme: 'Wednesday Discovery Pack', quizFocus: ['Nature Walk', 'Counting Stars', 'Obstacle Course', 'Scavenger Hunt'] },
        },
        guardianTips: {
            weather: { intro: 'Science day — everything is an experiment!', steps: ['Go outside for 2 minutes and observe the weather together.', 'Feel the air: "Is it humid? Dry? Can you smell rain?"', 'Ask: "What do YOU think the weather will be tomorrow?"', 'Look at clouds together — name their shapes.', 'Start a "Weather diary" — she draws tomorrow\'s prediction.'], extend: 'Make a rain gauge from a plastic bottle — mark the levels and check it after rain.' },
            sculptor: { intro: 'Nature sensory play.', steps: ['Collect 5 items from outside: leaf, stick, pebble, flower, soil.', 'Feel each one: "Is it smooth, rough, soft, hard?"', 'Use the items to make a nature COLLAGE on paper with glue.', 'Ask: "Where does this come from? Is it from a plant or an animal?"', 'Sort the items by size, colour, or texture.'], extend: 'Plant a seed together in a cup of soil — check it every day and measure growth.' },
            obstacle: { intro: 'Explorer movement circuit.', steps: ['Pretend to be a scientist on a nature trek.', 'Ask: "What is a mountain? Can you climb like you\'re on a mountain?"', 'Find something NEXT TO the wall, something BEHIND the door.', 'Ask: "Is the sun ABOVE us or BELOW us?"', 'Measure things using her foot as a "unit" — how many feet long is the couch?'], extend: 'Draw a "treasure map" of your home — mark where objects are using words: in front, behind, beside.' },
            scavenger: { intro: 'K-O sounds today — connect to nature.', steps: ['"K" is for Kite — what shape is a kite, and what does it DO?', '"L" is for Lion — describe what a Lion looks like without naming it.', '"M" is for Moon — is the moon out at night or during the day? Why?', '"N" is for Nest — what animals live in nests?', '"O" is for Octopus — how many arms does it have? Count to 8 together!'], extend: 'Make a nature scavenger hunt checklist — print or draw 5 things to find on a walk.' },
            charades: { intro: 'Water animals and wild beasts today.', steps: ['Hippo: blow bubbles in a cup of water together.', 'Crocodile: snap your arms like jaws in slow motion.', 'Frog: jump across the room counting how many jumps.', 'Fish: "swim" across the floor on your tummies.', 'Ask: "Which of these animals can swim? Which can\'t?"'], extend: 'Watch a 3-min David Attenborough clip of a SA water animal together.' },
            suitcase: { intro: 'Wednesday is halfway through the week — great time to reflect!', steps: ['Ask: "What is the most interesting thing you discovered this week so far?"', 'Ask: "What does a scientist DO?"', 'Play "I Spy" with nature words: "I spy something that is green and has leaves."', 'Ask her to explain ONE thing she learned to a toy or teddy.', 'Draw a "brain map" together — what\'s inside her head after this week?'], extend: 'Make a "Discovery Jar" — write or draw discoveries on paper, fold and put in a jar. Open at the end of the month.' },
        },
    },

    // ── THURSDAY ───────────────────────────────────────────
    thursday: {
        day: 'Thursday', emoji: '💪', accentColor: '#8ecae6',
        theme: 'Body & Movement Day',
        tagline: 'Move your body and feel strong!',
        focusLetters: ['P', 'Q', 'R', 'S', 'T'],
        focusNumbers: [1, 2, 3, 4, 5, 6, 7, 8],
        activities: {
            weather: { theme: 'Active Morning', extraPrompts: ['Do 5 star jumps before we start!', 'What body part feels strong today?', 'What sport would you like to play today?'] },
            sculptor: { theme: 'Body Art', drawPrompt: 'Draw a superhero — that\'s YOU! 💪', shapeFocus: ['Rectangle', 'Diamond', 'Star'], colourFocus: ['Blue', 'Red', 'Green', 'Yellow'] },
            obstacle: { theme: 'Mega Obstacle Challenge', extraQ: { question: 'Is the hula hoop AROUND or AWAY FROM you?', img: '🤸 ⭕', answer: 'Around', options: ['Around', 'Away from', 'On top of', 'Under'] } },
            scavenger: { letters: ['P', 'Q', 'R', 'S', 'T'], countMax: 8, theme: 'Find the letter — P to T' },
            charades: { animalSet: ['Cheetah', 'Springbok', 'Rabbit', 'Frog', 'Bird'], rhymeSet: ['Head Shoulders Knees', 'Humpty Dumpty'], theme: 'Fast & Slow Animals!' },
            suitcase: { theme: 'Thursday Power Pack', quizFocus: ['Obstacle Course', 'Animal Charades', 'Drawing', 'Singing'] },
        },
        guardianTips: {
            weather: { intro: 'High energy day — match her enthusiasm!', steps: ['Do a "weather workout" — sunny = jumping jacks, rainy = running on the spot.', 'Ask: "What sport could you play in this weather?"', 'Ask: "What does your body feel like before exercise vs after?"', 'Name a sport: she must act it out.', 'Ask: "How many jumping jacks can you do before you need to breathe?"'], extend: 'Make a simple exercise chart — she tracks how many jumping jacks she does each day.' },
            sculptor: { intro: 'Body awareness through art.', steps: ['Trace her hand and she decorates it with patterns.', 'Ask: "How many fingers? How many knuckles?"', 'Draw a superhero body together — where are the muscles?', 'Talk about body parts: "What does your heart do? Your lungs?"', 'Ask her to draw what she looks like when she\'s running.'], extend: 'Make a "body book" — trace her whole body on paper, label the parts together.' },
            obstacle: { intro: 'Maximum movement today!', steps: ['Time the course three times — can she beat her record?', 'Add a new obstacle each round: balance beam (tape on floor), tunnel (blanket over chairs).', 'Use FULL spatial language: "Go THROUGH the tunnel, then AROUND the pillow."', 'Ask: "Which is more tiring — going OVER or going UNDER?"', 'Count her steps between each obstacle.'], extend: 'Create a point system on paper — each completed obstacle = 10 points. Total at the end!' },
            scavenger: { intro: 'P-T sounds — energetic connections!', steps: ['"P" is for Penguin — waddle across the room!', '"Q" is for Queen — sit very still and tall like royalty.', '"R" is for Run — how fast can she spell R-U-N while running on the spot?', '"S" is for Star — do star jumps while you call out S words.', '"T" is for Turtle — who can move slowest across the room?'], extend: 'Make a "body letter" game — she makes each letter shape with her BODY.' },
            charades: { intro: 'Speed and strength theme today.', steps: ['Cheetah: sprint across the room and FREEZE when you shout stop.', 'Springbok: pronk (leap with all 4 limbs) — try it together!', 'Play "Freeze Dance" — music on, she dances; music off, she freezes as an animal.', 'Count "who can hold the stillest pose longest" — guardian vs child.', 'Silly round: be a SLOW cheetah, a TINY elephant.'], extend: 'Make a "Fitness Animal Card" deck — each card = an animal + its movement. Draw the cards.' },
            suitcase: { intro: 'Body-themed recap.', steps: ['Ask: "Which part of your body worked the hardest today?"', 'Ask: "Can you touch your toes? Your elbow? Your funny bone?"', 'Play "Simon Says" with body parts.', 'Ask: "What do you eat to make your body strong?"', 'Talk about sleep: "Your body grows when you sleep! How many hours did you sleep?"'], extend: 'Make a "health promise" together — she draws a picture of herself being healthy and signs it.' },
        },
    },

    // ── FRIDAY ─────────────────────────────────────────────
    friday: {
        day: 'Friday', emoji: '🎉', accentColor: '#b7e4c7',
        theme: 'Celebration Friday — Review & Play',
        tagline: 'You made it through the week — let\'s celebrate!',
        focusLetters: ['U', 'V', 'W', 'X', 'Y', 'Z'],
        focusNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        activities: {
            weather: { theme: 'Friday Celebration Report', extraPrompts: ['Name ONE amazing thing you did this week!', 'What day comes after Friday?', 'What will you do this weekend?'] },
            sculptor: { theme: 'Week Masterpiece', drawPrompt: 'Draw your FAVOURITE thing from this week! 🏆', shapeFocus: ['Circle', 'Star', 'Heart', 'Diamond'], colourFocus: ['Yellow', 'Orange', 'Pink', 'Purple'] },
            obstacle: { theme: 'Championship Obstacle Course', extraQ: { question: 'Is the trophy ABOVE or ON the shelf?', img: '🏆 🪑', answer: 'On', options: ['On', 'Above', 'Under', 'Beside'] } },
            scavenger: { letters: ['U', 'V', 'W', 'X', 'Y', 'Z'], countMax: 10, theme: 'Find the letter — U to Z (Final Round!)' },
            charades: { animalSet: ['Lion', 'Meerkat', 'Springbok', 'Elephant', 'Giraffe', 'Zebra'], rhymeSet: ['Old MacDonald', 'Head Shoulders Knees', 'Twinkle Twinkle'], theme: 'SA Animal Parade — Full Cast!' },
            suitcase: { theme: 'Weekly Trophy Pack', quizFocus: ['News Report', 'Drawing', 'Animal Charades', 'Nature Walk', 'Letter A', 'Counting Stars', 'Obstacle Course', 'Scavenger Hunt'] },
        },
        guardianTips: {
            weather: { intro: 'Friday is celebratory — big smiles and high fives all morning!', steps: ['Do a "week in review" — name one thing for each day of the week.', 'Make a special morning drink together (hot chocolate, smoothie).', 'Ask: "What SEASON is it? What months are in this season?"', 'Talk about the weekend — what is the plan?', 'Give her 3 genuine compliments about her work THIS WEEK.'], extend: 'Write a "Weekly Report Card" together — she rates herself in 5 areas with stickers.' },
            sculptor: { intro: 'Week\'s best art project.', steps: ['Big idea: make a collage of the WHOLE week — one image per day.', 'Use scissors, glue, scraps of paper, old magazines.', 'Ask: "What was your favourite lesson this week?"', 'Let her direct: "You be the helper, I make the decisions."', 'Frame the finished piece — it goes up at home!'], extend: 'Plan next week\'s art theme together — she picks the topic.' },
            obstacle: { intro: 'Championship day — go all out!', steps: ['Build the BIGGEST obstacle course yet — use EVERY room.', 'Let her design the course — she places the obstacles.', 'Invite a sibling, pet, or teddy to "compete."', 'Give out a certificate at the end (draw one on paper!).', 'Ask: "What new obstacle would you add if you could?"'], extend: 'Film the course on your phone — watch it back together.' },
            scavenger: { intro: 'Final letters of the alphabet!', steps: ['U,V,W,X,Y,Z are tricky — make it silly and playful.', 'X challenge: name ONE X word (X-ray, xylophone) and act it out.', 'Z challenge: ZAP everything you touch for 1 minute!', 'Sing the full alphabet song together, clapping on every letter.', 'Test RANDOM letters — she has 3 seconds to name the word!'], extend: 'Make an "Alphabet Wall" together — put up all 26 letters on her bedroom wall.' },
            charades: { intro: 'SA Animal PARADE — biggest game of the week!', steps: ['Everyone in the family gets an animal.', 'Make a "parade" — march around the room in character.', 'Play the "freeze" game with ALL the SA animals.', 'Nature quiz: "Which is bigger — an elephant or a hippo?"', 'Award "Animal of the Week" — she picks her favourite SA animal and draws it.'], extend: 'Make animal puppets from paper bags — do a puppet show of a SA safari together.' },
            suitcase: { intro: 'FULL WEEK recap — this moment is golden.', steps: ['She tells you ONE thing from each day: Monday, Tuesday, Wednesday, Thursday, Friday.', 'Ask: "Which day was your favourite? Why?"', 'Ask: "What was the hardest thing you did?"', 'Ask: "What do you want to learn NEXT week?"', 'Celebrate with a small reward — a sticker, an extra story, or 20 minutes of her favourite show.'], extend: 'Write a WEEKLY LETTER to future her — seal it in an envelope to open at the end of the school year.' },
        },
    },
};
