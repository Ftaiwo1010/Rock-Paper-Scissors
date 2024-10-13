 const buttons = document.querySelectorAll('button')
 const resultContainer = document.querySelector('.result-container');
 const resultPara = document.createElement('p');
 const scorePara = document.createElement('p');
 resultContainer.appendChild(resultPara);
 resultContainer.appendChild(scorePara)


 //select each button
 buttons.forEach((button) => {
    button.addEventListener('click', () => {
       playRound(button.id, getComputerChoice());       
    })
 })


 //Players score variable
 let playerScore = 0;
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



//playrounds function
function playRound(humanChoice, computerChoice) {
    if(playerScore === 5 || computerScore === 5) {
      resultPara.textContent = `Game Over!
      Final score:
      player score: ${playerScore}
      computer score: ${computerScore}`;
      scorePara.textContent = '';
    } else if (humanChoice === computerChoice) {
        resultPara.textContent = `No winner! you chose ${humanChoice}, computer chose ${computerChoice}. continue playing!`;
        scorePara.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
      } else if ((humanChoice === 'rock' || humanChoice === 'Rock' || humanChoice === 'ROCK') && (computerChoice === 'scissors') ||
        (humanChoice === 'scissors' || humanChoice === 'Scissors' || humanChoice === 'SCISSORS') && (computerChoice === 'paper') ||
        (humanChoice === 'paper' || humanChoice === 'Paper' || humanChoice === 'PAPER') && (computerChoice === 'rock')) {
        resultPara.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
        playerScore += 1;
        scorePara.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
      } else {
        resultPara.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
        computerScore += 1;
        scorePara.textContent = `Player Score: ${playerScore}, Computer Score: ${computerScore}`;
      }


      
    
};





//palyGame function
/*function playGame() {

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

playGame(); */


