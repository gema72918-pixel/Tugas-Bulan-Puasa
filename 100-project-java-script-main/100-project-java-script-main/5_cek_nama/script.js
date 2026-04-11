function cekNama() {
  let nama = document.getElementById("nama").value;
  if (nama === "") {
    document.getElementById("pesan").innerText = "Nama tidak boleh kosong.";
  } else {
    document.getElementById("pesan").innerText = "Halo, " + nama + "!";
  }
}
