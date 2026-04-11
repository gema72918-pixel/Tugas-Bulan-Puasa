const img = document.getElementById('image');
const dropzone = document.getElementById('dropzone');

img.addEventListener('dragstart', e => {
  e.dataTransfer.setData('text/plain', 'image');
});

dropzone.addEventListener('dragover', e => {
  e.preventDefault();
});

dropzone.addEventListener('drop', e => {
  e.preventDefault();
  dropzone.innerHTML = '';
  dropzone.appendChild(img);
});
