/*
5. operate function - takes numbers and operators and is
    called when = is pressed
8. keyboard support
*/

//document.addEventListener('keydown', (e) => console.log(e.key))

const nums = document.querySelectorAll('.number');
const display = document.querySelector('p');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const dot = document.querySelector('#dot');

const divider = document.querySelector('#divide');
const mult = document.querySelector('#mult');
const min = document.querySelector('#min');
const plus = document.querySelector('#plus');
const equal = document.querySelector('#equal');

calculator();

//all the buttons
function calculator() {
  let array = [];
  let a;
  let copy = 0;
  let sign = '';
  nums.forEach((num) => {
    num.addEventListener('click', (e) => {
      array.push(`${e.target.value}`);
      display.textContent = array.join('');
      a = parseFloat(array.join(''));
      console.log(a)
      console.log(array);
      if (array.length >= 18) {
        for (let num of nums) {
          num.disabled = true;
        }
      }
    })
  })
  dot.addEventListener('click', () => {
    if (!array.includes('.') && array.length !== 0) {
      array.push('.');
      display.textContent += '.';
    } else {
      dot.disabled = true;
    }
  })
  clear.addEventListener('click', () => {
    array = [];
    display.textContent = "0";
    dot.disabled = false;
    for (let num of nums) {
      num.disabled = false;
    }
  });
  del.addEventListener('click', () => {
    array.pop();
    a = parseFloat(array.join(''));
    console.log(a);
    if (array.length === 0) {
      display.textContent = "0";
    } else {
      display.textContent = array.join('');
    }
    dot.disabled = false;
  })
  plus.addEventListener('click', () => {
    sign = '+';
    copy = parseFloat(array.slice().join(''));
    array = [];
    console.log(copy);
  })
  min.addEventListener('click', () => {
    if (array.length === 0) {
      array.push('-');
      console.log(array)
    } else {
      sign = '-';
      copy = parseFloat(array.slice().join(''))
      array = [];
    }
  })
  mult.addEventListener('click', () => {
    sign = 'x';
    copy = parseFloat(array.slice().join(''));
    array = [];
  })
  divider.addEventListener('click', () => {
    sign = '/';
    copy = parseFloat(array.slice().join('')); 
    array = [];
  })
  equal.addEventListener('click', () => {
    if (sign === '+') {
      result = copy + a;
      display.textContent = `${parseFloat(result.toFixed(5))}` 
    } else if (sign === '-') {
      result = copy - a;
      display.textContent = `${parseFloat(result.toFixed(5))}`
    } else if (sign === 'x') {
      result = copy * a;
      display.textContent = `${parseFloat(result.toFixed(5))}`
    } else if (sign === '/' && a === 0) {
      display.textContent = 'error'
      array = [];
    } else if (sign === '/' && a !== 0) {
      result = copy / a;
      display.textContent = `${parseFloat(result.toFixed(5))}`
    } array = [];
      array.push(...result.toString().split(''));
    console.log(array);
  })
}