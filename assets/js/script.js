// Wait for the DOM to finish loading before running the game 

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    // This returns buttons as an array 
    for (let button of buttons) {
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit") {
                checkAnswer();
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }
    document.getElementById('answer-box').addEventListener("keydown", function(event){
        if (event.key === "Enter"){
            checkAnswer();
        }
    });
    runGame("addition");
});

// The main game loop, called when the script is 
// first loaded and after the users answer has been processed 
function runGame(gameType) {

    document.getElementById('answer-box').value = "";
    document.getElementById('answer-box').focus();

    let num1 = Math.floor(Math.random() *25) + 1
    let num2 = Math.floor(Math.random() *25) + 1

    if (gameType == "addition") {
        displayAdditionQuestion(num1,num2);
    } else if (gameType === "multiply"){
        displayMultiplyQuestion(num1, num2)
    } else if (gameType === "subtract"){
        displaySubtractionQuestion(num1, num2)
    } else if (gameType === "division"){
        displayDivisionQuestion(num1, num2)
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type ${gameType}. Aborting`;
    }
}

function checkAnswer() {
    // Check the answer against the first element in the returned calculateCorrectAnswer array 
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();

    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert("Hey! You got it right!")
        incrementScore();
    } else {
        alert(`Awww.... You answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`)
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1])
    
}

function calculateCorrectAnswer() {
    // Gets the operands and the operator directly from the fom and returns correct answer 
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else if (operator === "x"){
        return [operand1 * operand2, "multiply"];
    } else if (operator === "-") {
        return [operand1 - operand2, "subtract"];
    } else if (operator === "/") {
        return [operand1 - operand2, "division"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }
}

function incrementScore() {
    // Gets current score from the DOM and increments by 1 
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById("score").innerText = ++oldScore;
}

function incrementWrongAnswer() {
    // Gets current score from the DOM and decrements by 1
    let oldScore = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";
}

function displaySubtractionQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "-";

    if (operand1 < operand2) {
        displaySubtractionQuestion(operand2, operand1);
    }
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "x";
}

function displayDivisionQuestion(operand1, operand2) {

    operand1 = operand1 * operand2;

    document.getElementById("operand1").textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "/";
    if (operand1 < operand2) {
        displayDivisionQuestion(operand2, operand1);
    }
}