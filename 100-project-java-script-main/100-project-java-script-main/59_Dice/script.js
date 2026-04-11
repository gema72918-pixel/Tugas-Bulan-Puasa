// Rashqa Andrean X PPLG 2
function rollDadu() {
  return Math.floor(Math.random() * 6) + 1;
}

function main() {
  const player1 = rollDadu() + rollDadu();
  const komputer = rollDadu() + rollDadu();
  let pesan = `Kamu: ${player1} vs Komputer: ${komputer} → `;

  if (player1 > komputer) {
    pesan += "Kamu menang! 🤑";
  } else if (player1 < komputer) {
    pesan += "Kamu kalah! 😭";
  } else {
    pesan += "Seri! 😐";
  }

  document.getElementById("hasil").textContent = pesan;
}
