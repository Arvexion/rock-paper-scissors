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
        console.log("Tie!");
    }

    // ELSE IF computerChoice IS rock AND humanChoice IS paper THEN
    else if ((computerChoice === "rock") && (humanChoice === "paper")) {
         // PRINT "You win! Paper beats Rock"
        console.log("You win! Paper beats Rock");
        humanScore++;
    }
    
    // ELSE IF computerChoice IS rock AND humanChoice IS scissors THEN
    else if ((computerChoice === "rock") && (humanChoice === "scissors")) {
        // PRINT "You lose! Rock beats scissors"
        console.log("You lose! Rock beats scissors");
        computerScore++;
    }

    // ELSE IF computerChoice IS paper AND humanChoice IS rock THEN
    else if ((computerChoice === "paper") && (humanChoice === "rock")) {
        // PRINT "You lose! Paper beats Rock"
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }
        
    // ELSE IF computerChoice IS paper And humanChoice IS scissors THEN
    else if ((computerChoice === "paper") && (humanChoice === "scissors")) {
         // PRINT "You win! Scissors beats Paper"
        console.log("You win! Scissors beats Paper");
        humanScore++;
    }
    
    // ELSE IF computerChoice IS scissors AND humanChoice IS paper THEN
    else if ((computerChoice === "paper") && (humanChoice === "scissors")) {
        // PRINT "You lose! Scissors beats Paper"
        console.log("You lose! Scissors beats Paper");
        computerScore++;
    }

    // ELSE computerChoice IS paper AND humanChoice IS scissors THEN 
    else {
        // PRINT "You win! Scissors beats paper"
        console.log("You win! Scissors beats Paper");
        humanScore++;
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

// Function that gets user input and returns a valid choice 
function getHumanChoice() {
    // SET userInput TO user input with prompt
    let userInput = prompt("CHOOSE: (rock) || (paper) || (scissors)")

    // IF userInput IS rock THEN
    if (userInput === "rock") {
        // RETURN "rock"
        console.log("rock");
        return "rock";
    }
        
    // IF userInput IS paper THEN
    if (userInput === "paper") {
        // RETURN "paper"
        console.log("paper")
        return "paper";
    }
        
    // IF userInput IS scissors THEN
    if (userInput === "scissors") {
        // RETURN "scissors"
        console.log("scissors");
        return "scissors";
    }
}