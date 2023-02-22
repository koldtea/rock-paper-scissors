
// computer generates random variable
// let computer return random variable between rock, paper, scissors
const choicearray = ["rock", "paper", "scissors"];

function getComputerChoice(choicearray) {
  
  const randomChoice = Math.floor(Math.random() * choicearray.length);
  const choice = choicearray[randomChoice];
  
  return choice;
}
const result = getComputerChoice(choicearray);

let computerSelect = getComputerChoice(choicearray);

// declare score variables to store player and computer score
let pScore = 0;
let cScore = 0;

function playRound(playerSelect, computerSelect) {
  if (playerSelect == computerSelect) {
    return "It's a draw!";
  }
  else if (playerSelect == "rock" && computerSelect == "paper") {
    cScore =+1;
    return "You lose! Paper beats Rock.";
  }
  else if (playerSelect == "rock" && computerSelect == "scissors") {
    pScore =+1;
    return "You won! Rock beats Scissors.";
  }
  else if (playerSelect == "scissors" && computerSelect == "paper") {
    pScore =+1;
    return "You won! Scissors beats Paper.";
  }
  else if (playerSelect == "scissors" && computerSelect == "rock") {
    cScore =+1;
    return "You lost! Rock beats Scissors.";
  }
  else if (playerSelect == "paper" && computerSelect == "scissors") {
    cScore =+1;
    return "You lose! Scissors beats Paper.";
  }
  else if (playerSelect == "paper" && computerSelect == "rock") {
    pScore =+1;
    return "You won! Paper beats Rock.";
  }
  else {
    return "Invalid input."
  }
}

// play inputs a string (rock, paper, scissors)
// loop RPS five times
// return string that declares winner/loser of 5 rounds
function game() {
  for (let i = 0; i < 5; i++) {
    playerSelect = prompt ("Rock, Paper, or Scissors?").toLowerCase();
    computerSelect = getComputerChoice(choicearray);
    
    console.log("Player: " + playerSelect + " Computer: " + computerSelect);
    alert("Player: " + playerSelect + " Computer: " + computerSelect);
    
    console.log(playRound(playerSelect, computerSelect));
  }
  if (pScore > cScore) {
    return "Your total score was " + pScore + ", you won the game!";
  }
  if (pScore == cScore) {
    return "The game's a tie!";
  }
  else {
    return "Your total score was " + pScore + ", you lost the game!"
  }
}

console.log(game());