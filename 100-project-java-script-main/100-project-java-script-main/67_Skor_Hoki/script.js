// Rashqa Andrean X PPLG 2
function cek() {
  const skor = Math.floor(Math.random() * 101);
  let teks = `💫 ${skor}/100`;
  if (skor > 80) teks += " — Hari super hoki!";
  else if (skor > 50) teks += " — Lumayan hoki!";
  else teks += " — Kurang beruntung...";

  document.getElementById("skor").textContent = teks;
}
