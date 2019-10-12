/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice, gamePlaying, lastDice;
init();

// Now we set up a Roll dice button

document.querySelector('.btn-roll').addEventListener('click', function() {
    if (gamePlaying) {
        //1. we need a random number
        var dice = Math.floor(Math.random() * 6) + 1;

        //2. Display a result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';

        // changing an image according to the dice number
        diceDOM.src = 'dice-' + dice + '.png';

        //3. Update the round score, IF the rolled number wasnt a 1
        if (dice === 6 && lastDice === 6) {
            //Player looses score
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = '0';
            nextPlayer();
        } else if (dice !== 1) {
            // Add score
            roundScore += dice;
            document.querySelector(
                '#current-' + activePlayer
            ).textContent = roundScore;
        } else {
            // Next player
            nextPlayer();
            // thats an anonymous function
        }
        lastDice = dice;
    }
});
document.querySelector('.btn-hold').addEventListener('click', function() {
    if (gamePlaying) {
        // Adding current score to the global
        scores[activePlayer] = +roundScore;
        // Update the user interface
        document.querySelector('#score-' + activePlayer).textContent =
            scores[activePlayer];
        var input = document.querySelector('final-score').nodeValue;
        // Undefined,0 , null or "" are coerced to false
        // Anything else is coerced to true
        if (input) {
            var winningScore = input;
        } else {
            winningScore = 100;
        }
        // Check if the player won the game
        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent =
                'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document
                .querySelector('.player-' + activePlayer + '-panel')
                .classList.add('winner');
            document
                .querySelector('.player-' + activePlayer + '-panel')
                .classList.remove('active');
            gamePlaying = false;
        } else {
            // Next player
            nextPlayer();
        }
    }
});
function nextPlayer() {
    // Next player
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    // Toggle to swap current playing panels
    document.querySelector('.dice').style.display = 'none';

    // so for more clear code and if the IF statement is very simple you can use turnary operator instead of writing full if-else statement
}
document.querySelector('.btn-new').addEventListener('click', init);
function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    // assure, that there is no active class, and then activate 1, so there will be no bugs
    document.querySelector('.player-0-panel').classList.add('active');
}

// Coding challenges:
// 1.(DONE) A player looses his ENTIRE score, if he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
// 2. Add an input field to the HTML where players cn set the winning score, so that they can change the predefined scote of 100. (Hint: you can read that value with the .value property in JS.)
// 3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to posutuin the second dice, so take a look at the CSS code for the first one.)
