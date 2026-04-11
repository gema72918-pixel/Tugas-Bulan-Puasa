// Rashqa Andrean X PPLG 2

function hitungVolume() {
  const sisi = parseFloat(document.getElementById('sisi').value);
  if (isNaN(sisi) || sisi <= 0) {
    document.getElementById('hasil').textContent = "Masukkan sisi yang valid.";
    return;
  }
  const volume = sisi ** 3;
  document.getElementById('hasil').textContent = `Volume kubus adalah ${volume.toFixed(2)} satuan³.`;
}
