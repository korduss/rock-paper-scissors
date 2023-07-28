const playerSelection = (prompt("Rock, Paper or Scissors?")).toLowerCase();

const types = ["rock", "paper", "scissors"]
function getComputerChoice(){
    return types[Math.floor(Math.random() * 3)];
}

function singleRound(playerSelection, computerSelection){
    console.log(computerSelection);
    console.log(playerSelection);
    if(playerSelection == "rock" && computerSelection == "scissors"){
        return "Great Job! Rock beat scissors";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        return "Great Job! Paper beat rock";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        return "Great Job! Scissors beat paper";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        return "You Lose! Paper beat rock";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        return "You Lose! Scissors beat paper";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        return "You Lose! Rock beat scissors";
    }else{
        return "Tie!!";
    }
}
console.log(singleRound(playerSelection, getComputerChoice()))