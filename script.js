// Declare score variables
let humanScore = 0;
let computerScore = 0;

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