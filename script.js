/*
1. DONE numbers limit
2. DONE clear button sets display to '0' and clears the array
3. DONE delete button deletes one number
4. DONE '.' must be used only once and not
    at the beginning
    DONE after clear
    DONE after delete

-------
5. operate function - takes numbers and operators and is
    called when = is pressed
6. round numbers with long decimals
7. mistake message if = is pressed and only one number 
    entered or division by 0
8. keyboard support
*/

const nums = document.querySelectorAll('.number');
const display = document.querySelector('p');
const clear = document.querySelector('#clear');
const del = document.querySelector('#delete');
const dot = document.querySelector('#dot');

const div = document.querySelector('#divide');
const mult = document.querySelector('#mult');
const min = document.querySelector('#min');
const plus = document.querySelector('#plus');
const equal = document.querySelector('#equal');

calculator();

//all the buttons
function calculator() {
  let array = [];
  let a = 0;
  let copy = 0;
  let sign = '';
  nums.forEach((num) => {
    num.addEventListener('click', (e) => {
      array.push(`${e.target.value}`);
      display.textContent = array.join('');
      if (array.includes('.')) {
        a = parseFloat(array.join(''));
      } else {
        a = parseInt(array.join(''));
      }
      console.log(a)
      console.log(array);
      if (array.length === 18) {
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
  });
  del.addEventListener('click', () => {
    array.pop();
    if (array.includes('.')) {
      a = parseFloat(array.join(''));
    } else {
      a = parseInt(array.join(''));
    }
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
    if (array.includes('.')) {
      copy = parseFloat(array.slice().join(''))
    } else {
      copy = parseInt(array.slice().join(''));
    } 
    array = [];
    console.log(copy);
  })
  min.addEventListener('click', () => {
    
  })
  equal.addEventListener('click', () => {
    if (sign === '+') {
      display.textContent = `${copy + a}`  
    } else if (sign === '-') {
      display.textContent = `${copy - a}`
    }
  })
}

//press + 
// save array content
//wait for input
// add numbers