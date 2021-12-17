// Wait for the DOM to finish loading before running the game 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    // This returns buttons as an array 
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                alert("you clicked submit!")
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        })
    }
});

// The main game loop, called when the script is 
// first loaded and after the users answer has been processed 
function runGame() {
    let num1 = Math.floor(Math.random() *25) + 1
    let num2 = Math.floor(Math.random() *25) + 1

}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractionQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}