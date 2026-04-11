function tampilkanGambar() {
  let img = document.createElement("img");
  img.src = "logo.png";
  img.alt = "Gambar";
  document.getElementById("gambarContainer").appendChild(img);
}
