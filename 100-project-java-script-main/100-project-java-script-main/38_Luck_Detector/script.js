function cekKeberuntungan() {
  const persen = Math.floor(Math.random() * 101);
  const bar = document.getElementById("bar");
  const status = document.getElementById("status");

  bar.style.width = persen + "%";

  let komentar = "";
  if (persen > 80) komentar = "🔥 Super Hoki!";
  else if (persen > 60) komentar = "🍀 Lumayan Hoki";
  else if (persen > 40) komentar = "😐 Standar aja";
  else if (persen > 20) komentar = "😓 Kurang beruntung";
  else komentar = "😭 Kamu lagi apes hari ini";

  status.textContent = `Keberuntungan: ${persen}% — ${komentar}`;
}
