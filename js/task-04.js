const addListenerBtn = document.querySelector('button[data-action ="increment"]')
const removeListenerBtn = document.querySelector('button[data-action ="decrement"]')
let value = document.querySelector('#value')
console.log(value.textContent);
    console.log(value);
console.log(addListenerBtn);
console.log(removeListenerBtn);

let counterValue = 0;

addListenerBtn.addEventListener('click', () =>
{ 
    counterValue +=1
    value.textContent = counterValue 
})

removeListenerBtn.addEventListener('click', () =>
{
    counterValue -= 1;
    value.textContent = counterValue
})

