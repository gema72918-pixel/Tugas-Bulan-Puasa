// Rashqa Andrean X PPLG 2
const faceContainer = document.getElementById("faceContainer");

function generate() {
  const eyeStyles = [
    `<circle cx="50" cy="50" r="10" fill="black" /><circle cx="100" cy="50" r="10" fill="black" />`,
    `<circle cx="50" cy="50" r="8" fill="black" /><circle cx="100" cy="50" r="8" fill="black" />`,
    `<rect x="45" y="45" width="10" height="10" fill="black"/><rect x="95" y="45" width="10" height="10" fill="black"/>`
  ];

  const mouths = [
    `<path d="M50 100 Q75 130 100 100" stroke="black" fill="none"/>`,
    `<path d="M50 110 Q75 80 100 110" stroke="black" fill="none"/>`,
    `<line x1="50" y1="110" x2="100" y2="110" stroke="black"/>`
  ];

  const skinColors = ["#fdd", "#ffc", "#ccf", "#dfd"];

  const skin = skinColors[Math.floor(Math.random() * skinColors.length)];
  const eyes = eyeStyles[Math.floor(Math.random() * eyeStyles.length)];
  const mouth = mouths[Math.floor(Math.random() * mouths.length)];

  faceContainer.innerHTML = `
    <svg viewBox="0 0 150 150">
      <circle cx="75" cy="75" r="60" fill="${skin}" stroke="#333" stroke-width="3"/>
      ${eyes}
      ${mouth}
    </svg>
  `;
}

window.onload = generate;
