function getComputerChoice(){
    options = ["rock", "paper", "scissors"];
    index = Math.floor(Math.random() * 3);
    console.log(options[index])
}

function getHumanChoice(){
    return prompt("Rock, paper or scissors?")
}



getHumanChoice()
getComputerChoice()
