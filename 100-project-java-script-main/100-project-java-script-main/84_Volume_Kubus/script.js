// Rashqa Andrean X PPLG 2

function hitung() {
  const s = parseFloat(document.getElementById('sisi').value);
  if (isNaN(s) || s <= 0) {
    document.getElementById('hasil').textContent = "Masukkan sisi yang valid.";
    return;
  }

  const volume = s ** 3;
  document.getElementById('hasil').textContent = `Volume kubus adalah ${volume.toFixed(2)} satuan³.`;
}
