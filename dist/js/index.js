"use strict";
const addButton = document.querySelector('.add-button');
const subtractButton = document.querySelector('.subtract-button');
const firstInput = document.querySelector('#first-input'); //  eller as HTML..., då behövs inte !
const secondInput = document.querySelector('#second-input'); //  eller as HTML..., då behövs inte !
const screens = document.querySelector('.screens');
// why screen export not possible here!?
function addNumbers(a, b) {
    let sum = a + b;
    let result = sum.toFixed(2);
    screens.innerHTML = result;
    //screens.innerHTML = String(a + b);   // eller .toString()  
}
function subtractNumbers(a, b) {
    let sum = a - b;
    let result = sum.toFixed(2);
    screens.innerHTML = result;
    //screens.innerHTML = String(a - b);
}
addButton.addEventListener('click', () => performOperation(addNumbers));
subtractButton.addEventListener('click', () => performOperation(subtractNumbers));
function performOperation(operation) {
    const firstValue = parseFloat(firstInput.value || '0'); // perform a non-null assertion (!);
    const secondValue = parseFloat(secondInput.value || '0'); // perform a non-null assertion (!);
    if (!isNaN(firstValue) && !isNaN(secondValue)) {
        operation(firstValue, secondValue);
    }
    else {
        console.error('Invalid input');
    }
}
