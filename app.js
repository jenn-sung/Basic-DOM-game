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
activePlayer = 1;

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// document.querySelector('#current-0').textContent = dice;

// selecting the id current-0 from .player-score for player 1 to be displayed on current dice box. Then use textcontent method to display the randomized number on player one's dice.

// document.querySelector('#current-' + activePlayer).textCentent = dice;
// // change to current- + activePlayer and change the activePlayer variable equal to one which then makes player two the active player.

document.querySelector('.dice').style.display = 'none';
// remove display of dice image when first opening the web page

document.getElementById('score-0)').textContent = '0';
document.getElementById('score-1)').textContent = '0';
document.getElementById('current-0)').textContent = '0';
document.getElementById('current-1)').textContent = '0';
// getting elements by id from HTML and set all to zero and sets players and current score to zero for beginning of game.

// function btn() {
  
// }
// btn();

// document.querySelector('.btn-roll').addEventListener('click', btn);

// using the btn function with btn-roll class and without the parenthesis operator because we want the event listener method to call it and not here. In this line, btn is called the call back function. It's a function that is not called by us, but by another function.

document.querySelector('.btn-roll').addEventListener('click', function() {

  // 1. Need a random number when someone clicks and only this function needs the dice variable, so moving the variable here. This function still access to the outer scope (e.g. scores, roundScore, activePlauer)
    var dice = Math.floor(Math.random() * 6) + 1;
  
  // 2. Need to display the result
    var diceDOM = document.querySelector('.dice');
   // selecting the variable dice
     diceDOM.style.display = 'block';
     diceDOM.src = 'dice-' + dice  + '.png';
   // wanting to display all six dice images, so using dice variable (where all six possibilities of the dice are available) and attaching png to be able to using the images

  // 3. Update the round score IF the rolled number is NOT a 1
    

});

// going to use an anonymous function in the event listener because we will only use it within this method and nowhere else.








