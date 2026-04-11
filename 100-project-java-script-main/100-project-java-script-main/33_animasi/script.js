const boxes = document.querySelectorAll('.box');

function checkBoxes() {
  const trigger = window.innerHeight * 0.8;

  boxes.forEach(box => {
    const boxTop = box.getBoundingClientRect().top;
    if (boxTop < trigger) {
      box.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkBoxes);
checkBoxes();
