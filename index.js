#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\twellcome to AmeerHamza cli-number-guessing-game\n");
const randomNumber = Math.floor(Math.random() * 5 + 1);
const answer = await inquirer.prompt([
    {
        messaage: "enter your guess number(number limit 1 to 5):",
        name: "userGuessedNumer",
        type: "number",
    },
]);
if (answer.userGuessedNumer === randomNumber) {
    console.log("congratulation! you guessed a correct number");
}
else {
    console.log("sorry, you gussed a wrong number");
}
;
