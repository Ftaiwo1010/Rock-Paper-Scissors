// Create a new function named getComputerChoice.
// Write the code so that getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.

function getComputerChoice() {
   let randomNum = Math.floor(Math.random() * 3) + 1;
   let choice;
   
   if (randomNum === 1) {
      choice = 'rock';
   } else if (randomNum === 2) {
      choice = 'paper';
   } else {
      choice = 'scissors';
   }

   return choice;
}



// Create a new function named getHumanChoice.
// Write the code so that getHumanChoice will return one of the valid choices depending on what the user inputs.

function getHumanChoice() {
   let userInput = prompt('Enter your choice to play, "rock, paper, or scissors" ?', 'ROCK');
   return userInput;
}



// Write the logic to play a single round




// Write the logic to play the entire game

function playGame() {

   let humanScore = 0;
   let computerScore = 0;
   let round = 0;

   function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
         round++;
         console.log(`Round ${round}`);
         console.log(`You: ${humanChoice} \nComputer: ${computerChoice} `);
         console.log('It a tie.');
      } else if (
         (humanChoice === 'rock' ||
          humanChoice === 'Rock' ||
          humanChoice === 'ROCK' &&
          computerChoice === 'scissors') ||
         (humanChoice === 'paper' ||
          humanChoice === 'Paper' ||
          humanChoice === 'PAPER' &&
          computerChoice === 'rock')    ||
         (humanChoice === 'scissors' ||
          humanChoice === 'Scissors' ||
          humanChoice === 'SCISSORS' &&
          computerChoice === 'paper') 
      ) {
         round++;
         humanScore++;
         console.log(`Round ${round}`);
         console.log(`You: ${humanChoice} \nComputer: ${computerChoice}`);
         console.log(`You win! ${humanChoice} beats ${computerChoice}`);
         console.log(`Human score: ${humanScore} \nComputer score: ${computerScore}`);
      } else {
         round++;
         computerScore++;
         console.log(`Round ${round}`);
         console.log(`You: ${humanChoice} \nComputer: ${computerChoice}`);
         console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
         console.log(`Human score: ${humanScore} \nComputer score: ${computerScore}`);
      }
 
  }



   for (let i  = 0; i < 5; i++) {
       playRound(getHumanChoice(), getComputerChoice());
   }


   console.log('Game over!');
   if (humanScore > computerScore) {
      console.log('You wins the game!');
      console.log(`Human score: ${humanScore} \nComputer score: ${computerScore}`);
   } else if (computerScore > humanScore) {
      console.log('Computer wins the game!');
       console.log(`Human score: ${humanScore} \nComputer score: ${computerScore}`);
   } else {
      console.log('The game is a tie!');
   }
   

}


playGame();