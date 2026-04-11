// ── Year auto-update ──
document.getElementById('year').textContent = new Date().getFullYear();

// ── Theme toggle ──
const htmlEl = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const themeLabel = document.getElementById('themeLabel');

try {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    htmlEl.classList.add('light');
    themeIcon.textContent = '🌙';
    themeLabel.textContent = 'Dark';
  }
} catch(e) {}

toggleBtn.addEventListener('click', () => {
  const isLight = htmlEl.classList.toggle('light');
  themeIcon.textContent = isLight ? '🌙' : '☀️';
  themeLabel.textContent = isLight ? 'Dark' : 'Light';
  try { localStorage.setItem('theme', isLight ? 'light' : 'dark'); } catch(e) {}
});

// ── Hamburger menu ──
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

function closeMobile() {
  hamburger.classList.remove('open');
  mobileMenu.classList.remove('open');
}

// ── Typing effect ──
const phrases = ['HTML & CSS', 'Python', 'JavaScript', 'Full-Stack Dev'];
let phraseIndex = 0, charIndex = 0, deleting = false;
const typingEl = document.getElementById('typingText');

function typeWriter() {
  const current = phrases[phraseIndex];
  if (!deleting) {
    typingEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      deleting = true;
      setTimeout(typeWriter, 1600);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      deleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
    }
  }
  setTimeout(typeWriter, deleting ? 60 : 90);
}
typeWriter();

// ── Scroll reveal ──
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── Progress bars ──
const barObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.width = e.target.dataset.width + '%';
      barObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });
document.querySelectorAll('.prog-fill').forEach(el => barObserver.observe(el));

// ── Active nav link ──
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 130) current = sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + current);
  });
});