let humanScore = 0;
let computerScore = 0;
let round = 0;


let roundText = document.querySelector('.round');
let playerText1 = document.querySelector('.player1');
let playerText2 = document.querySelector('.player2');
let winText = document.querySelector('.wins');
let humanScoreText = document.querySelector('.human-score');
let computerScoreText = document.querySelector('.computer-score');



// function for computer choice
function getComputerChoice() {
   let randomNum = Math.floor(Math.random() * 3) + 1;
   let choice;

   if (randomNum === 1) {
      choice = 'Rock';
   } else if (randomNum === 2) {
      choice = 'Paper';
   } else {
      choice = 'Scissors';
   }

   return choice;
}


// creating human buttons to play player 2
const btnContainer = document.querySelector('.btn-container');

const rockElement = document.createElement('button');
rockElement.classList.add('btn');
rockElement.textContent = 'Rock';

const paperElement = document.createElement('button');
paperElement.classList.add('btn');
paperElement.textContent = 'Paper';

const scissorsElement = document.createElement('button');
scissorsElement.classList.add('btn');
scissorsElement.textContent = 'Scissors';

btnContainer.appendChild(rockElement);
btnContainer.appendChild(paperElement);
btnContainer.appendChild(scissorsElement);



// function to handle event click
function handleClick(e) {
   e.stopPropagation();
   playRound(e.target.textContent, getComputerChoice());
   checkScore();
}

// click events for human choice
rockElement.addEventListener('click', handleClick);
paperElement.addEventListener('click', handleClick);
scissorsElement.addEventListener('click', handleClick);



// function that take both human and computer choice to determine the winner
function playRound(humanChoice, computerChoice) {

   if (humanChoice === computerChoice) {
      round++;
      roundText.textContent = `Round ${round}`;
      playerText1.textContent = `You: ${humanChoice}`;
      playerText2.textContent = `Computer: ${computerChoice} `;
      winText.textContent = 'It a tie.';
   } else if (
      (humanChoice === 'Rock' && computerChoice === 'Scissors') ||
      (humanChoice === 'Paper' && computerChoice === 'Rock') ||
      (humanChoice === 'Scissors' && computerChoice === 'Paper')
   ) {
      round++;
      humanScore++;
      roundText.textContent = `Round ${round}`;
      playerText1.textContent =  `You: ${humanChoice}`;
      playerText2.textContent =  `Computer: ${computerChoice}`;
      winText.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
      humanScoreText.textContent = `Human score: ${humanScore}`;computerScoreText.textContent = `Computer score: ${computerScore}`;
   } else {
      round++;
      computerScore++;
      roundText.textContent = `Round ${round}`;
      playerText1.textContent = `You: ${humanChoice}`;
      playerText2.textContent = `Computer: ${computerChoice} `;
      winText.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
      humanScoreText.textContent = `Human score: ${humanScore}`;computerScoreText.textContent = `Computer score: ${computerScore}`;
   }

}


// function to remove event
function removeEvent() {
   const allBtns = document.querySelectorAll('button');

   allBtns.forEach((btn) => {
       btn.removeEventListener('click', handleClick);
   });
   
}



// function to check score and remove event listener
function checkScore() {
   if (humanScore >= 5 || computerScore >= 5) {
       roundText.textContent = 'Game over!';
       winText.textContent = `${humanScore >= 5 ? 'You win!' : 'Computer wins!'}`;
       humanScoreText.textContent = `Human score: ${humanScore}`;
       removeEvent();
       createRestartButton();
   }
}  




// function to crate a restart button
function createRestartButton() {
   const container = document.querySelector('.container');

   const restBtn = document.createElement('button');
   restBtn.classList.add('btn');
   restBtn.textContent = 'Restart Game';

   container.appendChild(restBtn);

   restBtn.style.width = '200px';
   restBtn.style.margin = '0 auto';

   restBtn.addEventListener('click', () => {
       restartGame();
       restBtn.style.display = 'none';
   });

}



// function to reset the UI
function restartGame() {
   humanScore = 0;
   computerScore = 0;
   round = 0;

   roundText.textContent = 'Round 0';
   playerText1.textContent = 'You: ';
   playerText2.textContent = 'Computer: ';
   winText.textContent = '';
   humanScoreText.textContent = 'Human score: 0';
   computerScoreText.textContent = 'Computer score: 0';

   rockElement.addEventListener('click', handleClick);
   paperElement.addEventListener('click', handleClick);
   scissorsElement.addEventListener('click', handleClick);

} 








