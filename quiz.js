"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
console.log("welcome to my quiz game:");
console.log("you are required to gain maximum 4 points for the window.");
var points = 0;
var question1 = await inquirer_1.default.prompt([
    {
        name: "one",
        message: "typescript is a subset of?",
        type: "list",
        choices: ["python", "c++", "java", "javascript"]
    }
]);
if (question1.one == "javascript") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
var question2 = await inquirer_1.default.prompt([
    {
        name: "two",
        message: "who is the founder of Microsoft?",
        type: "list",
        choices: ["elon musk", "mark", "billgates", "ahmed"]
    }
]);
if (question2.two == "billgates") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
var question3 = await inquirer_1.default.prompt([
    {
        name: "three",
        message: "what is the capital of Pakistan?",
        type: "list",
        choices: ["islamabad", "karachi", "lahore", "hyderabad"]
    }
]);
if (question3.three == "islamabad") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
var question4 = await inquirer_1.default.prompt([
    {
        name: "four",
        message: "who is the current governor of sindh?",
        type: "list",
        choices: ["ali", "bilawal", "kamran tessori", "shayan"]
    }
]);
if (question4.four == "kamran tessori") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
var question5 = await inquirer_1.default.prompt([
    {
        name: "five",
        message: "what is the mother tingue of pakistan?",
        type: "list",
        choices: ["sindhi", "arabic", "english", "urdu"]
    }
]);
if (question5.five == "urdu") {
    console.log("your answer is correct");
    points++;
}
else {
    console.log("incorrect answer");
}
if (points >= 4) {
    console.log("congratulations!");
    console.log('your points: ${points}');
}
else {
    console.log("you lost! try again");
    console.log('your points: ${points}');
}
