// Rashqa Andrean X PPLG 2
let secret = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const input = document.getElementById("guessInput");
  const guess = parseInt(input.value);
  const message = document.getElementById("message");
  const attemptDisplay = document.getElementById("attempts");
  if (isNaN(guess)) {
    message.textContent = "Masukkan angka yang valid!";
    return;
  }
  attempts++;
  if (guess === secret) {
    message.textContent = `🎉 Selamat! Kamu menebak dalam ${attempts} kali!`;
    message.style.color = "gold";
    attemptDisplay.textContent = "🎁 Kamu Dapet Hikmahnya!";
  } else if (guess > secret) {
    message.textContent = "Terlalu besar!";
    message.style.color = "red";
  } else {
    message.textContent = "Terlalu kecil!";
    message.style.color = "blue";
  }
  input.value = "";
  input.focus();
}

function resetGame() {
  secret = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("message").textContent = "Masukkan tebakanmu di bawah!";
  document.getElementById("message").style.color = "white";
  document.getElementById("attempts").textContent = "";
}
