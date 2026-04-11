let daftar = document.getElementById("daftar");
for (let i = 1; i <= 5; i++) {
  let item = document.createElement("li");
  item.innerText = "Item ke-" + i;
  daftar.appendChild(item);
}
