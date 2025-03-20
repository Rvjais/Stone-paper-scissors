const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerMoveDisplay = document.getElementById("player");
const computerMoveDisplay = document.getElementById("computer");
const resultDisplay = document.querySelector(".result");

const determineResult = (playerMove) => {
    let computerMove = "";
    const randomNumber = Math.random();
    if (randomNumber >= 0 && randomNumber < 0.3) {
        computerMove = "scissors";
        computerMoveDisplay.src = "Scissors.png";
    } else if (randomNumber >= 0.3 && randomNumber <= 0.6) {
        computerMove = "paper";
        computerMoveDisplay.src = "Paper.png";
    } else {
        computerMove = "rock";
        computerMoveDisplay.src = "Stone.png";
    }

    playerMoveDisplay.src = playerMove === "rock" ? "Stone.png" : playerMove === "paper" ? "Paper.png" : "Scissors.png";

    if (computerMove === playerMove) {
        resultDisplay.textContent = "Result: Draw";
    } else if (
        (computerMove === "rock" && playerMove === "scissors") ||
        (computerMove === "scissors" && playerMove === "paper") ||
        (computerMove === "paper" && playerMove === "rock")
    ) {
        resultDisplay.textContent = "Result: You lose";
    } else {
        resultDisplay.textContent = "Result: You won!";
    }
};

rock.addEventListener("click", () => determineResult("rock"));
paper.addEventListener("click", () => determineResult("paper"));
scissors.addEventListener("click", () => determineResult("scissors"));