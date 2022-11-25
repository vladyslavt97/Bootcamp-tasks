const chalk = require("chalk");

// console.log(chalk.red("Hello world!"));
const readline = require("readline");
// we need to create the command line interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// try out the interface
// rl.question("how are you?", function (answer) {
//     console.log("this is your answer: ", answer);
// });
// function changeColor(colorVar){
//     if (colorVar === 'blue'){
//         chalk.blue(story);
//     } else if (colorVar === 'green') {
//         chalk.green(story);
//     }
// }
let color;
rl.question('choose a color? [green|blue] ', (answer) => {
    color = answer;
    askQuestion(currentQuestion, currentAnswers);
});

const story = {
    q: "Welcome to The Land Of Wizards! Would you like to play? [yes|no] ",
    answers: {
        yes: {
            q: "You are alone in a dark forest and facing a fork in the road. Which direction do you turn? [left|right] ",
            answers: {
                left: {
                    q: "There's a scary wizard! He asks you a tough question. What's 1+1? [2|3] ",
                    answers: {
                        2: "congratulations!",
                    },
                },
                right: "This was not the right choice. Goodbye! ",
            },
        },
        no: "Alright then. Enjoy your day!",
    },
};

// get the first answer and question
let currentQuestion = story.q;
let currentAnswers = story.answers;

function askQuestion(question, answers) {
    if (color === 'blue'){
        question = chalk.blue(question);
    }else if(color === 'green'){
        question = chalk.green(question);
    }
    
    rl.question(question, function (input) {
        if (!answers[input]) {
            askQuestion(question, answers);
            // rl.close();
            return;
        }
        if (input === "2") {
            console.log(answers[input]);
            rl.close();
            return;
        }
        if (input === "no") {
            console.log(answers[input]);
            rl.close();
            return;
        }
        if (input === "right") {
            console.log(answers[input]);
            rl.close();
            return;
        }
        // here we call the same function again with a new question and
        // new answers
        currentQuestion = answers[input].q;
        currentAnswers = answers[input].answers;
        askQuestion(currentQuestion, currentAnswers);

        // rl.close();
    });
}

