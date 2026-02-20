// =========================================================
// LITTLE BLOOM ACADEMY — APP.JS  (main shell)
// =========================================================

// ── DOM refs ──────────────────────────────────────────────
const gameContainer = document.getElementById('game-container');
const navItems = document.querySelectorAll('.nav-item');
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
    applyWeekTheme();
    loadActivity(currentActivity || 'weather');
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
}

// ── Day tab events ────────────────────────────────────────
dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        selectedDay = tab.dataset.day;
        window.selectedDay = selectedDay;
        applyWeekTheme();
        loadActivity(currentActivity || 'weather');
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
        if (activities[id]) {
            activities[id].render(gameContainer);
        } else {
            gameContainer.innerHTML = `<h2 class="game-title">Coming soon! 🌸</h2>`;
        }
        gameContainer.style.opacity = '1';
        gameContainer.style.transform = 'scale(1)';
    }, 175);
}

navItems.forEach(item => {
    item.addEventListener('click', () => loadActivity(item.dataset.activity));
});

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

// ── Boot ──────────────────────────────────────────────────
applyWeekTheme();
loadActivity('weather');
