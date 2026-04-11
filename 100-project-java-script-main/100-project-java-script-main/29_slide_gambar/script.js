const images = ["assets/rosie.jpg", "assets/wielino.jpg", "assets/taknak.jpg"];
let index = 0;
const slide = document.getElementById("slide");

function changeImage() {
  index = (index + 1) % images.length;
  slide.src = images[index];
}

setInterval(changeImage, 3000);
