import inquirer from "inquirer";

console.log("welcome to my quiz game:")
console.log("you are required to gain maximum 4 points for the window.")

let points = 0

let question1 = await inquirer.prompt([
    {
       name : "one",
       message: "typescript is a subset of?",
       type: "list",
       choices: ["python", "c++", "java", "javascript"]
    }
])

if (question1.one == "javascript") {
    console.log("your answer is correct")
    points++
} else {
    console.log("incorrect answer")
}

let question2 = await inquirer.prompt([
    {
       name : "two",
       message: "who is the founder of Microsoft?",
       type: "list",
       choices: ["elon musk", "mark", "billgates", "ahmed"]
    }
])

if (question2.two == "billgates") {
    console.log("your answer is correct")
    points++
} else {
    console.log("incorrect answer")
}

let question3 = await inquirer.prompt([
    {
       name : "three",
       message: "what is the capital of Pakistan?",
       type: "list",
       choices: ["islamabad", "karachi", "lahore", "hyderabad"]
    }
])

if (question3.three == "islamabad") {
    console.log("your answer is correct")
    points++
} else {
    console.log("incorrect answer")
}

let question4 = await inquirer.prompt([
    {
       name : "four",
       message: "who is the current governor of sindh?",
       type: "list",
       choices: ["ali", "bilawal", "kamran tessori", "shayan"]
    }
])

if (question4.four == "kamran tessori") {
    console.log("your answer is correct")
    points++
} else {
    console.log("incorrect answer")
}

let question5 = await inquirer.prompt([
    {
       name : "five",
       message: "what is the mother tingue of pakistan?",
       type: "list",
       choices: ["sindhi", "arabic", "english", "urdu"]
    }
])

if (question5.five == "urdu") {
    console.log("your answer is correct")
    points++
} else {
    console.log("incorrect answer")
}

if (points >= 4){
    console.log("congratulations!")
    console.log('your points: ${points}')
} else {
    console.log("you lost! try again")
    console.log('your points: ${points}')
}