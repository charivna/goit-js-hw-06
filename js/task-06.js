const inputEl = document.querySelector('#validation-input')
   const dataLengthEl = inputEl.getAttribute('data-length')


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


inputEl.addEventListener('blur', checkInputLength)

