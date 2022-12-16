function rockPaperScissors() {

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    const rock = 'Rock';
    const paper = 'Paper';
    const scissors = 'Scissors';

    let colors = require('colors');
    colors.enable();

    let playerTurn;
    let computerTurn;
    let pointsPlayer = 0;
    let pointsComputer = 0;


    recursiveAsyncReadLine = function () {
        readline.question('Please choose one of the following: rock, paper or scissors '.cyan, input => {
            playerTurn = input;
            console.log(`You choose ${playerTurn}`.magenta.italic,);


            if (playerTurn == 'r' || playerTurn == 'rock') {
                playerTurn = rock;
            } else if (playerTurn == 'p' || playerTurn == 'paper') {
                playerTurn = paper;
            } else if (playerTurn == 's' || playerTurn == 'scissors') {
                playerTurn = scissors;
            } else {
                console.log('Invalid Input. Try Again...');
                return readline.close();
            }


            let computerRandomNumber = Math.floor(Math.random() * 3) + 1;

            switch (computerRandomNumber) {
                case 1:
                    computerTurn = rock;
                    break;
                case 2:
                    computerTurn = paper;
                    break;
                case 3:
                    computerTurn = scissors;
                    break;
            }

            console.log(`The computer chooses ${computerTurn}`.magenta.italic);


            if ((playerTurn === rock && computerTurn === scissors) ||
                (playerTurn === paper && computerTurn === rock) ||
                (playerTurn === scissors && computerTurn === paper)) {
                pointsPlayer += 5;
                console.log(`You have gained 5 points, your score is ${pointsPlayer}!`.underline.green);
                console.log('You win!'.green);
                recursiveAsyncReadLine();
            } else if ((playerTurn === rock && computerTurn === paper) ||
                (playerTurn === paper && computerTurn === scissors) ||
                (playerTurn === scissors && computerTurn === rock)) {
                pointsComputer += 5;
                console.log(`The computer has gained 5 points, his score is ${pointsComputer}!`.underline.red);
                console.log('You lose!'.red);
                recursiveAsyncReadLine();
            } else {
                console.log('This game was a draw!'.blue);
                recursiveAsyncReadLine();
            }

            if (pointsPlayer === 25) {
                console.log('You win the game!'.bold.green);
                return readline.close();
            } else if (pointsComputer === 25) {
                console.log('The computer wins the game!'.bold.red);
                return readline.close();
            }
        });
    }

    recursiveAsyncReadLine();
}

rockPaperScissors();

