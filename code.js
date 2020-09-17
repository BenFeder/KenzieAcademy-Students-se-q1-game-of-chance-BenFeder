let gameNum = 1;

function playChoice() {
  // Play user's choice of "rock, paper, or scissors" and compare to randomized result of computer's choice, also of "rock, paper, scissors"
  // Rock beats scissors, Scissors beats paper, and Paper beats rock
  // Display hand of player and computer, and alert who won
  // Increment player win or computer win by 1, depending on who won. Best out of three games wins

  if (gameNum > 3) {
  }

  let playerChoice = document.getElementById("choice_input").value; // This is the player's choice

  let displayPlayerChoice = document.createElement("div");
  displayPlayerChoice.innerHTML =
    "<h3>Game " + gameNum + ":</h3> <b>You chose: " + playerChoice + "! </b>";

  // Get random number from 1 to 3 to base computer choice off of
  let computerChoiceNum = Math.floor(Math.random() * 3 + 1);

  if (computerChoiceNum == 1) {
    computerChoice = "Rock";
  } else if (computerChoiceNum == 2) {
    computerChoice = "Paper";
  } else if (computerChoiceNum == 3) {
    computerChoice = "Scissors";
  }

  let displayWin = document.createElement("div");

  // Set up winning conditions
  if (playerChoice == "rock" && computerChoice == "Scissors") {
    displayWin.innerHTML = "<b> You won! </b> <br/> <br/>";
  } else if (playerChoice == "paper" && computerChoice == "Rock") {
    displayWin.innerHTML = "<b> You won! </b> <br/> <br/>";
  } else if (playerChoice == "scissors" && computerChoice == "Paper") {
    displayWin.innerHTML = "<b> You won! </b> <br/> <br/>";
  }
  //Set up draw conditions
  else if (playerChoice == "rock" && computerChoice == "Rock") {
    displayWin.innerHTML = "<b> Draw! </b> <br/> <br/>";
  } else if (playerChoice == "paper" && computerChoice == "Paper") {
    displayWin.innerHTML = "<b> Draw! </b> <br/> <br/>";
  } else if (playerChoice == "scissors" && computerChoice == "Scissors") {
    displayWin.innerHTML = "<b> Draw! </b> <br/> <br/>";
  }
  // Setup losing condition
  else {
    displayWin.innerHTML = "<b> Sorry, you lose! </b> <br/> <br/>";
  }

  let displayComputerChoice = document.createElement("div");
  displayComputerChoice.innerHTML =
    "<i>Computer chose: " + computerChoice + ". </i> <br/>";

  document.body.append(displayPlayerChoice);
  document.body.append(displayComputerChoice);
  document.body.append(displayWin);

  gameNum++;

  event.preventDefault();
}

let playButton = document.getElementById("choice_button");
playButton.addEventListener("click", playChoice);
