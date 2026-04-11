let detik = 10;
let countdown = document.getElementById("countdown");

let interval = setInterval(() => {
  countdown.innerText = "Hitung mundur: " + detik;
  detik--;
  if (detik < 0) {
    clearInterval(interval);
    countdown.innerText = "Waktu habis!";
  }
}, 1000);
