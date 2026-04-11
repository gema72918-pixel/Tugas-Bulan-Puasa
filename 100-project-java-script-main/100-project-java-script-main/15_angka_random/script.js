function acakAngka() {
  let angka = Math.floor(Math.random() * 100) + 1;
  document.getElementById("angka").innerText = "Angka acak: " + angka;
}
