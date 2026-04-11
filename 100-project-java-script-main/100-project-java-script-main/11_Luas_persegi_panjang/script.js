function hitungLuas() {
  let p = parseFloat(document.getElementById("panjang").value);
  let l = parseFloat(document.getElementById("lebar").value);
  document.getElementById("hasil").innerText = "Luas: " + (p * l);
}
