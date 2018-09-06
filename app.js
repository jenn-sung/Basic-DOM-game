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

// dice = Math.floor(Math.random() * 6) + 1;
// console.log(dice);

// document.querySelector('#current-0').textContent = dice;

// selecting the id current-0 from .player-score for player 1 to be displayed on current dice box. Then use textcontent method to display the randomized number on player one's dice.

// document.querySelector('#current-' + activePlayer).textCentent = dice;
// // change to current- + activePlayer and change the activePlayer variable equal to one which then makes player two the active player.

document.querySelector('.dice').style.display = 'none';
// remove display of dice image when first opening the web page

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
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
    
    if (dice !== 1) {
      // Add score
      roundScore += dice;
      
      // roundsScore = roundScore + dice
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
      // if active player is player one then current 1 gets content and if active player is zero then current 0 gets the content
    } else {
      // if the dice rolls to one then next player
      
      // Next player

     
      // if (activePlayer === O) {
        // activePlayer = 1;
      // } else {
        // activePlayer = 0;
      // }
      // 
      // telling computer when to move to new active player
      // roundScore = 0;
      // resets new active player's score to zero 

      // document.getElementById('current-0').textContent = '0';
      // document.getElementById('current-1').textContent = '0';
      // as soon as player rolls one, their score needs to reset to zero

      // document.querySelector('player-0-panel').classList.remove('active');
      // removes active class once a new player is active when a 1 is rolled
      // document.querySelector('player-1-panel').classList.add('active');
      // makes the new active player active when 1 is rolled

      // document.querySelector('player-0-panel').classList.toggle('active');
      // document.querySelector('player-1-panel').classList.toggle('active');
      // will toggle between players when a one is rolled and reset the previous player's current score to zero and show who the current active player is

      // document.querySelector('.dice').style.display = 'none';
      // when new active player, the dice image is hidden and reset
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add current score to GLOBAL score
    scores[activePlayer] += roundScore;
    // scores[activePlayer] = scores[activePlayer] + round score;
    // using the scores and activeplayer variables to write scores in array. Adds the score from this round to the score already in place.

    // if the active player is the first player then it's the first score of the scores array and if it's the second player, it's the second score of the scores array

    // Update the UI 
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // updates the score in the browser and select the points from the active player within the scores array



    // Next Player
    // activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
      // 
      // roundScore = 0;
     

      // document.getElementById('current-0').textContent = '0';
      // document.getElementById('current-1').textContent = '0';
      //

      // document.querySelector('player-0-panel').classList.remove('active');
      
      // document.querySelector('player-1-panel').classList.add('active');
      
      // document.querySelector('player-0-panel').classList.toggle('active');
      // document.querySelector('player-1-panel').classList.toggle('active');
      

      // document.querySelector('.dice').style.display = 'none';
//     }

// });

    // Check if player won the game
    if (scores[activePlayer] >= 100) {
      document.querySelector('#name-' + activePlayer).textContent = 'Winner';
      // checks to see who wins 100 or more points and shows "winner."
      document.querySelector('.dice').style.display = 'none';
      // removes the dice image when a winner takes place
      document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
      // adds winner class to total player panel for active player
      document.querySelector('.player-' + activePlayer + '-panel').classList.remove('winner');
      // removes the active player class and active player dot from the winner's panel
    } else {

        nextPlayer();
    }
  });
 

 // This next player code is not dry. It just copies the first player's code

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('player-0-panel').classList.remove('active');  
  document.querySelector('player-1-panel').classList.add('active');

  document.querySelector('.dice').style.display = 'none';
}

// allows for player to hold score when next player is up




