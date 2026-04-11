const quotes = [
  "Se hitam hitamnya kulit, yang keluar tetaplah putih",
  "Bool",
  "Utamakan fungsi bukan muncratin muani",
  "Ikan hiu makan tomat, i love you somat"
];

function generateQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[index];
}
