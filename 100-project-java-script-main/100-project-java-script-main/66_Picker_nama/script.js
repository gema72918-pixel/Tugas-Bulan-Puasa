// Rashqa Andrean X PPLG 2
function acak() {
  const input = document.getElementById("daftar").value;
  const nama = input.split(",").map(x => x.trim()).filter(Boolean);
  const hasil = nama[Math.floor(Math.random() * nama.length)];
  document.getElementById("hasil").textContent = hasil ? `🎉 Yang terpilih: ${hasil}` : "Masukkan nama dulu!";
}
