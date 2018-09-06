/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() * 6) + 1;
console.log(dice);

// document.querySelector('#current-0').textContent = dice;

// selecting the id current-0 from .player-score for player 1 to be displayed on current dice box. Then use textcontent method to display the randomized number on player one's dice.

document.querySelector('#current-' + activePlayer).textCentent = dice;
// change to current- + activePlayer and change the activePlayer variable equal to one which then makes player two the active player.

document.querySelector('.dice').style.display = 'none';
// remove display of dice image when first opening the web page












