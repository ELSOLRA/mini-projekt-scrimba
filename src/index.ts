const addButton = document.querySelector('.add-button') as HTMLButtonElement
const subtractButton = document.querySelector('.subtract-button') as HTMLButtonElement
const firstInput = document.querySelector<HTMLInputElement>('#first-input') //  eller as HTML..., då behövs inte !
const secondInput = document.querySelector<HTMLInputElement>('#second-input') //  eller as HTML..., då behövs inte !
const screens  = document.querySelector('.screens') as HTMLDivElement  
// why screen export not possible here!?
 
function addNumbers(a: number,b: number): void {
    let sum = a + b;
    let result = sum.toFixed(2);
    screens.innerHTML = result;
    //screens.innerHTML = String(a + b);   // eller .toString()  
 
}

function subtractNumbers(a: number, b: number): void {
    let sum = a - b;
    let result = sum.toFixed(2);
    screens.innerHTML = result;
    //screens.innerHTML = String(a - b);

}
 
addButton.addEventListener('click', () => performOperation(addNumbers));
subtractButton.addEventListener('click', () => performOperation(subtractNumbers));

function performOperation(operation: (a: number, b: number) => void): void {
    const firstValue = parseFloat(firstInput!.value || '0');    // perform a non-null assertion (!);
    const secondValue= parseFloat(secondInput!.value || '0');    // perform a non-null assertion (!);

if (!isNaN(firstValue) && !isNaN(secondValue)) {
    operation(firstValue, secondValue);
  } else {
    console.error('Invalid input')
  }
}