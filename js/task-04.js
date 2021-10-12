let counter = 0;

const value = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

const increment = () => {
  counter += 1;
  value.textContent = counter;
};

const decrement = () => {
  counter -= 1;
  value.textContent = counter;
};

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);