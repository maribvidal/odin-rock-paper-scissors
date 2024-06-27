"use strict"

//  - Lógica del programa

playGame();

//  - Funciones

function getComputerChoice() {
    let numeroAlAzar = Math.floor(Math.random() * 3 + 1);
    let decision;
    
    switch (numeroAlAzar) {
        case 1:
            decision = "piedra";
            break;

        case 2:
            decision = "papel";
            break;
    
        default:
            decision = "tijera";
            break;
    }

    return decision;
}

function getHumanChoice() {
    let decision = "";
    let inputValido = false;

    while (!inputValido) {
        decision = prompt("Elija piedra, papel o tijera", "piedra").toLowerCase();

        //Comprobar su decisión
        if (decision === "piedra" || decision === "papel" || decision === "tijera") {
            inputValido = true;
        } else {
            alert("¡Ingrese una palabra válida!");
        }
    }

    return decision;
}

function playRound(computerChoice, humanChoice) {
    alert(`La computadora sacó: ${computerChoice}
        El jugador sacó: ${humanChoice}`);

    switch (computerChoice) {
        case "piedra":
            if (humanChoice === "papel") {
                alert("El papel pasa por debajo de la piedra");
                humanScore++;
            } else if (humanChoice === "tijera") {
                alert("La piedra aplasta la tijera");
                computerScore++;
            } else {
                alert("Hay empate");
            }
            break;

        case "papel":
            if (humanChoice === "piedra") {
                alert("El papel pasa por debajo de la piedra");
                computerScore++;
            } else if (humanChoice === "tijera") {
                alert("La tijera corta al papel");
                humanScore++;
            } else {
                alert("Hay empate");
            }
            break;

        case "tijera":
            if (humanChoice === "piedra") {
                alert("La piedra aplasta la tijera");
                humanScore++;
            } else if (humanChoice === "papel") {
                alert("La tijera corta al papel");
                computerScore++;
            } else {
                alert("Hay empate");
            }
            break;

        default:
            alert("Esa no es una opción válida");
            break;
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    let roundNumber = 0;

    while (roundNumber < 5) {
        alert(` RONDA NÚMERO ${roundNumber} `)
        playRound(getComputerChoice(), getHumanChoice());
        roundNumber++;
    }

    if (humanScore > computerScore) {
        alert("Ha ganado el usuario");
    } else if (computerScore > humanScore) {
        alert("Ha ganado la computadora");
    } else {
        alert("Hubo empate");
    }
}
