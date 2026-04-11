let posisi = [0, 0, 0];
let interval;

function mulaiBalapan() {
  posisi = [0, 0, 0];
  document.getElementById("hasil").textContent = "";
  for (let i = 0; i < 3; i++) {
    document.getElementById(`kuda${i}`).style.left = "0px";
  }

  clearInterval(interval);
  interval = setInterval(() => {
    for (let i = 0; i < 3; i++) {
      let langkah = Math.floor(Math.random() * 10) + 1;
      posisi[i] += langkah;
      document.getElementById(`kuda${i}`).style.left = posisi[i] + "px";

      if (posisi[i] >= 600) {
        clearInterval(interval);
        tampilkanHasil(i);
        break;
      }
    }
  }, 100);
}

function tampilkanHasil(pemenang) {
  const pilihan = parseInt(document.getElementById("pilihanKuda").value);
  const teks = pilihan === pemenang
    ? "🎉 Selamat! Kuda pilihanmu menang!"
    : `😢 Kuda ${pemenang + 1} menang. Pilihanmu kalah.`;

  document.getElementById("hasil").textContent = teks;
}
