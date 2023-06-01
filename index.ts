#!usr/bin/env node 

import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

let sleep = ()=>{
    return new Promise((resolve) =>{
        setTimeout(resolve, 2000);
    }); 
}

async function Welcome() {
    let chalkWcMsg = chalkAnimation.rainbow('Lets get start Calculations!');
    

    await sleep();
    chalkWcMsg.stop(); 



    console.log(
        `         _____________________
        |  _________________  |
        | | JO           0. | |
        | |_________________| |
        |  ___ ___ ___   ___  |
        | | 7 | 8 | 9 | | + | |
        | |___|___|___| |___| |
        | | 4 | 5 | 6 | | - | |
        | |___|___|___| |___| |
        | | 1 | 2 | 3 | | x | |
        | |___|___|___| |___| |
        | | . | 0 | = | | / | |
        | |___|___|___| |___| |
        |_____________________|`
    );
}

async function DevTitle() {
    let devTitle = chalkAnimation.glitch('Developed and Maintained by Zabair Ghoss.');
    
    await sleep();
    devTitle.stop(); 
    
}

await Welcome();
await DevTitle();

async function askQuetions() {
    await inquirer
  .prompt([
    {
        type: 'list',
        name: 'operation',
        message: 'Please! choose which operation you want to perform? \n',
        choices: ['Addition', 'Subtraction', 'Multiplication', 'Division'],
    },
    {
        type: 'number',
        name: 'operand1',
        message: 'Please enter first number: ',
        validate: (input: number) => {
            if (isNaN(input) || input < 0) {
              return 'Please enter a valid number.';
            }
            return true;
          },
    },
    {
        type: 'number',
        name: 'operand2',
        message: 'Please enter second number: ',
        validate: (input: number) => {
            if (isNaN(input) || input < 0) {
              return 'Please enter a valid number.';
            }
            return true;
          },
    }
  ])
  .then((answers) => {

    let result = null;
    
    if(answers.operation == 'Addition'){
         result = answers.operand1 + answers.operand2;
    } else if(answers.operation === 'Subtraction'){
        result = answers.operand1 - answers.operand2;
    } else if(answers.operation === 'Multiplication'){
        result = answers.operand1 * answers.operand2;
    } else{
        result = answers.operand1 / answers.operand2;
    }

    console.log(chalk.green(`The ${answers.operation} of ${answers.operand1} & ${answers.operand2} is ${result}.` ));

  })
}

async function ShowMenuAgain() {

    do{
        await askQuetions();
        var restartMenu = await inquirer
        .prompt([
          {
              type: 'input',
              name: 'restart',
              message: 'do you want to continue calculations? Press y(for Yes) or n(for No):',
              },
        ])
    } while (restartMenu.restart == 'Y' || restartMenu.restart == 'y' || restartMenu.restart == 'yes' || restartMenu.restart == 'Yes' || restartMenu.restart == 'YES');
}

ShowMenuAgain();

