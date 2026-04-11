document.getElementById('Button').addEventListener('click', function() {
  const jumpscareDiv = document.getElementById('jumpscare');
  jumpscareDiv.classList.remove('hidden');
  const scarySound = document.getElementById('Sound');
  scarySound.play(); 

  setTimeout(() => {
    jumpscareDiv.classList.add('hidden');
  }, 3000); 
});
