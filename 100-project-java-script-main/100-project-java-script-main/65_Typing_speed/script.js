// Rashqa Andrean X PPLG 2
const kalimat = "Aden ganteng banget kayak jefri nichol";
let mulaiWaktu;

document.getElementById("soal").textContent = kalimat;

function cek() {
  const input = document.getElementById("input").value;
  if (input === kalimat) {
    const waktu = (new Date().getTime() - mulaiWaktu) / 1000;
    document.getElementById("hasil").textContent = `Selesai dalam ${waktu.toFixed(2)} detik`;
  }
}

document.getElementById("input").addEventListener("focus", () => {
  mulaiWaktu = new Date().getTime();
});
