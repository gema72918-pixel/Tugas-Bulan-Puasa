// Rashqa Andrean X PPLG 2

function hitungLuas() {
  const s = parseFloat(document.getElementById('sisi').value);
  if (isNaN(s) || s <= 0) {
    document.getElementById('hasil').textContent = "Masukkan sisi yang valid.";
    return;
  }
  const luas = s * s;
  document.getElementById('hasil').textContent = `Luas persegi adalah ${luas.toFixed(2)} satuan².`;
}
