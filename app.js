// =========================================================
// LITTLE BLOOM ACADEMY — APP.JS  (main shell)
// =========================================================

// ── DOM refs ──────────────────────────────────────────────
const gameContainer = document.getElementById('game-container');
const activityNav = document.getElementById('activity-nav');
let navItems = [];
const dayTabs = document.querySelectorAll('.day-tab');
const dayBanner = document.getElementById('day-banner');
const weekLabel = document.getElementById('week-label');

// ── Star float animation ───────────────────────────────────
const floatStyle = document.createElement('style');
floatStyle.textContent = `
  @keyframes floatUp {
    0%   { opacity:1; transform:translateY(0) scale(1); }
    100% { opacity:0; transform:translateY(-110px) scale(0.4); }
  }
`;
document.head.appendChild(floatStyle);

// ── Day selection ─────────────────────────────────────────
const DAY_KEYS = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];

let selectedDay = (() => {
    const dow = new Date().getDay();
    if (dow >= 1 && dow <= 5) return DAY_KEYS[dow - 1];
    return 'monday';
})();
window.selectedDay = selectedDay;


// ── Week selection ────────────────────────────────────────
const TOTAL_WEEKS = 26;

// Auto-calculate current week from a start date stored in localStorage
function calcCurrentWeek() {
    const stored = localStorage.getItem('ninny_week');
    if (stored) return parseInt(stored, 10);
    // Default: calculate from a stored start date
    const startKey = 'ninny_start_date';
    let start = localStorage.getItem(startKey);
    if (!start) {
        // Set start date to the most recent Monday
        const today = new Date();
        const day = today.getDay();
        const diff = (day === 0) ? -6 : 1 - day;
        today.setDate(today.getDate() + diff);
        start = today.toISOString().split('T')[0];
        localStorage.setItem(startKey, start);
    }
    const startDate = new Date(start);
    const now = new Date();
    const weekNum = Math.floor((now - startDate) / (7 * 24 * 60 * 60 * 1000)) + 1;
    return Math.max(1, Math.min(weekNum, TOTAL_WEEKS));
}

let currentWeekNum = calcCurrentWeek();
window.currentWeekNum = currentWeekNum; // expose for games.js

function setWeek(n) {
    currentWeekNum = Math.max(1, Math.min(n, TOTAL_WEEKS));
    window.currentWeekNum = currentWeekNum;
    localStorage.setItem('ninny_week', currentWeekNum);

    // Smooth transition
    const main = document.querySelector('.main-content');
    if (main) main.classList.add('fade-out');

    setTimeout(() => {
        applyWeekTheme();
        loadActivity(currentActivity || 'weather');
        if (main) main.classList.remove('fade-out');
    }, 200);
}

function applyWeekTheme() {
    const wk = getCurriculumWeek(currentWeekNum);
    if (!wk) return;

    // Accent colour from curriculum week
    document.documentElement.style.setProperty('--accent', wk.accent);

    // Banner: week info + day label
    const dayLabel = wk.days[selectedDay] || '';
    dayBanner.innerHTML = `
    <span>${wk.emoji}</span>
    <div>
      <strong>Week ${wk.week}: ${wk.theme}</strong>
      <span style="font-size:0.78rem;opacity:0.75;display:block;">${dayLabel} &nbsp;|&nbsp; Letters: ${wk.activities.scavenger.letters.join(', ')}</span>
    </div>
    <span style="margin-left:auto;font-size:0.82rem;opacity:0.6;">${currentWeekNum} / ${TOTAL_WEEKS}</span>
  `;

    // Week navigator label
    if (weekLabel) weekLabel.textContent = `Week ${currentWeekNum}`;

    // Highlight active day tab
    dayTabs.forEach(t => t.classList.toggle('active-day', t.dataset.day === selectedDay));

    // Build dynamic daily schedule
    buildDailySchedule();
}

// ── Dynamic Schedule Engine ───────────────────────────────
function buildDailySchedule() {
    // We want a predictable random sequence based on the day
    const dayKeys = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'];
    const dayIndex = dayKeys.indexOf(selectedDay) + 1;
    const seed = currentWeekNum * 100 + dayIndex;

    // Simple seeded random function
    function seededRandom(max, s) {
        let x = Math.sin(s++) * 10000;
        return Math.floor((x - Math.floor(x)) * max);
    }

    const available = ['sculptor', 'obstacle', 'scavenger', 'charades', 'music', 'math', 'yoga', 'color', 'shape', 'story', 'drawing', 'match', 'trace', 'breathing', 'balloon', 'sorting'];
    const selected = [];

    // Pick 4 unique activities using the seed
    let currentSeed = seed;
    while (selected.length < 4) {
        const idx = seededRandom(available.length, currentSeed++);
        const item = available[idx];
        if (!selected.includes(item)) {
            selected.push(item);
        }
    }

    // Always start with weather, end with suitcase
    const dailyActivities = ['weather', ...selected, 'suitcase'];

    const activityMeta = {
        'weather': { icon: '📺', name: 'Weather Reporter', time: '09:00 – 09:30' },
        'sculptor': { icon: '🏺', name: 'Master Sculptor', time: '09:30 – 10:15' },
        'obstacle': { icon: '🛣️', name: 'Obstacle Course', time: '10:45 – 11:45' },
        'scavenger': { icon: '🔎', name: 'Scavenger Hunt', time: '11:45 – 12:15' },
        'charades': { icon: '🦁', name: 'Animal Charades', time: '12:15 – 13:00' },
        'music': { icon: '🥁', name: 'Rhythm Maker', time: '09:30 – 10:15' },
        'math': { icon: '🔢', name: 'Number Ninja', time: '10:45 – 11:45' },
        'yoga': { icon: '🧘‍♀️', name: 'Zen Animal Poses', time: '11:45 – 12:15' },
        'color': { icon: '🎨', name: 'Color Splash', time: '12:15 – 13:00' },
        'shape': { icon: '🔺', name: 'Shape Sorter', time: '14:00 – 14:45' },
        'story': { icon: '📖', name: 'Story Spinner', time: '14:00 – 14:45' },
        'drawing': { icon: '🖌️', name: 'Little Artist', time: '10:45 – 11:45' },
        'match': { icon: '🧩', name: 'Memory Match', time: '12:15 – 13:00' },
        'trace': { icon: '✍️', name: 'Letter Tracer', time: '14:00 – 14:45' },
        'breathing': { icon: '🧘', name: 'Zen Breather', time: '09:30 – 10:15' },
        'balloon': { icon: '🎈', name: 'Balloon Pop', time: '10:45 – 11:45' },
        'sorting': { icon: '🗂️', name: 'Category Sorter', time: '12:15 – 13:00' },
        'suitcase': { icon: '🧳', name: 'Memory Suitcase', time: '14:45 – 15:00' }
    };

    activityNav.innerHTML = '';

    dailyActivities.forEach((act, i) => {
        const meta = activityMeta[act];
        // Distribute times roughly linearly
        const times = ['09:00 – 09:30', '09:30 – 10:15', '10:45 – 11:45', '11:45 – 12:30', '13:30 – 14:15', '14:45 – 15:00'];
        const timeLabel = times[i];

        const div = document.createElement('div');
        div.className = 'nav-item';
        if (act === currentActivity) div.classList.add('active');
        div.dataset.activity = act;
        div.innerHTML = `
            <span class="activity-icon">${meta.icon}</span>
            <div>
                <span class="time-label">${timeLabel}</span>
                <span class="activity-name">${meta.name}</span>
            </div>
        `;
        div.addEventListener('click', () => loadActivity(act));
        activityNav.appendChild(div);
    });

    navItems = document.querySelectorAll('.nav-item');
}


// ── Day tab events ────────────────────────────────────────
dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        selectedDay = tab.dataset.day;
        window.selectedDay = selectedDay;

        // Smooth transition
        const main = document.querySelector('.main-content');
        if (main) main.classList.add('fade-out');

        setTimeout(() => {
            applyWeekTheme();
            loadActivity(currentActivity || 'weather');
            if (main) main.classList.remove('fade-out');
        }, 200);
    });
});

// ── Week navigator buttons ────────────────────────────────
document.getElementById('prev-week').addEventListener('click', () => setWeek(currentWeekNum - 1));
document.getElementById('next-week').addEventListener('click', () => setWeek(currentWeekNum + 1));

// ── Activity loading ──────────────────────────────────────
let currentActivity = 'weather';

gameContainer.style.transition = 'opacity 0.2s ease, transform 0.2s ease';

function loadActivity(id) {
    currentActivity = id;
    navItems.forEach(item => item.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-item[data-activity="${id}"]`);
    if (activeNav) activeNav.classList.add('active');

    gameContainer.style.opacity = '0';
    gameContainer.style.transform = 'scale(0.95)';

    setTimeout(() => {
        if (typeof activities !== 'undefined' && activities[id]) {
            activities[id].render(gameContainer);
        } else {
            gameContainer.innerHTML = `<h2 class="game-title">Coming soon! 🌸</h2>`;
        }
        gameContainer.style.opacity = '1';
        gameContainer.style.transform = 'scale(1)';
    }, 175);
}

// ── Parent Gate ───────────────────────────────────────────
function showParentGate() {
    const gate = document.createElement('div');
    gate.style.cssText = `position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(255,133,162,0.97);z-index:2000;display:flex;flex-direction:column;align-items:center;justify-content:center;color:white;text-align:center;padding:2rem;`;
    gate.innerHTML = `
    <h1 style="font-size:2.2rem;margin-bottom:0.8rem;">Grown-up Check! 🔒</h1>
    <p style="font-size:1.1rem;margin-bottom:1.5rem;">Tap the ⭐ three times to continue.</p>
    <div id="gate-star" style="font-size:5rem;cursor:pointer;transition:transform 0.2s;">⭐</div>
    <div id="gate-count" style="font-size:1.4rem;margin-top:1rem;">0 / 3</div>
    <div style="display:flex;gap:1rem;margin-top:2rem;flex-wrap:wrap;justify-content:center;">
      <button class="btn" id="open-progress" style="background:rgba(255,255,255,0.9);color:var(--primary);">📊 View Progress</button>
      <button class="btn" id="gate-cancel" style="background:rgba(255,255,255,0.2);border:2px solid white;">Back to Play</button>
    </div>
  `;
    document.body.appendChild(gate);

    let taps = 0;
    gate.querySelector('#gate-star').addEventListener('click', () => {
        taps++;
        gate.querySelector('#gate-count').textContent = `${taps} / 3`;
        gate.querySelector('#gate-star').style.transform = `scale(${1 + taps * 0.2}) rotate(${taps * 30}deg)`;
        if (taps >= 3) { document.body.removeChild(gate); }
    });
    gate.querySelector('#gate-cancel').addEventListener('click', () => document.body.removeChild(gate));
    gate.querySelector('#open-progress').addEventListener('click', () => {
        document.body.removeChild(gate);
        showProgressDashboard();
    });
}

document.querySelector('.logo').addEventListener('click', showParentGate);

// ── Fullscreen Toggle ───────────────────────────────────────
const fullscreenBtn = document.getElementById('fullscreen-btn');
if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch(err => {
                console.log(`Error attempting to enable fullscreen: ${err.message}`);
            });
            fullscreenBtn.textContent = '❌ Exit Fullscreen';
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
                fullscreenBtn.textContent = '📺 Fullscreen';
            }
        }
    });

    // Listen for escape key or other fullscreen exits to reset button text
    document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
            fullscreenBtn.textContent = '📺 Fullscreen';
        } else {
            fullscreenBtn.textContent = '❌ Exit Fullscreen';
        }
    });
}

// ── Boot ──────────────────────────────────────────────────
applyWeekTheme();
loadActivity('weather');
