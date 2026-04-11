// Rashqa Andrean X PPLG 2

const vignette = document.querySelector('.vignette');
const img = document.getElementById('misteriImg');
const btn = document.getElementById('revealBtn');
const audio = document.getElementById('ambaSound');

document.addEventListener('mousemove', (e) => {
  // Gerakkan lentera
  vignette.style.left = e.pageX - 100 + 'px';
  vignette.style.top = e.pageY - 100 + 'px';

  // Cek apakah kursor dekat tombol
  const btnRect = btn.getBoundingClientRect();
  const dx = e.clientX - (btnRect.left + btnRect.width / 2);
  const dy = e.clientY - (btnRect.top + btnRect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 100) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', () => {
  img.style.opacity = 1;
  img.style.width = "400px";
  img.style.transform = "translate(-50%, -50%) scale(1)";

  setTimeout(() => {
    document.body.style.backgroundColor = "#fff";
    document.body.style.cursor = "auto";
    vignette.style.display = "none";
    btn.style.display = "none";
    audio.play();
  }, 3000);
});
