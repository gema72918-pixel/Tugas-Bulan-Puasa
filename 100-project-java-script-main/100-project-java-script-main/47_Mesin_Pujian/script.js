const pujianList = [
  "LU GAY!",
  "HIDEUNGG!",
  "JOMOK!",
  "YAHAHA BEGO!",
  "GACOR KANG 😎"
];

function puji() {
  const teks = pujianList[Math.floor(Math.random() * pujianList.length)];
  document.getElementById("pujian").textContent = teks;
}
