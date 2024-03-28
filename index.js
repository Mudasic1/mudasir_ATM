#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 20000;
let myPin = 2244;
let pinAns = await inquirer.prompt([{
        name: "pin",
        message: "Enter your PIN",
        type: "number"
    }]);
if (pinAns.pin === myPin) {
    let operation = await inquirer.prompt([{
            name: "operation",
            message: "Enter your option",
            type: "list",
            choices: ["withdraw", "check balance"]
        }]);
    if (operation.operation === "withdraw") {
        let amount = await inquirer.prompt([{
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }]);
        myBalance -= amount.amount;
        console.log("Your remaining balance is " + myBalance);
    }
    else if (operation.operation === "check balance") {
        console.log("Your currently balance is " + myBalance);
    }
}
else {
    console.log("Incorrect PIN");
}
