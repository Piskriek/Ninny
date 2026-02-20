// =========================================================
// LITTLE BLOOM ACADEMY — CURRICULUM.JS
// 26-Week Grade R Programme (6 months)
// Each week: theme, activity configs, day labels, guardian tips
// =========================================================

const CURRICULUM = [
    null, // index 0 unused — weeks are 1-based

    // ═══════════════════════════════════════════════════════
    // WEEK 1 — My Amazing Body
    // ═══════════════════════════════════════════════════════
    {
        week: 1, theme: "My Amazing Body", emoji: "🙋", accent: "#ff6b9d",
        activities: {
            weather: { theme: "Body Weather Check", extraPrompts: ["Point to your head — now your toes!", "Which body part feels the coldest right now?", "Close your eyes — what do your ears hear outside?", "How does rainy weather make your body feel?", "Stand on one foot — can you balance?"] },
            sculptor: { drawPrompt: "Draw yourself from head to toe! 🙋", shapeFocus: ["Circle", "Oval"], colourFocus: ["Red", "Yellow", "Blue"] },
            obstacle: { theme: "Body Obstacle Circuit", extraQ: { question: "Is your nose ABOVE or BELOW your mouth?", img: "👃 👄", answer: "Above", options: ["Above", "Below", "Next to", "Beside"] } },
            scavenger: { letters: ["A", "B"], countMax: 3, theme: "Find things starting with A or B!" },
            charades: { animalSet: ["Dog", "Cat", "Bird", "Rabbit", "Frog"], rhymeSet: ["Head Shoulders Knees", "Twinkle Twinkle"], theme: "Animal Bodies!" },
            suitcase: { theme: "My Body Week", quizFocus: ["Clay Time", "Drawing", "Obstacle Course", "Scavenger Hunt"] }
        },
        days: { monday: "🌅 Body Wake-Up", tuesday: "👁️ Senses Day", wednesday: "🖐️ Hands & Feet", thursday: "💪 Strong Bodies", friday: "🎉 Body Celebration" },
        guardianTips: {
            weather: { intro: "Week 1: body awareness and self-confidence.", steps: ["Do 5 jumping jacks, naming a body part each jump.", "Ask: \"What do your eyes see? What do your ears hear?\"", "Ask: \"Which season makes your body feel warmest?\"", "Point to body parts on BOTH of you — compare sizes.", "End with: \"Name one amazing thing your body can do!\""], extend: "Trace her body outline on paper — she labels the parts." },
            sculptor: { intro: "Art meets body knowledge.", steps: ["Count body parts together before drawing — how many eyes, ears, fingers?", "Ask: \"What shape is your head? Your tummy?\"", "When finished, she tells a story about what her drawing is doing.", "Ask her to add the funniest detail she can think of.", "Display it somewhere she can feel proud."], extend: "Make a 'My Body Book' — one page per body part." },
            obstacle: { intro: "Obstacle course teaches spatial body awareness.", steps: ["Call out body parts mid-course: \"Crawl using your ARMS!\"", "Ask: \"Which body part is working hardest right now?\"", "Play Body Simon Says: touch the wall with your elbow.", "Cool down: slow stretch of each body part used.", "Ask: \"Which part was the most tired?\""], extend: "Draw a body map — circle the parts that worked during exercise." },
            scavenger: { intro: "A is for Arm, B is for Body!", steps: ["Touch a body part starting with A — Arm, Ankle!", "Find 3 objects starting with A, then 3 starting with B.", "Say 'A-A-Arm!' emphasising the SOUND, not the letter name.", "Clap twice for A words, stomp for B words.", "Ask: \"Can you find something BLUE that starts with B?\""], extend: "Write A and B on her hand — she wears them all day." },
            charades: { intro: "Animals have bodies too — compare to ours!", steps: ["After each animal: \"How is this body different from yours?\"", "Dog: pant together — how do dogs cool down without sweating?", "Bird: flap arms — can YOU fly? Why, why not?", "Compare: \"Who has more legs — a dog or you?\"", "Make a chart: animals with 2 legs vs 4 legs."], extend: "Find a pet video — count body parts together." },
            suitcase: { intro: "Pack the best body memories from this week!", steps: ["Ask: \"What body part did you use most this week?\"", "She demonstrates the funniest animal move from charades.", "Ask: \"What can your body do that you are most proud of?\"", "Name 3 body facts she learned this week.", "High five — you both use your HANDS! Name that body part."], extend: "Start a strong-body diary — draw one challenge to try each week." }
        }
    },

    // ═══════════════════════════════════════════════════════
    // WEEK 2 — My Family & Home
    // ═══════════════════════════════════════════════════════
    {
        week: 2, theme: "My Family & Home", emoji: "🏠", accent: "#ff9f1c",
        activities: {
            weather: { theme: "Home Weather Watch", extraPrompts: ["What room in your house is warmest?", "Is it a good day to play inside or outside?", "What does your family do when it rains?", "Name your home — what colour is it?", "What can you see from your bedroom window?"] },
            sculptor: { drawPrompt: "Draw your house and everyone who lives there! 🏠", shapeFocus: ["Square", "Rectangle", "Triangle"], colourFocus: ["Brown", "Orange", "Yellow"] },
            obstacle: { theme: "Home Explorer Course", extraQ: { question: "Is the front door IN FRONT of or BEHIND the house?", img: "🚪 🏠", answer: "In front of", options: ["In front of", "Behind", "Under", "On top of"] } },
            scavenger: { letters: ["C", "D"], countMax: 4, theme: "Find things starting with C or D!" },
            charades: { animalSet: ["Dog", "Cat", "Rabbit", "Bird", "Fish"], rhymeSet: ["Baa Baa Black Sheep", "Old MacDonald"], theme: "Pets & Home Animals!" },
            suitcase: { theme: "Family Week", quizFocus: ["News Report", "Drawing", "Story Time", "Counting Stars"] }
        },
        days: { monday: "🌅 Family Morning", tuesday: "🍳 Rooms of the House", wednesday: "👨‍👩‍👧 Family Roles", thursday: "❤️ Family Love Day", friday: "🎉 Home Celebration" },
        guardianTips: {
            weather: { intro: "Connect weather to home and family routines.", steps: ["Ask: \"What does our family do on a rainy day at home?\"", "Look out the window together — describe everything you see.", "Ask: \"Which person in our family loves sunny days most?\"", "Draw a family weather chart — each person picks their favourite weather.", "Ask: \"What weather would be perfect for a family braai?\""], extend: "Start a 'family weather book' — each day this week she draws the weather and who was home." },
            sculptor: { intro: "Drawing home builds belonging and spatial thinking.", steps: ["Before drawing: name every room in your home together.", "Ask: \"How many windows does our house have?\"", "She includes EVERY family member — pets too!", "Ask: \"What is your favourite room? Draw what you love about it.\"", "Ask her to show you where HER bedroom is on the drawing."], extend: "Make a real 3D house from cardboard boxes together." },
            obstacle: { intro: "Use real rooms as the course today!", steps: ["Run a course through REAL rooms: kitchen → lounge → bedroom.", "Ask at each door: \"Are you going IN or OUT?\"", "Ask: \"What room is to the LEFT of the kitchen?\"", "Name a family member — she runs to their favourite spot.", "Cool down in her favourite room together."], extend: "Draw a floor plan of your home — she labels every room." },
            scavenger: { intro: "C for Cat, D for Dog — home animals!", steps: ["\"C\" — Cat, Cup, Chair: find 3 C things at home.", "\"D\" — Dog, Door, Desk: touch each D thing as you name it.", "Play \"I Spy\" using only C and D words.", "Find something in every ROOM that starts with C or D.", "Ask: \"What letter does your name start with?\""], extend: "Label 5 things in her room with sticky notes — she writes the first letter." },
            charades: { intro: "Home animals and farm favourites.", steps: ["Ask: \"Which of these animals could live in our home?\"", "Make pet sounds together — whose is funniest?", "Ask: \"What would happen if a COW lived in our house?\"", "Invent a pet for your family — what animal, what name?", "Act out feeding, washing and walking your imaginary pet."], extend: "Write a story together: 'The day a [animal] came to live with us.'" },
            suitcase: { intro: "Family memories are the best memories.", steps: ["Ask: \"Who in your family makes you laugh most?\"", "Ask: \"What is your favourite thing to do together as a family?\"", "She draws one family member doing something they love.", "Ask: \"What would you like to do with your family this weekend?\"", "Tell her one thing YOU love about your family."], extend: "Make a family scrapbook page together with drawings and captions." }
        }
    },

    // ═══════════════════════════════════════════════════════
    // WEEK 3 — My Feelings
    // ═══════════════════════════════════════════════════════
    {
        week: 3, theme: "My Feelings", emoji: "💛", accent: "#ffd60a",
        activities: {
            weather: { theme: "Feeling Weather Reporter", extraPrompts: ["Does sunny weather make you feel happy or excited?", "What weather matches how you feel today?", "If your feelings were weather, what would they be?", "Does rain make you feel calm or sad?", "What feeling do you have when you wake up?"] },
            sculptor: { drawPrompt: "Draw a big happy face — and a worried face too! 😊😟", shapeFocus: ["Circle", "Heart"], colourFocus: ["Pink", "Yellow", "Orange"] },
            obstacle: { theme: "Feelings Obstacle Run", extraQ: { question: "Is the smile face ABOVE or BELOW the sad face?", img: "😊 😢", answer: "Above", options: ["Above", "Below", "Next to", "Same as"] } },
            scavenger: { letters: ["E", "F"], countMax: 5, theme: "Find E and F things — Excited or Fearful?" },
            charades: { animalSet: ["Cat", "Rabbit", "Dog", "Lion", "Bird"], rhymeSet: ["Twinkle Twinkle", "Rain Rain Go Away"], theme: "Happy, Sad, Silly Animals!" },
            suitcase: { theme: "Feelings Week", quizFocus: ["Drawing", "Story Time", "Clay Time", "Singing"] }
        },
        days: { monday: "😊 Happy Day", tuesday: "😢 It's OK to be Sad", wednesday: "😤 Feeling Excited", thursday: "😰 Worries are OK", friday: "💛 All Feelings Celebration" },
        guardianTips: {
            weather: { intro: "This week teaches emotional literacy through daily check-ins.", steps: ["Start each day: \"On a scale of sunshine ☀️ to storm ⛈ how do you feel?\"", "Ask: \"What would make your weather sunnier today?\"", "Share YOUR feeling weather — model emotional openness.", "Ask: \"Is it OK to feel stormy sometimes?\" (Yes! Always.)", "End of day: \"Did your weather change today? Why?\""], extend: "Make a 'feelings weather chart' — she marks her mood each morning all week." },
            sculptor: { intro: "Drawing feelings externalises emotions safely.", steps: ["Name 5 feelings together before drawing — happy, sad, angry, scared, excited.", "Ask: \"What colour is happiness? What colour is anger?\"", "She draws 4 faces — one for each feeling she knows.", "Ask: \"Which feeling is hardest to show on your face?\"", "Role-play each face together in a mirror."], extend: "Make a feelings chart for the fridge — she uses it to show how she feels each morning." },
            obstacle: { intro: "Connect movement to emotional regulation.", steps: ["Announce feelings before each section: \"Run the angry section FAST! Tiptoe the calm section.\"", "Ask: \"What does your body feel like when you're scared?\"", "Teach: deep breath before each obstacle — like calming down.", "Ask: \"Does exercise change how you feel?\"", "Celebrate finishing: act out EXCITED together."], extend: "Teach a simple breathing technique — breathe in for 4, hold 4, out 4." },
            scavenger: { intro: "E for Excited, F for Frightened!", steps: ["\"E\" — Egg, Eye, Excited: act out EXCITED for 10 seconds!", "\"F\" — Fish, Frog, Frightened: make your most scared face!", "For each letter: say a feeling word that starts with it.", "Act out each feeling you name — ham it up!", "Ask: \"Can you feel TWO things at once? Like excited AND nervous?\""], extend: "Make an emotions alphabet — she finds a feeling for every letter she knows." },
            charades: { intro: "Animals show feelings too!", steps: ["Ask: \"How does a dog show it is happy?\" (wag, jump)", "Ask: \"How does a cat show it is upset?\" (hiss, arch)", "Act each animal in TWO feelings: happy lion vs angry lion.", "Ask: \"Do animals feel the same feelings as people?\"", "Make up a story where an animal has a BIG feeling."], extend: "Read a picture book about feelings together this week." },
            suitcase: { intro: "Reflect on the week's emotional journey.", steps: ["Ask: \"Which feeling did you feel most this week?\"", "Ask: \"What made you feel the happiest this week?\"", "Ask: \"Was there anything that made you feel worried? Did it get better?\"", "Tell her a feeling YOU had this week — model vulnerability.", "Hug it out — ask: \"How do hugs make you feel?\""], extend: "Write a 'feelings letter' to each other — seal it to open in 3 months." }
        }
    },

    // ═══════════════════════════════════════════════════════
    // WEEK 4 — My Friends & School
    // ═══════════════════════════════════════════════════════
    {
        week: 4, theme: "My Friends & School", emoji: "👫", accent: "#4cc9f0",
        activities: {
            weather: { theme: "School Day Reporter", extraPrompts: ["What do you wear to school on a cold day?", "Is today good weather for playing at break?", "What game do you play with friends outside?", "Do you have a friend named after a weather word?", "What would your dream school day weather be?"] },
            sculptor: { drawPrompt: "Draw your best friend — or invent a new one! 👫", shapeFocus: ["Star", "Heart"], colourFocus: ["Blue", "Green", "Yellow"] },
            obstacle: { theme: "School Ground Race", extraQ: { question: "Is the classroom INSIDE or OUTSIDE the school?", img: "🏫 📚", answer: "Inside", options: ["Inside", "Outside", "On top of", "Under"] } },
            scavenger: { letters: ["G", "H"], countMax: 5, theme: "Find G and H things — Good and Happy!" },
            charades: { animalSet: ["Dog", "Cat", "Rabbit", "Bird", "Elephant"], rhymeSet: ["Baa Baa Black Sheep", "Humpty Dumpty"], theme: "Friendly Animals!" },
            suitcase: { theme: "Friends Week", quizFocus: ["News Report", "Drawing", "Singing", "Story Time"] }
        },
        days: { monday: "🌅 New Week, New Friends", tuesday: "🤝 Sharing Day", wednesday: "🏫 Classroom Rules", thursday: "🎮 Playing Together", friday: "👫 Friendship Celebration" },
        guardianTips: {
            weather: { intro: "Week 4 is about social belonging and school confidence.", steps: ["Ask: \"Who do you sit next to at school?\"", "Ask: \"What is one nice thing a friend did for you this week?\"", "Ask: \"What weather makes it hardest to play with friends?\"", "Role-play a school break scenario — how do you ask to join a game?", "Ask: \"If a friend was sad, what could you do?\""], extend: "Write a 'friend list' together — she names 5 friends and what she loves about each." },
            sculptor: { intro: "Drawing friends builds social-emotional skills.", steps: ["Before drawing: describe a friend without saying their name — she guesses.", "Ask: \"What colour would your best friend choose for their hair?\"", "Draw matching friendship bracelets on both drawings.", "Ask: \"What does your friend love to do?\" — add it to the picture.", "Make a 'friendship trophy' out of clay to give (or draw giving) to a friend."], extend: "She makes a card to give to a friend at school next week." },
            obstacle: { intro: "Friendship needs teamwork — add cooperation today!", steps: ["Do the course IN PAIRS if possible — she and you, or two siblings.", "Ask: \"Is it easier or harder with a partner? Why?\"", "Teach: one person leads, one follows — then switch.", "Ask: \"What makes a good teammate?\"", "Say: \"Cheer each other on!\" — practise encouraging words."], extend: "Invent a two-player obstacle course together and teach it to another person." },
            scavenger: { intro: "G for Good friend, H for Helpful!", steps: ["\"G\" — Grass, Game, Good: name 3 GOOD things about a friend.", "\"H\" — Hat, House, Helpful: name 3 HELPFUL things she can do at school.", "Find something GREEN (G) in every room.", "Ask: \"Is being a good friend HARD or EASY? Why?\"", "Name a friend for every G and H thing she finds."], extend: "Make 'friendship flash cards' — she draws a friend on one side, writes their name initial on the other." },
            charades: { intro: "Animals in groups — like friends!", steps: ["Ask: \"Which animals live in groups? (elephants, dogs)\"", "Elephant herd: everyone walks together in a line — trunk touching tail.", "Ask: \"Why do animals stay together in groups?\"", "Play a group game: she acts, you guess — then swap.", "Ask: \"What would it feel like to be an animal with NO friends?\""], extend: "Find a video of dolphins or elephants playing together — discuss friendship in animals." },
            suitcase: { intro: "Reflect on connection and kindness.", steps: ["Ask: \"Who was the best friend to YOU this week?\"", "Ask: \"Was there a moment you were a good friend to someone?\"", "Ask: \"If you could invite any friend over right now, who would it be? Why?\"", "Role-play introducing yourself to a new friend.", "Ask: \"What is the most important rule of friendship?\""], extend: "Make a 'kindness challenge' for next week — 5 kind acts she will try to do." }
        }
    },

    // ═══════════════════════════════════════════════════════
    // WEEK 5 — Animals Around Us
    // ═══════════════════════════════════════════════════════
    {
        week: 5, theme: "Animals Around Us", emoji: "🦁", accent: "#e9c46a",
        activities: {
            weather: { theme: "Safari Weather Report", extraPrompts: ["What weather do lions like?", "Would a penguin like today's weather?", "Which animal would love today's weather most?", "What weather is best for a safari?", "Name an animal that loves the rain!"] },
            sculptor: { drawPrompt: "Draw your favourite South African animal! 🦁", shapeFocus: ["Oval", "Triangle", "Diamond"], colourFocus: ["Yellow", "Brown", "Orange", "Black"] },
            obstacle: { theme: "Safari Obstacle Run", extraQ: { question: "Is the giraffe's head ABOVE or BELOW the tree?", img: "🦒 🌳", answer: "Above", options: ["Above", "Below", "Inside", "Around"] } },
            scavenger: { letters: ["I", "J"], countMax: 6, theme: "Find I and J things — Incredible Animals!" },
            charades: { animalSet: ["Lion", "Elephant", "Giraffe", "Zebra", "Meerkat", "Springbok"], rhymeSet: ["Old MacDonald", "Twinkle Twinkle"], theme: "SA Safari Parade!" },
            suitcase: { theme: "Safari Week", quizFocus: ["Animal Charades", "Clay Time", "Drawing", "Scavenger Hunt"] }
        },
        days: { monday: "🌅 Safari Morning", tuesday: "🐘 Big Animal Day", wednesday: "🐆 Fast & Slow", thursday: "🦒 Tall & Small", friday: "🎉 Animal Parade" },
        guardianTips: {
            weather: { intro: "Week 5 connects animals to their environments.", steps: ["Ask: \"Where would a lion sleep in this weather?\"", "Ask: \"Do animals feel cold? How do they stay warm?\"", "Name an animal for each weather type — sunny = cheetah, rainy = hippo.", "Ask: \"Which season has the most baby animals?\"", "Look for any real animal outside — bird, insect, pet."], extend: "Make a 'South African animal weather chart' — which animal loves each season." },
            sculptor: { intro: "Animal art builds observation and creativity.", steps: ["Before drawing: describe the animal's body — stripes, spots, long neck.", "Ask: \"How many legs? What shape are the ears?\"", "Add the animal's home in the background — savannah, tree, river.", "Ask: \"What is your animal doing in the picture?\"", "Give the animal a name and a personality."], extend: "Make clay animals together — focus on body shapes, legs, ears." },
            obstacle: { intro: "Be the animal through the course!", steps: ["Each obstacle section = a different animal: crawl like a croc, hop like a springbok.", "Ask: \"Which animal moves the fastest? Can you move that fast?\"", "Ask: \"Which animal is an obstacle course CHAMPION?\"", "Freeze like a meerkat every time you say 'predator!'", "Cool down: slow, heavy elephant walk back to the start."], extend: "Time her doing the course as different animals — compare the speeds." },
            scavenger: { intro: "I for Impala, J for Jackal — SA animals!", steps: ["\"I\" — Impala, Insect, Incredible: name 3 incredible SA animals.", "\"J\" — Jackal, Jump, Jungle: does South Africa have a jungle?", "Find something in the room shaped like an animal.", "Ask: \"What is the biggest animal you have ever seen in real life?\"", "Count animal pictures in books, on walls, anywhere in the house."], extend: "Make an SA animal alphabet — she names an SA animal for as many letters as she can." },
            charades: { intro: "The full SA safari cast is here!", steps: ["Make animal sounds in a CHOIR — all at once, then one by one.", "Ask: \"Which SA animal is the most dangerous? The kindest?\"", "Play safari guide: she describes an animal, you guess.", "Springbok pronk (stiff-legged leap) competition — who jumps highest?", "Ask: \"If you were an SA animal, which would you be and why?\""], extend: "Watch a 3-minute David Attenborough clip of SA animals together." },
            suitcase: { intro: "Close out safari week with big memories!", steps: ["Ask: \"Which animal was your favourite this week?\"", "Ask: \"What surprised you most about SA animals?\"", "She draws her favourite safari moment from the week.", "Ask: \"If we went on a REAL safari, what would you most want to see?\"", "Pack an imaginary safari bag — what would she bring?"], extend: "Plan a 'virtual safari' — find a live webcam of a SA game reserve online." }
        }
    },

    // WEEK 6 — Plants & Gardens
    {
        week: 6, theme: "Plants & Gardens", emoji: "🌱", accent: "#52b788",
        activities: {
            weather: { theme: "Garden Weather Check", extraPrompts: ["What weather do plants need to grow?", "Has it rained this week? Did the garden drink?", "Name a plant you can see outside!", "What happens to flowers when there is no sun?", "What season is best for gardening?"] },
            sculptor: { drawPrompt: "Draw a garden full of flowers and bugs! 🌸", shapeFocus: ["Oval", "Triangle", "Circle"], colourFocus: ["Green", "Yellow", "Pink"] },
            obstacle: { theme: "Garden Explorer Trail", extraQ: { question: "Is the flower ABOVE or BELOW the soil?", img: "🌸 🌍", answer: "Above", options: ["Above", "Below", "Inside", "Around"] } },
            scavenger: { letters: ["K", "L"], countMax: 6, theme: "Find K and L things — Kinds of Leaves!" },
            charades: { animalSet: ["Rabbit", "Bird", "Springbok", "Frog", "Cat"], rhymeSet: ["Rain Rain Go Away", "Incy Wincy Spider"], theme: "Garden Animals!" },
            suitcase: { theme: "Garden Week", quizFocus: ["Nature Walk", "Drawing", "Clay Time", "Scavenger Hunt"] }
        },
        days: { monday: "🌱 Seed Day", tuesday: "🌸 Flower Day", wednesday: "🐛 Bugs in the Garden", thursday: "🌿 Leaves & Roots", friday: "🎉 Garden Party" },
        guardianTips: {
            weather: { intro: "Plants need sun + water — connect to seasons.", steps: ["Go outside and touch soil — is it dry or wet?", "Ask: \"What does a plant need to survive?\"", "Find a real plant or weed and look at roots together.", "Ask: \"What would happen if it never rained?\"", "Start a simple rain gauge with a cup."], extend: "Plant a seed in a cup together — water it daily, draw its growth." },
            sculptor: { intro: "Nature art develops observation skills.", steps: ["Collect leaf, flower, stone, soil, grass — feel each one.", "Leaf rubbing: press leaf under paper, rub with crayon.", "Ask: \"What shape are the leaves? What pattern do the veins make?\"", "Draw a giant tree — she adds birds and fruit.", "Make flower stamps from cut celery dipped in paint."], extend: "Make a nature collage from garden items." },
            obstacle: { intro: "Be a growing seed through the course!", steps: ["Start curled up (seed) — grow slowly as you go.", "Jump over 'puddles' — two feet together.", "Crawl under the roots (table or chair).", "Ask: \"What does a plant do when there is no water?\" (droop — she droops!)", "Finish: arms up tall as a sunflower."], extend: "Draw the plant life cycle: seed→root→stem→leaf→flower." },
            scavenger: { intro: "K for Kite shape, L for Leaf!", steps: ["Find 3 LEAVES — compare shapes, sizes, colours.", "Press a leaf into clay or paper.", "\"K\" — What shape is a kite? Find that shape!", "Count leaves on one branch.", "Find something ROUGH and something SMOOTH in nature."], extend: "Make a pressed-leaf collection in a scrapbook." },
            charades: { intro: "Garden creatures come alive!", steps: ["Incy Wincy Spider: climb fingers up arm, rain washes down!", "Frog: hop and flick tongue to catch imaginary flies.", "Ask: \"Can a frog HELP a garden? How?\" (eats bugs)", "Rabbit: nibble through the garden — what are they eating?", "Bee: visit each flower (she is the bee, you are flowers)."], extend: "Build a bug hotel from twigs and leaves in a corner of the garden." },
            suitcase: { intro: "Grow a love of nature that lasts!", steps: ["Ask: \"What living thing did we discover this week?\"", "Ask: \"What would happen if there were no plants?\"", "She draws her seed growing.", "Ask: \"What is the most beautiful plant you have ever seen?\"", "Water the seed you planted together."], extend: "Take a 10-min nature walk each day this week." }
        }
    },

    // WEEK 7 — Food & Eating Well
    {
        week: 7, theme: "Food & Eating Well", emoji: "🍎", accent: "#e63946",
        activities: {
            weather: { theme: "Food & Weather Report", extraPrompts: ["What food is perfect for a cold day?", "Name a fruit that grows in summer!", "What do you eat when it is very hot outside?", "What is your favourite meal on a rainy day?", "Name a vegetable the colour of the sky!"] },
            sculptor: { drawPrompt: "Draw your favourite meal on a plate! 🍽️", shapeFocus: ["Circle", "Square", "Oval"], colourFocus: ["Red", "Orange", "Green", "Yellow"] },
            obstacle: { theme: "Food Delivery Race", extraQ: { question: "Is the apple INSIDE or OUTSIDE the fruit bowl?", img: "🍎 🥣", answer: "Inside", options: ["Inside", "Outside", "On top of", "Under"] } },
            scavenger: { letters: ["M", "N"], countMax: 7, theme: "Find M and N things — Mmm, Nummy Food!" },
            charades: { animalSet: ["Dog", "Cat", "Elephant", "Hippo", "Bird"], rhymeSet: ["Old MacDonald", "Humpty Dumpty"], theme: "Animals Eating!" },
            suitcase: { theme: "Food Week", quizFocus: ["Clay Time", "Drawing", "Story Time", "Counting Stars"] }
        },
        days: { monday: "🍎 Fruit Day", tuesday: "🥦 Vegetable Day", wednesday: "🍞 Bread & Grains", thursday: "💧 Drink Water Day", friday: "🎉 Healthy Feast" },
        guardianTips: {
            weather: { intro: "Food and nutrition, connected to the world around us.", steps: ["At each meal: name the colour of every food on the plate.", "Ask: \"Does this fruit grow on a tree, bush or in the ground?\"", "Ask: \"What foods help our bodies grow strong?\"", "Play: 'I spy something we can EAT...'", "Ask: \"What food starts with this week's letters?\""], extend: "Make a 'rainbow plate' — find one food of each colour." },
            sculptor: { intro: "Food art teaches colours, shapes and nutrition.", steps: ["Draw a plate divided into sections — veg, protein, carbs, fruit.", "Ask: \"What shape is a banana? An orange slice? A watermelon?\"", "Use real fruit/veg as stamps — cut potato, apple, broccoli.", "Ask: \"What is the HEALTHIEST thing you can eat?\"", "Make a clay fruit bowl."], extend: "Cook something simple together — eggs, sandwiches, fruit salad." },
            obstacle: { intro: "Food delivery theme — don't drop the groceries!", steps: ["Carry a bag at the end without spilling.", "Ask: \"What foods need to be kept cold?\"", "Name a healthy food before moving between stations.", "Ask: \"What vegetables grow underground?\" (carrots, potatoes)", "Set the 'table' together after the course."], extend: "Visit a market — she picks one fruit or vegetable she has never tried." },
            scavenger: { intro: "M for Mango, N for Nuts!", steps: ["\"M\" — Mango, Milk, Melon: taste any M food at home.", "\"N\" — Nuts, Noodle, Nectarine: find N food in the kitchen.", "Count how many fruits are in your home right now.", "Find a food for every colour of the rainbow.", "Sort kitchen items: things you eat vs things you cook with."], extend: "Make a food alphabet — how many letters can she fill with food names?" },
            charades: { intro: "Animals and their diets — carnivore, herbivore, omnivore!", steps: ["Elephant: what does it eat? (plants — herbivore)", "Hippo: opens giant mouth — what does it eat?", "Ask: \"What is a carnivore? Herbivore? Omnivore?\"", "She sorts animals: plants vs meat vs both.", "Act out a food chain: plant→insect→frog→bird."], extend: "Make a chart of 5 animals and what they eat." },
            suitcase: { intro: "Taste the week's lessons!", steps: ["Ask: \"What is the healthiest thing you ate this week?\"", "Ask: \"What food would you like to learn to cook?\"", "Name every colour of food she ate today.", "Ask: \"What food does your body love most?\"", "Make a healthy snack together to celebrate."], extend: "Start a family recipe book — she draws pictures of favourite meals." }
        }
    },

    // WEEK 8 — My Community
    {
        week: 8, theme: "My Community", emoji: "🏘️", accent: "#3a86ff",
        activities: {
            weather: { theme: "Community Weather Report", extraPrompts: ["What weather helps builders work safely?", "What do firefighters do in a storm?", "Do doctors work in ALL weather?", "Which community helper would you call on a stormy night?", "Name a community place you visit every week."] },
            sculptor: { drawPrompt: "Draw a community helper — doctor, teacher or firefighter! 🚒", shapeFocus: ["Rectangle", "Square", "Triangle"], colourFocus: ["Blue", "Red", "Yellow"] },
            obstacle: { theme: "Community Helper Race", extraQ: { question: "Is the doctor's office INSIDE or OUTSIDE the hospital?", img: "👨‍⚕️ 🏥", answer: "Inside", options: ["Inside", "Outside", "On top", "Beside"] } },
            scavenger: { letters: ["O", "P"], countMax: 7, theme: "Find O and P things — Our People!" },
            charades: { animalSet: ["Dog", "Horse", "Bird", "Elephant", "Cheetah"], rhymeSet: ["Baa Baa Black Sheep", "Twinkle Twinkle"], theme: "Helper Animals!" },
            suitcase: { theme: "Community Week", quizFocus: ["News Report", "Drawing", "Obstacle Course", "Story Time"] }
        },
        days: { monday: "🏥 Doctors & Nurses", tuesday: "🚒 Firefighters", wednesday: "👮 Police & Safety", thursday: "📚 Teachers", friday: "🎉 Community Heroes" },
        guardianTips: {
            weather: { intro: "Week 8 builds civic awareness and gratitude.", steps: ["Ask: \"Who helps our community when there is a big storm?\"", "Name 5 community helpers as fast as possible.", "Ask: \"What would we do if there were no teachers?\"", "Role-play calling 10111 or 10177 — what do you say?", "Ask: \"Have you ever needed a doctor? How did they help?\""], extend: "Visit or wave to a community helper this week." },
            sculptor: { intro: "Drawing helpers builds respect and aspiration.", steps: ["Ask: \"What does a doctor wear? What tools do they carry?\"", "Draw the uniform — add all the details.", "Ask: \"What is the most important job in our community?\"", "Add a person being helped to the picture.", "Ask: \"What would YOU like to do to help people when you grow up?\""], extend: "Make a Thank You Card to give to a helper she knows." },
            obstacle: { intro: "Race like a community hero!", steps: ["Each station = a job: firefighter run, soldier crawl, postman skip.", "Practise: Stop, Drop & Roll (fire safety) during the course.", "Teach road safety: red=stop, orange=wait, green=go!", "Ask: \"What makes a good police officer?\"", "Finish: give a drawn medal to the winner."], extend: "Make a fire escape plan for your home together." },
            scavenger: { intro: "O for Officer, P for Paramedic!", steps: ["\"O\" — Officer, Orange: what does a police officer do?", "\"P\" — Police, Paramedic, Post office: name all 3 helpers.", "Learn the emergency number — say it 3 times loud.", "Find 7 things at home a community helper might use.", "Ask: \"What would happen if there were no community helpers?\""], extend: "Make a community helpers poster." },
            charades: { intro: "Animals that help communities!", steps: ["Dog (guide/police dog): how do dogs help people?", "Horse: what jobs did horses do before cars?", "Ask: \"Can animals be community helpers?\" (guide dogs!)", "She pretends to be a helper animal — you guess the job.", "Eagle-eyed: what would a sharp-eyed officer watch for?"], extend: "Watch a short clip about guide dogs or police dogs." },
            suitcase: { intro: "Appreciate the community around us.", steps: ["Ask: \"Who helped YOU this week?\"", "Ask: \"Who did YOU help this week?\"", "Name 5 helpers and thank them out loud.", "Ask: \"What is one thing you want to do to help our community?\"", "Make a plan: one helpful act she will do."], extend: "Start a gratitude list — one person who helped her each day." }
        }
    },

    // WEEK 9 — Weather & Seasons
    {
        week: 9, theme: "Weather & Seasons", emoji: "☀️", accent: "#f4a261",
        activities: {
            weather: { theme: "Expert Weather Station", extraPrompts: ["What are the 4 seasons?", "Which season has the longest days?", "Why does it rain? Where does rain come from?", "Name a country where it snows!", "What animal hibernates in winter?"] },
            sculptor: { drawPrompt: "Draw your favourite season — show weather, plants AND people! 🍂", shapeFocus: ["Circle", "Triangle", "Oval"], colourFocus: ["Blue", "White", "Yellow", "Orange"] },
            obstacle: { theme: "Season Change Course", extraQ: { question: "Is the sun ABOVE or BELOW the clouds?", img: "☀️ ☁️", answer: "Above", options: ["Above", "Below", "Inside", "Beside"] } },
            scavenger: { letters: ["Q", "R"], countMax: 8, theme: "Find Q and R things — Quite Rainy today?" },
            charades: { animalSet: ["Bird", "Springbok", "Elephant", "Rabbit", "Frog"], rhymeSet: ["Rain Rain Go Away", "Twinkle Twinkle"], theme: "Seasonal Animals!" },
            suitcase: { theme: "Seasons Week", quizFocus: ["News Report", "Clay Time", "Drawing", "Scavenger Hunt"] }
        },
        days: { monday: "🌸 Spring", tuesday: "☀️ Summer", wednesday: "🍂 Autumn", thursday: "❄️ Winter", friday: "🔄 All 4 Seasons Review" },
        guardianTips: {
            weather: { intro: "Week 9 teaches the science of weather — a huge Grade R topic.", steps: ["Make a seasons chart — she draws what she wears in each.", "Ask: \"Why is SA's summer when Europe's is winter?\"", "Measure today's temperature with a thermometer.", "Watch clouds: \"What shape is that cloud? What does it look like?\"", "Ask: \"Which season is your birthday in?\""], extend: "Make a weather station: cloud type, wind indicator, rain gauge." },
            sculptor: { intro: "Seasonal art deepens environmental awareness.", steps: ["Draw a tree four times — once per season.", "Ask: \"What colour are trees in autumn? In spring?\"", "Add weather details: raindrops, sun rays, falling leaves.", "Ask: \"What do people WEAR in each season in SA?\"", "Make a seasons spinner from paper."], extend: "Collect seasonal items: spring flower, summer shell, autumn leaf, winter twig." },
            obstacle: { intro: "Move through all four seasons!", steps: ["Spring = gallop, Summer = swim, Autumn = spin-and-fall, Winter = shiver and tiptoe.", "Ask between sections: \"What season is this?\"", "Spring: jump puddles. Summer: crawl under the hot sun.", "Ask: \"Which season was the hardest section? Why?\"", "Finish by drawing the current season quickly."], extend: "Film each season movement and watch it back." },
            scavenger: { intro: "Q for Quiet winter, R for Rainy season!", steps: ["\"Q\" — Quiet, Quick: what is the weather like in a quiet winter morning?", "\"R\" — Rain, Rainbow: find something that reminds her of rain.", "Find 8 items associated with different seasons.", "Ask: \"Which letter does SNOW start with? HEAT? WIND?\"", "Name a season-word for each room you enter."], extend: "Make a seasons scrapbook — one page per season, add drawings all year." },
            charades: { intro: "Animals and their seasonal behaviour!", steps: ["Ask: \"Which animals hibernate in winter?\"", "Frog: hibernate still, then spring LEAP!", "Bird: migrate south — flap south! Why do birds fly away?", "Springbok: pronk in spring, slow trudge in winter.", "Ask: \"What season do most baby animals arrive?\" (spring!)"], extend: "Find a video of animal migration — discuss why they move." },
            suitcase: { intro: "Pack season knowledge into memory.", steps: ["Name the 4 seasons in order — hands on head for each.", "Ask: \"What is your least favourite season? Why?\"", "Ask: \"What does 'hibernate' mean?\"", "Draw all 4 seasons in 4 boxes — 30 seconds each!", "Ask: \"Which season do you feel most ALIVE in?\""], extend: "Start a seasonal nature diary — one drawing per month." }
        }
    },

    // WEEK 10 — Water & Oceans
    {
        week: 10, theme: "Water & Oceans", emoji: "💧", accent: "#023e8a",
        activities: {
            weather: { theme: "Ocean Weather Watch", extraPrompts: ["Does it rain more near the sea?", "What is a tsunami?", "Can you name an ocean?", "What weather makes waves bigger?", "Where does the water in our taps come from?"] },
            sculptor: { drawPrompt: "Draw an underwater scene — fish, coral, shells! 🐠", shapeFocus: ["Oval", "Triangle", "Star"], colourFocus: ["Blue", "Green", "White", "Purple"] },
            obstacle: { theme: "Deep Sea Dive Course", extraQ: { question: "Is the fish ABOVE or BELOW the boat?", img: "🐟 ⛵", answer: "Below", options: ["Above", "Below", "Inside", "Beside"] } },
            scavenger: { letters: ["S", "T"], countMax: 8, theme: "Find S and T things — Sea and Tide!" },
            charades: { animalSet: ["Fish", "Hippo", "Crocodile", "Frog", "Bird"], rhymeSet: ["Rain Rain Go Away", "Incy Wincy Spider"], theme: "Water Animals!" },
            suitcase: { theme: "Ocean Week", quizFocus: ["Clay Time", "Drawing", "Animal Charades", "Obstacle Course"] }
        },
        days: { monday: "🌊 Oceans & Seas", tuesday: "🐠 Fish & Coral", wednesday: "💧 Rivers & Dams", thursday: "🌧️ The Water Cycle", friday: "🎉 Water Celebration" },
        guardianTips: {
            weather: { intro: "Water is life — this week builds environmental appreciation.", steps: ["Turn on a tap: \"Where does this water come from?\"", "Ask: \"What would happen if our dam dried up?\"", "Time her bath/shower — discuss water saving.", "Ask: \"Name 3 animals that live in water.\"", "Look up South Africa's closest ocean on a map together."], extend: "Track your family's water use for one day." },
            sculptor: { intro: "Ocean art meets science imagination.", steps: ["Use blue paper — white crayon for waves, watercolour wash over.", "Ask: \"How deep is the ocean?\" (10km at deepest!)", "Draw what might live at the VERY deepest part.", "Make a fish from clay — fins, tail, gills.", "Ask: \"What colour is most of Earth from space?\" (blue!)"], extend: "Make an ocean sensory bin: blue water, shells, stones, toy fish." },
            obstacle: { intro: "Swim through the deep sea course!", steps: ["Every move is a swim stroke — breaststroke, crawl, backstroke.", "Ask: \"What does a whale do to breathe?\" (surface!)", "Freeze when you shout SHARK!", "Ask: \"Can you drink sea water? Why not?\"", "Finish: she tells you one ocean fact."], extend: "Make a paper boat — float it in the bath, test what makes it sink." },
            scavenger: { intro: "S for Sea, T for Tide!", steps: ["\"S\" — Sea, Shell, Swim: find 8 things at home connected to water.", "\"T\" — Tide, Tap, Towel: count how many taps are in your home.", "Find something BLUE in every room and name an ocean creature.", "Ask: \"What letter does OCEAN start with? WAVE? FISH?\"", "Count water containers in the kitchen."], extend: "Collect 10 shells or stones from outside — sort by size and colour." },
            charades: { intro: "Water creatures fully explored!", steps: ["Fish: silent swimming — no land sounds!", "Hippo: blow bubbles in water cup (with permission).", "Frog: jump across 'lily pads' (cushions on the floor).", "Crocodile: low slow crawl, snap arms as jaws.", "Ask: \"Which can breathe underwater?\" (fish — explain gills!)"], extend: "Watch deep-sea creature footage for 5 minutes." },
            suitcase: { intro: "Close the ocean with wonder and responsibility.", steps: ["Ask: \"What was the most surprising ocean fact this week?\"", "Ask: \"How can we protect the ocean?\" (no litter, save water)", "She draws her favourite ocean creature.", "Ask: \"If you could breathe underwater, where would you go?\"", "Write 3 water-saving pledges together."], extend: "Make a 'Save Our Ocean' poster to display at home." }
        }
    },

// WEEK 11 — The Sky (Day & Night)
{
    week: 11, theme: "The Sky — Day & Night", emoji: "🌙", accent: "#480ca8",
        activities: {
        weather: { theme: "Sky Watch Report", extraPrompts: ["How many stars can you count at night?", "Why is the sky blue in the day?", "What makes a rainbow?", "Can you see the moon during the day?", "What is a shooting star?"] },
        sculptor: { drawPrompt: "Draw the night sky — moon, stars and planets! 🌙⭐", shapeFocus: ["Circle", "Star"], colourFocus: ["Black", "Yellow", "Blue", "White"] },
        obstacle: { theme: "Astronaut Training Course", extraQ: { question: "Is the moon ABOVE or BELOW the clouds?", img: "🌙 ☁️", answer: "Above", options: ["Above", "Below", "Inside", "Beside"] } },
        scavenger: { letters: ["U", "V"], countMax: 9, theme: "Find U and V things — Up in the sky!" },
        charades: { animalSet: ["Bird", "Rabbit", "Cat", "Bat", "Frog"], rhymeSet: ["Twinkle Twinkle", "Humpty Dumpty"], theme: "Nocturnal Animals!" },
        suitcase: { theme: "Sky Week", quizFocus: ["Drawing", "Counting Stars", "News Report", "Clay Time"] }
    },
    days: { monday: "☀️ The Sun", tuesday: "🌙 The Moon", wednesday: "⭐ Stars", thursday: "🌈 Rainbows & Light", friday: "🚀 Space!" },
    guardianTips: {
        weather: { intro: "The sky opens up the universe to a curious 5-year-old!", steps: ["Go outside at night and look at the moon and stars.", "Ask: \"Why does the sun disappear at night?\"", "Ask: \"How far away is the moon?\" (384,000 km!)", "Watch a sunrise or sunset together if possible.", "Ask: \"What would happen if there were no sun?\""], extend: "Make a star map: go outside and draw the stars you can see tonight." },
        sculptor: { intro: "Space art sparks limitless imagination.", steps: ["Draw the sun, moon and stars in one picture — day AND night!", "Ask: \"What shape is the Earth? The moon?\"", "Add planets — she names each one she invents.", "Ask: \"If you lived on the moon, what would you see?\"", "Make a mobile: cut out stars and moon from cardboard, hang with string."], extend: "Make a galaxy jar: water + glitter + food colouring in a bottle." },
        obstacle: { intro: "Astronaut training is this week!", steps: ["Walk in zero gravity — slow-motion, arms floating.", "Crawl through the space station tunnel (under a table).", "Ask: \"What would happen if you jumped on the moon?\" (you would float!)", "Freeze as a satellite — spin slowly with arms out.", "Land back on Earth with a big jump and cheer!"], extend: "Watch a NASA clip of astronauts in zero gravity together." },
        scavenger: { intro: "U for Universe, V for Venus!", steps: ["\"U\" — Universe, Under, Up: point UP — the universe is up there!", "\"V\" — Venus, Very far, Vast: how big is space? VERY vast!", "Count 9 things in the room — like 9 planets.", "Find something ROUND like a planet.", "Ask: \"Which planet is closest to Earth?\" (Venus or Mars)"], extend: "Make a planet chart — she draws and labels each planet in order." },
        charades: { intro: "Nocturnal animals come out at night like stars!", steps: ["Ask: \"What is a nocturnal animal?\" (awake at night)", "Bat: flap wings silently, navigate by echolocation (eyes closed!).", "Owl: head rotates — how far can an owl turn its head?", "Cat: night vision — eyes wide in the dark!", "Ask: \"Are YOU more of a day animal or night animal?\""], extend: "Go on a night walk — listen for night sounds together." },
        suitcase: { intro: "The universe is huge — feel the wonder!", steps: ["Ask: \"What was the most amazing sky fact this week?\"", "Ask: \"Would you visit the moon or Mars?\"", "Count together: how many stars might be in the universe?", "She draws a rocket ship and names it.", "Ask: \"What question about space do you still have?\""], extend: "Find a simple stargazing app to use on clear nights." }
    }
},
// WEEK 12 — Bugs & Insects
{
    week: 12, theme: "Bugs & Insects", emoji: "🐛", accent: "#606c38",
        activities: {
        weather: { theme: "Bug Weather Watch", extraPrompts: ["Do bugs like hot or cold weather?", "Where do ants go when it rains?", "Can butterflies fly in the wind?", "Why do you see more bugs in summer?", "What bug is most active at night?"] },
        sculptor: { drawPrompt: "Draw a butterfly — design your own unique wings! 🦋", shapeFocus: ["Oval", "Circle", "Triangle"], colourFocus: ["Yellow", "Black", "Orange", "Blue"] },
        obstacle: { theme: "Bug Explorer Trail", extraQ: { question: "Is the butterfly ABOVE or ON the flower?", img: "🦋 🌸", answer: "Above", options: ["Above", "On", "Under", "Beside"] } },
        scavenger: { letters: ["W", "X"], countMax: 9, theme: "Find W and X things — Wriggly bugs!" },
        charades: { animalSet: ["Frog", "Bird", "Cat", "Rabbit", "Dog"], rhymeSet: ["Incy Wincy Spider", "Rain Rain Go Away"], theme: "Bug Hunters!" },
        suitcase: { theme: "Bug Week", quizFocus: ["Drawing", "Clay Time", "Nature Walk", "Scavenger Hunt"] }
    },
    days: { monday: "🐜 Ants", tuesday: "🦋 Butterflies", wednesday: "🐞 Ladybirds", thursday: "🕷️ Spiders", friday: "🎉 Bug Parade" },
    guardianTips: {
        weather: { intro: "Bugs connect children to the living world right under their feet.", steps: ["Go outside and find one real bug together.", "Ask: \"How many legs? Is it an insect?\" (6 legs = insect)", "Ask: \"Is this bug a friend or foe to the garden?\"", "Watch an ant colony — describe what they are doing.", "Ask: \"What would happen if all the bees disappeared?\""], extend: "Make a bug hotel from sticks and leaves in a garden corner." },
        sculptor: { intro: "Butterfly symmetry teaches art AND science.", steps: ["Fold paper in half, paint one side only — press for a symmetrical butterfly!", "Ask: \"What is symmetry?\" (both sides the same)", "She names her butterfly species and explains where it lives.", "Make a caterpillar from clay beads on a pipe cleaner.", "Draw the butterfly life cycle: egg, caterpillar, chrysalis, butterfly."], extend: "Plant a flower that attracts butterflies together." },
        obstacle: { intro: "Think like a bug through the course!", steps: ["Ant section: carry a small toy as a crumb across the course.", "Caterpillar: inchworm crawl — head then body.", "Butterfly section: flutter arms slowly between stations.", "Spider section: walk backwards on all fours.", "Ask: \"Which bug movement was hardest for a human body?\""], extend: "Make a bug scavenger hunt checklist for the garden." },
        scavenger: { intro: "W for Worm, X marks the bug spot!", steps: ["\"W\" — Worm, Wing, Web: find a spider web and describe it.", "\"X\" marks the spot — draw an X where bugs like to hide.", "Find 9 small things and pretend they are insects.", "Count the legs or wings on bug pictures.", "Ask: \"What letter does ANT start with? BEE? FLY?\""], extend: "Make a bug dictionary: she draws 5 bugs and writes their first letter." },
        charades: { intro: "Animals that hunt bugs — the food web!", steps: ["Frog: snap tongue to catch flies.", "Bird: peck at the ground for worms.", "Ask: \"What would a frog eat in a day?\" (hundreds of insects!)", "She acts a bug — you are the predator!", "Discuss: why do we need bugs?"], extend: "Watch a 3-min clip about bees or butterflies." },
        suitcase: { intro: "Appreciate tiny things — they run the world!", steps: ["Ask: \"Which bug was your favourite this week?\"", "Ask: \"What would the world be like without any bugs?\"", "She draws her imaginary new bug species.", "Ask: \"If you were a bug, which would you be? Why?\"", "Count 12 things in the room — like 12 legs on 2 bugs!"], extend: "Go on a bug hunt in the garden this weekend." }
    }
},
// WEEK 13 — Numbers 1 to 5
{
    week: 13, theme: "Numbers 1 to 5", emoji: "🔢", accent: "#e07a5f",
        activities: {
        weather: { theme: "Number Weather Count", extraPrompts: ["How many clouds can you count?", "Give me 3 weather words!", "Hold up 4 fingers if it is warm!", "Count to 5 using raindrop sounds!", "Is the number of people in your house more than 5?"] },
        sculptor: { drawPrompt: "Draw exactly 5 of something — 5 flowers, 5 stars, 5 animals! 🌟🌟🌟🌟🌟", shapeFocus: ["Circle", "Square", "Triangle", "Star", "Heart"], colourFocus: ["Red", "Blue", "Green", "Yellow", "Pink"] },
        obstacle: { theme: "Number Ninja Course", extraQ: { question: "Is 3 MORE or LESS than 5?", img: "3️⃣ vs 5️⃣", answer: "Less", options: ["More", "Less", "Same", "Equal"] } },
        scavenger: { letters: ["Y"], countMax: 5, theme: "Count 1-5! Find exactly 5 of something each round!" },
        charades: { animalSet: ["Lion", "Elephant", "Dog", "Cat", "Bird"], rhymeSet: ["Twinkle Twinkle", "Baa Baa Black Sheep"], theme: "Count the Animals!" },
        suitcase: { theme: "Numbers 1-5 Week", quizFocus: ["Counting Stars", "Clay Time", "Drawing", "Obstacle Course"] }
    },
    days: { monday: "1️⃣ One", tuesday: "2️⃣ Two", wednesday: "3️⃣ Three", thursday: "4️⃣ Four", friday: "5️⃣ Five — Review!" },
    guardianTips: {
        weather: { intro: "Week 13 locks in numbers 1-5 through repetition and play.", steps: ["Everywhere today: count in groups of 1-5 — steps, bites, claps.", "Ask: \"Show me 3 fingers. Now 5. Now 2.\"", "Play subitising: flash fingers quickly — she calls the number.", "Ask: \"What comes AFTER 3? BEFORE 5?\"", "Count backwards from 5 — blastoff!"], extend: "Make number cards 1-5 — practice ordering them both ways." },
        sculptor: { intro: "Drawing in sets builds quantity understanding.", steps: ["She draws exactly 2 of one thing, 3 of another, up to 5.", "Ask: \"Which group has MORE?\" after each set.", "Count each group together by pointing.", "Ask: \"How many altogether?\" (simple addition to 5)", "Make clay balls: 1, 2, 3, 4, 5."], extend: "Make a number book: 1-5, each page shows that many drawn objects." },
        obstacle: { intro: "Count through every obstacle!", steps: ["At each obstacle: count while doing it 1-5 before moving on.", "Jump on 1 foot — count each jump to 5.", "Ask mid-course: \"How many obstacles have you done so far?\"", "Make station 5 the boss level — hardest one!", "Cool down: count 5 slow breaths together."], extend: "Make simple hopscotch with 1-5 — play it together." },
        scavenger: { intro: "Count sets of 1-5 every round!", steps: ["Find exactly 1 red thing, 2 blue things, 3 soft things, 4 small things, 5 big things.", "Ask: \"How many fingers on ONE hand?\" (5)", "Clap slowly — she counts each clap, stops at 5.", "Ask: \"If I take away 2 from 5, how many are left?\"", "Hide 5 objects — she finds them, counting each."], extend: "Bake 5 biscuits together — count each step." },
        charades: { intro: "5 animals, 5 sounds, 5 moves!", steps: ["Do each animal EXACTLY 5 times — 5 roars, 5 hops, 5 stomps.", "Ask: \"How many did we do?\" She holds up fingers.", "Play: I will do 3 elephant stomps — how many more to make 5?", "Roll a die — she does that many animal moves.", "Count down from 5 for each new animal."], extend: "Make number-animal matching game: card shows 3, she does 3 animal sounds." },
        suitcase: { intro: "Solidify 1-5 through memory and reflection.", steps: ["Show me 1 through 5 with fingers — as fast as possible!", "Ask: \"What is the biggest number you know?\"", "Count 5 things she is grateful for from this week.", "Ask: \"If you had 5 sweets and gave 2 away, how many left?\"", "High five: 5 fingers = 5 amazing days this week!"], extend: "Play a board game counting to 1-5 — snakes and ladders." }
    }
},
// WEEK 14 — Numbers 6 to 10
{
    week: 14, theme: "Numbers 6 to 10", emoji: "🔟", accent: "#2d6a4f",
        activities: {
        weather: { theme: "Big Numbers Weather Watch", extraPrompts: ["Count to 10 using thunder claps!", "Count windows in your house — more or less than 10?", "Give me 7 weather words — go!", "8 raindrops fell, then 2 more — how many total?", "Count 10 imaginary stars!"] },
        sculptor: { drawPrompt: "Draw exactly 10 things — make a big scene! 🎨", shapeFocus: ["Circle", "Square", "Triangle", "Rectangle", "Oval"], colourFocus: ["Red", "Blue", "Green", "Yellow", "Orange"] },
        obstacle: { theme: "Ten-Station Master Course", extraQ: { question: "Is 7 MORE or LESS than 10?", img: "7️⃣ vs 🔟", answer: "Less", options: ["More", "Less", "Same", "Equal"] } },
        scavenger: { letters: ["Z"], countMax: 10, theme: "Count ALL the way to 10! Last letter Z!" },
        charades: { animalSet: ["Lion", "Elephant", "Giraffe", "Zebra", "Meerkat", "Springbok", "Dog", "Cat", "Frog", "Bird"], rhymeSet: ["Old MacDonald", "Head Shoulders Knees"], theme: "Count All 10 Animals!" },
        suitcase: { theme: "Numbers 6-10 Week", quizFocus: ["Counting Stars", "Animal Charades", "Obstacle Course", "Drawing"] }
    },
    days: { monday: "6️⃣ Six", tuesday: "7️⃣ Seven", wednesday: "8️⃣ Eight", thursday: "9️⃣ Nine", friday: "🔟 Ten — the BIG finish!" },
    guardianTips: {
        weather: { intro: "Week 14 completes the 1-10 number journey.", steps: ["Count 10 things every morning — steps, birds, cars.", "Ask: \"What is 6 + 4?\" (use fingers)", "Play: 'I am thinking of a number between 6 and 10...' she guesses.", "Ask: \"Which is more: 7 or 9?\" — hold up fingers.", "Write numbers 6-10 in the air with her finger."], extend: "Make a number line 1-10 with tape on the floor — jump to each number called." },
        sculptor: { intro: "Drawing in tens builds solid number sense.", steps: ["She draws a group of 10, then circles sets of 2 inside it.", "Ask: \"How many groups of 2 in 10?\" (5)", "Make 10 clay balls, push 3 away — how many left?", "Draw 10 as a 1 and a 0 — what do those digits mean?", "Ask: \"What does zero mean?\" (none, empty)"], extend: "Play egg-carton maths: fill compartments with small items up to 10." },
        obstacle: { intro: "Every movement is a counting exercise!", steps: ["10 stations total — she counts each one out loud.", "At station 6, do 6 jumps; at station 8, do 8 claps.", "Ask mid-course: \"You have done 7 — how many more to 10?\"", "Score of 10 — she earns points for each station.", "Cool down: count backwards from 10 — blast off!"], extend: "Create a hopscotch 1-10 and time how fast she completes it." },
        scavenger: { intro: "Z is the last letter — 10 is the big milestone!", steps: ["\"Z\" — Zebra, Zero, Zoom: Z is the last letter, she has graduated!", "Find exactly 10 objects of the same colour.", "Ask: \"What is 10-3?\" Use fingers to work it out.", "Count all fingers then all toes — how many total?", "Make the number 10 pattern: 2 rows of 5 objects."], extend: "Make a counting-to-10 song together — silly and catchy." },
        charades: { intro: "All 10 animals = a big celebration!", steps: ["Do each animal exactly 10 times — 10 roars, 10 hops!", "Ask: \"How many animal sounds did we make?\"", "Human calculator: she adds two animal quantities.", "Make a top-10 animals list together.", "Count DOWN from 10 for the grand final animal entrance."], extend: "Make number-animal flashcards for review." },
        suitcase: { intro: "Celebrate mastering 1-10!", steps: ["Count from 1 to 10 as fast as possible — time it!", "Count from 10 to 1 backwards — time it!", "Ask: \"What is your favourite number between 1 and 10?\"", "10 fingers quiz — she holds up the correct number.", "CELEBRATION — she has officially mastered numbers 1 to 10!"], extend: "Make a 'number certificate' — she has mastered 1 to 10!" }
    }
},
// WEEK 15 — Shapes Everywhere
{
    week: 15, theme: "Shapes Everywhere", emoji: "🔺", accent: "#7b2d8b",
        activities: {
        weather: { theme: "Shape Weather Watch", extraPrompts: ["What shape is the sun?", "What shape are raindrops?", "Are snowflakes circles or stars?", "What shape is a rainbow?", "Find a weather shape in the clouds!"] },
        sculptor: { drawPrompt: "Draw a ROBOT made entirely from shapes! 🤖", shapeFocus: ["Circle", "Square", "Triangle", "Rectangle", "Diamond"], colourFocus: ["Red", "Blue", "Green", "Black", "Yellow"] },
        obstacle: { theme: "Shape Hunt Course", extraQ: { question: "How many sides does a triangle have?", img: "🔺", answer: "3", options: ["2", "3", "4", "5"] } },
        scavenger: { letters: ["A", "B", "C"], countMax: 10, theme: "Find letter-SHAPED things — letters are made of shapes!" },
        charades: { animalSet: ["Elephant", "Giraffe", "Crocodile", "Turtle", "Dog"], rhymeSet: ["Humpty Dumpty", "Twinkle Twinkle"], theme: "Animal Shapes!" },
        suitcase: { theme: "Shapes Week", quizFocus: ["Drawing", "Clay Time", "Obstacle Course", "Scavenger Hunt"] }
    },
    days: { monday: "⭕ Circle", tuesday: "🟥 Square & Rectangle", wednesday: "🔺 Triangle", thursday: "⭐ Star & Diamond", friday: "🎉 All Shapes!" },
    guardianTips: {
        weather: { intro: "Shapes are EVERYWHERE — teach her to see them!", steps: ["Go outside: name the shape of every object you see.", "Ask: \"Is a cloud a circle or an irregular shape?\"", "Draw shapes with your finger on a foggy window.", "Ask: \"What shape is our front door? Our TV?\"", "Find a natural object that is almost a perfect circle."], extend: "Make a shape walk: photograph 10 different shapes outside." },
        sculptor: { intro: "Shape drawing is the foundation of literacy and numeracy.", steps: ["She traces each shape with her finger first.", "Ask: \"How many corners does a square have? A triangle?\"", "Build a house: square body, triangle roof, rectangle door.", "She makes a shape creature — name and describe it.", "Press shapes into clay — she identifies each imprint."], extend: "Make a tangram puzzle from cardboard — she makes pictures from 7 shapes." },
        obstacle: { intro: "Shape-sorted obstacle course!", steps: ["Each station has a shape challenge: jump INSIDE a circle, crawl through a square.", "Ask: \"What shape is this station?\" at each one.", "Ask: \"What does a square + triangle make?\" (house!)", "Hold up a shape card — she runs to the matching station.", "Cool down: trace a giant shape on the floor together."], extend: "Make shape hopscotch — different shapes instead of numbers." },
        scavenger: { intro: "Letters ARE shapes — connect writing to form!", steps: ["A is a triangle with a bar — find triangle-shaped things.", "B has a line and two humps — trace B-shaped things.", "C is an open circle — find C-shapes in nature.", "Ask: \"What letter looks like a circle?\" (O)", "She makes each letter shape with her BODY."], extend: "Draw giant A, B, C and fill them with patterns." },
        charades: { intro: "Animals have specific shapes — spot them!", steps: ["Elephant: round body (circle), long trunk (rectangle) — draw both shapes!", "Giraffe: rectangle body, long rectangle neck!", "Crocodile: long flat rectangle, teeth are triangles!", "Ask: \"What shape is a turtle shell?\" (hexagon pattern!)", "She makes an animal from shapes — you guess it."], extend: "Make animal cards drawn using only basic shapes." },
        suitcase: { intro: "Shapes are the language of art and maths!", steps: ["Ask: \"What shape was your favourite this week?\"", "Walk around — she names the shape of every object.", "Ask: \"What shapes are in the letters of your name?\"", "Count all circles in the room in 60 seconds — GO!", "Ask: \"What shape would YOU be if you were a shape?\""], extend: "Start a shape diary — each day she draws objects and labels their shapes." }
    }
},
// WEEK 16 — Colours & Patterns
{
    week: 16, theme: "Colours & Patterns", emoji: "🎨", accent: "#f72585",
        activities: {
        weather: { theme: "Colour Weather Report", extraPrompts: ["What colour is today's sky?", "Name a colour for each weather type!", "What colour are storm clouds?", "If sunshine were a colour, what shade?", "Find a rainbow colour in the room!"] },
        sculptor: { drawPrompt: "Draw a rainbow and design a pattern underneath it! 🌈", shapeFocus: ["Circle", "Square", "Triangle"], colourFocus: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"] },
        obstacle: { theme: "Rainbow Pattern Course", extraQ: { question: "In a red-blue-red pattern, what comes next?", img: "🔴 🔵 🔴 ❓", answer: "Blue", options: ["Red", "Blue", "Green", "Yellow"] } },
        scavenger: { letters: ["D", "E", "F"], countMax: 10, theme: "Find rainbow-colour things for each letter!" },
        charades: { animalSet: ["Bird", "Springbok", "Cat", "Fish", "Frog"], rhymeSet: ["Twinkle Twinkle", "Rain Rain Go Away"], theme: "Colourful Animals!" },
        suitcase: { theme: "Colours Week", quizFocus: ["Drawing", "Clay Time", "Scavenger Hunt", "Singing"] }
    },
    days: { monday: "❤️ Red & Orange", tuesday: "💛 Yellow & Green", wednesday: "💙 Blue & Purple", thursday: "🖌️ Mixing Colours", friday: "🌈 Rainbow Celebration" },
    guardianTips: {
        weather: { intro: "Colour and pattern are foundational pre-reading skills.", steps: ["Name every colour you both see from waking up to breakfast.", "Ask: \"What colours make purple?\" (red + blue) — mix with paint!", "Make an AB pattern with two coloured kitchen items.", "Ask: \"What is your LEAST favourite colour? Why?\"", "Draw a colour wheel: primary colours in the centre."], extend: "Make tie-dye with food colouring and paper towels." },
        sculptor: { intro: "Colour mixing and pattern creation are pure joy.", steps: ["Mix primary colours in water cups to make secondaries.", "Ask: \"What happens when we add white to red?\" (pink — tints!)", "Make an ABAB pattern with two colours in a drawing border.", "Ask: \"What pattern do we see on a zebra? Leopard?\"", "Secret message: white crayon, paint over with watercolour."], extend: "Make a colour mixing booklet: she paints each combination." },
        obstacle: { intro: "Pattern is rhythm — move in ABs!", steps: ["Each obstacle = A or B: jump-crawl-jump-crawl (ABAB).", "Ask: \"What comes next in this pattern?\"", "Clap a rhythm pattern — she copies, then extends it.", "RED = fast, BLUE = slow through each station.", "Cool down: ABAB breathing — big breath, small breath, repeat."], extend: "Clap music patterns together using songs she knows." },
        scavenger: { intro: "Letters and colour rainbow!", steps: ["Find D things that are RED, E things BLUE, F things GREEN.", "Make a colour pattern with found objects: red-blue-red-blue.", "Find something of EVERY rainbow colour before the timer!", "Ask: \"What two colours make orange?\" (red + yellow)", "Count how many different colours she is wearing right now."], extend: "Rainbow scavenger hunt: one outdoor item in each rainbow colour." },
        charades: { intro: "The most colourful animal show!", steps: ["Ask: \"What is the most colourful bird you can think of?\"", "Fish: tropical fish are rainbow coloured — why?", "Ask: \"Which SA animal uses colour to hide?\" (camouflage)", "Frog: poison dart frogs are bright to warn predators — show bright colours!", "She invents a brand-new animal with 3 specific colours."], extend: "Draw the animal you would be if you could be any colour." },
        suitcase: { intro: "Colour and pattern are now part of how she sees the world!", steps: ["Ask: \"What was the most beautiful colour combination this week?\"", "Ask: \"What pattern do you see most often in our house?\"", "She creates one final ABB pattern using objects.", "Name 7 rainbow colours in order: ROY G BIV.", "Ask: \"If you could only wear ONE colour forever, which?\""], extend: "Make a colour-coded emotion chart: a colour for each feeling." }
    }
},

// WEEK 17 — South Africa
{
    week: 17, theme: "South Africa 🇿🇦", emoji: "🇿🇦", accent: "#007a4d",
        activities: {
        weather: { theme: "SA Weather Report", extraPrompts: ["What is the weather like in Cape Town right now?", "Which part of SA is the hottest?", "Does it snow in South Africa?", "Name a South African city!", "What language do most people speak near us?"] },
        sculptor: { drawPrompt: "Draw the South African flag — green, black, red, blue, yellow, white! 🇿🇦", shapeFocus: ["Rectangle", "Triangle", "Star"], colourFocus: ["Green", "Black", "Red", "Blue", "Yellow", "White"] },
        obstacle: { theme: "SA Explorer Course", extraQ: { question: "Is the Cape of Good Hope at the NORTH or SOUTH of SA?", img: "🗺️ 🇿🇦", answer: "South", options: ["North", "South", "East", "West"] } },
        scavenger: { letters: ["G", "H", "I"], countMax: 10, theme: "Find G, H and I things — Great Heritage Included!" },
        charades: { animalSet: ["Lion", "Elephant", "Springbok", "Meerkat", "Zebra", "Giraffe"], rhymeSet: ["Old MacDonald", "Twinkle Twinkle"], theme: "SA Big 5 and Friends!" },
        suitcase: { theme: "South Africa Week", quizFocus: ["Animal Charades", "Drawing", "News Report", "Scavenger Hunt"] }
    },
    days: { monday: "🗺️ Our Country", tuesday: "🏙️ Cities & Towns", wednesday: "🌍 Languages", thursday: "🦁 SA Wildlife", friday: "🎉 SA Pride Day" },
    guardianTips: {
        weather: { intro: "Week 17 builds national identity and pride.", steps: ["Find South Africa on a map or globe together.", "Ask: \"What are the 3 capital cities of South Africa?\"", "Name the 9 provinces — challenge: she picks one and learns its name.", "Ask: \"What language do we speak at home? And what other languages do our neighbours speak?\"", "Ask: \"What does the SA flag mean? What do the colours represent?\""], extend: "Make a 'My South Africa' book — she draws her favourite SA things." },
        sculptor: { intro: "The flag connects pride to visual identity.", steps: ["Draw and colour the SA flag — she describes each colour as she goes.", "Ask: \"What does the green represent? The black? The red?\"", "Draw Table Mountain — what shape is it?", "Draw the SA coat of arms — even a simple version.", "Ask: \"If you could add YOUR symbol to the flag, what would it be?\""], extend: "Make a SA flag from paper cut-outs and glue." },
        obstacle: { intro: "Travel across South Africa through the course!", steps: ["Cape Town station (South): crawl through the 'mountain tunnel'.", "Joburg station (North): run fast like city traffic.", "Durban station (East): surf-board balance on a cushion.", "Ask at each: \"How far is this city from our home?\"", "Finish at 'Pretoria: the capital' — she receives a drawn award."], extend: "Plan a pretend SA road trip on a map — which cities would she visit?" },
        scavenger: { intro: "G, H, I — Great Heritage and Identity!", steps: ["\"G\" — Gold, Game reserve, Gauteng: find something golden.", "\"H\" — Heritage: what is a piece of our family heritage?", "\"I\" — Identity: ask 'What makes YOU uniquely YOU?'", "Find something that represents South Africa in your home.", "Ask: \"What is your favourite South African word or saying?\""], extend: "Make a SA word list — words from all 11 languages for the same thing." },
        charades: { intro: "The Big 5 take centre stage!", steps: ["Big 5 challenge: act Lion, Elephant, Rhino, Buffalo, Leopard in order.", "Ask after each: \"Is this animal found in your province?\"", "Make a Big 5 tally chart — which is her favourite?", "Springbok: ask \"Why is the Springbok our national animal?\"", "Ask: \"Which Big 5 animal would you most like to see in the wild?\""], extend: "Watch a 5-min Big 5 documentary clip together." },
        suitcase: { intro: "Close with national pride and belonging.", steps: ["Ask: \"What is one thing you LOVE about South Africa?\"", "Ask: \"What would you change to make SA even better?\"", "Name 5 SA animals, 3 SA cities, 1 SA language.", "Sing the first line of the national anthem together.", "Ask: \"What does being South African mean to you?\""], extend: "Draw a 'My SA Dream' poster — what she wishes for South Africa." }
    }
},
// WEEK 18 — Different Cultures
{
    week: 18, theme: "Different Cultures", emoji: "🌍", accent: "#e9b44c",
        activities: {
        weather: { theme: "World Weather Report", extraPrompts: ["Do all countries have the same weather?", "What would weather be like in the Arctic?", "Name a country that is very hot and dry!", "What do children in Japan wear in winter?", "Name a country where it always snows!"] },
        sculptor: { drawPrompt: "Draw traditional food from ANY culture you find interesting! 🍱", shapeFocus: ["Circle", "Square", "Oval"], colourFocus: ["Brown", "Orange", "Red", "Yellow", "Green"] },
        obstacle: { theme: "World Explorer Course", extraQ: { question: "Is China in Africa or Asia?", img: "🌏 🇨🇳", answer: "Asia", options: ["Africa", "Asia", "Europe", "America"] } },
        scavenger: { letters: ["J", "K", "L"], countMax: 10, theme: "Find J, K and L things — Joyful Kultural Learning!" },
        charades: { animalSet: ["Elephant", "Panda", "Kangaroo", "Penguin", "Lion"], rhymeSet: ["Twinkle Twinkle", "Humpty Dumpty"], theme: "Animals from Around the World!" },
        suitcase: { theme: "Cultures Week", quizFocus: ["Drawing", "Story Time", "Animal Charades", "Clay Time"] }
    },
    days: { monday: "🌍 Africa", tuesday: "🌏 Asia", wednesday: "🌎 America", thursday: "🗺️ Europe & Other", friday: "🎉 World Celebration" },
    guardianTips: {
        weather: { intro: "Culture opens the world — spark curiosity and respect.", steps: ["Find 3 countries on a map and describe their weather.", "Ask: \"What is something people in Japan eat every day?\" (rice)", "Discuss: \"What do children in cold countries do for fun?\"", "Ask: \"If you could visit ANY country, where would you go?\"", "Cook or eat something from a different culture this week."], extend: "Make a 'world food map' — she draws food on each country." },
        sculptor: { intro: "Cross-cultural art broadens perspective.", steps: ["Look up traditional clothing from 3 different countries — she draws one outfit.", "Ask: \"Why do different countries dress differently?\"", "Explore: Japanese origami — fold a simple crane together.", "Ask: \"What colours are used most in African traditional art?\"", "She designs her 'dream culture outfit' from scratch."], extend: "Watch a 5-minute clip of a cultural dance from another country." },
        obstacle: { intro: "Travel the world without leaving the room!", steps: ["Africa station: Zulu shield and spear pose (warrior stance).", "Asia station: kung-fu slow crawl.", "Australia station: kangaroo hops.", "America station: cowboy gallop.", "Ask after each: \"What do people eat in this region?\""], extend: "Play global music from each culture while doing the course." },
        scavenger: { intro: "J, K, L — cultural letters!", steps: ["\"J\" — Japan, Jungle, Joy: name one Japanese tradition (bowing, origami).", "\"K\" — Kimono, Kind, Kenya: find something connected to Kenya or kindness.", "\"L\" — London, Language, Learn: how many languages does she know any words of?", "Find items in your home that came from another country (clothing labels!).", "Ask: \"What is something special about OUR family's culture?\""], extend: "Learn to say 'hello' in 5 different languages together." },
        charades: { intro: "Animals from every continent!", steps: ["Panda: only from China — slow, gentle, eats bamboo.", "Kangaroo: only from Australia — hop with joey in pouch.", "Penguin: South Pole — waddle on ice!", "Ask: \"Which continents have lions?\" (Africa, and wild in India)", "She invents an animal from an imaginary country — you guess it."], extend: "Make a world animal map — she draws each animal on its continent." },
        suitcase: { intro: "The world is full of wonderful differences!", steps: ["Ask: \"What culture do you find most interesting? Why?\"", "Ask: \"What do ALL cultures have in common?\" (family, food, music, celebration)", "She teaches you one cultural fact she learned this week.", "Name 5 countries — she finds them on a map.", "Ask: \"What can we learn from people who are different from us?\""], extend: "Find a pen pal programme for children — start a cross-cultural friendship." }
    }
},
// WEEK 19 — Transport & Travel
{
    week: 19, theme: "Transport & Travel", emoji: "🚗", accent: "#118ab2",
        activities: {
        weather: { theme: "Travel Weather Report", extraPrompts: ["What weather is safest to fly in?", "Why do ships get delayed in storms?", "Name a transport that goes on water!", "Can you name a transport that goes underground?", "What is the fastest form of transport?"] },
        sculptor: { drawPrompt: "Draw your dream vehicle — can be real or imaginary! 🚀🚗🚢", shapeFocus: ["Circle", "Rectangle", "Square", "Triangle"], colourFocus: ["Red", "Blue", "Yellow", "Black", "Silver"] },
        obstacle: { theme: "Transport Race Course", extraQ: { question: "Is an airplane FASTER or SLOWER than a car?", img: "✈️ vs 🚗", answer: "Faster", options: ["Faster", "Slower", "Same", "Depends"] } },
        scavenger: { letters: ["M", "N", "O"], countMax: 10, theme: "Find M, N and O things — Moving, Now, Off we go!" },
        charades: { animalSet: ["Horse", "Cheetah", "Bird", "Fish", "Elephant"], rhymeSet: ["Old MacDonald", "Baa Baa Black Sheep"], theme: "Natural Transport Animals!" },
        suitcase: { theme: "Transport Week", quizFocus: ["Drawing", "Obstacle Course", "News Report", "Counting Stars"] }
    },
    days: { monday: "🚗 Cars & Roads", tuesday: "✈️ Aeroplanes", wednesday: "🚢 Boats & Ships", thursday: "🚂 Trains", friday: "🎉 Any Way You Can!" },
    guardianTips: {
        weather: { intro: "Transport connects children to the wider world.", steps: ["Count all the transport types you can think of in 60 seconds.", "Ask: \"What was the first form of transport ever?\" (walking, then animals)", "Discuss: \"Why do we need roads?\"", "Ask: \"What transportation does our family use most?\"", "Look up the speed of a cheetah vs a car vs an aeroplane."], extend: "Make a transport timeline: walk→horse→bicycle→car→train→aeroplane→rocket." },
        sculptor: { intro: "Designing vehicles builds planning and spatial thinking.", steps: ["She designs her dream vehicle: land, sea or air?", "Ask: \"What power will it use? Petrol? Solar? Magic?\"", "Add 5 special features — she explains each one.", "Make a vehicle from clay or cardboard.", "Ask: \"How many wheels? Windows? Seats?\""], extend: "Build a vehicle from LEGO or cardboard boxes together." },
        obstacle: { intro: "The course IS the transport network!", steps: ["Car section: crawl carefully on the road (stay on the tape line).", "Train section: arms like a piston, chugga-chugga-choo-choo past stations.", "Boat section: balance across 'water' (cushions on floor).", "Aeroplane section: arms out wide, run the runway, take off with a jump!", "Ask: \"Which was your favourite transport section?\""], extend: "Build a transport city from blocks with roads, airports and ports." },
        scavenger: { intro: "M, N, O — Move, Navigate, Onward!", steps: ["\"M\" — Map, Motor, Move: find a map in your home (any map).", "\"N\" — Navigate, North: which direction is NORTH from your front door?", "\"O\" — Ocean, On the way: trace a sea route on a map.", "Count all the wheels you can find in your home.", "Find 3 transport-related objects and name the distance they could travel."], extend: "Make a 'trip planner' — she plans an imaginary journey somewhere." },
        charades: { intro: "Animals as transport — before engines existed!", steps: ["Horse: gallop — used for transport for thousands of years!", "Elephant: used in Asia to carry timber and people.", "Camel: the ship of the desert — why?", "Ask: \"Which animal is the fastest?\" (cheetah — but can't ride!)", "She acts a vehicle — you guess if it's land, sea or air."], extend: "Watch footage of the first aeroplane flight (Wright Brothers) together." },
        suitcase: { intro: "Pack your bags — the journey is the learning!", steps: ["Ask: \"Where would you most like to travel in the world?\"", "Ask: \"If you could invent a new transport, what would it do?\"", "Name 5 transport types in order of speed: slowest to fastest.", "She draws a map of an imaginary journey.", "Ask: \"What is the furthest YOU have ever travelled?\""], extend: "Write a travel journal entry: she dictates, you scribe, she illustrates." }
    }
},
// WEEK 20 — Technology
{
    week: 20, theme: "Technology", emoji: "💻", accent: "#4361ee",
        activities: {
        weather: { theme: "Tech Weather Station", extraPrompts: ["Can technology help predict weather?", "What app tells you the weather?", "Which technology protects us from storms?", "What would weather reports be like without technology?", "Can a robot feel cold like you do?"] },
        sculptor: { drawPrompt: "Design your own robot — give it special powers! 🤖", shapeFocus: ["Square", "Rectangle", "Circle", "Triangle"], colourFocus: ["Silver", "Blue", "Red", "Black", "Yellow"] },
        obstacle: { theme: "Robot Training Circuit", extraQ: { question: "Does a robot have feelings like you?", img: "🤖 vs 😊", answer: "No", options: ["Yes", "No", "Sometimes", "Always"] } },
        scavenger: { letters: ["P", "Q", "R"], countMax: 10, theme: "Find P, Q and R things — Power, Quick, Robots!" },
        charades: { animalSet: ["Dog", "Cat", "Cheetah", "Elephant", "Bird"], rhymeSet: ["Twinkle Twinkle", "Head Shoulders Knees"], theme: "Technology-Inspired Animals!" },
        suitcase: { theme: "Technology Week", quizFocus: ["Drawing", "Clay Time", "News Report", "Obstacle Course"] }
    },
    days: { monday: "📱 Devices", tuesday: "🌐 Internet", wednesday: "🤖 Robots", thursday: "🔒 Online Safety", friday: "🎉 Future World" },
    guardianTips: {
        weather: { intro: "Technology week — balance excitement with critical thinking.", steps: ["Ask: \"What technology do we use every single day?\"", "Ask: \"What did people do before smartphones existed?\"", "Ask: \"Is all screen time the same?\" (creative vs passive)", "Discuss: \"What is one technology rule in our home?\"", "Ask: \"What would you invent to make life better?\""], extend: "Make a 'screen time agreement' together — how much, what kind, when." },
        sculptor: { intro: "Imagining future technology sparks innovation mindset.", steps: ["She designs a robot that helps with something specific.", "Ask: \"What job would your robot do?\"", "Add a control panel — what do the buttons do?", "Ask: \"Could a robot be your friend?\"", "Make a 'technology machine' from boxes and craft materials."], extend: "Make a simple circuit with a battery and LED together (safe, low voltage)." },
        obstacle: { intro: "Be a robot through the course — precise and programmed!", steps: ["She is a robot: move in straight lines only, no curves.", "Program her: 'move forward 3, turn right, move forward 2...'", "Ask: \"Can a robot feel pain when it crashes?\"", "Malfunction station: move jerky, glitch, then reboot!", "Ask: \"What is the difference between a robot and a person?\""], extend: "Give each other 'programming instructions' for daily tasks (left foot first, then right...)." },
        scavenger: { intro: "P, Q, R — Power, Quick, Robot!", steps: ["\"P\" — Power, Plug: find 5 things that use electricity at home.", "\"Q\" — Quick: find the quickest path from one room to another.", "\"R\" — Robot, Remote: find a remote control or anything with buttons.", "Count all the screens in your home.", "Ask: \"What would you do if all technology stopped working?\""], extend: "Have a 1-hour 'no technology' time together — play board games or draw." },
        charades: { intro: "Animals as nature's technology!", steps: ["Bat: radar (echolocation) — eyes closed, listen!", "Ask: \"What natural technology do animals have that humans copied?\"", "Bird: GPS — knows where south is! How?", "Ask: \"What human technology was inspired by nature?\" (Velcro=burrs!)", "She invents a robot animal — all the best animal features combined."], extend: "Research one technology that was inspired by nature together (biomimicry)." },
        suitcase: { intro: "Technology is a tool — we control it, not the other way!", steps: ["Ask: \"What has technology helped you learn about THIS WEEK?\"", "Ask: \"What is one thing a robot can NEVER do?\" (love, create art, dream)", "She describes the future world she imagines in 20 years.", "Ask: \"What technology would you get rid of if you could?\"", "Ask: \"What technology are you most grateful for?\""], extend: "Write a 'letter to future tech' — what she hopes will be invented." }
    }
},
// WEEK 21 — Staying Healthy
{
    week: 21, theme: "Staying Healthy", emoji: "🏥", accent: "#06d6a0",
        activities: {
        weather: { theme: "Health & Weather Check", extraPrompts: ["What weather makes you want to exercise?", "Why do you get colds in winter?", "What does your body need to stay healthy?", "How many hours of sleep do children need?", "Name 3 healthy things you did today!"] },
        sculptor: { drawPrompt: "Draw a healthy plate — show all the food groups! 🥗", shapeFocus: ["Circle", "Oval", "Rectangle"], colourFocus: ["Green", "Red", "Orange", "Yellow", "White"] },
        obstacle: { theme: "Health & Fitness Challenge", extraQ: { question: "Should you wash your hands BEFORE or AFTER eating?", img: "🙌 🍽️", answer: "Before", options: ["Before", "After", "Both", "Never"] } },
        scavenger: { letters: ["S", "T", "U"], countMax: 10, theme: "Find S, T and U things — Strong, Tough, Unbeatable!" },
        charades: { animalSet: ["Cheetah", "Springbok", "Dog", "Bird", "Frog"], rhymeSet: ["Head Shoulders Knees", "Twinkle Twinkle"], theme: "Fit and Healthy Animals!" },
        suitcase: { theme: "Health Week", quizFocus: ["Obstacle Course", "Drawing", "Clay Time", "Counting Stars"] }
    },
    days: { monday: "🥗 Healthy Eating", tuesday: "💧 Drinking Water", wednesday: "😴 Sleep & Rest", thursday: "🧼 Hygiene", friday: "🎉 Healthy Me Celebration" },
    guardianTips: {
        weather: { intro: "Week 21 builds lifelong healthy habits.", steps: ["Together, name everything she ate today — was it a balanced day?", "Ask: \"How much water should you drink a day?\" (6-8 cups)", "Ask: \"Why do we need to sleep?\" (bodies and brains repair!)", "Check: did she wash hands today before eating AND after toilet?", "Ask: \"What happens to your body if you never exercise?\""], extend: "Make a weekly health tracker: meals, water, sleep, exercise, hand-washing." },
        sculptor: { intro: "Healthy plate art connects nutrition to visual learning.", steps: ["Draw a circle plate — divided into 5 sections like a food wheel.", "She fills each section with a food group drawing.", "Ask: \"Which food group gives you ENERGY?\" (carbs)", "Ask: \"Which food makes your bones strong?\" (dairy, calcium)", "Make a 3D healthy plate from clay or playdough food."], extend: "Make healthy snacks together 3 times this week — she helps prepare." },
        obstacle: { intro: "This week the course IS the exercise!", steps: ["Time each circuit — is she getting faster?", "Add a new healthy habit at each station: star jump, deep breath, drink water.", "Ask: \"What happens to your heart when you exercise?\"", "Measure: how many times does her heart beat in 10 seconds after running?", "Cool down: full body stretch, name each muscle she stretched."], extend: "Create a 'family fitness challenge' for the week — who completes the most activity?" },
        scavenger: { intro: "S, T, U — Strong, Tough, Unstoppable!", steps: ["\"S\" — Strong, Sleep, Soap: find 3 things associated with being healthy.", "\"T\" — Teeth, Thermometer: check your teeth — how many brush strokes per tooth?", "\"U\" — Um... Unique body: what is one unique healthy feature of your body?", "Find 10 HEALTHY food images in a magazine or draw them.", "Ask: \"Which healthy habit is hardest for you?\""], extend: "Start a 'healthy habit sticker chart' — she earns a star for each healthy choice." },
        charades: { intro: "Fit animals inspire our own fitness!", steps: ["Cheetah: fastest land animal — why is it so fit?", "Springbok: pronk to stay fit and escape predators!", "Ask: \"Which animal exercises the most every day?\"", "Bird: flying is exercise — how many wing flaps per minute?", "Ask: \"What would happen if a lion got lazy and stopped exercising?\""], extend: "Find a 5-min yoga for kids video — do it together." },
        suitcase: { intro: "Build healthy habits that last a lifetime.", steps: ["Ask: \"Which healthy habit will you try to keep forever?\"", "Ask: \"What is one thing you ate this week that was really good for your body?\"", "Count 21 health facts learned across this week.", "Ask: \"What makes YOUR body special and strong?\"", "Make a 'healthy pledge' together — she signs it with a handprint."], extend: "Research a sport or physical activity she would like to try next month." }
    }
},

// WEEK 22 — Drama & Storytelling
{
    week: 22, theme: "Drama & Storytelling", emoji: "🎭", accent: "#e76f51",
        activities: {
        weather: { theme: "Story Weather Reporter", extraPrompts: ["What weather would make the BEST story setting?", "Tell me a 3-sentence weather story!", "What weather would a dragon love?", "If the sky could talk, what would it say?", "Make up a character who lives in a cloud!"] },
        sculptor: { drawPrompt: "Draw a scene from your FAVOURITE story — real or made up! 🎭", shapeFocus: ["All shapes"], colourFocus: ["Any colour combinations"] },
        obstacle: { theme: "Storybook Adventure Course", extraQ: { question: "In a story, does the beginning, middle or END solve the problem?", img: "📖", answer: "End", options: ["Beginning", "Middle", "End", "Never"] } },
        scavenger: { letters: ["V", "W", "X"], countMax: 10, theme: "Find V, W, X things — Vivid, Wild stories!" },
        charades: { animalSet: ["Lion", "Dog", "Elephant", "Rabbit", "Bird"], rhymeSet: ["Humpty Dumpty", "Baa Baa Black Sheep"], theme: "Storybook Animals!" },
        suitcase: { theme: "Story Week", quizFocus: ["Story Time", "Drawing", "Singing", "Animal Charades"] }
    },
    days: { monday: "📖 Reading Stories", tuesday: "✍️ Making Up Stories", wednesday: "🎭 Acting Stories", thursday: "🖊️ Drawing Stories", friday: "🎉 Big Story Show" },
    guardianTips: {
        weather: { intro: "Stories are how humans make sense of the world.", steps: ["Read ONE picture book together today — no rushing.", "Ask: \"Who is the main character? What is their problem?\"", "Ask: \"What happened at the BEGINNING? MIDDLE? END?\"", "Ask: \"How did the character feel at the end?\"", "Make up a story together on the spot — take turns adding sentences."], extend: "Make a mini book together: she tells, you scribe, she illustrates." },
        sculptor: { intro: "Drawing scenes from stories deepens comprehension.", steps: ["After reading, she draws her favourite moment.", "Ask: \"Why was this the most important part?\"", "Add speech bubbles: what is the character saying?", "Ask: \"What would YOU do if you were the main character?\"", "Draw an alternative ending she would have liked better."], extend: "Start a story wall: post her illustrated scenes in sequence on her bedroom wall." },
        obstacle: { intro: "The course is a story with a beginning, middle and end!", steps: ["Beginning: she starts as the hero at the gates of the story.", "Middle: face the challenges (the obstacles).", "Climax: hardest obstacle = the dragon/baddie to beat.", "Resolution: she completes the final station and WINS.", "End: she narrates what happened — first person, past tense."], extend: "Create a treasure map course — she draws the map, then runs it." },
        scavenger: { intro: "V, W, X — Vivid, Wild, X marks the story treasure!", steps: ["\"V\" — Villain, Vibrant: every story needs a villain — who is yours?", "\"W\" — Wizard, Wonder: find something wonderFUL in the room.", "\"X\" — X marks the spot: hide a treasure and make a map to find it.", "Tell a story using only the objects you find.", "Ask: \"What word would best describe THIS room as a story setting?\""], extend: "Make a story dice: write words on cardboard dice — roll to create a story." },
        charades: { intro: "Animals AS storybook characters!", steps: ["Lion: act the brave hero of a story.", "Rabbit: act the timid character who becomes brave.", "Dog: the loyal sidekick — always helping the hero.", "Elephant: the wise elder who gives the hero advice.", "Create a full story together using all 4 characters."], extend: "Make finger puppets and perform a 2-minute play together this week." },
        suitcase: { intro: "The best stories stay with us forever.", steps: ["Ask: \"What is your all-time favourite story? Why?\"", "Ask: \"What kind of character would YOU be in a story?\"", "Ask: \"What is the bravest thing you have ever done?\" (that's YOUR story!)", "She tells a 1-minute story from start to finish — time it!", "Ask: \"What story would you write if you were an author?\""], extend: "Start a story journal — one story idea per week, she adds to it over time." }
    }
},
// WEEK 23 — I Can Read!
{
    week: 23, theme: "I Can Read!", emoji: "📚", accent: "#d62828",
        activities: {
        weather: { theme: "Word Weather Report", extraPrompts: ["Can you read any weather words?", "Spell HOT with your body!", "What does the word WIND start with?", "Find a weather word in a book!", "Sound out R-A-I-N — what word is that?"] },
        sculptor: { drawPrompt: "Draw the cover of YOUR book — you are the author! 📚", shapeFocus: ["Rectangle", "Square"], colourFocus: ["Any colours — make it eye-catching!"] },
        obstacle: { theme: "Reading Race Track", extraQ: { question: "What sound does the letter 'S' make?", img: "🐍 S", answer: "Ssss", options: ["Ssss", "Shh", "Zee", "Kuh"] } },
        scavenger: { letters: ["Y", "Z", "A"], countMax: 10, theme: "Spot letters EVERYWHERE — on labels, signs, anywhere!" },
        charades: { animalSet: ["Snake", "Cat", "Elephant", "Rabbit", "Bird"], rhymeSet: ["Twinkle Twinkle", "Humpty Dumpty"], theme: "Letter-Sound Animals!" },
        suitcase: { theme: "Reading Week", quizFocus: ["Story Time", "Scavenger Hunt", "Drawing", "Singing"] }
    },
    days: { monday: "🔤 Letter Sounds", tuesday: "📖 Sight Words", wednesday: "🔤 Blending Sounds", thursday: "📗 Reading Together", friday: "🎉 I AM A READER!" },
    guardianTips: {
        weather: { intro: "Week 23 — phonics and early reading confidence.", steps: ["Sound out 3-letter words together: cat, dog, sun, hat, big.", "Ask: \"What sound does this letter make?\" (hold up any letter)", "Read a simple book together — she points at each word.", "Ask: \"Can you find the word 'the' on this page?\" (teach sight words)", "Play 'I spy something starting with the SOUND: mmm'"], extend: "Make simple word cards and play snap — match the word to the picture." },
        sculptor: { intro: "Book covers combine art and literacy.", steps: ["She designs her book cover: title, author name (her name!), illustration.", "Ask: \"What would your book be about?\"", "She 'writes' the title (even if just letters she knows).", "Make a 3-page book: beginning, middle, end.", "Ask: \"What do authors DO?\" (they write and imagine)"], extend: "Staple together blank pages — make a real little book she can illustrate." },
        obstacle: { intro: "Letters and sounds throughout the course!", steps: ["At each station: sound out a letter before moving on.", "Ask: \"What word starts with the sound at this station?\"", "Rhyme challenge: run to station, say a word that rhymes with 'cat'.", "Blend at the end: she reads a simple 3-letter word from a card.", "Celebrate: she reads her name in big letters at the finish!"], extend: "Make large letter stepping stones for the course — she jumps and sounds each." },
        scavenger: { intro: "Letters are EVERYWHERE — train her eyes to see them!", steps: ["Find the letters of her NAME in the environment — on labels, books.", "Read 3 words she can already recognise in the room.", "Go through a magazine — circle every 'a' and every 's' she finds.", "Find 10 different letters in 2 minutes — GO!", "Ask: \"What is the hardest letter sound to say?\""], extend: "Make an alphabet wall in her room — one letter per day, she decorates each." },
        charades: { intro: "Each animal teaches a letter sound!", steps: ["Snake: sssss sound — what other words start with S?", "Cat: cuh-cuh — C sound. Name 5 C words.", "Elephant: eh — E sound. Name 3 E words.", "Rabbit: rrr — R sound. Name 4 R words.", "Bird: buh — B sound. B is for Bird, Ball, Big, Beautiful!"], extend: "Make letter-sound animal cards: letter on front, animal picture on back." },
        suitcase: { intro: "The love of reading starts here!", steps: ["Ask: \"What is the first word you learned to read?\"", "Read one full simple book together — she reads what she can.", "Ask: \"Why is reading important?\"", "She writes or dictates 3 things she has learned to read this year.", "Celebrate: she is officially a READER — make it a big deal!"], extend: "Start a reading log — she draws a star for every book she reads." }
    }
},
// WEEK 24 — Science Experiments
{
    week: 24, theme: "Science Experiments", emoji: "🔬", accent: "#4895ef",
        activities: {
        weather: { theme: "Science Weather Lab", extraPrompts: ["Is weather a type of science?", "Name a scientist who studies weather!", "What experiment could you do with rain?", "What happens to water when you heat it?", "Can you make a cloud in a jar?"] },
        sculptor: { drawPrompt: "Draw a scientist doing an experiment — don't forget the lab coat! 🥼🔬", shapeFocus: ["Circle", "Rectangle", "Triangle"], colourFocus: ["White", "Blue", "Green", "Yellow", "Red"] },
        obstacle: { theme: "Science Lab Challenge Circuit", extraQ: { question: "Does a heavy rock or a feather fall FASTER?", img: "🪨 vs 🪶", answer: "Same speed", options: ["Rock", "Feather", "Same speed", "Depends"] } },
        scavenger: { letters: ["B", "C", "D"], countMax: 10, theme: "Find science things — Beakers, Chemicals, Discoveries!" },
        charades: { animalSet: ["Frog", "Bird", "Cat", "Fish", "Elephant"], rhymeSet: ["Twinkle Twinkle", "Incy Wincy Spider"], theme: "Science Animals!" },
        suitcase: { theme: "Science Week", quizFocus: ["Experiment Time", "Drawing", "Clay Time", "Obstacle Course"] }
    },
    days: { monday: "🧲 Push & Pull", tuesday: "💧 Water Science", wednesday: "🌡️ Hot & Cold", thursday: "🌱 Growing Things", friday: "🎉 Science Fair!" },
    guardianTips: {
        weather: { intro: "Week 24 — hands-on science builds curiosity for life.", steps: ["Do the SIMPLEST experiment first: mix baking soda + vinegar.", "Ask: \"What do you THINK will happen? Why?\" (predict first!)", "Ask: \"What did HAPPEN? Was your prediction right?\"", "Ask: \"What question do you STILL have after the experiment?\"", "Ask: \"What is a scientist?\" (someone who asks questions and tests them!)"], extend: "Make a volcano from clay + baking soda + vinegar + food colouring." },
        sculptor: { intro: "Drawing experiments develops scientific recording skills.", steps: ["Before: she draws what she PREDICTS will happen.", "After: she draws what ACTUALLY happened.", "Ask: \"What was the most surprising result?\"", "Make a 'Science Journal' — record 3 experiments with drawings.", "Ask: \"If you had a laboratory, what would you experiment on?\""], extend: "Make a nature journal: she observes and draws plants, bugs, weather each day." },
        obstacle: { intro: "The course IS an experiment in motion!", steps: ["Ask: \"What would happen if you ran this BACKWARDS?\" Test it!", "Ask: \"What is the fastest path through the course? The slowest?\"", "Change one thing each round and observe what happens.", "Ask: \"Is this an experiment?\" (YES — changing variables, observing results!)", "Record the times: fastest, slowest — what made the difference?"], extend: "Conduct a simple physics test: roll balls of different sizes down a ramp — which goes furthest?" },
        scavenger: { intro: "Science letters B, C, D!", steps: ["\"B\" — Bubbles, Balloon: blow a bubble — what shape is it always?", "\"C\" — Crystal, Chemical: put salt in water — where does it go?", "\"D\" — Dissolve: what things dissolve in water? Test it!", "Find 10 materials and sort them: absorbs water vs repels water.", "Ask: \"What material in our home is the STRONGEST?\""], extend: "Make 'oobleck' — cornstarch + water — is it solid or liquid?" },
        charades: { intro: "Animals as science subjects!", steps: ["Frog: scientific classification — frog is an AMPHIBIAN. What's that?", "Ask: \"How do scientists study animals in the wild?\"", "Fish: gills vs lungs — how does each work?", "Elephant: the heaviest land animal — how much might it weigh?", "She designs an experiment to test which animal jumps furthest."], extend: "Visit a science museum or natural history exhibition if one is nearby." },
        suitcase: { intro: "Scientists never stop wondering!", steps: ["Ask: \"What was the most amazing experiment this week?\"", "Ask: \"What question about the world do you STILL wonder about?\"", "She writes (or dictates) her top 3 science discoveries.", "Ask: \"What scientist would you most like to be?\"", "Celebrate: she is a junior scientist!"], extend: "Get a simple science experiment book from the library — do one experiment per week." }
    }
},
// WEEK 25 — Life Skills
{
    week: 25, theme: "Life Skills", emoji: "🍳", accent: "#fb5607",
        activities: {
        weather: { theme: "Life Skills Weather Check", extraPrompts: ["What would you wear today to stay comfortable?", "What life skill helps you in stormy weather?", "Can you pack your own bag for a rainy day?", "What breakfast would you make on a cold morning?", "Name one life skill you are proud to know!"] },
        sculptor: { drawPrompt: "Draw yourself helping at home — cooking, cleaning, or gardening! 🍳", shapeFocus: ["Rectangle", "Circle", "Oval"], colourFocus: ["Brown", "Orange", "Green", "Yellow", "Red"] },
        obstacle: { theme: "Life Skills Challenge Course", extraQ: { question: "If your shoelace is loose, should you fix it BEFORE or AFTER running?", img: "👟", answer: "Before", options: ["Before", "After", "During", "Ignore it"] } },
        scavenger: { letters: ["E", "F", "G"], countMax: 10, theme: "Find E, F and G things — Everyday, Family & Growing Skills!" },
        charades: { animalSet: ["Dog", "Cat", "Bird", "Rabbit", "Horse"], rhymeSet: ["Baa Baa Black Sheep", "Old MacDonald"], theme: "Animals Who Help!" },
        suitcase: { theme: "Life Skills Week", quizFocus: ["Cooking Time", "Drawing", "Obstacle Course", "Story Time"] }
    },
    days: { monday: "🧹 Tidying Up", tuesday: "🍳 Simple Cooking", wednesday: "🧵 Dressing Myself", thursday: "🤝 Manners & Kindness", friday: "🎉 I Can Do It!" },
    guardianTips: {
        weather: { intro: "Life skills build independence and self-confidence.", steps: ["Ask: \"What is one thing you can do ALL BY YOURSELF at home?\"", "Teach one new small skill this week: pouring, folding, wiping.", "Ask: \"What do adults do at home that you would like to learn?\"", "Practise: she makes her own breakfast independently.", "Ask: \"Why is it important to look after ourselves?\""], extend: "Make a 'I can do it' chart — 10 life skills she has mastered this week." },
        sculptor: { intro: "Drawing chores builds ownership and responsibility.", steps: ["She draws a task she does at home — in full detail.", "Ask: \"How many steps does it take to make your bed?\"", "She makes a step-by-step picture guide for washing hands.", "Ask: \"What would happen if nobody did any chores?\"", "Draw her dream job at home — what would she be in charge of?"], extend: "Assign her one real daily responsibility this week — she owns it entirely." },
        obstacle: { intro: "The course as a life skills training ground!", steps: ["Each station = a real life skill: fold the towel, carry without spilling.", "Ask: \"Which life skill would be most useful DURING an obstacle course?\"", "Safety station: what do you do if you fall? Get up, check, carry on.", "Ask: \"What do you do when something is too hard?\" (ask for help, try again)", "Finish: she teaches YOU one trick she learned."], extend: "Cook one full simple meal together this week — pancakes, scrambled eggs." },
        scavenger: { intro: "Everyday, Family, Growing — life skill letters!", steps: ["\"E\" — Everyday: name 5 things she does every single day.", "\"F\" — Family: what life skill makes your FAMILY happy?", "\"G\" — Grateful: name 3 life skills she is grateful others taught her.", "Find 10 things in the house that SHE can now take care of.", "Ask: \"What skill do you most want to learn next?\""], extend: "Make a 'skills passport' — stamp each new skill she masters." },
        charades: { intro: "Animals teach their young life skills too!", steps: ["Cat: grooms itself — self-care is a life skill! Mime grooming.", "Dog: trained — what skills did it have to learn?", "Bird: learns to fly — who teaches it? (parent birds show the way)", "Ask: \"Who teaches YOU most of what you know?\"", "She acts out teaching a life skill to you — role reversal!"], extend: "Watch a nature clip of an animal teaching its young — discuss." },
        suitcase: { intro: "Capable, confident, and ready for the world!", steps: ["Ask: \"What is the hardest life skill you learned this year?\"", "Ask: \"What life skill are you MOST proud of?\"", "She demos one life skill she has mastered for the whole family.", "Ask: \"What skill do you want to learn by this time next year?\"", "Celebrate: she is growing into a capable, brilliant person!"], extend: "Write a 'skills goals' list for next year — what does she want to be able to do?" }
    }
},
// WEEK 26 — Graduation Week
{
    week: 26, theme: "Graduation Week! 🎓", emoji: "🎓", accent: "#ffd700",
        activities: {
        weather: { theme: "Grand Finale Weather Report", extraPrompts: ["What is your BEST weather report from this whole year?", "Describe the weather on the day you were born!", "What weather do you want on your graduation day?", "If you were the sun, what message would you share?", "Give us the most EPIC weather report ever!"] },
        sculptor: { drawPrompt: "Draw what you want to BE when you grow up — in full detail! 🌟", shapeFocus: ["Any and all shapes"], colourFocus: ["Gold", "Silver", "Rainbow — use EVERY colour!"] },
        obstacle: { theme: "Championship Final Course", extraQ: { question: "What is ONE thing you learned this year that you will never forget?", img: "🎓 ⭐", answer: "Your answer!", options: ["Animals", "Letters", "Numbers", "All of it!"] } },
        scavenger: { letters: ["H", "I", "J"], countMax: 10, theme: "Find Hidden, Incredible, Joyful memories from the whole year!" },
        charades: { animalSet: ["Lion", "Elephant", "Springbok", "Giraffe", "Zebra", "Meerkat", "Dog", "Cat", "Bird", "Frog"], rhymeSet: ["Head Shoulders Knees", "Old MacDonald", "Twinkle Twinkle"], theme: "EVERY Animal from the Whole Year!" },
        suitcase: { theme: "Graduation Week", quizFocus: ["WHOLE YEAR REVIEW — every topic!", "Animal Charades: all animals", "Drawing: dream future", "News Report: the year in review"] }
    },
    days: { monday: "🏅 Remember Week 1", tuesday: "🌟 Our Favourite Moments", wednesday: "🎭 Greatest Hits Show", thursday: "💌 Letters to Future Me", friday: "🎓 GRADUATION DAY!" },
    guardianTips: {
        weather: { intro: "GRADUATION WEEK — celebrate an incredible 6-month journey!", steps: ["Tell her exactly what she could NOT do 6 months ago that she CAN do now.", "Ask: \"What is the most important thing you learned this year?\"", "Ask: \"Who are you most grateful to for helping you learn?\"", "Share a memory YOU will always keep from this journey.", "Tell her: 'I am SO proud of you — and here is exactly why...'"], extend: "Frame her very first drawing and her most recent one side by side — show the growth." },
        sculptor: { intro: "The final drawing — a vision of her future self.", steps: ["She draws herself as a grown-up: job, clothes, home, family.", "Ask: \"What will the world be like when YOU are an adult?\"", "Add speech bubble: what does adult-her say to child-her?", "Ask: \"What is ONE promise you want to make to yourself?\"", "Keep this drawing safe — open it on her 18th birthday."], extend: "Make a time capsule: drawings, a favourite toy, a letter to herself — seal for 10 years." },
        obstacle: { intro: "The CHAMPIONSHIP FINAL — celebrate every skill she gained!", steps: ["Do the full course with ALL the hardest challenges.", "At each station: she names a topic from a week of the year.", "Ask: \"Which week was your absolute favourite?\"", "Time it: how fast is she NOW vs week 1?", "Finish with the LOUDEST celebration possible — winner!"], extend: "Create a graduation obstacle course for family to watch and cheer." },
        scavenger: { intro: "Find hidden joyful memories from the whole year!", steps: ["She finds one object that reminds her of each term.", "Ask: \"Who did you meet or learn from this year?\"", "Find something that represents her BIGGEST growth.", "Ask: \"What does the word 'celebrate' mean?\"", "Count 26 things — one for every week she amazed you!"], extend: "Make a scrapbook of all her work from the year — photos, drawings, notes." },
        charades: { intro: "EVERY animal from the whole year — the grand finale!", steps: ["Do ALL the SA Big 5 plus 5 more — 10 animals total!", "She narrates as she acts: 'This is a lion, a lion lives in...'", "Ask: \"Which animal made you laugh the most this year?\"", "Make an animal sounds orchestra — all at once!", "Final bow: she takes a bow as the STAR of this whole year."], extend: "Film the animal parade — a video memory of her skill and confidence." },
        suitcase: { intro: "The best suitcase she has ever packed — a whole year!", steps: ["Ask: \"What was WEEK 1 about?\" (My Body!)", "Go through as many weeks as you can remember together.", "Ask: \"What did YOU learn from teaching her this year?\"", "Write a final guardian letter to herself — seal it.", "Celebrate together: you both did something extraordinary this year. ❤️"], extend: "Plan the NEXT 6 months together — what adventures await?" }
    }
},

]; // END OF CURRICULUM — all 26 weeks complete!

function getCurriculumWeek(n) {
    const max = CURRICULUM.length - 1;
    const clamped = Math.max(1, Math.min(n, max));
    return CURRICULUM[clamped] || CURRICULUM[1];
}

function getCurriculumWeek(n) {
    const max = CURRICULUM.length - 1;
    const clamped = Math.max(1, Math.min(n, max));
    return CURRICULUM[clamped] || CURRICULUM[1];
}
