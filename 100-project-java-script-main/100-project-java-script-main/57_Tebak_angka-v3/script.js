// Rashqa Andrean X PPLG 2
const jawaban = Math.floor(Math.random() * 10) + 1;

function cek() {
  const tebakan = parseInt(document.getElementById("tebakan").value);
  const hasil = document.getElementById("hasil");

  if (tebakan === jawaban) {
    hasil.textContent = "Benar! Kamu jenius!";
  } else {
    hasil.textContent = "Salah! Coba lagi dong 😜";
  }
}
