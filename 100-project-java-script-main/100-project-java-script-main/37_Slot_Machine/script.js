const simbol = ["🍒", "🍋", "🍊", "🍉", "🔔", "⭐"];

function putar() {
  const s1 = document.getElementById("s1");
  const s2 = document.getElementById("s2");
  const s3 = document.getElementById("s3");

  s1.textContent = simbol[Math.floor(Math.random() * simbol.length)];
  s2.textContent = simbol[Math.floor(Math.random() * simbol.length)];
  s3.textContent = simbol[Math.floor(Math.random() * simbol.length)];

  const msg = document.getElementById("message");
  if (s1.textContent === s2.textContent && s2.textContent === s3.textContent) {
    msg.textContent = "🎉 Jackpot! Kamu menang!";
  } else {
    msg.textContent = "Coba lagi!";
  }
}
