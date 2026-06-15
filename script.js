// SET score variables
let humanScore = 0;
let computerScore = 0;


const buttonPlayer = document.querySelectorAll('button') 

buttonPlayer.forEach(button => {
    button.addEventListener('click', (event) => {

    const humanSelection = event.target.className;
    const computerSelection = getComputerChoice();

    playRound(computerSelection, humanSelection);

    });
});



// Function that takes two choices and outputs the results of the output
function playRound(computerChoice, humanChoice) {
    // SET humanChoice TO case-insensitive
    humanChoice = humanChoice.toLowerCase();

    // IF computerChoice IS same as humanChoice THEN
    if (computerChoice === humanChoice) {
        // Print "Tie!"
        console.log(`It's a TIE! ${humanChoice} equals ${computerChoice}`);
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper")) {
                console.log(`You WIN! ${humanChoice} beats ${computerChoice}`);
            }   
    else {
        console.log(`You LOSE! ${humanChoice} gets beaten by ${computerChoice}`);
    }
}


// Function that randomly returns "rock", "paper", or "scissors"
function getComputerChoice() {
    // SET randomNumber TO random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // IF randomNumber IS 1 THEN
    if (randomNumber === 1) {
         // RETURN "rock"
        console.log("rock");
        return "rock";
    }
       
    // IF randomNumber IS 2 THEN
    if (randomNumber === 2) {
        // RETURN "paper"
        console.log("paper")
        return "paper";
    }
        
    // ELSE
    else {
        // RETURN "scissors"
        console.log("scissors");
        return "scissors";
    }
}
