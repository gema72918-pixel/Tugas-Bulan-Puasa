let bisaKlik = false;
let waktuMulai = 0;

function mulaiGame() {
  document.getElementById("hasil").textContent = "Tunggu sinyal...";
  document.getElementById("tombol").disabled = true;
  document.getElementById("tombol").textContent = "Tunggu...";

  const delay = Math.floor(Math.random() * 3000) + 2000;

  setTimeout(() => {
    document.getElementById("tombol").textContent = "Klik Sekarang!";
    document.getElementById("tombol").disabled = false;
    bisaKlik = true;
    waktuMulai = new Date().getTime();
  }, delay);
}

function cekKlik() {
  if (!bisaKlik) {
    document.getElementById("hasil").textContent = "⛔ Kepagian! Tunggu sinyalnya dulu!";
    return;
  }

  const waktuKlik = new Date().getTime();
  const selisih = waktuKlik - waktuMulai;

  document.getElementById("hasil").textContent = `⏱️ Refleksmu: ${selisih} ms`;
  bisaKlik = false;
  document.getElementById("tombol").disabled = true;
  document.getElementById("tombol").textContent = "Mulai Lagi";
}

// Mulai otomatis saat load
window.onload = mulaiGame;
document.getElementById("tombol").addEventListener("click", () => {
  if (!bisaKlik) mulaiGame();
});
