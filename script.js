// let computer return random variable between rock, paper, scissors
function getComputerChoice(choicearray) {
  
  const randomChoice = Math.floor(Math.random() * choicearray.length);
  const choice = choicearray[randomChoice];
  
  return choice;
}
const choicearray = ["rock", "paper", "scissors"];
const result = getComputerChoice(choicearray);
// console.log(result);

// play inputs a string (rock, paper, scissors)
const playerSelect = prompt ("Rock, paper, or scissors?").toLowerCase();
console.log(playerSelect);
// computer generates random variable
const computerSelect = getComputerChoice(choicearray);
console.log(computerSelect);

// play a single round of RPS that receives input from player and computer

function playRound(playerSelect, computerSelect) {
  if (playerSelect == "rock" && computerSelect == "paper") {
    return "You lose! Paper beats Rock.";
  }
  else if (playerSelect == "rock" && computerSelect == "scissors") {
    return "You won! Rock beats Scissors.";
  }
  else if (playerSelect == "rock" && computerSelect == "rock") {
    return "It's a draw!";
  }
  else if (playerSelect == "scissors" && computerSelect == "paper") {
    return "You won! Scissors beats Paper.";
  }
  else if (playerSelect == "scissors" && computerSelect == "scissors") {
    return "It's a draw!";
  }
  else if (playerSelect == "scissors" && computerSelect == "rock") {
    return "You lost! Rock beats Scissors.";
  }
  else if (playerSelect == "paper" && computerSelect == "paper") {
    return "It's a draw!";
  }
  else if (playerSelect == "paper" && computerSelect == "scissors") {
    return "You lose! Scissors beats Paper.";
  }
  else if (playerSelect == "paper" && computerSelect == "rock") {
    return "You won! Paper beats Rock.";
  }
  else {
    return "Invalid input."
  }
}

alert(playRound(playerSelect, computerSelect));
console.log(playRound(playerSelect, computerSelect));

// create RPS game that loops for 5 rounds and keeps score

// return string that declares winner/loser of 5