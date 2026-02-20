// =========================================================
// LITTLE BLOOM ACADEMY — PROGRESS.JS
// Guardian Progress Dashboard (localStorage)
// =========================================================

// ── Storage helpers ───────────────────────────────────────
const STORE_KEY = 'bloom_progress';

function loadProgress() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
    catch { return {}; }
}

function saveProgress(data) {
    localStorage.setItem(STORE_KEY, JSON.stringify(data));
}

// ── Record an event (called from games) ───────────────────
// type: 'star' | 'activity' | 'letter' | 'number'
function recordProgress(type, detail) {
    const data = loadProgress();
    const today = getTodayKey(); // e.g. '2026-02-20'
    const day = data[today] = data[today] || { stars: 0, activities: [], letters: [], numbers: [], notes: '' };

    if (type === 'star') day.stars += (detail || 1);
    if (type === 'activity') { if (!day.activities.includes(detail)) day.activities.push(detail); }
    if (type === 'letter') { if (!day.letters.includes(detail)) day.letters.push(detail); }
    if (type === 'number') { if (!day.numbers.includes(String(detail))) day.numbers.push(String(detail)); }

    saveProgress(data);
}

function getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

function getWeekDates() {
    // Returns Mon–Fri ISO date strings for the current calendar week
    const today = new Date();
    const dow = today.getDay(); // 0=Sun
    const monday = new Date(today);
    monday.setDate(today.getDate() - (dow === 0 ? 6 : dow - 1));
    return Array.from({ length: 5 }, (_, i) => {
        const d = new Date(monday);
        d.setDate(monday.getDate() + i);
        return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    });
}

// ── Render the full Guardian Progress Dashboard ───────────
function showProgressDashboard() {
    const data = loadProgress();
    const today = getTodayKey();
    const weekDates = getWeekDates();
    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

    const totalStars = Object.values(data).reduce((s, d) => s + (d.stars || 0), 0);
    const totalActivities = Object.values(data).reduce((s, d) => s + (d.activities?.length || 0), 0);
    const todayData = data[today] || {};

    // Weekly attendance row
    const attendanceHtml = weekDates.map((dateKey, i) => {
        const d = data[dateKey];
        const done = d && d.activities && d.activities.length > 0;
        const isToday = dateKey === today;
        return `
      <div style="text-align:center;flex:1;">
        <div style="font-size:0.75rem;font-weight:700;color:${isToday ? 'var(--primary)' : '#999'};margin-bottom:0.4rem;">${dayLabels[i]}</div>
        <div style="width:44px;height:44px;border-radius:50%;background:${done ? 'var(--accent)' : '#eee'};margin:0 auto;display:flex;align-items:center;justify-content:center;font-size:1.4rem;border:3px solid ${isToday ? 'var(--primary)' : 'transparent'};">
          ${done ? '⭐' : '○'}
        </div>
        ${d ? `<div style="font-size:0.7rem;color:#888;margin-top:0.2rem;">${d.stars || 0} ⭐</div>` : ''}
      </div>`;
    }).join('');

    // Today's letters / numbers
    const todayLetters = (todayData.letters || []).join(' ');
    const todayNumbers = (todayData.numbers || []).join(' ');
    const todayActivities = (todayData.activities || []).map(a => `<span style="background:#f0f4ff;border-radius:8px;padding:0.2rem 0.7rem;font-size:0.85rem;margin:0.2rem;display:inline-block;">✅ ${a}</span>`).join('');

    const overlay = document.createElement('div');
    overlay.id = 'progress-overlay';
    overlay.style.cssText = `position:fixed;inset:0;z-index:4000;background:rgba(20,20,50,0.93);display:flex;align-items:center;justify-content:center;padding:1rem;overflow-y:auto;`;
    overlay.innerHTML = `
    <div style="background:white;border-radius:30px;padding:2rem;max-width:640px;width:100%;max-height:92vh;overflow-y:auto;box-shadow:0 30px 80px rgba(0,0,0,0.4);">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem;">
        <h2 style="font-size:1.6rem;color:var(--primary);">📊 Guardian Progress</h2>
        <button class="btn" id="close-progress" style="padding:0.4rem 1rem;font-size:0.9rem;">Close ✕</button>
      </div>

      <!-- WEEKLY ATTENDANCE -->
      <div style="background:#fcf6ff;border-radius:18px;padding:1.2rem;margin-bottom:1.2rem;">
        <div style="font-size:1rem;font-weight:700;margin-bottom:0.8rem;color:#555;">📅 This Week</div>
        <div style="display:flex;gap:0.5rem;">${attendanceHtml}</div>
      </div>

      <!-- TOTALS -->
      <div style="display:grid;grid-template-columns:1fr 1fr 1fr;gap:0.8rem;margin-bottom:1.2rem;">
        <div style="background:#fff9c4;border-radius:16px;padding:1rem;text-align:center;">
          <div style="font-size:2.5rem;">⭐</div>
          <div style="font-size:1.8rem;font-weight:800;">${totalStars}</div>
          <div style="font-size:0.8rem;color:#888;">Total Stars</div>
        </div>
        <div style="background:#e8f5e9;border-radius:16px;padding:1rem;text-align:center;">
          <div style="font-size:2.5rem;">✅</div>
          <div style="font-size:1.8rem;font-weight:800;">${totalActivities}</div>
          <div style="font-size:0.8rem;color:#888;">Activities Done</div>
        </div>
        <div style="background:#fce4ec;border-radius:16px;padding:1rem;text-align:center;">
          <div style="font-size:2.5rem;">📅</div>
          <div style="font-size:1.8rem;font-weight:800;">${weekDates.filter(k => data[k]?.activities?.length > 0).length}</div>
          <div style="font-size:0.8rem;color:#888;">Days Attended</div>
        </div>
      </div>

      <!-- TODAY DETAILS -->
      <div style="border:2px solid #f0f0f0;border-radius:18px;padding:1.2rem;margin-bottom:1.2rem;">
        <div style="font-size:1rem;font-weight:700;margin-bottom:0.8rem;color:#555;">📋 Today's Learning</div>
        <div style="margin-bottom:0.5rem;"><strong style="font-size:0.85rem;color:#888;">Activities:</strong><br>${todayActivities || '<span style="color:#ccc;font-size:0.85rem;">None yet today</span>'}</div>
        <div style="margin-bottom:0.5rem;margin-top:0.6rem;"><strong style="font-size:0.85rem;color:#888;">Letters explored:</strong> <span style="font-weight:700;">${todayLetters || '—'}</span></div>
        <div><strong style="font-size:0.85rem;color:#888;">Numbers explored:</strong> <span style="font-weight:700;">${todayNumbers || '—'}</span></div>
      </div>

      <!-- GUARDIAN NOTES -->
      <div style="margin-bottom:1.2rem;">
        <div style="font-size:1rem;font-weight:700;margin-bottom:0.5rem;color:#555;">📝 Caretaker Notes (Today)</div>
        <textarea id="guardian-notes" placeholder="How did she do today? Any wins? Any challenges? ..." style="width:100%;height:100px;border:2px solid #eee;border-radius:14px;padding:0.8rem;font-family:'Outfit',sans-serif;font-size:0.95rem;resize:none;outline:none;">${todayData.notes || ''}</textarea>
        <button class="btn" id="save-notes" style="margin-top:0.5rem;background:var(--primary);padding:0.5rem 1.2rem;font-size:0.9rem;">Save Notes 💾</button>
      </div>

      <!-- RESET -->
      <div style="text-align:right;">
        <button id="reset-progress" style="background:none;border:none;color:#ccc;font-size:0.8rem;cursor:pointer;">Reset all progress</button>
      </div>
    </div>
  `;

    document.body.appendChild(overlay);

    document.getElementById('close-progress').addEventListener('click', () => overlay.remove());

    document.getElementById('save-notes').addEventListener('click', () => {
        const text = document.getElementById('guardian-notes').value;
        const d = loadProgress();
        d[today] = d[today] || { stars: 0, activities: [], letters: [], numbers: [], notes: '' };
        d[today].notes = text;
        saveProgress(d);
        document.getElementById('save-notes').textContent = 'Saved! ✅';
    });

    document.getElementById('reset-progress').addEventListener('click', () => {
        if (confirm('Reset ALL progress? This cannot be undone.')) {
            localStorage.removeItem(STORE_KEY);
            overlay.remove();
        }
    });
}
