 //Players score variable
 let humanScore = 0;
 let computerScore = 0;

//getComputerChoice function will randomly return one of the following string values: “rock”, “paper” or “scissors”.
function getComputerChoice() {
    let randomString = Math.floor(Math.random() * 3) + 1;
    let choice;    

    if (randomString === 1) {
         choice = 'rock';
    } else if (randomString === 2){
         choice = 'paper';
    } else {
         choice = 'scissors';
    } 
      
    return choice;
    
}




//getHumanChoice function will return one of the valid choices depending on what the user inputs.
function getHumanChoice() {
    let userInput = prompt('Enter a valid input, i.e "Rock", "Paper" or "Scissors".');
    return userInput;
}



//playrounds function
function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        alert('No winner! ' + 'you chose ' + humanChoice + ', computer chose ' + computerChoice + '. ' + 'continue playing');
        console.log('No winner! ' + 'you chose ' + humanChoice + ', computer chose ' + computerChoice + '. ' + 'continue playing');
      } else if ((humanChoice === 'rock' || humanChoice === 'Rock' || humanChoice === 'ROCK') && (computerChoice === 'scissors') ||
        (humanChoice === 'scissors' || humanChoice === 'Scissors' || humanChoice === 'SCISSORS') && (computerChoice === 'paper') ||
        (humanChoice === 'paper' || humanChoice === 'Paper' || humanChoice === 'PAPER') && (computerChoice === 'rock')) {
        console.log('You win! ' + humanChoice + ' beats ' + computerChoice);
        humanScore += 1;
      } else {
        console.log('You lose! ' + computerChoice + ' beats ' + humanChoice);
        computerScore += 1;
      }

      console.log('Human Score: ' + humanScore + ', ' + 'Computer Score: ' + computerScore );

}



//palyGame function
function playGame() {

    for(let i = 1; i < 6; i++){
        alert(`Round: ${i} `)
        playRound(getHumanChoice(), getComputerChoice()); 
    }

    console.log('Game Over!');
    console.log(`The final score is:
    player score: ${humanScore}
    computer score: ${computerScore}
    `);
}

playGame();


