let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:


function generateTarget(){
      let target = Math.floor((Math.random() * 10));
      return target;
}


function compareGuesses(user, computer, target){
    let userDiff = Math.abs(target - user);
    let computerDiff = Math.abs(target - computer);
    if (userDiff === computerDiff || userDiff < computerDiff)
        return true;
    else
      return false;    
}


function updateScore(winner){
  if (winner = 'human')
    humanScore++;
  else
    computerScore++;  
}


function advanceRound(){
  currentRoundNumber++;
}


