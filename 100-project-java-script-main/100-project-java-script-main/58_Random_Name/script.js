// Rashqa Andrean X PPLG 2
function beriNama() {
  const depan = ["Dark", "Mega", "Ultra", "Silent", "Crazy"];
  const belakang = ["Warrior", "Ninja", "Cat", "Penguin", "Ghost"];
  const nama = depan[Math.floor(Math.random() * depan.length)] + " " +
               belakang[Math.floor(Math.random() * belakang.length)];
  document.getElementById("hasil").textContent = nama;
}
