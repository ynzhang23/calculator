function add(inputOne, inputTwo) {
    return inputOne + inputTwo;
}

function subtract(inputOne, inputTwo) {
    return inputOne - inputTwo;
}

function multiply(inputOne, inputTwo) {
    return inputOne * inputTwo;
}

function divide(inputOne, inputTwo) {
    if (inputTwo === 0) {
        return undefined;
    }
    return inputOne / inputTwo;
}

function operate(operator, inputOne, inputTwo) {
    if(operator === "+") {
        return add(inputOne, inputTwo);
    } else if(operator === "-") {
        return subtract(inputOne, inputTwo);
    } else if(operator === "*") {
        return multiply(inputOne, inputTwo);
    } else if(operator === "/") {
        return divide(inputOne, inputTwo);
    }
}

// Adding event listener to a button
let buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

for (i of buttons) {
    i.addEventListener('click', function(){
        display.textContent += this.innerHTML;
        console.log(display.textContent);
    })   
}
// adding the string onto an array upon click


// displaying the array as a string