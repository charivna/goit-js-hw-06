const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const gallery = document.querySelector('.gallery')

const markupEl = images.map(image =>
  `<li class = 'item'> 
  <img src ="${image.url}",alt = "${image.alt}", class = 'animals',/>
  </li>`
).join('')

gallery.insertAdjacentHTML('beforeend', markupEl)


// gallery.append(...markupEl)

// const gallery = document.querySelector('.gallery')

// const markupEl = images.map(image => {
//   const listEl = document.createElement('li')
//   listEl.classList.add('item')
// listEl.insertAdjacentHTML('afterbegin',`<img src ="${image.url}",alt = "${image.alt}", class = 'animals',/>`)


//   console.log(listEl);
//   return listEl
// })

// gallery.append(...markupEl)

