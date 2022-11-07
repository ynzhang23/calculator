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