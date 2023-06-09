const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const vegetableEl = document.querySelector('#ingredients')

const elements = ingredients.map(ingredient => {
  
  const ingredientEl = document.createElement('li');
  ingredientEl.classList.add('item');
  ingredientEl.textContent = ingredient;

  return ingredientEl
}
)
vegetableEl.append(...elements)
console.log(elements);

// for (let i = 0; i < ingredients.length; i += 1){
  
//   const ingredientEl = document.createElement('li');
//   ingredientEl.classList.add('item');
//   ingredientEl.textContent = ingredients[i];
//   console.log(ingredients[i]);
//   elements.push(ingredientEl)
// }
// vegetableEl.append(...elements)
// console.log(vegetableEl);


