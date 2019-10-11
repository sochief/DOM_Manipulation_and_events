dice = Math.floor(Math.random() * 6) + 1; // Creates number from 1 to 6
//document.querySelector('#current-' + activePlayer).textContent = dice; //selects first thing it finds
//.textContent can set only txt, not an HTML
//if we want to use an HTML content instead of plain text you use
//document.querySelector('#current-' + activePlayer).innerHTML =
//    '<em>' + dice + '</em>';
//if we use .textContent now instead of querySelector we will get plain text like('<em>+dice+</em>')

// Now we set up a Roll dice button

/*function btn() {
    Do something here
}
btn();

document.querySelector('.btn-roll').addEventListener('click', function() {
        thats an anonymous function
});
event listener has two arguments
first one is the type of the event
and the second type is the function which will be called as soon as event happens
SO now the btn function is a call back function, coz we dont call it, its called by the other function*/

/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/*
var scores, roundScore, activePlayer, dice;
scores = [0, 0];
roundScore = 0;

activePlayer = 1;

document.querySelector('#current-' + activePlayer).textContent = dice; //selects first thing it finds

var x = document.querySelector('#score-0').textContent; //its a getter, so we get the value from the screen directly to console
console.log(x);
// Also we can use querrySelector to change the CSS of some element

document.querySelector('.dice').style.display = 'none'; //now we dont want to show particular element on the screen(image of the dice "dice class")

// Now we set up a Roll dice button
document.querySelector('.btn-roll').addEventListener('click', function() {
    //1. we need a random number
    var dice = Math.floor(Math.random() * 6) + 1;
    //2. Display a result
    //3. Update the round score, IF the rolled number wasnt a 1
    // thats an anonymous function
});
// event listener has two arguments
// first one is the type of the event
//and the second type is the function which will be called as soon as event happens
// SO now the btn function is a call back function, coz we dont call it, its called by the other function*/

//document.querySelector('.player-0-panel').classList.remove('active');
//document.querySelector('player-1-panel').classList.add('active');
