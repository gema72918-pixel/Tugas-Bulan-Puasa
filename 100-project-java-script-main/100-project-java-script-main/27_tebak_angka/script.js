const number = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const message = document.getElementById("message");

  if (guess < number) message.textContent = "Terlalu kecil!";
  else if (guess > number) message.textContent = "Terlalu besar!";
  else message.textContent = "Tebakan kamu benar!";
}
