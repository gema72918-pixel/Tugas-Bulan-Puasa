document.getElementById('spinButton').addEventListener('click', function() {
  const wheel = document.getElementById('wheel');
  const resultText = document.getElementById('result');
  const spinDegree = Math.floor(Math.random() * 360);
  wheel.style.transition = 'transform 4s ease-out';
  wheel.style.transform = `rotate(${spinDegree + 3600}deg)`;
  setTimeout(() => {
    const landedDegree = spinDegree % 360;
    let result = '';
    if (landedDegree >= 0 && landedDegree < 90) {
      result = 'Merah';
    } else if (landedDegree >= 90 && landedDegree < 180) {
      result = 'Hitam';
    } else if (landedDegree >= 180 && landedDegree < 270) {
      result = 'Merah';
    } else {
      result = 'Hitam';
    }
    resultText.textContent = `Roda berhenti pada warna: ${result}`;
  }, 4000);
});
