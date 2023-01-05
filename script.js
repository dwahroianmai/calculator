const nums = document.querySelectorAll('.number');
const display = document.querySelector('p');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');

let array;

nums.forEach((num) => {
  num.addEventListener('click', (e) => {
    display.textContent += `${e.target.value}`;
    array = display.textContent.split('');
    console.log(array);
    })
  })

clear.addEventListener('click', () => display.textContent = "");
del.addEventListener('click', () => {
  array.pop();
  console.log(array);
  display.textContent = array.join('');
})