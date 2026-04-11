// Rashqa Andrean X PPLG 2
function putuskan() {
  const opsi = ["Ya", "Tidak", "Mungkin", "Tanya Ulang Besok", "Gak usah dipikirin"];
  const pilihan = opsi[Math.floor(Math.random() * opsi.length)];
  document.getElementById("hasil").textContent = pilihan;
}
