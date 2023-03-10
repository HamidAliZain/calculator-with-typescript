import inquirer from 'inquirer';
import chalk from 'chalk';

console.log(chalk.yellow('Use these operator  (+,-, x, /) !'));

async function calculator() {
  const number1 = await inquirer.prompt({
    name: 'FirstNumber',
    type: 'number',
    message: '1st Nummber Here'
  })
  const operator  = await inquirer.prompt({
    name: 'operator',
    type: 'input',
    message: 'operator  Nummber Here'
  })
  const number2 = await inquirer.prompt({
    name: 'SecondNumber',
    type: 'number',
    message: 'operator  Nummber Here'
  })
  if (operator.operator  == '+') {
    console.log(chalk.blue(number1.FirstNumber + number2.SecondNumber));
  } else if (operator .operator  == '-') {
    console.log(chalk.blue(number1.FirstNumber - number2.SecondNumber));
  }
  else if (operator .operator  == 'x') {
    console.log(chalk.blue(number1.FirstNumber * number2.SecondNumber));
  } else if (operator .operator  == '/') {
    console.log(chalk.blue(number1.FirstNumber / number2.SecondNumber));
  } else {
    console.log(chalk.bgRed('please enter a correct operator'));

  }
}
console.log(calculator());
