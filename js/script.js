/* REFERENCJE DO HTML-A */
const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const statsNumbers = document.querySelector('#numbers span');
const statsWins = document.querySelector('#wins span');
const statsLosses = document.querySelector('#losses span');
const statsDraws = document.querySelector('#draws span');

// informacje o graczu
const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

/**
 * Klik
 */

function buttonClicked(playerMove) {

    /* Funkcja konwertująca wybór w formie liczby na formę tekstową (1 ->  kamień) */
    function getMoveName(argMoveId) {
        if (argMoveId === 1) return 'kamień';
        else if (argMoveId === 2) return 'papier';
        else if (argMoveId === 3) return 'nożyce';
    }

    function renderStats() {
        statsNumbers.innerHTML = gameSummary.numbers
        statsWins.innerHTML = gameSummary.wins
        statsLosses.innerHTML = gameSummary.losses 
        statsDraws.innerHTML = gameSummary.draws
    }

    /**
     * Publikacja wyniku
     */
    function displayResult(argPlayerMove, argComputerMove) {
    if (
        (argPlayerMove == 'papier' && argComputerMove == 'kamień') || 
        (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') || 
        (argPlayerMove == 'nożyce' && argComputerMove == 'papier')) {
        printMessage('Wygrywasz!');
        gameSummary.wins++;
    } else if (argPlayerMove === argComputerMove) {
        gameSummary.draws++;
    } else {
        printMessage('Przegrywasz :(');
        gameSummary.loses++;
    }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        renderStats()
    }

    /* PROCES GRY */
    clearMessages();
    gameSummary.numbers++;

    // ustalanie wyboru komputera */
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    const computerMove = getMoveName(randomNumber);

    // ustalenie i publikacja wybiku
    displayResult(playerMove, computerMove);
}

buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });