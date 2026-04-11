// Rashqa Andrean X PPLG 2

function hitungLuas() {
  const p = parseFloat(document.getElementById('panjang').value);
  const l = parseFloat(document.getElementById('lebar').value);
  if (isNaN(p) || isNaN(l) || p <= 0 || l <= 0) {
    document.getElementById('hasil').textContent = "Masukkan panjang dan lebar yang valid.";
    return;
  }
  const luas = p * l;
  document.getElementById('hasil').textContent = `Luas persegi panjang adalah ${luas.toFixed(2)} satuan².`;
}
