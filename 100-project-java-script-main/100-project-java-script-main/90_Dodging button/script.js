// Rashqa Andrean X PPLG 2

function kabur() {
  const btn = document.getElementById("no");
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
}
