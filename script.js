// get Computer Choice
function getComputerChoice() {
  const computerOptions = ["rock", "paper", "scissors"];
  const randNumber = Math.floor(Math.random() * 3);

  return computerOptions[randNumber];
}
// 
// Player Choice Event Listening
const options = document.querySelectorAll('button');

options.forEach(button => button.addEventListener('click', game))
// 
// Get Winner
function whoWon(pChoice, cChoice) {
  if (pChoice === cChoice) {
    return "It's a draw!";
  } 
    else if (pChoice === "rock" && cChoice === "paper") {
      return "Computer wins!";
    }
    else if (pChoice === "rock" && cChoice === "scissors") {
      return "Player wins!";
    }
    else if (pChoice === "scissors" && cChoice === "paper") {
      return "Player wins!";
    }
    else if (pChoice === "scissors" && cChoice === "rock") {
      return "Computer wins!";
    }
    else if (pChoice === "paper" && cChoice === "scissors") {
      return "Computer wins!";
    }
    else if (pChoice === "paper" && cChoice === "rock") {
      return "Player wins!";
    }
      else {
        return "Invalid input."
      }
}
// 
// Announce Winner
const score = document.getElementById('score');
const result = document.getElementById('result');

let pScore = 0;
let cScore = 0;

function announceWinner(winner, computerChoice) {
  if (winner === "Player wins!") {
    pScore+=1;
    result.innerHTML = `
      <h3>You win!</h3>
      <p>Computer chose ${computerChoice}
    `;
  } else if (winner === "Computer wins!") {
    cScore+=1;
    result.innerHTML = `
      <h3>You lose!</h3>
      <p>Computer chose ${computerChoice}
    `;
  } else {
    result.innerHTML = `
      <h3>Draw!</h3>
      <p>Computer chose ${computerChoice}
    `;
  }
    score.innerHTML = `
    <p>Player score: ${pScore}</p>
    <p>Computer score: ${cScore}</p>
    `;
}
// 
// Reset game at 6 scores
function resetGame(pScore, cScore) {
  if (pScore === 6 || cScore === 6) {
    score.innerHTML = '<p>Player score: 0</p> <p>Computer score: 0</p>';
    result.innerHTML = '<h3></h3> <p></p>'
  }
}
// 
// Play
function game(e) {
  const computerChoice = getComputerChoice();
  const playerChoice = e.target.id;
  const winner = whoWon(playerChoice, computerChoice);
  announceWinner(winner, computerChoice);
  resetGame(pScore, cScore);
}
// 