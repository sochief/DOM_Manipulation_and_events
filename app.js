/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;

activePlayer = 0;

document.querySelector('.dice').style.display = 'none';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

// Now we set up a Roll dice button

document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. we need a random number
    var dice = Math.floor(Math.random() * 6) + 1;

    //2. Display a result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';

    // changing an image according to the dice number
    diceDOM.src = 'dice-' + dice + '.png';

    //3. Update the round score, IF the rolled number wasnt a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector(
            '#current-' + activePlayer
        ).textContent = roundScore;
    } else {
        // Next player
        nextPlayer();
    }

    // thats an anonymous function
});
document.querySelector('.btn-hold').addEventListener('click', function() {
    // Adding current score to the global
    scores[activePlayer] = +roundScore;
    // Update the user interface
    document.querySelector('#score-' + activePlayer).textContent =
        scores[activePlayer];
    // Check if the player won the game
    if (scores[activePlayer] >= 100) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document
            .querySelector('.player-' + activePlayer + '-panel')
            .classList.add('winner');
        document
            .querySelector('.player-' + activePlayer + '-panel')
            .classList.remove('active');
    } else {
        // Next player
        nextPlayer();
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
