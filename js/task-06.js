const inputEl = document.querySelector('#validation-input')
   const dataLengthEl = inputEl.getAttribute('data-length')


const checkInputLength = () => {
    inputEl.classList.remove('invalid','valid')
    
    if (Number(dataLengthEl) === inputEl.value.length)
    { inputEl.classList.add('valid') }

    else {
    inputEl.classList.add('invalid')
    }
  
}

inputEl.addEventListener('blur', checkInputLength)


// const checkInputLength = () => {
 
//     if (Number(dataLengthEl) === Number(inputEl.value.length) & !inputEl.classList.contains('invalid'))
//     { inputEl.classList.add('valid') }

//     else if (Number(dataLengthEl) === Number(inputEl.value.length) & inputEl.classList.contains('invalid')) {
//         inputEl.classList.replace('invalid','valid')
//     }
//     else {
//     inputEl.classList.add('invalid')
//     }
  
// }


// inputEl.addEventListener('blur', checkInputLength)
