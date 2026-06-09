
// Function that randomly returns "rock", "paper", or "scissors"
function getComputerChoice() {
    // SET randomNumber TO random number between 1 and 3
    const randomNumber = Math.floor(Math.random() * 3) + 1;

    // IF randomNumber IS 1 THEN
    if (randomNumber === 1) {
         // RETURN "rock"
        return "rock";
        console.log("rock");
    }
       
    // IF randomNumber IS 2 THEN
    if (randomNumber === 2) {
        // RETURN "paper"
        return "paper";
        console.log("paper")
    }
        
    // IF randomNumber IS 3 THEN
    if (randomNumber === 3) {
        // RETURN "scissors"
        return "scissors";
        console.log("scissors");
    }
}

console.log(getComputerChoice());