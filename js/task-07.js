const inputEl = document.querySelector('input#font-size-control')
const textEl = document.querySelector('span#text')
const valueEl = inputEl.value;
 textEl.classList.add('abra')


const changeSize = () => {


    const valueEl = inputEl.value;
   
    textEl.style.fontSize = `${valueEl}px`;
   
}

inputEl.addEventListener('input',changeSize)