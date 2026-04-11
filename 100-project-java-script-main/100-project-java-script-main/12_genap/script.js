let list = document.getElementById("genapList");
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    let item = document.createElement("li");
    item.textContent = i;
    list.appendChild(item);
  }
}
