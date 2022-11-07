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

console.log(add(3,4));
console.log(subtract(3,4));
console.log(multiply(3,4));
console.log(divide(3,0));