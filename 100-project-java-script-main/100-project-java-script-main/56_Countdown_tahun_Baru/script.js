// Rashqa Andrean X PPLG 2
function updateCountdown() {
  const sekarang = new Date();
  const tahunBaru = new Date(sekarang.getFullYear() + 1, 0, 1);
  const selisih = Math.floor((tahunBaru - sekarang) / 1000);
  document.getElementById("countdown").textContent = `${selisih} detik lagi!`;
}
setInterval(updateCountdown, 1000);
updateCountdown();
