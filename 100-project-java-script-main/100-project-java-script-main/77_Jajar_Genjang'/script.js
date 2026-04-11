// Rashqa Andrean X PPLG 2

function hitungLuas() {
  const alas = parseFloat(document.getElementById('alas').value);
  const tinggi = parseFloat(document.getElementById('tinggi').value);
  if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
    document.getElementById('hasil').textContent = "Masukkan alas dan tinggi yang valid.";
    return;
  }
  const luas = alas * tinggi;
  document.getElementById('hasil').textContent = `Luas jajar genjang adalah ${luas.toFixed(2)} satuan².`;
}
