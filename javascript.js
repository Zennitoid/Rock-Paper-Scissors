function getComputerChoice(){
    options = ["rock", "paper", "scissors"];
    index = Math.floor(Math.random() * 3);
    console.log("Computer chose: ", options[index])
}

function getHumanChoice(){
    return prompt("Rock, paper or scissors?")
}

function playRound(humanChoice, computerChoice){
    let choice = humanChoice.toLowerCase()
    console.log(choice)
    if (computerChoice === "rock"){
        if (choice === "paper") {
            humanScore++
            console.log("You win! Paper beats Rock")
        } else if (choice === "scissors") {
            humanScore--
            console.log("You lose! Rock beats Scissors")
        } else {
            console.log("It's a tie!")
        }

    } else if (computerChoice === "paper") {
        if (choice === "scissors") {
            humanScore++
            console.log("You win! Scissors beats Paper")
        } else if (choice === "rock") {
            humanScore--
            console.log("You lose! Paper beats Rock")
        } else {
            console.log("It's a tie!")
        }

    } else {
        if (choice === "rock") {
            humanScore++
            console.log("You win! Rock beats Scissors")
        } else if (choice === "paper") {
            humanScore--
            console.log("You lose! Scissors beats Paper")
        } else {
            console.log("It's a tie!")
        }

    }
}

let humanScore = 0
let computerScore = 0

playRound(getHumanChoice(), getComputerChoice())
