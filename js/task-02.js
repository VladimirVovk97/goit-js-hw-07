const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];


const ingredientsList = document.querySelector('#ingredients');

const ingredientsArray = [];

ingredients.forEach(element => {
  const ingredient = document.createElement('li');
  ingredient.textContent = element;
  ingredientsArray.push(ingredient);
});

ingredientsList.append(...ingredientsArray);