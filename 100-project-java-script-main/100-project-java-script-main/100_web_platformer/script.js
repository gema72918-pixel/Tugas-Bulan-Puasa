const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");
const scoreDisplay = document.getElementById("scoreDisplay");
const startMenu = document.getElementById("startMenu");
const gameOverMenu = document.getElementById("gameOverMenu");
const startBtn = document.getElementById("startBtn");
const retryBtn = document.getElementById("retryBtn");
const finalScore = document.getElementById("finalScore");

const sfxJump = document.getElementById("sfxJump");
const sfxDie = document.getElementById("sfxDie");

let player, gravity, gameSpeed, score, gameRunning, gameOver;
let obstacles = [];
let keys = {};
let jumpHold = 0;
let spawnTimer = 0;

function initGame() {
  player = {
    x: 100, y: 300,
    width: 30, height: 30,
    color: "cyan",
    vy: 0,
    onGround: true
  };

  gravity = 1;
  gameSpeed = 4;
  score = 0;
  gameOver = false;
  gameRunning = true;
  obstacles = [];
  scoreDisplay.textContent = "Score: 0";
  gameOverMenu.style.display = "none";
  canvas.style.filter = "none";
  spawnTimer = 0;
}

function drawRect(obj) {
  ctx.fillStyle = obj.color;
  ctx.fillRect(obj.x, obj.y, obj.width, obj.height);
}

function spawnObstacle() {
  const isAir = Math.random() < 0.3;
  if (isAir) {
    obstacles.push({
      x: canvas.width,
      y: 220,
      width: 30,
      height: 30,
      color: "red",
      type: "air"
    });
  } else {
    obstacles.push({
      x: canvas.width,
      y: 300,
      width: 30,
      height: 30,
      color: "green",
      type: "ground"
    });
  }
}

function update() {
  if (!gameRunning) return;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  if (keys[" "] && player.onGround) {
    player.vy = -15;
    player.onGround = false;
    sfxJump.currentTime = 0;
    sfxJump.play();
    keys[" "] = false;
  }

  player.vy += gravity;
  player.y += player.vy;

  if (player.y >= 300) {
    player.y = 300;
    player.vy = 0;
    player.onGround = true;
  }

  drawRect(player);

  for (let i = obstacles.length - 1; i >= 0; i--) {
    let obs = obstacles[i];
    obs.x -= gameSpeed;
    drawRect(obs);

    if (
      player.x < obs.x + obs.width &&
      player.x + player.width > obs.x &&
      player.y < obs.y + obs.height &&
      player.y + player.height > obs.y
    ) {
      endGame();
    }

    if (obs.x + obs.width < 0) {
      obstacles.splice(i, 1);
      score++;
      scoreDisplay.textContent = "Score: " + score;
      gameSpeed = 4 + Math.floor(score / 10);
    }
  }

  spawnTimer++;
  if (spawnTimer > 60 - Math.min(score, 40)) {
    spawnObstacle();
    spawnTimer = 0;
  }
}

function loop() {
  update();
  requestAnimationFrame(loop);
}

function endGame() {
  gameRunning = false;
  canvas.style.filter = "grayscale(100%) blur(2px)";
  finalScore.textContent = "Score: " + score;
  gameOverMenu.style.display = "flex";
  sfxDie.play();
}

document.addEventListener("keydown", e => {
  keys[e.key] = true;
});
document.addEventListener("keyup", e => {
  keys[e.key] = false;
});

startBtn.onclick = () => {
  startMenu.style.display = "none";
  initGame();
};
retryBtn.onclick = () => {
  initGame();
};

loop();
