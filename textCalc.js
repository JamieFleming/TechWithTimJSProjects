const prompt = require("prompt-sync")();

function getNumber(numberString) {
    while (true) {
        const number = parseFloat(prompt("Enter number " + numberString + ": "));
        if (isNaN(number)) {
            console.log('Invalid Input!');
        } else {
            return number; // Acts as break keyword
        }
    }
}

const num1 = getNumber("one");
const operator = prompt("Enter a sign: ");
const num2 = getNumber("two");

let result;
let valid = true;

switch(operator) {
    case "+":
        result = num1 + num2
        break
    case "-":
        result = num1 - num2;
        break
    case "*":
        result = num1 * num2;
        break
    case "/":
        if (num2 === 0) {
            valid = false;
            console.log("Zero Division Error!");
        }
        result = num1 / num2;
        break
    default:
        console.log('Invalid!');
        valid = false;
        break;
}

if (valid) console.log(num1, operator, num2, '=', result);

