const fs = require('fs');
let code = fs.readFileSync('games.js', 'utf8');

const regex1 = /function roundBadge\(current, total\) \{\r?\n  return\}\r?\n\r?\nfunction speakText\(text\) \{\r?\n  if \(!\('speechSynthesis' in window\)\) return;\r?\n  window.speechSynthesis.cancel\(\);\r?\n  const utterance = new SpeechSynthesisUtterance\(text\);\r?\n  utterance.rate = 0\.9;\r?\n  utterance.pitch = 1\.1;\r?\n  window.speechSynthesis.speak\(utterance\);\r?\n\}\r?\n\r?\nfunction speakBtn\(text\) \{\r?\n  const cleanText = text.replace\(\/<\[\^>\]\*\>\?\/gm, ''\);\r?\n  return `<button class="btn speak-trigger" data-text="\$\{cleanText.replace\(/"\/g, '&quot;'\)\}" style = "background:var\(--secondary\);color:white;padding:0.4rem 0.8rem;border-radius:12px;font-size:0.9rem;margin-bottom:0.8rem;display:inline-flex;align-items:center;gap:0.4rem;" >🔊 Listen <\/button>`;\r?\n\}\/\$\{total\}<\/div>`;\r?\n\}/gm;

const replace1 = `function roundBadge(current, total) {
  return \\\`<div class="round-badge" style="position:absolute;top:1rem;right:1rem;background:#eee;padding:0.4rem 0.8rem;border-radius:20px;font-weight:bold;font-size:0.9rem;color:#666;">\\\${current}/\\\${total}</div>\\\`;
}

function speakText(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  window.speechSynthesis.speak(utterance);
}

function speakBtn(text) {
  const cleanText = text.replace(/<[^>]*>?/gm, '');
  return \\\`<button class="btn speak-trigger" data-text="\\\${cleanText.replace(/"/g, '&quot;')}" style="background:var(--secondary);color:white;padding:0.4rem 0.8rem;border-radius:12px;font-size:0.9rem;margin-bottom:0.8rem;display:inline-flex;align-items:center;gap:0.4rem;">🔊 Listen</button>\\\`;
}`;

const regex2 = /    \}\r?\n  \}\r?\n \(do not replace this line, we inject before it\)\r?\n/g;

const replace2 = `    }
  },

  breathing: {
    render(container) {
      recordProgress('activity', 'Breathing');
      container.innerHTML = \\\`
        <h2 class="game-title">Zen Breather 🧘</h2>
        <div style="font-size:5rem;text-align:center;margin:2rem;" id="breathe-icon">😌</div>
        <p style="text-align:center;font-size:1.4rem;font-weight:bold;color:var(--primary);" id="breathe-text">Ready?</p>
        <button class="btn" id="start-breathing" style="display:block;margin:2rem auto;background:var(--accent);">Start Breathing ✨</button>
      \\\`;
      const txt = container.querySelector('#breathe-text');
      const icon = container.querySelector('#breathe-icon');
      container.querySelector('#start-breathing').addEventListener('click', (e) => {
        e.target.style.display = 'none';
        let cycles = 0;
        const cycle = () => {
          if (cycles >= 3) {
            txt.textContent = "You did great! 🌟";
            icon.textContent = "🥰";
            icon.style.transform = "scale(1)";
            showStars(container, 3);
            return;
          }
          txt.textContent = "Breathe in...";
          icon.style.transition = "transform 4s ease-out";
          icon.style.transform = "scale(1.5)";
          setTimeout(() => {
            txt.textContent = "Breathe out...";
            icon.style.transition = "transform 4s ease-in";
            icon.style.transform = "scale(1)";
            setTimeout(() => {
              cycles++;
              cycle();
            }, 4000);
          }, 4000);
        };
        cycle();
      });
    }
  },

  balloon: {
    render(container) {
      recordProgress('activity', 'Balloon Pop');
      container.innerHTML = \\\`
        <h2 class="game-title">Balloon Pop 🎈</h2>
        <p style="text-align:center;font-size:1.2rem;color:#666;">Pop 5 balloons!</p>
        <div id="balloon-area" style="position:relative;height:300px;background:#e0f7fa;border-radius:24px;overflow:hidden;margin:1rem;border:4px solid #b2ebf2;">
        </div>
        <div id="feedback" style="text-align:center;font-size:1.4rem;font-weight:bold;height:2rem;color:var(--primary);margin-top:1rem;"></div>
      \\\`;
      const area = container.querySelector('#balloon-area');
      let popped = 0;
      
      const spawn = () => {
        if (popped >= 5) {
          feedback(container, 'All popped! 🎉', 'var(--success)');
          showStars(container, 3);
          return;
        }
        const b = document.createElement('div');
        b.textContent = '🎈';
        b.style.cssText = \\\`position:absolute;font-size:4rem;cursor:pointer;left:\\\${Math.random()*70 + 10}%;bottom:-20%;transition:bottom 3.5s linear;\\\`;
        area.appendChild(b);
        setTimeout(() => b.style.bottom = '120%', 50);
        b.onclick = () => {
          b.textContent = '💥';
          b.style.transition = 'none';
          if (window.AudioFX) window.AudioFX.pop();
          popped++;
          feedback(container, \\\`\\\${popped} popped!\\\`, 'var(--secondary)');
          setTimeout(() => b.remove(), 200);
          setTimeout(spawn, 500);
        };
        b.addEventListener('transitionend', () => {
          if(b.textContent === '🎈') { b.remove(); spawn(); }
        });
      };
      setTimeout(spawn, 500);
    }
  },

  sorting: {
    render(container) {
      recordProgress('activity', 'Sorting');
      container.innerHTML = \\\`
        <h2 class="game-title">Color Sorting 🧩</h2>
        <p style="text-align:center;font-size:1.1rem;color:#888;">Sort the items into the right boxes!</p>
        <div style="display:flex;justify-content:space-around;margin:1rem 0;" id="boxes">
          <div data-color="red" style="width:80px;height:80px;border:4px dashed #ff5252;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:2rem;background:#ffebee;"></div>
          <div data-color="blue" style="width:80px;height:80px;border:4px dashed #448aff;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:2rem;background:#e3f2fd;"></div>
          <div data-color="green" style="width:80px;height:80px;border:4px dashed #4caf50;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:2rem;background:#e8f5e9;"></div>
        </div>
        <div style="display:flex;justify-content:center;gap:1rem;margin:2rem 0;min-height:60px;" id="items"></div>
        <div id="feedback" style="text-align:center;font-size:1.2rem;font-weight:bold;color:var(--primary);min-height:2rem;"></div>
      \\\`;
      const itemsContainer = container.querySelector('#items');
      const items = shuffle([
        { emoji: '🍎', color: 'red' }, { emoji: '🚗', color: 'red' },
        { emoji: '🐳', color: 'blue' }, { emoji: '📘', color: 'blue' },
        { emoji: '🐸', color: 'green' }, { emoji: '🌳', color: 'green' }
      ]);
      
      let currentItem = 0;
      
      const renderNext = () => {
        itemsContainer.innerHTML = '';
        if (currentItem >= items.length) {
          feedback(container, 'All sorted! 🌟', 'var(--success)');
          showStars(container, 3);
          return;
        }
        const item = items[currentItem];
        const el = document.createElement('div');
        el.textContent = item.emoji;
        el.style.cssText = 'font-size:3.5rem;cursor:pointer;animation:bounce-in 0.5s;';
        itemsContainer.appendChild(el);
        
        container.querySelectorAll('#boxes div').forEach(box => {
          box.onclick = () => {
            if (box.dataset.color === item.color) {
              if (window.AudioFX) window.AudioFX.success();
              box.textContent = item.emoji;
              currentItem++;
              setTimeout(() => { box.textContent = ''; renderNext(); }, 600);
            } else {
              if (window.AudioFX) window.AudioFX.error();
              el.style.transform = 'translateX(-10px)';
              setTimeout(() => el.style.transform = 'translateX(10px)', 100);
              setTimeout(() => el.style.transform = 'translateX(0)', 200);
            }
          };
        });
      };
      renderNext();
    }
  }
};
\n`;

if (!code.match(regex1)) { console.log("Missing regex1 match!"); }
if (!code.match(regex2)) { console.log("Missing regex2 match!"); }

code = code.replace(regex1, replace1);
code = code.replace(regex2, replace2);
fs.writeFileSync('games.js', code);
console.log("Done");
