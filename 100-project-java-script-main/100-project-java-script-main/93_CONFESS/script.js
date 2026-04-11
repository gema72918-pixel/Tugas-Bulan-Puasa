document.getElementById('noButton').addEventListener('mouseenter', function() {
  this.style.transition = "all 0.3s ease";
  this.style.position = "relative";
  this.style.left = "100px";
  this.style.top = "-20px";
});

document.getElementById('noButton').addEventListener('mouseleave', function() {
  this.style.transition = "all 0.3s ease";
  this.style.left = "0px";
  this.style.top = "0px";
});

document.getElementById('noButton').addEventListener('click', function() {
  const jumpscareDiv = document.getElementById('jumpscare');
  jumpscareDiv.classList.remove('hidden');
  const scarySound = document.getElementById('jumpscareSound');
  scarySound.play();
  
  setTimeout(() => {
    jumpscareDiv.classList.add('hidden');
  }, 3000);
});

document.getElementById('yesButton').addEventListener('click', function() {
  const yayDiv = document.getElementById('yay');
  yayDiv.classList.remove('hidden');
  
  const yaySound = document.getElementById('yaySound');
  yaySound.play();

  setTimeout(() => {
    yayDiv.classList.add('hidden');
  }, 3000);
});
