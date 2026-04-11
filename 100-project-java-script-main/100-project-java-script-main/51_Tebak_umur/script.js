// Rashqa Andrean X PPLG 2
function tebakUmur() {
  const nama = document.getElementById("nama").value.trim();
  const hasil = document.getElementById("hasil");

  if (nama === "") {
    hasil.textContent = "Masukkan nama dulu dong!";
    return;
  }

  const umur = Math.floor(Math.random() * 70) + 5;
  const reaksi = ["Serius?", "Wah tua banget!", "Masih muda ya!", "Wow, tidak terduga!"];
  const randomReaksi = reaksi[Math.floor(Math.random() * reaksi.length)];

  hasil.textContent = `Menurut AI: umur kamu sekitar ${umur} tahun. ${randomReaksi}`;
}
