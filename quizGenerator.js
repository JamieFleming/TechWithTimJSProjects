const prompt = require("prompt-sync")();
const fs = require("fs");

// Load quesitons from JSON file, if fails, print error
function loadQuestions() {
    try {
        const data = fs.readFileSync("questions.json", "utf8")
        const questions = JSON.parse(data).questions; // Takes data and converts to JS Obj
        return questions
    }
    catch (e) {
        console.log("Error occurred loading file", e);
        return [];
    }
}

// Randomise questions
function getRandomQuestions(questions, numQuestions) {
    // If asking for too many questions, default to all questions available
    if (numQuestions > questions.length) {
        numQuestions = questions.length;
    }

    // Shuffle the array
    const shuffled = questions.sort(() => {
        return 0.5 - Math.random(); // Return randomly a +ve or -ve number
    });
    return shuffled.slice(0, numQuestions); // Give portion of array from 0 to numQuestions (not including)
}

function askQuestion(question) {
    console.log(question.question);
    for (let i = 0; i < question.options.length; i++) {
        const option = question.options[i];
        console.log(`${i + 1}. ${option}`);
    }
    const choice = parseInt(prompt("Enter a number: "));
    if (isNaN(choice) || choice < 1 || choice > question.options.length) {
        console.log("Invalid. Incorrect Choice");
        return false;
    }
    const choiceVal = question.options[choice - 1];
    return choiceVal === question.answer;
}

const numQuestions = parseInt(prompt("Enter the number of questions: "));
const questions = loadQuestions();
const randomQuestions = getRandomQuestions(questions, numQuestions);

let correct = 0;
const startTime = Date.now();

for (let question of randomQuestions) {
    const isCorrect = askQuestion(question);
    console.log();
    if (isCorrect) correct++;
}

const totalTime = Date.now() - startTime;
console.log("Correct:", correct);
console.log("Time:", Math.round(totalTime / 1000) + "s");
console.log("Score:", Math.round((correct/numQuestions) * 100) + "%");


/*
    Sort usually accepts to parameters sort(a, b)
    it then compares values in array, and stores them as a and b
    Math.random() = number between 0 and 1
*/