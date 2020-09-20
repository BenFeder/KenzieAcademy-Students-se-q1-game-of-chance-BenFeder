let gameNum = 1;
let numWin = 0;
let numLose = 0;
let numDraws = 0;

function playChoice() {
  // Play user's choice of "rock, paper, or scissors" and compare to randomized result of computer's choice, also of "rock, paper, scissors"
  // Rock beats scissors, Scissors beats paper, and Paper beats rock
  // Display hand of player and computer, and alert who won
  // Increment player win or computer win by 1, depending on who won. Best out of three games wins

  let gameNumMax = document.getElementById("gameNum_input").value;

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
    numWin++;
  } else if (playerChoice == "paper" && computerChoice == "Rock") {
    displayWin.innerHTML = "<b> You won! </b> <br/> <br/>";
    numWin++;
  } else if (playerChoice == "scissors" && computerChoice == "Paper") {
    displayWin.innerHTML = "<b> You won! </b> <br/> <br/>";
    numWin++;
  }
  //Set up draw conditions
  else if (playerChoice == "rock" && computerChoice == "Rock") {
    displayWin.innerHTML = "<b> Draw! </b> <br/> <br/>";
    numDraws++;
  } else if (playerChoice == "paper" && computerChoice == "Paper") {
    displayWin.innerHTML = "<b> Draw! </b> <br/> <br/>";
    numDraws++;
  } else if (playerChoice == "scissors" && computerChoice == "Scissors") {
    displayWin.innerHTML = "<b> Draw! </b> <br/> <br/>";
    numDraws++;
  }
  // Setup losing condition
  else {
    displayWin.innerHTML = "<b> Sorry, you lose! </b> <br/> <br/>";
    numLose++;
  }

  let displayComputerChoice = document.createElement("div");
  displayComputerChoice.innerHTML =
    "<i>Computer chose: " + computerChoice + ". </i> <br/>";

  document.body.append(displayPlayerChoice);
  document.body.append(displayComputerChoice);
  document.body.append(displayWin);

  gameNum++;

  if (gameNum > gameNumMax) {
    gameNum = 1;
    endGame(numWin, numLose, numDraws, gameNum);
  }

  event.preventDefault();
}

function endGame(wins, losses, draws) {
  displayWhoWon = document.createElement("div");

  if (wins > losses) {
    displayWhoWon.innerHTML =
      "<h2 class='winColor'>Good job! You won the tournament!</h2> <h4>(Wins: " +
      wins +
      ", Losses: " +
      losses +
      ", Draws: " +
      draws +
      ")";
  } else if (losses > wins) {
    displayWhoWon.innerHTML =
      "<h2 class='lossColor'>Sorry! You lost. Try another round?</h2> <h4>(Wins: " +
      wins +
      ", Losses: " +
      losses +
      ", Draws: " +
      draws +
      ")";
  } else {
    displayWhoWon.innerHTML =
      "<h2 class='drawColor'>Nice tournament. You and the computer have a stalemate.</h2> <h4>(Wins: " +
      wins +
      ", Losses: " +
      losses +
      ", Draws: " +
      draws +
      ")";
  }

  document.body.append(displayWhoWon);

  let refreshPageDiv = document.createElement("div");
  document.body.append(refreshPageDiv);

  let refreshPageButton = document.createElement("button");
  refreshPageButton.innerText = "Click here to start a new tournament.";
  refreshPageDiv.append(refreshPageButton);

  refreshPageButton.addEventListener("click", reloadPage);
}

function reloadPage() {
  location.reload();
}

let playButton = document.getElementById("choice_button");
playButton.addEventListener("click", playChoice);
