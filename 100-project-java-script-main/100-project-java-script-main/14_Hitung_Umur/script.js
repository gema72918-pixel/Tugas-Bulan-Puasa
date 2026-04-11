function hitungUmur() {
  let tahun = parseInt(document.getElementById("tahunLahir").value);
  let sekarang = new Date().getFullYear();
  document.getElementById("umur").innerText = "Umur kamu: " + (sekarang - tahun);
}
