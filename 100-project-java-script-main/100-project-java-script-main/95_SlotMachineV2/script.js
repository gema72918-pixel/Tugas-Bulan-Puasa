const symbols = ["🍒", "🍋", "🔔", "⭐", "💎"];
const spinButton = document.getElementById("spin");
const slots = [
  document.getElementById("slot1"),
  document.getElementById("slot2"),
  document.getElementById("slot3")
];
const resultText = document.getElementById("hasil");
const spinSound = document.getElementById("spinSound");
const winSound = document.getElementById("winSound");

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function spinSlot(slot, delay) {
  return new Promise(resolve => {
    let count = 0;
    const maxCount = 20 + Math.floor(Math.random() * 10); 
    const interval = setInterval(() => {
      slot.textContent = getRandomSymbol();
      count++;
      if (count >= maxCount) {
        clearInterval(interval);
        resolve(slot.textContent);
      }
    }, delay);
  });
}

spinButton.addEventListener("click", async () => {
  resultText.textContent = "";
  spinSound.currentTime = 0;
  spinSound.play();

  const results = await Promise.all([
    spinSlot(slots[0], 100),
    spinSlot(slots[1], 100),
    spinSlot(slots[2], 100)
  ]);

  if (results.every((val, i, arr) => val === arr[0])) {
    resultText.textContent = "🎉 JACKPOT!!! 🎉";
    winSound.currentTime = 0;
    winSound.play();
  } else {
    resultText.textContent = "Coba Lagi!";
  }
});
