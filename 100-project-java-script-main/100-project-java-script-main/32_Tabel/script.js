function tambahBaris() {
  const nama = document.getElementById('nama').value;
  if (nama.trim() === '') return;
  const table = document.getElementById('myTable');
  const row = table.insertRow();
  row.insertCell(0).textContent = nama;
  const hapus = row.insertCell(1);
  const btn = document.createElement('button');
  btn.textContent = 'Hapus';
  btn.onclick = () => row.remove();
  hapus.appendChild(btn);
  document.getElementById('nama').value = '';
}
