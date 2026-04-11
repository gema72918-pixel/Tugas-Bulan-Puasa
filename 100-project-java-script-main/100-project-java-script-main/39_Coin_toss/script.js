function lemparKoin() {
  const sisi = Math.random() < 0.5 ? "Kepala" : "Ekor";
  const emoji = sisi === "Kepala" ? "🙂" : "🐒";

  document.getElementById("koin").textContent = emoji;
  document.getElementById("hasil").textContent = `Hasil: ${sisi}`;
}
