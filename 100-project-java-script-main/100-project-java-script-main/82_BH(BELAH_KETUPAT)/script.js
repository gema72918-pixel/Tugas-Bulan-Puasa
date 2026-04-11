// Rashqa Andrean X PPLG 2

function hitung() {
  const d1 = parseFloat(document.getElementById('d1').value);
  const d2 = parseFloat(document.getElementById('d2').value);

  if (isNaN(d1) || isNaN(d2) || d1 <= 0 || d2 <= 0) {
    document.getElementById('hasil').textContent = "Masukkan kedua diagonal dengan benar.";
    return;
  }

  const luas = 0.5 * d1 * d2;
  document.getElementById('hasil').textContent = `Luas belah ketupat adalah ${luas.toFixed(2)} satuan².`;
}
