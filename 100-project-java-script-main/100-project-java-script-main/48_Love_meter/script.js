function cekCinta() {
  const nama1 = document.getElementById("nama1").value;
  const nama2 = document.getElementById("nama2").value;
  const persen = Math.floor(Math.random() * 101);

  document.getElementById("hasil").textContent = `${nama1} ❤️ ${nama2} = ${persen}%`;
}
