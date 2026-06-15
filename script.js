// SET score variables
let humanScore = 0;
let computerScore = 0;

const buttonPlayer = document.querySelectorAll('button') 

buttonPlayer.forEach(button => {
    button.addEventListener('click', (event) => {

    const humanSelection = event.target.className;
    const computerSelection = getComputerChoice();

    playRound(computerSelection, humanSelection);
    console.log(`${humanScore} and ${computerScore}`);
    });
});


// Function that takes two choices and outputs the results of the output
function playRound(computerChoice, humanChoice) {
    // SET humanChoice TO case-insensitive
    humanChoice = humanChoice.toLowerCase();

    const resultsDiv = document.querySelector('.results')
    const results = document.createElement('div')

    // IF computerChoice IS same as humanChoice THEN
    if (computerChoice === humanChoice) {
        // Print "Tie!"
        results.textContent = `It's a TIE! ${humanChoice} equals ${computerChoice}`;
        resultsDiv.replaceChildren(results)
        
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || 
            (humanChoice === "paper" && computerChoice === "rock") || 
            (humanChoice === "scissors" && computerChoice === "paper")) {
                results.textContent = `You WIN! ${humanChoice} beats ${computerChoice}`;
                resultsDiv.replaceChildren(results);
                humanScore++;
            }   
    else {
       results.textContent = `You LOSE! ${humanChoice} gets beaten by ${computerChoice}`;
       resultsDiv.replaceChildren(results);
       computerScore++;
    }
}


// Function that randomly returns "rock", "paper", or "scissors"
function getComputerChoice() {
    // SET randomNumber TO random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // IF randomNumber IS 1 THEN
    if (randomNumber === 1) {
         // RETURN "rock"
        return "rock";
    }
       
    // IF randomNumber IS 2 THEN
    if (randomNumber === 2) {
        // RETURN "paper"
        return "paper";
    }
        
    // ELSE
    else {
        // RETURN "scissors"
        return "scissors";
    }
}
