// Rashqa Andrean X PPLG 2
let jawaban = "";

function acakWarna() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function mulai() {
  const pilihan = document.getElementById("pilihan");
  pilihan.innerHTML = "";
  const warnaBenar = acakWarna();
  jawaban = warnaBenar;
  document.getElementById("warna").textContent = warnaBenar.toUpperCase();

  const posisi = Math.floor(Math.random() * 3);
  for (let i = 0; i < 3; i++) {
    const div = document.createElement("div");
    div.className = "kotak";
    const warna = (i === posisi) ? warnaBenar : acakWarna();
    div.style.background = warna;
    div.onclick = () => cek(warna);
    pilihan.appendChild(div);
  }
}

function cek(warna) {
  const hasil = document.getElementById("hasil");
  hasil.textContent = (warna === jawaban) ? "✅ Benar!" : "❌ Salah!";
  mulai();
}

window.onload = mulai;
