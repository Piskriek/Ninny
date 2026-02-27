import re
import os
import json

filepath = r"c:\Work\Ninny\data.js"
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

mappings = {
    'weather': [
        "Play 'Weather Reporter' - give them a spoon as a microphone and let them report.",
        "Draw a 'Weather House' showing what clothes to wear in different rooms.",
        "Talk about extreme weather: 'What is a tornado? What is a blizzard?'",
        "Make a weather chart that they can update every single morning.",
        "Learn a weather song together on YouTube."
    ],
    'sculptor': [
        "Trade artworks and try to add one missing detail to each other's drawings.",
        "Only use your non-dominant hand to draw the next picture.",
        "Try drawing with your eyes closed and guess what it is!",
        "Sculpt the alphabet letters out of the playdough.",
        "Create a story where your sculpted characters come to life."
    ],
    'obstacle': [
        "Do the entire obstacle course backwards!",
        "Balance a book on your head while navigating the course.",
        "Time the course and see if they can beat their own record by 3 seconds.",
        "Have them verbally describe their movements ('I am jumping OVER the pillow').",
        "Freeze like a statue every time you clap your hands during the course."
    ],
    'scavenger': [
        "Find objects that are only a specific color as well as starting with the letter.",
        "Make a pile of the found objects and sort them from smallest to largest.",
        "Have them blindfold you and guide your hand to touch the found objects.",
        "Create a silly sentence using only the objects you found.",
        "Hide the objects again and make a treasure map to find them."
    ],
    'charades': [
        "Do the charades in slow motion.",
        "Only use facial expressions, absolutely no hand movements.",
        "Act out an animal waking up in the morning.",
        "Try acting out two animals at the exact same time (a flying elephant!).",
        "Have them teach YOU a new animal charade you've never seen."
    ],
    'suitcase': [
        "Recall events in reverse order: what happened LAST before what happened FIRST?",
        "Ask them to teach a toy what they learned today.",
        "Draw the best part of the day using only three colors.",
        "Sing a recap of the day to the tune of 'Twinkle Twinkle'.",
        "Ask what they would change about today if they had a magic wand."
    ]
}

def fix_extend(match):
    act_name = match.group(1)
    ext_list = mappings.get(act_name, mappings['weather'])
    
    # Use json.dumps to safely output double quotes
    ext_str = "extend: " + json.dumps(ext_list)
    
    return f"{act_name}: {{ intro: {match.group(2)}, steps: {match.group(3)}, {ext_str} }}"

# Target the currently broken array strings
pattern = re.compile(r'(\w+):\s*\{\s*intro:\s*([^,]+),\s*steps:\s*(\[.*?\]),\s*extend:\s*\[.*?\]\s*\}', re.DOTALL)

new_content = pattern.sub(fix_extend, content)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Fixed quotes in data.js")
