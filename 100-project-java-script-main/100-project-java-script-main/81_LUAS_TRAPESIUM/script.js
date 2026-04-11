// Rashqa Andrean X PPLG 2

function hitung() {
  const a = parseFloat(document.getElementById('a').value);
  const b = parseFloat(document.getElementById('b').value);
  const t = parseFloat(document.getElementById('tinggi').value);

  if ([a, b, t].some(v => isNaN(v) || v <= 0)) {
    document.getElementById('hasil').textContent = "Masukkan nilai yang valid.";
    return;
  }

  const luas = 0.5 * (a + b) * t;
  document.getElementById('hasil').textContent = `Luas trapesium adalah ${luas.toFixed(2)} satuan².`;
}
