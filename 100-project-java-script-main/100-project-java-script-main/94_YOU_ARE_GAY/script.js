const button = document.getElementById("Button");
const text = document.getElementById("displayText");
const boom = document.getElementById("boom");

button.addEventListener("click", () => {
  text.textContent = "YOU ARE GAY";
  text.style.animation = "none"; 
  void text.offsetWidth;         
  text.style.animation = null;  
  boom.currentTime = 0;
  boom.play();
});
