function konversi() {
  const input = parseFloat(document.getElementById("inputSuhu").value);
  const jenis = document.getElementById("jenis").value;
  const hasil = document.getElementById("hasil");

  if (isNaN(input)) {
    hasil.textContent = "Masukkan angka yang valid.";
    return;
  }

  let output;
  if (jenis === "CtoF") {
    output = (input * 9/5) + 32;
    hasil.textContent = `${input}°C = ${output.toFixed(2)}°F`;
  } else {
    output = (input - 32) * 5/9;
    hasil.textContent = `${input}°F = ${output.toFixed(2)}°C`;
  }
}
