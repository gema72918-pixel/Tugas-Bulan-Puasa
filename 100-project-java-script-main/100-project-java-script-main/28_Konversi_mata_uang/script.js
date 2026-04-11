const rate = 0.000065;

function convert() {
  const idr = parseFloat(document.getElementById("idr").value);
  const usd = idr * rate;
  document.getElementById("result").textContent = `USD: $${usd.toFixed(2)}`;
}
