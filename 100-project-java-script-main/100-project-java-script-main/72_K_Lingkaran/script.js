// Rashqa Andrean X PPLG 2

function hitungKeliling() {
  const r = parseFloat(document.getElementById('radius').value);
  if (isNaN(r) || r <= 0) {
    document.getElementById('hasil').textContent = "Masukkan jari-jari yang valid.";
    return;
  }
  const keliling = 2 * Math.PI * r;
  document.getElementById('hasil').textContent = `Keliling lingkaran adalah ${keliling.toFixed(2)} satuan.`;
}
