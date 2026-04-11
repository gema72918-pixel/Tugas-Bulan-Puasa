// Rashqa Andrean X PPLG 2
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const grid = 20;
let snake = [{x: 160, y: 160}];
let dx = grid;
let dy = 0;
let food = randomFood();
let score = 0;

function randomFood() {
  return {
    x: Math.floor(Math.random() * (canvas.width / grid)) * grid,
    y: Math.floor(Math.random() * (canvas.height / grid)) * grid
  };
}

function gameLoop() {
  const head = {x: snake[0].x + dx, y: snake[0].y + dy};

  // Game Over kondisi
  if (
    head.x < 0 || head.x >= canvas.width ||
    head.y < 0 || head.y >= canvas.height ||
    snake.some(segment => segment.x === head.x && segment.y === head.y)
  ) {
    alert("Game Over! Skor: " + score);
    document.location.reload();
    return;
  }

  snake.unshift(head);

  if (head.x === food.x && head.y === food.y) {
    score++;
    food = randomFood();
    document.getElementById("score").textContent = "Skor: " + score;
  } else {
    snake.pop();
  }

  // Gambar ulang
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Gambar ular
  ctx.fillStyle = "lime";
  snake.forEach(part => ctx.fillRect(part.x, part.y, grid - 2, grid - 2));

  // Gambar makanan
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, grid - 2, grid - 2);

  setTimeout(gameLoop, 100);
}

document.addEventListener("keydown", e => {
  if (e.key === "ArrowUp" && dy === 0) {
    dx = 0;
    dy = -grid;
  } else if (e.key === "ArrowDown" && dy === 0) {
    dx = 0;
    dy = grid;
  } else if (e.key === "ArrowLeft" && dx === 0) {
    dx = -grid;
    dy = 0;
  } else if (e.key === "ArrowRight" && dx === 0) {
    dx = grid;
    dy = 0;
  }
});

// Jalankan game
gameLoop();
