const jam = new Date().getHours();
if (jam >= 18 || jam <= 6) {
  document.body.classList.add("dark");
}
