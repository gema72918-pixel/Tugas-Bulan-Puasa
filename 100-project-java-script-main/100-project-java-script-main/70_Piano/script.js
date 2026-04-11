// Rashqa Andrean X PPLG 2
const notes = ['a', 's', 'd', 'f', 'g', 'h', 'j'];
const frequencies = [261.6, 293.7, 329.6, 349.2, 392.0, 440.0, 493.9];
const context = new (window.AudioContext || window.webkitAudioContext)();

const keysDiv = document.getElementById("keys");
notes.forEach(note => {
  const div = document.createElement("div");
  div.className = "key";
  div.textContent = note.toUpperCase();
  keysDiv.appendChild(div);
});

document.addEventListener("keydown", e => {
  const index = notes.indexOf(e.key.toLowerCase());
  if (index !== -1) {
    const osc = context.createOscillator();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(frequencies[index], context.currentTime);
    osc.connect(context.destination);
    osc.start();
    osc.stop(context.currentTime + 0.3);
  }
});
