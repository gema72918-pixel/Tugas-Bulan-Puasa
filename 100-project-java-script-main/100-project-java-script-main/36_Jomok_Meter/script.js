function ukurKejomokan() {
  const nama = document.getElementById("nama").value.trim();
  const hasil = document.getElementById("hasil");

  if (!nama) {
    hasil.textContent = "Silakan isi namamu dulu!";
    return;
  }

  const persentase = Math.floor(Math.random() * 101);
  let komentar = '';

  if (persentase < 30) {
    komentar = "Kamu masih cukup aktif!";
  } else if (persentase < 70) {
    komentar = "Kamu mulai jomok nih...";
  } else {
    komentar = "Waduh, kamu jomok banget 😅";
  }

  hasil.innerHTML = `${nama}, tingkat kejomokanmu hari ini adalah <strong>${persentase}%</strong>.<br>${komentar}`;
}
