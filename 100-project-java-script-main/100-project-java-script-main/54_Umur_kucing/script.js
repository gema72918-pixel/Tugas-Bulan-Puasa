// Rashqa Andrean X PPLG 2
function hitung() {
  const usia = parseInt(document.getElementById("usiaManusia").value);
  const hasil = document.getElementById("hasil");

  if (isNaN(usia) || usia <= 0) {
    hasil.textContent = "Masukkan umur valid ya!";
    return;
  }

  const umurKucing = usia * 7;
  hasil.textContent = `Umurmu setara dengan ${umurKucing} tahun kucing 🐾`;
}
