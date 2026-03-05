const prompt = require("prompt-sync")()
const name = prompt('What is your name? ');
console.log("Hello", name, "Welcome to the game!");

const shouldWePlay = prompt('Do you want to play? ').toLowerCase();

const condition = shouldWePlay === "yes" || shouldWePlay === 'y';
if (condition) {
    console.log('Lets Play!');
    play();
} else if (shouldWePlay === "no" || shouldWePlay === 'n') {
    console.log('Ok. Bye!');
} else {
    console.log('Invalid Input...');
}

function play() {
    const leftOrRight = prompt('You enter a maze, do you want to go left or right? ');
    if (leftOrRight.toLowerCase() === 'left' || leftOrRight.toLowerCase() ==='l') {
        console.log('You go left and see a bridge...');
        const cross = prompt('Do you want to cross? ');
        if (cross.toLowerCase() === 'yes' || cross.toLowerCase() ==='y') {
            console.log('You cross the bridge, but the bridge was weak, and you fell in the river...');
        } else {
            console.log('Good choice... You win!');
        }
    } else {
        console.log('You go right and fall off a cliff...');
    }
}