// Rashqa Andrean X PPLG 2
function tarik() {
  const deck = [
    "Jackpot! 💰💰💰", 
    "Hoki banget! 😎", "Hoki banget! 😎", "Hoki banget! 😎",
    "Biasa aja 🤔", "Biasa aja 🤔", "Biasa aja 🤔",
    "Sial banget! 😵", "Sial banget! 😵", "Sial banget! 😵"
  ];

  const acak = deck[Math.floor(Math.random() * deck.length)];
  document.getElementById("hasil").textContent = acak;
}
