const computerChoiceDisplay = document.getElementById("compuer_choose");
const yourChoiceDisplay = document.getElementById("your_choose");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let yourChoice, computerChoice;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    yourChoice = e.target.id;
    yourChoiceDisplay.innerHTML = yourChoice;
    generateComputerChoice();
    resultDisplay.innerHTML = getResult(computerChoice, yourChoice);
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length);
  switch (randomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "scissor";
      break;
    case 2:
      computerChoice = "papper";
      break;
    default:
      computerChoice = "Can you try again?";
  }

  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(computerChoice, yourChoice) {
  if (computerChoice === yourChoice) {
    return "its a draw!";
  }
  //computer wins
  if (
    computerChoice === "rock", yourChoice === "scissor" ||
     computerChoice === "paper", yourChoice === "rock" || 
     computerChoice === "scissor", yourChoice === "papper"
  ) {
    return "The computer wins";
  } else {
    //The player wins
    return "You win!";
  }
}
