const inputEl = document.querySelector('#validation-input')
console.log(inputEl);
const dataLengthEl = inputEl.getAttribute('data-length')
console.log(dataLengthEl);


const checkInputLength = () => {
    if (Number(dataLengthEl) === Number(inputEl.value.length) & !inputEl.classList.contains('invalid'))
    { inputEl.classList.add('valid') }

    else if (Number(dataLengthEl) === Number(inputEl.value.length) & inputEl.classList.contains('invalid')) {
        inputEl.classList.replace('invalid','valid')
    }
    else {
    inputEl.classList.add('invalid')
    }
  
}



// const inputLengthEl = inputEl.value;
// console.log(inputLengthEl);
// console.log(inputEl.value);
// const checkInputLength = () => {

//     console.log(inputLengthEl);
    // if (Number(dataLengthEl) === Number(inputLengthEl) ) 
    // {  inputEl.classList.replace(invalid, valid) }
    // else {
    //     inputEl.classList.add('invalid')
    // }
// }

inputEl.addEventListener('blur', checkInputLength )
// console.log(inputEl.dataset.length);
// console.log(inputEl.dataset);
