const boxEls = document.querySelectorAll('.box');//HTML tags


boxEls.forEach(function (boxEl, index) { 
  boxEl.classList.add(`order-${index + 1}`); // Add ClassName 
  console.log(boxEl, index);
})