function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const btnCreateEl = document.querySelector('button[data-create]')
console.log(btnCreateEl);
const btnDestroyEl = document.querySelector('button[data-destroy]')
console.log(btnDestroyEl);
const inputEl = document.querySelector('input')
console.log(inputEl.value);
const boxesEl = document.querySelector('#boxes')

btnCreateEl.addEventListener('click', createBoxes);
btnDestroyEl.addEventListener('click',destroyBoxes)

function createBoxes(event) {
  const itemsEl = document.createElement('div')

  console.log(itemsEl);
  
  boxesEl.append(itemsEl)
}


function destroyBoxes(event) {
  
}