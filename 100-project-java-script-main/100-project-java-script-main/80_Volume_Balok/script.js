// Rashqa Andrean X PPLG 2

function hitungVolume() {
  const p = parseFloat(document.getElementById('panjang').value);
  const l = parseFloat(document.getElementById('lebar').value);
  const t = parseFloat(document.getElementById('tinggi').value);
  if ([p, l, t].some(v => isNaN(v) || v <= 0)) {
    document.getElementById('hasil').textContent = "Masukkan panjang, lebar, dan tinggi yang valid.";
    return;
  }
  const volume = p * l * t;
  document.getElementById('hasil').textContent = `Volume balok adalah ${volume.toFixed(2)} satuan³.`;
}
