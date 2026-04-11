// Rashqa Andrean X PPLG 2

function hitung() {
  const p = parseFloat(document.getElementById("panjang").value);
  const l = parseFloat(document.getElementById("lebar").value);
  const t = parseFloat(document.getElementById("tinggi").value);

  if ([p, l, t].some(v => isNaN(v) || v <= 0)) {
    document.getElementById("hasil").textContent = "Masukkan nilai yang valid.";
    return;
  }

  const volume = (p * l * t) / 3;
  document.getElementById("hasil").textContent = `Volume limas adalah ${volume.toFixed(2)} satuan³.`;
}
