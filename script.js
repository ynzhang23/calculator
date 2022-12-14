function add(inputOne, inputTwo) {
    return (+inputOne) + (+inputTwo);
}

function subtract(inputOne, inputTwo) {
    return (+inputOne) - (+inputTwo);
}

function multiply(inputOne, inputTwo) {
    return (+inputOne) * (+inputTwo);
}

function divide(inputOne, inputTwo) {
    if (inputTwo == 0) {
        return undefined;
    }
    return (+inputOne) / (+inputTwo);
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
let activeOperator;

for (i of functionButtons) {
    i.addEventListener('click', function() {
        this.classList.toggle('active');
        activeOperator = document.querySelector('.active');
        this.classList.toggle('active');
        if (inputOne === undefined) {
            inputOne = display.textContent;
            display.textContent = '';
        } 
    }) 
}

console.log(functionButtons);

// Registering the operator button pressed
let equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', function() {
    inputTwo = display.textContent;
    switch (activeOperator.textContent) {
        case "+":
            display.textContent = add(inputOne, inputTwo);
            inputOne = undefined;
            inputTwo = undefined;
            //not working
            break;
        case "-":
            display.textContent = subtract(inputOne, inputTwo);
            inputOne = undefined;
            inputTwo = undefined;
            break;
        case "*":
            display.textContent = multiply(inputOne, inputTwo);
            inputOne = undefined;
            inputTwo = undefined;
            break;
        case "/":
            if (inputTwo == 0) {
                display.textContent = "What the fuck do you think you are doing, son."
                break;
            }
            display.textContent = divide(inputOne, inputTwo);
            inputOne = undefined;
            inputTwo = undefined;
            break;
    }
});

// Create clear button
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', function() {
    display.textContent = undefined;
    inputOne = undefined;
    inputTwo = undefined;
})