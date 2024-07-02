"use strict"

//  - Inicialización de variables

let humanScore = 0;
let computerScore = 0;
let gameFinished = false;

//  - Creación y selección de elementos

const list = document.querySelector("ul");

const log = document.querySelector("#aviso");
const scores = document.querySelector("#puntaje");
const game = document.querySelector("#partida");
const result = document.querySelector("#resultados");

const listElemRock = document.createElement("li");
const listElemPaper = document.createElement("li");
const listElemScissors = document.createElement("li");

// Botones

const rockBtn = document.createElement("button");
const paperBtn = document.createElement("button");
const scissorsBtn = document.createElement("button");

rockBtn.id = "rock";
rockBtn.textContent = "Rock";

paperBtn.id = "paper";
paperBtn.textContent = "Paper";

scissorsBtn.id = "scissors";
scissorsBtn.textContent = "Scissors";

// Anexarlos a la lista

listElemRock.appendChild(rockBtn);
listElemPaper.appendChild(paperBtn);
listElemScissors.appendChild(scissorsBtn);

list.appendChild(listElemRock);
list.appendChild(listElemPaper);
list.appendChild(listElemScissors);

//  - Lógica del programa

list.addEventListener("click", (event) => {
    let target = event.target;

    // Aquí aprovechamos el "event bubbling" para delegar eventos a un solo event handler
    if (target.id != "") {
        if (!gameFinished) {
            if (target.id === "rock" || target.id === "paper" || target.id === "scissors") {
                playRound(getComputerChoice(), target.id);
                showScore();
                compareScores();

                if (gameFinished)
                    showResult();
            }   else {
                log.textContent = "That's not a correct option";
            }
        }   else {
            log.textContent = "Game has already finished!";
        }
    }
});

//  - Funciones

function getComputerChoice() {
    let numeroAlAzar = Math.floor(Math.random() * 3 + 1);
    let decision;
    
    switch (numeroAlAzar) {
        case 1:
            decision = "rock";
            break;

        case 2:
            decision = "paper";
            break;
    
        default:
            decision = "scissors";
            break;
    }

    return decision;
}

function playRound(computerChoice, humanChoice) {
    log.textContent = `The computer used: ${computerChoice} \r\nThe player used: ${humanChoice}`;

    switch (computerChoice) {
        case "rock":
            if (humanChoice === "paper") {
                game.textContent = "Paper slips under rock";
                humanScore++;
            } else if (humanChoice === "scissors") {
                game.textContent = "Rock smashes scissors";
                computerScore++;
            } else {
                game.textContent = "Draw";
            }
            break;

        case "paper":
            if (humanChoice === "rock") {
                game.textContent = "Paper slips under rock";
                computerScore++;
            } else if (humanChoice === "scissors") {
                game.textContent = "Scissors cut paper";
                humanScore++;
            } else {
                game.textContent = "Draw";
            }
            break;

        case "scissors":
            if (humanChoice === "rock") {
                game.textContent = "Rock smashes scissors";
                humanScore++;
            } else if (humanChoice === "paper") {
                game.textContent = "Scissors cut paper";
                computerScore++;
            } else {
                game.textContent = "Draw";
            }
            break;

        default:
            log.textContent = "That's not a valid option";
            break;
    }
}

function showScore() {
    scores.textContent = `(${humanScore} - ${computerScore})`;
}

function compareScores() {
    if (!gameFinished) {
        if (humanScore >= 5 || computerScore >= 5)
            gameFinished = true;
    }
}

function showResult() {
    // Revisar el puntaje
    if (humanScore > computerScore) {
        result.textContent = "User wins!";
    } else if (computerScore > humanScore) {
        result.textContent = "Computer wins!";
    } else {
        result.textContent = "Draw!";
    }

    showScore();
}