const emojis = ["🐶", "🐱", "🐸", "🐵", "🐰"];
let emojiSekarang = "";

function tampilkanEmoji() {
  emojiSekarang = emojis[Math.floor(Math.random() * emojis.length)];
  document.getElementById("emoji").textContent = emojiSekarang;
  document.getElementById("feedback").textContent = "";
}

function cekTebakan() {
  const tebakan = document.getElementById("tebakan").value.trim();
  if (tebakan.includes(emojiSekarang)) {
    document.getElementById("feedback").textContent = "🎉 Benar!";
  } else {
    document.getElementById("feedback").textContent = "❌ Salah, coba lagi.";
  }
}
