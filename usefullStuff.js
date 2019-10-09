dice = Math.floor(Math.random() * 6) + 1; // Creates number from 1 to 6
//document.querySelector('#current-' + activePlayer).textContent = dice; //selects first thing it finds
//.textContent can set only txt, not an HTML
//if we want to use an HTML content instead of plain text you use
//document.querySelector('#current-' + activePlayer).innerHTML =
//    '<em>' + dice + '</em>';
//if we use .textContent now instead of querySelector we will get plain text like('<em>+dice+</em>')
