// =========================================================
// LITTLE BLOOM ACADEMY — GAMES.JS  (day-aware)
// =========================================================

// ── Helpers (declared here so no cross-file conflict) ─────
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function shuffle(arr) { return [...arr].sort(() => Math.random() - 0.5); }
function choices(arr, n) { return shuffle(arr).slice(0, n); }

function feedback(container, msg, color = 'var(--primary)') {
  const el = container.querySelector('#feedback');
  if (!el) return;
  el.textContent = msg;
  el.style.color = color;
  el.style.transform = 'scale(1.1)';
  setTimeout(() => { if (el) el.style.transform = 'scale(1)'; }, 250);
}

function showStars(container, n = 3) {
  for (let i = 0; i < n; i++) {
    const star = document.createElement('div');
    star.textContent = '⭐';
    star.style.cssText = `position:absolute;font-size:2.5rem;left:${15 + Math.random() * 70}%;top:${10 + Math.random() * 60}%;animation:floatUp 1.5s ease forwards;pointer-events:none;z-index:999;`;
    container.appendChild(star);
    setTimeout(() => star.remove(), 1500);
  }
  recordProgress('star', n);
}

function roundBadge(current, total) {
  return `<div style="position:absolute;top:0.8rem;right:1rem;background:var(--accent);color:white;font-weight:bold;padding:0.3rem 0.9rem;border-radius:99px;font-size:0.9rem;">Round ${current}/${total}</div>`;
}

function guardianBtn(actKey) {
  return `<button class="btn guardian-trigger" data-key="${actKey}" style="background:var(--accent);position:absolute;bottom:1rem;right:1rem;font-size:0.85rem;padding:0.45rem 1rem;">🧑‍🤝‍🧒 Play Together</button>`;
}

function showGuardianOverlay(actKey) {
  const dayData = getCurrentDayData();
  const raw = dayData.guardianTips[actKey];
  if (!raw) return;

  const overlay = document.createElement('div');
  overlay.className = 'guardian-overlay bounce-in';
  overlay.innerHTML = `
    <div class="guardian-modal">
      <h2>🧑‍🤝‍🧒 ${raw.intro.split('.')[0]}</h2>
      <p class="guardian-intro">${raw.intro}</p>
      <ol class="guardian-steps">${raw.steps.map(s => `<li>${s}</li>`).join('')}</ol>
      <div class="guardian-extend"><strong>💡 Extend the learning:</strong> ${raw.extend}</div>
      <button class="btn" id="close-guardian" style="margin-top:1.5rem;background:var(--primary);">Back to Play ✨</button>
    </div>
  `;
  document.body.appendChild(overlay);
  document.getElementById('close-guardian').addEventListener('click', () => overlay.remove());
}

// ── Get the current week's curriculum data ────────────────
function getCurrentDayData() {
  const weekNum = (window.currentWeekNum) || 1;
  const wk = getCurriculumWeek(weekNum);
  const dayKeys = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const selectedDay = (window.selectedDay) || dayKeys[new Date().getDay()] || 'monday';
  return {
    day: selectedDay.charAt(0).toUpperCase() + selectedDay.slice(1),
    emoji: wk.emoji,
    theme: wk.theme,
    accentColor: wk.accent,
    activities: wk.activities,
    guardianTips: wk.guardianTips,
  };
}


// ── Attach guardian listener helper ───────────────────────
function attachGuardian(container, key) {
  const btn = container.querySelector('.guardian-trigger');
  if (btn) btn.addEventListener('click', () => showGuardianOverlay(key));
}

// =========================================================
// ACTIVITIES
// =========================================================
const activities = {

  // ── WEATHER REPORTER ─────────────────────────────────────
  weather: {
    render(container) {
      const dayData = getCurrentDayData();
      const now = new Date();
      const dayName = DATA.dayNames[now.getDay() - 1] || DATA.dayNames[0];
      const monthName = DATA.months[now.getMonth()];
      const actConf = dayData.activities.weather;

      recordProgress('activity', 'Weather Reporter');

      let roundNo = 1;
      const totalRounds = 10;

      const renderRound = () => {
        if (roundNo > totalRounds) {
          container.innerHTML = `
            <div style="text-align:center;font-size:1.8rem;padding:2rem;">
              🎉 Amazing ${dayData.day} report!<br><br>
              <span style="font-size:3rem;">📺⭐📺</span><br><br>
              <button class="btn" id="restart">Report Again!</button>
            </div>`;
          container.querySelector('#restart').addEventListener('click', () => { roundNo = 1; renderRound(); });
          return;
        }

        const phase = (roundNo - 1) % 5;

        if (phase === 0) {
          // Weather pick
          const opts = choices(DATA.weatherOptions, 4);
          container.innerHTML = `
            ${roundBadge(roundNo, totalRounds)}
            <div class="tv-frame bounce-in">
              <h2 class="game-title" style="color:white;font-size:1.2rem;margin-top:0.6rem;">📺 ${dayData.emoji} ${actConf.theme}</h2>
              <div style="background:#e1f5fe;margin:0.5rem;border-radius:12px;padding:0.8rem;flex-grow:1;display:flex;flex-direction:column;align-items:center;justify-content:center;">
                <p style="font-weight:bold;margin-bottom:0.5rem;font-size:1.1rem;">Today is <span style="color:var(--primary)">${dayName}</span> — ${monthName}</p>
                <div class="game-area">
                  ${opts.map(w => `<div class="weather-icon reporter-btn" data-label="${w.label}" style="background:${w.bg};border:3px solid ${w.border};">${w.icon}<br><span style="font-size:0.85rem">${w.label}</span></div>`).join('')}
                </div>
                <div id="feedback" class="feedback-msg" style="font-size:1.1rem;"></div>
              </div>
            </div>
            ${guardianBtn('weather')}`;
          container.querySelectorAll('.reporter-btn').forEach(el => {
            el.addEventListener('click', () => {
              feedback(container, `"Today is a ${el.dataset.label} ${dayName}!" 🎤`, '#01579b');
              showStars(container, 2);
              el.style.transform = 'scale(1.15)';
              setTimeout(() => { roundNo++; renderRound(); }, 1800);
            });
          });

        } else if (phase === 1) {
          // Feelings
          container.innerHTML = `
            ${roundBadge(roundNo, totalRounds)}
            <h2 class="game-title">How do you feel this ${dayData.day}? 💖</h2>
            <div class="game-area">
              ${DATA.weatherFeelings.map(f => `<div class="feeling-btn reporter-btn" data-label="${f.label}" style="font-size:3rem;cursor:pointer;padding:1rem;border:3px solid #eee;border-radius:20px;min-width:90px;text-align:center;">${f.icon}<br><span style="font-size:0.85rem">${f.label}</span></div>`).join('')}
            </div>
            <div id="feedback" class="feedback-msg"></div>
            ${guardianBtn('weather')}`;
          container.querySelectorAll('.feeling-btn').forEach(el => {
            el.addEventListener('click', () => {
              feedback(container, `You feel ${el.dataset.label}! That is always ok! 💕`, 'var(--primary)');
              showStars(container, 1);
              setTimeout(() => { roundNo++; renderRound(); }, 1800);
            });
          });

        } else if (phase === 2) {
          // Dress-up
          const q = pick(DATA.weatherActivities);
          container.innerHTML = `
            ${roundBadge(roundNo, totalRounds)}
            <h2 class="game-title" style="font-size:1.6rem;">Should we ${q} 🤔</h2>
            <div class="game-area">
              <div class="reporter-btn" data-val="yes" style="font-size:3rem;padding:2rem;border-radius:20px;cursor:pointer;background:#e8f5e9;border:3px solid #4caf50;min-width:130px;text-align:center;">👍<br><span style="font-size:1rem">YES!</span></div>
              <div class="reporter-btn" data-val="no"  style="font-size:3rem;padding:2rem;border-radius:20px;cursor:pointer;background:#ffebee;border:3px solid #f44336;min-width:130px;text-align:center;">👎<br><span style="font-size:1rem">NO!</span></div>
            </div>
            <div id="feedback" class="feedback-msg"></div>
            ${guardianBtn('weather')}`;
          container.querySelectorAll('.reporter-btn').forEach(el => {
            el.addEventListener('click', () => {
              feedback(container, 'Great thinking! 🌟', 'var(--primary)');
              showStars(container, 2);
              setTimeout(() => { roundNo++; renderRound(); }, 1800);
            });
          });

        } else if (phase === 3) {
          // Calendar quiz
          const q = pick(DATA.calendarQuestions);
          container.innerHTML = `
            ${roundBadge(roundNo, totalRounds)}
            <h2 class="game-title" style="font-size:1.6rem;">📅 Calendar Question!</h2>
            <div style="font-size:2rem;margin:1.5rem 0;text-align:center;background:#fff9c4;padding:1.5rem;border-radius:20px;width:90%;max-width:500px;">${q}</div>
            <p style="font-size:1rem;color:#888;">Say your answer OUT LOUD! 🗣️</p>
            <div style="font-size:1.3rem;font-weight:bold;margin-top:1rem;color:#4a4a4a;">Today: <span style="color:var(--primary)">${dayName}</span> — ${monthName}</div>
            <button class="btn" id="next-round" style="margin-top:1.5rem;">I said it! ➡️</button>
            ${guardianBtn('weather')}`;
          container.querySelector('#next-round').addEventListener('click', () => { showStars(container, 3); roundNo++; setTimeout(renderRound, 600); });

        } else {
          // Day-specific extra prompt
          const xp = pick(actConf.extraPrompts);
          container.innerHTML = `
            ${roundBadge(roundNo, totalRounds)}
            <h2 class="game-title" style="font-size:1.6rem;">${dayData.emoji} ${dayData.day} Question!</h2>
            <div style="font-size:1.8rem;font-weight:bold;text-align:center;margin:2rem;background:#fce4ec;padding:2rem;border-radius:20px;max-width:90%;">${xp}</div>
            <p style="font-size:1rem;color:#888;">Say your answer OUT LOUD! 🗣️</p>
            <button class="btn" id="next-round2" style="margin-top:1.5rem;">I answered! ➡️</button>
            ${guardianBtn('weather')}`;
          container.querySelector('#next-round2').addEventListener('click', () => { showStars(container, 3); roundNo++; setTimeout(renderRound, 500); });
        }

        attachGuardian(container, 'weather');
      };

      renderRound();
    }
  },

  // ── MASTER SCULPTOR ───────────────────────────────────────
  sculptor: {
    render(container) {
      const dayData = getCurrentDayData();
      const actConf = dayData.activities.sculptor;
      recordProgress('activity', 'Master Sculptor');

      const shapeFocus = DATA.shapes.filter(s => actConf.shapeFocus.includes(s.name));
      const colourFocus = DATA.colours.filter(c => actConf.colourFocus.includes(c.name));

      const renderDraw = () => {
        const paletteColours = colourFocus.length >= 3 ? colourFocus : DATA.colours.slice(0, 8);
        container.innerHTML = `
          <h2 class="game-title">🏺 ${actConf.drawPrompt}</h2>
          <div style="display:flex;gap:0.5rem;margin-bottom:0.8rem;justify-content:center;flex-wrap:wrap;">
            ${paletteColours.map(c => `<div class="clay-blob" style="background:${c.hex};" data-color="${c.hex}" title="${c.name}"></div>`).join('')}
          </div>
          <div style="width:100%;max-width:650px;margin:0 auto;">
            <canvas id="sculptCanvas" width="800" height="460" style="width:100%;background:#fffef0;border-radius:20px;border:4px solid #eee;touch-action:none;cursor:crosshair;"></canvas>
          </div>
          <div class="game-area" style="margin-top:0.8rem;gap:0.6rem;">
            <button class="btn" id="clearBtn" style="padding:0.5rem 1rem;font-size:0.95rem;background:#ff85a2;">Clear 🧹</button>
            <button class="btn" id="shapeBtn" style="padding:0.5rem 1rem;font-size:0.95rem;background:var(--accent);">Shapes ${dayData.emoji}</button>
            <button class="btn" id="colourBtn" style="padding:0.5rem 1rem;font-size:0.95rem;background:#b7e4c7;color:#333;">Colours 🎨</button>
          </div>
          ${guardianBtn('sculptor')}`;

        const canvas = container.querySelector('#sculptCanvas');
        const ctx = canvas.getContext('2d');
        let drawing = false;
        let color = paletteColours[0]?.hex || '#ff85a2';

        container.querySelectorAll('.clay-blob').forEach(b => {
          b.addEventListener('click', () => {
            color = b.dataset.color;
            container.querySelectorAll('.clay-blob').forEach(x => x.style.outline = 'none');
            b.style.outline = '4px solid #333';
          });
        });

        function getPos(e) {
          const rect = canvas.getBoundingClientRect();
          const cx = e.clientX ?? e.touches[0].clientX;
          const cy = e.clientY ?? e.touches[0].clientY;
          return { x: (cx - rect.left) * (canvas.width / rect.width), y: (cy - rect.top) * (canvas.height / rect.height) };
        }
        function draw(e) {
          if (!drawing) return;
          const pos = getPos(e);
          ctx.fillStyle = color;
          ctx.beginPath(); ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2); ctx.fill();
        }
        canvas.addEventListener('mousedown', e => { drawing = true; draw(e); });
        canvas.addEventListener('mouseup', () => drawing = false);
        canvas.addEventListener('mousemove', draw);
        canvas.addEventListener('touchstart', e => { e.preventDefault(); drawing = true; draw(e); });
        canvas.addEventListener('touchend', () => drawing = false);
        canvas.addEventListener('touchmove', e => { e.preventDefault(); draw(e); });
        container.querySelector('#clearBtn').addEventListener('click', () => ctx.clearRect(0, 0, canvas.width, canvas.height));
        container.querySelector('#shapeBtn').addEventListener('click', renderShapes);
        container.querySelector('#colourBtn').addEventListener('click', renderColours);
        attachGuardian(container, 'sculptor');
      };

      const renderShapes = () => {
        const pool = shapeFocus.length >= 3 ? shapeFocus : DATA.shapes;
        const target = pick(pool);
        const opts = shuffle([target, ...choices(DATA.shapes.filter(s => s.name !== target.name), 3)]);
        recordProgress('letter', target.name);
        container.innerHTML = `
          <h2 class="game-title" style="font-size:1.7rem;">Find the ${target.name}! 🔺</h2>
          <div style="font-size:5rem;margin:0.5rem 0;">${target.icon}</div>
          <div class="game-area">
            ${opts.map(s => `<div class="reporter-btn" data-name="${s.name}" style="font-size:2.5rem;padding:1rem 1.2rem;border:3px solid #eee;border-radius:20px;cursor:pointer;background:white;min-width:100px;text-align:center;">${s.icon}<br><span style="font-size:0.85rem">${s.name}</span></div>`).join('')}
          </div>
          <div id="feedback" class="feedback-msg"></div>
          <div class="game-area" style="margin-top:0.5rem;gap:0.5rem;">
            <button class="btn" id="backDraw" style="padding:0.4rem 0.9rem;font-size:0.85rem;">✏️ Draw</button>
            <button class="btn" id="nextShape" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--accent);">Next ➡️</button>
          </div>
          ${guardianBtn('sculptor')}`;
        container.querySelectorAll('.reporter-btn').forEach(el => {
          el.addEventListener('click', () => {
            if (el.dataset.name === target.name) {
              feedback(container, `YES! ${target.name}! ⭐`, '#2e7d32');
              showStars(container, 3); el.style.background = '#e8f5e9';
            } else { feedback(container, 'Try again! 🧐', 'var(--primary)'); }
          });
        });
        container.querySelector('#backDraw').addEventListener('click', renderDraw);
        container.querySelector('#nextShape').addEventListener('click', renderShapes);
        attachGuardian(container, 'sculptor');
      };

      const renderColours = () => {
        const pool = colourFocus.length >= 3 ? colourFocus : DATA.colours.slice(0, 7);
        const target = pick(pool);
        const opts = shuffle([target, ...choices(DATA.colours.filter(c => c.name !== target.name), 3)]);
        recordProgress('letter', target.name);
        container.innerHTML = `
          <h2 class="game-title" style="font-size:1.7rem;">Find <span style="color:${target.hex};-webkit-text-stroke:1px #aaa;">${target.name}</span>! 🎨</h2>
          <div class="game-area">
            ${opts.map(c => `<div class="reporter-btn" data-name="${c.name}" style="width:90px;height:90px;border-radius:50%;border:5px solid #eee;background:${c.hex};cursor:pointer;" title="${c.name}"></div>`).join('')}
          </div>
          <div id="feedback" class="feedback-msg"></div>
          <div class="game-area" style="margin-top:0.5rem;gap:0.5rem;">
            <button class="btn" id="backDraw2" style="padding:0.4rem 0.9rem;font-size:0.85rem;">✏️ Draw</button>
            <button class="btn" id="nextColour" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--accent);">Next ➡️</button>
          </div>
          ${guardianBtn('sculptor')}`;
        container.querySelectorAll('.reporter-btn').forEach(el => {
          el.addEventListener('click', () => {
            if (el.dataset.name === target.name) {
              feedback(container, `Brilliant! ${target.name}! 🌈`, '#2e7d32');
              showStars(container, 3); el.style.outline = '6px solid #333';
            } else { feedback(container, 'Try again! 🎨', 'var(--primary)'); }
          });
        });
        container.querySelector('#backDraw2').addEventListener('click', renderDraw);
        container.querySelector('#nextColour').addEventListener('click', renderColours);
        attachGuardian(container, 'sculptor');
      };

      renderDraw();
    }
  },

  // ── OBSTACLE COURSE ───────────────────────────────────────
  obstacle: {
    render(container) {
      const dayData = getCurrentDayData();
      const actConf = dayData.activities.obstacle;
      recordProgress('activity', 'Obstacle Course');

      const baseQs = [
        { question: 'Is the ball OVER or UNDER the table?', img: '🏐 🪑', answer: 'Under', options: ['Over', 'Under', 'Next to', 'Behind'] },
        { question: 'Is the bird OVER or UNDER the tree?', img: '🐦 🌳', answer: 'Over', options: ['Over', 'Under', 'Inside', 'In front of'] },
        { question: 'Is the cat INSIDE or OUTSIDE the box?', img: '🐱 📦', answer: 'Inside', options: ['Inside', 'Outside', 'On top of', 'Under'] },
        { question: 'Is the fish NEXT TO or BEHIND the rock?', img: '🐟 🪨', answer: 'Next to', options: ['Next to', 'Behind', 'Over', 'Under'] },
        { question: 'Is the moon ABOVE or BELOW the clouds?', img: '🌙 ☁️', answer: 'Above', options: ['Above', 'Below', 'In front', 'Around'] },
        { question: 'Is the apple INSIDE or ON TOP of the basket?', img: '🍎 🧺', answer: 'Inside', options: ['Inside', 'On top of', 'Beside', 'Under'] },
      ];
      if (actConf.extraQ) baseQs.push(actConf.extraQ);
      const qs = shuffle(baseQs);

      let qIndex = 0, score = 0;

      const renderQ = () => {
        if (qIndex >= qs.length) {
          container.innerHTML = `
            <div style="text-align:center;padding:2rem;">
              <div style="font-size:4rem;">🏆</div>
              <h2 class="game-title">CHAMPION! ${score}/${qs.length}!</h2>
              <button class="btn" id="restart" style="margin-top:1.5rem;">Play Again!</button>
            </div>`;
          container.querySelector('#restart').addEventListener('click', () => { qIndex = 0; score = 0; renderQ(); });
          return;
        }
        const q = qs[qIndex];
        const opts = shuffle(q.options);
        container.innerHTML = `
          ${roundBadge(qIndex + 1, qs.length)}
          <h2 class="game-title" style="font-size:1.7rem;">${actConf.theme} 🛣️</h2>
          <div style="font-size:3.5rem;margin:0.8rem 0;text-align:center;background:#f1f8e9;padding:1.2rem;border-radius:20px;width:90%;max-width:380px;">${q.img}</div>
          <p style="font-size:1.3rem;text-align:center;font-weight:bold;">${q.question}</p>
          <div class="game-area" style="margin-top:0.8rem;">
            ${opts.map(o => `<button class="btn direction-btn" data-val="${o}" style="min-width:120px;">${o}</button>`).join('')}
          </div>
          <div id="feedback" class="feedback-msg"></div>
          <div style="margin-top:0.5rem;font-size:1rem;color:#888;">Score: ${score} ⭐</div>
          ${guardianBtn('obstacle')}`;
        container.querySelectorAll('.direction-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if (btn.dataset.val === q.answer) {
              feedback(container, `YES! ${q.answer}! 🙌`, '#2e7d32');
              showStars(container, 3); score++;
              btn.style.background = '#e8f5e9';
            } else {
              feedback(container, `The answer is "${q.answer}" 🤓`, 'var(--primary)');
              btn.style.background = '#ffebee';
            }
            container.querySelectorAll('.direction-btn').forEach(b => b.disabled = true);
            setTimeout(() => { qIndex++; renderQ(); }, 2000);
          });
        });
        attachGuardian(container, 'obstacle');
      };

      renderQ();
    }
  },

  // ── SCAVENGER HUNT ────────────────────────────────────────
  scavenger: {
    render(container) {
      const dayData = getCurrentDayData();
      const actConf = dayData.activities.scavenger;
      recordProgress('activity', 'Scavenger Hunt');

      // Filter letters pool to today's focus
      const focusPool = DATA.letters.filter(l => actConf.letters.includes(l.letter));
      const letterPool = focusPool.length >= 4 ? focusPool : DATA.letters;
      let roundNo = 1;

      const renderLetters = () => {
        const target = pick(letterPool);
        const wrong = choices(DATA.letters.filter(l => l.letter !== target.letter), 3);
        const opts = shuffle([target, ...wrong]);
        recordProgress('letter', target.letter);
        container.innerHTML = `
          ${roundBadge(roundNo, 15)}
          <h2 class="game-title" style="font-size:1.7rem;">Find the <span style="font-size:2.5rem;color:var(--accent);">${target.letter}</span>! 🔎</h2>
          <p style="font-size:0.95rem;color:#888;margin-bottom:0.5rem;">${actConf.theme}</p>
          <div class="game-area">
            ${opts.map(o => `<div class="reporter-btn" data-letter="${o.letter}" style="font-size:2.5rem;cursor:pointer;background:white;padding:1rem;border-radius:20px;border:3px solid #eee;min-width:95px;text-align:center;">${o.icon}<br><span style="font-size:0.9rem">${o.word}</span></div>`).join('')}
          </div>
          <div id="feedback" class="feedback-msg"></div>
          <div class="game-area" style="margin-top:0.5rem;gap:0.5rem;">
            <button class="btn" id="doCount" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--secondary);">🔢 Counting</button>
            <button class="btn" id="doPat" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--accent);">🔶 Patterns</button>
          </div>
          ${guardianBtn('scavenger')}`;
        container.querySelectorAll('.reporter-btn').forEach(el => {
          el.addEventListener('click', () => {
            if (el.dataset.letter === target.letter) {
              feedback(container, `"${target.letter}" for ${target.word}! 🏆`, '#2e7d32');
              showStars(container, 3); el.style.background = '#e8f5e9'; el.style.borderColor = '#4caf50';
              roundNo++; setTimeout(renderLetters, 2000);
            } else {
              feedback(container, `That starts with "${el.dataset.letter}"... keep looking! 🕵️`, 'var(--primary)');
              el.style.background = '#ffebee';
            }
          });
        });
        container.querySelector('#doCount').addEventListener('click', renderCounting);
        container.querySelector('#doPat').addEventListener('click', renderPattern);
        attachGuardian(container, 'scavenger');
      };

      const renderCounting = () => {
        const max = Math.min(actConf.countMax, 10);
        const count = Math.floor(Math.random() * max) + 1;
        const icon = pick(DATA.countingIcons);
        const nums = Array.from({ length: max + 1 }, (_, i) => i + 1);
        const opts = shuffle([...new Set([count, ...choices(nums.filter(n => n !== count), 3)])]).slice(0, 4);
        recordProgress('number', count);
        container.innerHTML = `
          ${roundBadge(roundNo, 15)}
          <h2 class="game-title" style="font-size:1.7rem;">Count the ${icon}s!</h2>
          <div style="font-size:clamp(2rem,5vw,3.5rem);text-align:center;margin:0.8rem 0;background:#fffde7;padding:1rem;border-radius:20px;width:90%;word-break:break-all;">
            ${Array(count).fill(icon).join(' ')}
          </div>
          <div class="game-area">
            ${opts.map(n => `<button class="btn num-btn" data-val="${n}" style="font-size:1.8rem;min-width:80px;">${n}</button>`).join('')}
          </div>
          <div id="feedback" class="feedback-msg"></div>
          <div class="game-area" style="margin-top:0.5rem;gap:0.5rem;">
            <button class="btn" id="doLet2" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--primary);">🔤 Letters</button>
            <button class="btn" id="doPat2" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--accent);">🔶 Patterns</button>
          </div>
          ${guardianBtn('scavenger')}`;
        container.querySelectorAll('.num-btn').forEach(btn => {
          btn.addEventListener('click', () => {
            if (parseInt(btn.dataset.val) === count) {
              feedback(container, `YES! ${count} ${icon}s! ⭐`, '#2e7d32');
              showStars(container, 3); btn.style.background = '#b7e4c7';
              roundNo++; setTimeout(renderCounting, 2200);
            } else {
              feedback(container, 'Count again! 🧐', 'var(--primary)');
              btn.style.background = '#ffccbc';
            }
          });
        });
        container.querySelector('#doLet2').addEventListener('click', renderLetters);
        container.querySelector('#doPat2').addEventListener('click', renderPattern);
        attachGuardian(container, 'scavenger');
      };

      const renderPattern = () => {
        const emojis = shuffle(DATA.countingIcons).slice(0, 2);
        const patLen = 4 + Math.floor(roundNo / 5);
        const pattern = Array.from({ length: patLen }, (_, i) => emojis[i % 2]);
        const nextCorrect = emojis[patLen % 2];
        const opts = shuffle([emojis[0], emojis[1]]);
        container.innerHTML = `
          ${roundBadge(roundNo, 15)}
          <h2 class="game-title" style="font-size:1.7rem;">What comes next? 🔶</h2>
          <div style="font-size:2.5rem;text-align:center;margin:1.5rem 0;letter-spacing:0.4rem;background:#f3e5f5;padding:1.2rem;border-radius:20px;width:90%;">
            ${pattern.join(' ')} → ❓
          </div>
          <div class="game-area">
            ${opts.map(o => `<button class="btn" data-val="${o}" style="font-size:2.5rem;padding:1.2rem;min-width:100px;">${o}</button>`).join('')}
          </div>
          <div id="feedback" class="feedback-msg"></div>
          <div class="game-area" style="margin-top:0.5rem;gap:0.5rem;">
            <button class="btn" id="doLet3" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--primary);">🔤 Letters</button>
            <button class="btn" id="doCnt3" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--secondary);">🔢 Counting</button>
          </div>
          ${guardianBtn('scavenger')}`;
        container.querySelectorAll('.btn[data-val]').forEach(btn => {
          btn.addEventListener('click', () => {
            if (btn.dataset.val === nextCorrect) {
              feedback(container, 'PERFECT pattern! 🧠', '#2e7d32');
              showStars(container, 3); roundNo++; btn.style.background = '#b7e4c7';
              setTimeout(renderPattern, 2200);
            } else { feedback(container, 'Look at the pattern again! 🔶', 'var(--primary)'); }
          });
        });
        container.querySelector('#doLet3').addEventListener('click', renderLetters);
        container.querySelector('#doCnt3').addEventListener('click', renderCounting);
        attachGuardian(container, 'scavenger');
      };

      renderLetters();
    }
  },

  // ── ANIMAL CHARADES ───────────────────────────────────────
  charades: {
    render(container) {
      const dayData = getCurrentDayData();
      const actConf = dayData.activities.charades;
      recordProgress('activity', 'Animal Charades');

      const animalPool = DATA.animals.filter(a => actConf.animalSet.includes(a.name));
      const rhymePool = DATA.rhymes.filter(r => actConf.rhymeSet.includes(r.title));

      const renderGuess = () => {
        const hidden = pick(animalPool.length >= 3 ? animalPool : DATA.animals);
        const wrong = choices(DATA.animals.filter(a => a.name !== hidden.name), 3);
        const opts = shuffle([hidden, ...wrong]);
        container.innerHTML = `
          <h2 class="game-title">${actConf.theme} 🦁</h2>
          <div style="font-size:1.2rem;font-weight:bold;text-align:center;margin:0.5rem 0;background:#fff9c4;padding:1rem;border-radius:15px;max-width:400px;">
            I say: <span style="font-size:1.8rem;">${hidden.sound}</span><br>
            I ${hidden.move}!
          </div>
          <div class="game-area">
            ${opts.map(a => `<div class="reporter-btn" data-name="${a.name}" style="font-size:3rem;cursor:pointer;padding:0.8rem;border:3px solid #eee;border-radius:20px;min-width:95px;text-align:center;">${a.icon}<br><span style="font-size:0.85rem">${a.name}</span></div>`).join('')}
          </div>
          <div id="feedback" class="feedback-msg"></div>
          <div class="game-area" style="margin-top:0.5rem;gap:0.5rem;">
            <button class="btn" id="doAction" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--accent);">💃 Action</button>
            <button class="btn" id="doRhyme" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--secondary);">🎵 Rhyme</button>
          </div>
          ${guardianBtn('charades')}`;
        container.querySelectorAll('.reporter-btn').forEach(el => {
          el.addEventListener('click', () => {
            if (el.dataset.name === hidden.name) {
              feedback(container, `It's a ${hidden.name}! ${hidden.icon} 🎉`, '#2e7d32');
              showStars(container, 3); el.style.background = '#e8f5e9';
              setTimeout(renderGuess, 2200);
            } else { feedback(container, 'Not quite! Listen again! 🐾', 'var(--primary)'); el.style.background = '#ffebee'; }
          });
        });
        container.querySelector('#doAction').addEventListener('click', renderAction);
        container.querySelector('#doRhyme').addEventListener('click', renderRhyme);
        attachGuardian(container, 'charades');
      };

      const renderAction = () => {
        const a = pick(animalPool.length >= 2 ? animalPool : DATA.animals);
        container.innerHTML = `
          <h2 class="game-title">Be the animal! 💃</h2>
          <div style="font-size:5rem;text-align:center;margin:1rem;background:#fff8e1;padding:1.5rem;border-radius:20px;">${a.icon}</div>
          <p style="font-size:1.3rem;font-weight:bold;text-align:center;">You are a <b>${a.name}</b>!<br>
          <span style="font-size:1rem;color:#888;">Now ${a.move}!</span></p>
          <div id="feedback" class="feedback-msg"></div>
          <button class="btn" id="didIt" style="margin-top:1.5rem;">I did it! ✅</button>
          <button class="btn" id="newAction" style="margin-top:0.5rem;background:var(--accent);">New Animal ➡️</button>
          <div class="game-area" style="margin-top:0.5rem;gap:0.5rem;">
            <button class="btn" id="toGuess" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--primary);">🦁 Guess</button>
            <button class="btn" id="toRhyme" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--secondary);">🎵 Rhyme</button>
          </div>
          ${guardianBtn('charades')}`;
        container.querySelector('#didIt').addEventListener('click', () => { feedback(container, `Amazing ${a.name}! ${a.icon}`, '#2e7d32'); showStars(container, 3); });
        container.querySelector('#newAction').addEventListener('click', renderAction);
        container.querySelector('#toGuess').addEventListener('click', renderGuess);
        container.querySelector('#toRhyme').addEventListener('click', renderRhyme);
        attachGuardian(container, 'charades');
      };

      const renderRhyme = () => {
        const rhyme = pick(rhymePool.length >= 1 ? rhymePool : DATA.rhymes);
        let lineIdx = 0;
        const showLine = () => {
          container.innerHTML = `
            <h2 class="game-title" style="font-size:1.5rem;">🎵 ${rhyme.title}</h2>
            <div style="font-size:1.7rem;font-weight:bold;text-align:center;margin:1.5rem;background:#fce4ec;padding:1.5rem;border-radius:20px;min-height:100px;display:flex;align-items:center;justify-content:center;max-width:90%;">
              ${rhyme.lines[lineIdx]}
            </div>
            <p style="font-size:0.95rem;color:#888;">Sing it out loud! 🎤</p>
            ${lineIdx < rhyme.lines.length - 1
              ? `<button class="btn" id="nextLine">Next ➡️</button>`
              : `<button class="btn" id="newRhyme" style="background:var(--accent);">New Rhyme 🎵</button>`}
            <div class="game-area" style="margin-top:0.5rem;gap:0.5rem;">
              <button class="btn" id="toGuess2" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--primary);">🦁 Guess</button>
              <button class="btn" id="toAct2" style="padding:0.4rem 0.9rem;font-size:0.85rem;background:var(--accent);">💃 Action</button>
            </div>
            ${guardianBtn('charades')}`;
          container.querySelector('#nextLine')?.addEventListener('click', () => { lineIdx++; showLine(); });
          container.querySelector('#newRhyme')?.addEventListener('click', () => { showStars(container, 3); renderRhyme(); });
          container.querySelector('#toGuess2').addEventListener('click', renderGuess);
          container.querySelector('#toAct2').addEventListener('click', renderAction);
          attachGuardian(container, 'charades');
        };
        showLine();
      };

      renderGuess();
    }
  },

  // ── MEMORY SUITCASE ───────────────────────────────────────
  suitcase: {
    render(container) {
      const dayData = getCurrentDayData();
      const actConf = dayData.activities.suitcase;
      recordProgress('activity', 'Memory Suitcase');

      let packed = [];
      const allItems = [...DATA.memoryItems];

      const renderPack = () => {
        const available = allItems.filter(m => !packed.find(p => p.label === m.label));

        if (available.length === 0) {
          container.innerHTML = `
            <div style="text-align:center;padding:2rem;">
              <div style="font-size:4rem;">🧳✨</div>
              <h2 class="game-title">${dayData.emoji} ${dayData.theme} — Suitcase Full!</h2>
              <div style="font-size:2.5rem;margin:1rem;">${packed.map(p => p.icon).join(' ')}</div>
              <p style="font-size:1.1rem;color:#888;margin:1rem;">Now tell someone about your ${dayData.day}!</p>
              <button class="btn" id="doQuiz" style="margin-top:1rem;background:var(--accent);">Challenge Quiz 🧠</button>
              <button class="btn" id="restart" style="margin-top:0.5rem;">Pack again 🔄</button>
            </div>
            ${guardianBtn('suitcase')}`;
          container.querySelector('#doQuiz').addEventListener('click', renderQuiz);
          container.querySelector('#restart').addEventListener('click', () => { packed = []; renderPack(); });
          attachGuardian(container, 'suitcase');
          return;
        }

        container.innerHTML = `
          <h2 class="game-title" style="font-size:1.6rem;">${dayData.emoji} Pack today's memories! 🧳</h2>
          <div style="display:flex;gap:1rem;width:100%;max-width:700px;align-items:flex-start;flex-wrap:wrap;justify-content:center;">
            <div style="flex:1;min-width:180px;">
              <p style="text-align:center;font-weight:bold;font-size:0.9rem;margin-bottom:0.5rem;">Tap to pack:</p>
              <div style="display:flex;flex-direction:column;gap:0.4rem;">
                ${available.map(m => `<div class="suitcase-item reporter-btn" data-label="${m.label}" data-icon="${m.icon}" style="font-size:1.3rem;padding:0.5rem 0.9rem;border:3px solid #eee;border-radius:14px;cursor:pointer;background:white;width:100%;text-align:left;">${m.icon} ${m.label}</div>`).join('')}
              </div>
            </div>
            <div style="flex:1;min-width:160px;background:#a1887f;border-radius:18px;padding:0.8rem;border:8px solid #5d4037;min-height:180px;display:flex;flex-wrap:wrap;gap:0.4rem;align-content:flex-start;">
              ${packed.map(p => `<span style="font-size:2rem;">${p.icon}</span>`).join('')}
              ${packed.length === 0 ? '<span style="color:rgba(255,255,255,0.4);font-size:0.85rem;">empty</span>' : ''}
            </div>
          </div>
          <div id="feedback" class="feedback-msg"></div>
          ${guardianBtn('suitcase')}`;

        container.querySelectorAll('.suitcase-item').forEach(item => {
          item.addEventListener('click', () => {
            const mem = { label: item.dataset.label, icon: item.dataset.icon };
            packed.push(mem);
            feedback(container, `"${mem.label}" packed! Tell me about it! 💬`, 'var(--primary)');
            showStars(container, 1);
            setTimeout(renderPack, 700);
          });
        });
        attachGuardian(container, 'suitcase');
      };

      const renderQuiz = () => {
        const quizPool = actConf.quizFocus
          ? allItems.filter(m => actConf.quizFocus.includes(m.label))
          : allItems;
        const target = pick(quizPool.length >= 3 ? quizPool : allItems);
        const opts = shuffle([target, ...choices(allItems.filter(m => m.label !== target.label), 3)]);
        container.innerHTML = `
          <h2 class="game-title" style="font-size:1.5rem;">Memory Quiz! 🧠</h2>
          <div style="font-size:4.5rem;text-align:center;margin:0.5rem;">${target.icon}</div>
          <p style="font-size:1.1rem;font-weight:bold;text-align:center;">What does this mean?</p>
          <div class="game-area" style="margin-top:0.8rem;">
            ${opts.map(m => `<button class="btn" data-label="${m.label}" style="min-width:110px;font-size:0.95rem;">${m.label}</button>`).join('')}
          </div>
          <div id="feedback" class="feedback-msg"></div>
          <button class="btn" id="nextQuiz" style="margin-top:1rem;background:var(--accent);">Next ➡️</button>
          <button class="btn" id="backPack" style="margin-top:0.5rem;font-size:0.85rem;padding:0.4rem 0.9rem;">🧳 Pack Again</button>
          ${guardianBtn('suitcase')}`;
        container.querySelectorAll('.btn[data-label]').forEach(btn => {
          btn.addEventListener('click', () => {
            if (btn.dataset.label === target.label) {
              feedback(container, `Correct! ${target.icon} = ${target.label}! ⭐`, '#2e7d32');
              showStars(container, 3); btn.style.background = '#b7e4c7';
            } else {
              feedback(container, `It's "${target.label}"! 📝`, 'var(--primary)');
              btn.style.background = '#ffccbc';
            }
          });
        });
        container.querySelector('#nextQuiz').addEventListener('click', renderQuiz);
        container.querySelector('#backPack').addEventListener('click', () => { packed = []; renderPack(); });
        attachGuardian(container, 'suitcase');
      };

      renderPack();
    }
  },
};
