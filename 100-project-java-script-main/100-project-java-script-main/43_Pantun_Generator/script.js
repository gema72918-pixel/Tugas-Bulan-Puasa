const pantunList = [
  "Pergi ke pasar beli pepaya<br>Jangan lupa beli srikaya<br>Kamu memang banyak gaya<br>Tapi tetap manja kayak kucing maya",
  "Burung pipit terbang melayang<br>Hinggap sebentar lalu menghilang<br>Hatiku ini sedang bimbang<br>Melihat kamu kok makin cemerlang",
  "Beli ikan di pasar Cikini<br>Bawa pulang naik delman<br>Aku tersenyum sendiri<br>Karena kamu selalu di pikiran"
];

function buatPantun() {
  const p = pantunList[Math.floor(Math.random() * pantunList.length)];
  document.getElementById("pantun").innerHTML = p;
}
