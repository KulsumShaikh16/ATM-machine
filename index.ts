#!/usr/bin/env node

import inquirer from "inquirer"

import chalk from "chalk";

let balance: number = 100000; //Dollar
let pin: number = 1616;

console.log(`Welcome to Code with Kulsum ATM machine`);

let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your pin",
            type: "number",
        }
    ]
);

if (pinAnswer.pin === pin) {
    console.log(chalk.bold.green("Correct pin code!!!"),
   
    );

    let opr = await inquirer.prompt([
        
            {
                name: "operations",
                message: "Select one option!!!",
                type: "list",
                choices: ["withdraw", "check balance", "Fastcash"]
            }
        ]
    )
    if (opr.operations === "withdraw") {
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter the amount you want to Withdraw",
                    type: "list",
                    choices: ["1000", "2000", "5000", "10000"],
                }
            ]
        );
        if (amountAns.amount <= "balance") {
            balance -= amountAns.amount;
            console.log(chalk.bold.green(`${amountAns.amount}withdraw successfully,`));
            
            console.log(chalk.bold.green(`Your Remaining Balance is: ${balance}`))
        }
        else {
            console.log("Insufficient Balance")
        }
    }
    
    else if (opr.operations === "check balance") {
    
        console.log(chalk.bold.green(`Your Remaining Account Balance is: ${balance}`))
    }
    if (opr.operations === "Fastcash") {
        let Fastcash = await inquirer.prompt(
            [
                {
                    name: "fast_opt",
                    message: "How much money you want to withdraw",
                    type: "list",
                    choices: ["1000", "2000", "5000", "10000"],
                }
            ]
        );
        if (Fastcash.fast_opt === "1000") {
            balance -= Fastcash.fast_opt;
            console.log(chalk.bold.green(`Your Remaining Account balance is ${balance}`));
        }
        if (Fastcash.fast_opt === "2000") {
            balance -= Fastcash.fast_opt;
            console.log(chalk.bold.green(`Your Remaining Account balance is ${balance}`));
        }
      
        if (Fastcash.fast_opt === "5000") {
            balance -= Fastcash.fast_opt;
            console.log(chalk.bold.green(`Your Remaining Account balance is ${balance}`));
        }
        if (Fastcash.fast_opt === "10000") {
            balance -= Fastcash.fast_opt;
            console.log(chalk.bold.green(`Your Remaining Account balance is ${balance}`));
        }
    }
}

else {
    console.log(chalk.bold.red("invalid pin code,Please try Again"));
}
