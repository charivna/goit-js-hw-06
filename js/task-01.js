

const categoriesEl = document.querySelectorAll("li.item")
console.log("Number of categories:", categoriesEl.length);

categoriesEl.forEach (item => console.log ("Category:",item.children[0].textContent, "Elements:", item.children[1].children.length))

