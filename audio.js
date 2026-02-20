// =========================================================
// LITTLE BLOOM ACADEMY — AUDIO.JS (Procedural Sound Engine)
// =========================================================

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function playTone(freq, type, duration, vol = 0.1) {
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);

    gain.gain.setValueAtTime(vol, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + duration);

    osc.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + duration);
}

// Global Sound Effects Library
window.AudioFX = {
    click: () => playTone(800, 'sine', 0.1, 0.05),
    pop: () => {
        playTone(400, 'sine', 0.05, 0.1);
        setTimeout(() => playTone(600, 'sine', 0.1, 0.1), 30);
    },
    success: () => {
        // A happy major chord
        playTone(440, 'sine', 0.3, 0.08); // A4
        playTone(554.37, 'sine', 0.3, 0.08); // C#5
        playTone(659.25, 'sine', 0.3, 0.08); // E5
    },
    error: () => playTone(150, 'square', 0.3, 0.05),
    tada: () => {
        // Small fanfare
        playTone(523.25, 'sine', 0.15, 0.1); // C5
        setTimeout(() => playTone(659.25, 'sine', 0.15, 0.1), 150); // E5
        setTimeout(() => playTone(783.99, 'sine', 0.15, 0.1), 300); // G5
        setTimeout(() => playTone(1046.50, 'sine', 0.4, 0.15), 450); // C6
    }
};

// Wire up click sounds to all standard buttons globally
document.addEventListener('click', (e) => {
    // Only play click if it's a standard button or interactive nav
    if (e.target.closest('button, .btn, .nav-item, .day-tab, .weather-icon, .reporter-btn, .choice-btn, .color-blob')) {
        window.AudioFX.click();
    }
});
