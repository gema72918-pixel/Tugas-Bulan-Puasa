// Rashqa Andrean X PPLG 2
let startTime;

function mulai() {
  document.getElementById("info").textContent = "";
  const kotak = document.getElementById("kotak");
  kotak.style.display = "none";
  const delay = Math.random() * 2000 + 1000;

  setTimeout(() => {
    kotak.style.display = "flex";
    startTime = new Date().getTime();
  }, delay);
}

function klik() {
  const waktu = new Date().getTime() - startTime;
  document.getElementById("info").textContent = `Waktu reaksimu: ${waktu} ms`;
  document.getElementById("kotak").style.display = "none";
}
