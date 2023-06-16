function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyEl = document.querySelector('body')
const buttonEl = document.querySelector('button.change-color')
buttonEl.addEventListener('click', changeColor)
const textEl = document.querySelector('span.color')

function changeColor(event) {
  const color = getRandomHexColor()
  bodyEl.style.backgroundColor = color;
  textEl.textContent = color;
  
  console.log('click');
}