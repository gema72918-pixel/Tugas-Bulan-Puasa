let seconds = 0;
let interval;

function updateDisplay() {
  document.getElementById("display").textContent = `${Math.floor(seconds / 60)}:${seconds % 60 < 10 ? '0' : ''}${seconds % 60}`;
}

function start() {
  if (!interval) {
    interval = setInterval(() => {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function pause() {
  clearInterval(interval);
  interval = null;
}

function reset() {
  pause();
  seconds = 0;
  updateDisplay();
}
