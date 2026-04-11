// Rashqa Andrean X PPLG 2

function hitungMatematika() {
  const a = parseFloat(document.getElementById('num1').value);
  const b = parseFloat(document.getElementById('num2').value);
  const op = document.getElementById('operator').value;
  let hasil;

  if (isNaN(a) || isNaN(b)) {
    hasil = 'Masukkan angka yang valid.';
  } else {
    switch (op) {
      case '+': hasil = a + b; break;
      case '-': hasil = a - b; break;
      case '*': hasil = a * b; break;
      case '/': hasil = b !== 0 ? a / b : 'Tidak bisa dibagi 0'; break;
    }
  }

  document.getElementById('hasilMatematika').innerText = `Hasil: ${hasil}`;
}

document.getElementById('geometri').addEventListener('change', function () {
  const jenis = this.value;
  const container = document.getElementById('geometriInput');
  container.innerHTML = '';

  const addInput = (id, label) => {
    container.innerHTML += `<label>${label}</label><input type="number" id="${id}" placeholder="${label}">`;
  };

  switch (jenis) {
    case 'persegi': addInput('sisi', 'Sisi'); break;
    case 'lingkaran': addInput('jari', 'Jari-jari'); break;
    case 'segitiga':
      addInput('alas', 'Alas');
      addInput('tinggi', 'Tinggi');
      break;
    case 'kubus': addInput('sisiKubus', 'Sisi'); break;
    case 'balok':
      addInput('p', 'Panjang');
      addInput('l', 'Lebar');
      addInput('t', 'Tinggi');
      break;
    case 'bola': addInput('jariBola', 'Jari-jari'); break;
    case 'tabung':
      addInput('jariTabung', 'Jari-jari');
      addInput('tinggiTabung', 'Tinggi');
      break;
    case 'limas':
      addInput('luasAlasLimas', 'Luas Alas');
      addInput('tinggiLimas', 'Tinggi');
      break;
    case 'kerucut':
      addInput('jariKerucut', 'Jari-jari');
      addInput('tinggiKerucut', 'Tinggi');
      break;
  }
});

function hitungGeometri() {
  const jenis = document.getElementById('geometri').value;
  let hasil = '';

  switch (jenis) {
    case 'persegi':
      const sisi = +document.getElementById('sisi').value;
      hasil = `Luas: ${sisi * sisi}, Keliling: ${4 * sisi}`;
      break;
    case 'lingkaran':
      const jari = +document.getElementById('jari').value;
      hasil = `Luas: ${(Math.PI * jari * jari).toFixed(2)}, Keliling: ${(2 * Math.PI * jari).toFixed(2)}`;
      break;
    case 'segitiga':
      const alas = +document.getElementById('alas').value;
      const tinggi = +document.getElementById('tinggi').value;
      hasil = `Luas: ${(0.5 * alas * tinggi).toFixed(2)}`;
      break;
    case 'kubus':
      const s = +document.getElementById('sisiKubus').value;
      hasil = `Volume: ${s ** 3}`;
      break;
    case 'balok':
      const p = +document.getElementById('p').value;
      const l = +document.getElementById('l').value;
      const t = +document.getElementById('t').value;
      hasil = `Volume: ${p * l * t}`;
      break;
    case 'bola':
      const r = +document.getElementById('jariBola').value;
      hasil = `Volume: ${((4/3) * Math.PI * r**3).toFixed(2)}`;
      break;
    case 'tabung':
      const rt = +document.getElementById('jariTabung').value;
      const tt = +document.getElementById('tinggiTabung').value;
      hasil = `Volume: ${(Math.PI * rt**2 * tt).toFixed(2)}`;
      break;
    case 'limas':
      const alasL = +document.getElementById('luasAlasLimas').value;
      const tinggiL = +document.getElementById('tinggiLimas').value;
      hasil = `Volume: ${(1/3 * alasL * tinggiL).toFixed(2)}`;
      break;
    case 'kerucut':
      const rK = +document.getElementById('jariKerucut').value;
      const tK = +document.getElementById('tinggiKerucut').value;
      hasil = `Volume: ${(1/3 * Math.PI * rK**2 * tK).toFixed(2)}`;
      break;
    default:
      hasil = 'Silakan pilih jenis geometri.';
  }

  document.getElementById('hasilGeometri').innerText = hasil;
}
