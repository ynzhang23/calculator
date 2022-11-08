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

let inputOne;
let inputTwo;

// Adding event listener to number buttons
let numberButtons = document.querySelectorAll('.numbers');
let display = document.querySelector('.display');

for (i of numberButtons) {
    i.addEventListener('click', function() {
        display.textContent += this.innerHTML;
        console.log(display.textContent);
    })   
}

// Adding event listener to function buttons
let functionButtons = document.querySelectorAll('.functions');

for (i of functionButtons) {
    i.addEventListener('click', function() {
        this.classList.toggle('triggered');
        if (inputOne === undefined) {
            inputOne = display.textContent;
            display.textContent = '';
        } else {
            inputTwo = display.textContent;
        }
    }) 
}