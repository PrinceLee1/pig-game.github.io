
/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


var scores , roundScore , activePlayer , gamePlaying;

init();
/*THIS BUTTON EVENT IS FOR ROLLING THE DICE.
WHEN THE "ROLL" BUTTON IS CLICKED,A RANDOM NUMER IS GENERATED AND RETURNED TO THE NEAREST WHOLE 
NUMBER WITH "Math.floor" METHOD.THEN THE DICE IS SHOWN BECAUSE INITIALLY IT WAS HIDDEN BEFORE THE GAME STARTS(Refer to the "init" function on line 79),ALSO IT WILL CHECK IF THE NUMBER IS EQUAL TO 1,IF EQUAL TO 1 NEXT PLAYER PLAYS eLse IT WILL UPDATE THE ROUND SCORE.
*****/ 
document.querySelector('.btn-roll').addEventListener('click',function(){
if (gamePlaying){
     // 1.Random Number
   var dice = Math.floor(Math.random()*6) + 1;
// 2.Display the Result
var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-' + dice + '.png';
// 3.Update the round score IF the rolled number was not a 1
if(dice !== 1){
    //Add Score
     roundScore += dice;
 document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }else{
    //Next player plays
   nextPlayer();

        } 
    }

    
});
/***
 * END OF ROLL BUTTON 
 */

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying){
          //Add CURRENT score to Global Score
scores[activePlayer] +=roundScore;
//Update the UI
document.querySelector('#score-' + activePlayer).textContent =scores[activePlayer];
//Check if player won the game
if (scores[activePlayer] >=100){
    document.querySelector('#name-' + activePlayer).textContent = 'Winner';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
}else{

//Next player
nextPlayer();
        }
  
    }

});

function nextPlayer(){
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

   document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
    scores = [0,0];
roundScore = 0;
activePlayer = 0;
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
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
}








