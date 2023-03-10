"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
const chalk_1 = __importDefault(require("chalk"));
console.log(chalk_1.default.yellow('Use these operator  (+,-, x, /) !'));
async function calculator() {
    const number1 = await inquirer_1.default.prompt({
        name: 'FirstNumber',
        type: 'number',
        message: '1st Nummber Here'
    });
    const operator = await inquirer_1.default.prompt({
        name: 'operator',
        type: 'input',
        message: 'operator  Nummber Here'
    });
    const number2 = await inquirer_1.default.prompt({
        name: 'SecondNumber',
        type: 'number',
        message: 'operator  Nummber Here'
    });
    if (operator.operator == '+') {
        console.log(chalk_1.default.blue(number1.FirstNumber + number2.SecondNumber));
    }
    else if (operator.operator == '-') {
        console.log(chalk_1.default.blue(number1.FirstNumber - number2.SecondNumber));
    }
    else if (operator.operator == 'x') {
        console.log(chalk_1.default.blue(number1.FirstNumber * number2.SecondNumber));
    }
    else if (operator.operator == '/') {
        console.log(chalk_1.default.blue(number1.FirstNumber / number2.SecondNumber));
    }
    else {
        console.log(chalk_1.default.bgRed('please enter a correct operator'));
    }
}
console.log(calculator());
