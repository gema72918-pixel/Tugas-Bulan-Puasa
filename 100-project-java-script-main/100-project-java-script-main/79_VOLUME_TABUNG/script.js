// Rashqa Andrean X PPLG 2

function hitungVolume() {
  const r = parseFloat(document.getElementById('jari').value);
  const t = parseFloat(document.getElementById('tinggi').value);
  if (isNaN(r) || isNaN(t) || r <= 0 || t <= 0) {
    document.getElementById('hasil').textContent = "Masukkan jari-jari dan tinggi yang valid.";
    return;
  }
  const volume = Math.PI * r * r * t;
  document.getElementById('hasil').textContent = `Volume tabung adalah ${volume.toFixed(2)} satuan³.`;
}
