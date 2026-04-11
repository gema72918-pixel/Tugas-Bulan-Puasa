let hariList = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
let hariIni = new Date().getDay();
document.getElementById("hari").innerText = "Hari ini adalah: " + hariList[hariIni];
