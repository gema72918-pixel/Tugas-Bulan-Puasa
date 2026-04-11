// Rashqa Andrean X PPLG 2

function hitungKeliling() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const c = parseFloat(document.getElementById('c').value);

  if ([a, b, c].some(s => isNaN(s) || s <= 0)) {
    document.getElementById('hasil').textContent = "Masukkan semua sisi dengan benar.";
    return;
  }

  const keliling = a + b + c;
  document.getElementById('hasil').textContent = `Keliling segitiga adalah ${keliling.toFixed(2)} satuan.`;
}
