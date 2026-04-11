function balikKata() {
  const kata = document.getElementById("inputKata").value;
  const hasil = kata.split('').reverse().join('');
  document.getElementById("output").textContent = `${hasil}`;
}
