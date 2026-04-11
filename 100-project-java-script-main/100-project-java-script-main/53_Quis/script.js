// Rashqa Andrean X PPLG 2
function cekJawaban(jawab) {
  const hasil = document.getElementById("hasil");
  if (jawab === 'a') {
    hasil.textContent = "Benar! 😆";
  } else {
    hasil.textContent = "Salah! Coba lagi dong 😆";
  }
}
