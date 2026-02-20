// =========================================================
// LITTLE BLOOM ACADEMY — APP.JS  (main shell)
// =========================================================

// ── DOM refs ──────────────────────────────────────────────
const gameContainer = document.getElementById('game-container');
const navItems = document.querySelectorAll('.nav-item');
const dayTabs = document.querySelectorAll('.day-tab');
const dayBanner = document.getElementById('day-banner');

// ── Star animation style ──────────────────────────────────
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
    const dow = new Date().getDay(); // 0=Sun, 6=Sat
    if (dow >= 1 && dow <= 5) return DAY_KEYS[dow - 1];
    return 'monday'; // Weekend fallback
})();

function applyDayTheme(dayKey) {
    const d = WEEKLY[dayKey];
    if (!d) return;

    // Update accent colour CSS variable
    document.documentElement.style.setProperty('--accent', d.accentColor);

    // Update banner
    dayBanner.innerHTML = `
    <span>${d.emoji}</span>
    <div>
      <strong>${d.day}</strong> — ${d.theme}
      <span style="font-size:0.8rem;opacity:0.7;display:block;">${d.tagline}</span>
    </div>
    <span style="margin-left:auto;font-size:0.85rem;opacity:0.6;">Focus: ${d.focusLetters.join(' ')}</span>
  `;

    // Highlight active tab
    dayTabs.forEach(t => {
        t.classList.toggle('active-day', t.dataset.day === dayKey);
    });
}

dayTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        selectedDay = tab.dataset.day;
        applyDayTheme(selectedDay);
        loadActivity(currentActivity || 'weather');
    });
});

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
applyDayTheme(selectedDay);
loadActivity('weather');
