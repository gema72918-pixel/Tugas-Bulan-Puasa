// Rashqa Andrean X PPLG 2
function ramal() {
  const ramalan = [
    "Hari ini kamu akan menemukan receh di bawah meja.",
    "Waspada! Jangan menatap ayam terlalu lama.",
    "Keberuntunganmu ada di mangkok mie.",
    "Jangan lupa senyum ke cermin, dia sedang menatap balik.",
    "Seseorang sedang memikirkanmu... mungkin debt collector."
  ];
  const hasil = ramalan[Math.floor(Math.random() * ramalan.length)];
  document.getElementById("hasil").textContent = hasil;
}
