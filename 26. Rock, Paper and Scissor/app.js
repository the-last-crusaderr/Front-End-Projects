const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput == 'paper' || userInput == 'scissor' || userInput === 'bomb')
    return userInput;
  else
    console.log('This is not a valid choice');  
};


const getComputerChoice = () => {
   let choice = Math.floor(Math.random() * 3);
   if (choice === 0)
    return 'rock';
   else if (choice === 1)
    return 'paper' ;
   else
    return 'scissor'; 
}


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === 'paper')
    return 'User Won';
  if (userChoice === computerChoice)
    return 'Game was a tie';
  if (userChoice === 'rock'){
    if (computerChoice === 'scissor')
      return 'User Won';
    else
      return 'Computer Won';
  }  
  if (userChoice === 'paper'){
    if (computerChoice === 'rock')
      return 'User Won';
    else
      return 'Computer Won';
  }
  if (userChoice === 'scissor'){
    if (computerChoice === 'paper')
      return 'User Won';
     else
      return 'Computer Won';
  }
}

const playGame = () => {
  let userChoice = getUserChoice('paper');
  console.log(`User Choice is ${userChoice}`);
  let computerChoice = getComputerChoice();
  console.log(`Computer Choice is ${computerChoice}`);
  console.log(determineWinner(userChoice, computerChoice));
}








playGame();

 
