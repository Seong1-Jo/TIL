const showNumber = document.querySelector('.showNumber');
const randomBtn = document.querySelector('.randomBtn');

randomBtn.addEventListener('click', changeFn);

function changeFn() {
  showNumber.textContent = Math.floor(Math.random() * 10); 
}