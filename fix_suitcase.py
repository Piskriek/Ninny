import sys

with open('games.js', 'r', encoding='utf-8') as f:
    content = f.read()

target = """        container.innerHTML = `
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
          ${guardianBtn('suitcase')}`;"""

replace = """        container.innerHTML = `
          <h2 class="game-title" style="font-size:1.6rem;">${dayData.emoji} Pack today's memories! 🧳</h2>
          <div style="display:flex;gap:1rem;width:100%;max-width:700px;align-items:stretch;flex-wrap:wrap;justify-content:center;">
            <div style="flex:1;min-width:200px;max-height:50vh;overflow-y:auto;padding-right:0.5rem;box-sizing:border-box;">
              <p style="text-align:center;font-weight:bold;font-size:0.9rem;margin-bottom:0.5rem;">Tap to pack:</p>
              <div style="display:flex;flex-direction:column;gap:0.4rem;">
                ${available.map(m => `<div class="suitcase-item reporter-btn" data-label="${m.label}" data-icon="${m.icon}" style="font-size:1.2rem;padding:0.5rem;border:3px solid #eee;border-radius:14px;cursor:pointer;background:white;width:100%;text-align:left;box-sizing:border-box;white-space:normal;">${m.icon} ${m.label}</div>`).join('')}
              </div>
            </div>
            <div style="flex:1;min-width:180px;background:#a1887f;border-radius:18px;padding:0.8rem;border:8px solid #5d4037;min-height:180px;max-height:50vh;overflow-y:auto;display:flex;flex-wrap:wrap;gap:0.4rem;align-content:flex-start;box-sizing:border-box;">
              ${packed.map(p => `<span style="font-size:2rem;line-height:1;">${p.icon}</span>`).join('')}
              ${packed.length === 0 ? '<span style="color:rgba(255,255,255,0.4);font-size:0.85rem;">empty</span>' : ''}
            </div>
          </div>
          <div id="feedback" class="feedback-msg"></div>
          ${guardianBtn('suitcase')}`;"""
          
content_norm = content.replace('\\r\\n', '\\n')
target_norm = target.replace('\\r\\n', '\\n')

new_content = content_norm.replace(target_norm, replace)
if new_content == content_norm:
  print("Failed to replace!")
  sys.exit(1)
  
with open('games.js', 'w', encoding='utf-8') as f:
  f.write(new_content)
  
print("Layout fixed successfully!")
