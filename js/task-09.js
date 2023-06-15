function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('button.change-color')
buttonEl.addEventListener('click', changeColor)

function changeColor(event) {
  const textEl = document.querySelector('span.color')
  bodyEl.style.backgroundColor = getRandomHexColor();
  textEl.textContent = getRandomHexColor()
  
  console.log('click');
}