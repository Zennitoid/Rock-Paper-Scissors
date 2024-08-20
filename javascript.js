function getComputerChoice(){
    const options = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    console.log("Computer chose: ", options[index])
    return options[index]
}

function getHumanChoice(){
    return prompt("Rock, paper or scissors?")
}

function playRound(humanChoice, computerChoice, humanScore, computerScore){
    let choice = humanChoice.toLowerCase()
    console.log("You chose: ", choice)
    if (computerChoice === "rock"){
        if (choice === "paper") {
            humanScore++
            console.log("You win! Paper beats Rock")
        } else if (choice === "scissors") {
            computerScore++
            console.log("You lose! Rock beats Scissors")
        } else {
            console.log("It's a tie!")
        }

    } else if (computerChoice === "paper") {
        if (choice === "scissors") {
            humanScore++
            console.log("You win! Scissors beats Paper")
        } else if (choice === "rock") {
            computerScore++
            console.log("You lose! Paper beats Rock")
        } else {
            console.log("It's a tie!")
        }

    } else {
        if (choice === "rock") {
            humanScore++
            console.log("You win! Rock beats Scissors")
        } else if (choice === "paper") {
            computerScore++
            console.log("You lose! Scissors beats Paper")
        } else {
            console.log("It's a tie!")
        }

    }
    return [humanScore, computerScore]
}

function playGame(){
    let humanScore = 0
    let computerScore = 0
    for (let i = 0; i < 5; i++) {
        const playerChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        [humanScore, computerScore] = playRound(playerChoice, computerChoice, humanScore, computerScore)
        console.log(`Score: Human ${humanScore}, Computer ${computerScore}`);
    }
    return [humanScore, computerScore]
}

playGame()

