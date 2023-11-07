import inquirer from "inquirer";
const systemGeneratedNo = Math.floor(Math.random() * 10);
console.log(systemGeneratedNo);
const answers = await inquirer.prompt([
    {
        type: "number",
        name: "userGuess",
        message: "Write Your Guess between 1 to 10:",
    },
]);
// console.log(answers.userGuess)
const { userGuess } = answers;
console.log(userGuess, "userGuess", systemGeneratedNo, 'Sys');
if (userGuess === systemGeneratedNo) {
    console.log("Yes Its a Correct Answer");
}
else {
    console.log("Please Try Again & Better Luck Next Time");
}
