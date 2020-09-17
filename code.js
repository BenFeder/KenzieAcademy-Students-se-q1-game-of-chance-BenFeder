function playChoice() {
  // Play user's choice of "rock, paper, or scissors" and compare to randomized result of computer's choice, also of "rock, paper, scissors"
  // Rock beats scissors, Scissors beats paper, and Paper beats rock
  // Display hand of player and computer, and alert who won
  let playerChoice = document.getElementById("choice_input").value;

  let displayPlayerhoice = document.createElement("div");
  displayPlayerhoice.innerText = "You chose: " + playerChoice + "!";
}

let playButton = document.getElementById("choice_button");
playButton.addEventListener("click", playChoice);
