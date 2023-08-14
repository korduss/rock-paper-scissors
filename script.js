

const types = ["rock", "paper", "scissors"]
function getComputerChoice(){
    return types[Math.floor(Math.random() * 3)];
}

function singleRound(playerSelection, computerSelection){
    console.log("Computer choice:" + computerSelection);
    console.log("Player choice:" + playerSelection);
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
function game(){
    let computerPoints = 0;
    let playerPoints = 0;
    for(let i=0; i<5; i++){
        let playerSelection = (prompt("Rock, Paper or Scissors?")).toLowerCase();

        let round = singleRound(playerSelection, getComputerChoice());
        if(round.charAt(0) == "G"){
            playerPoints++;
            console.log("Player is win in this round");
            console.log(`Player score: ${playerPoints}`);
            console.log(`Computer Score: ${computerPoints}`);
        }else if(round.charAt(0) == "Y"){
            computerPoints++;
            console.log("Computer is win in this round");
            console.log(`Player score: ${playerPoints}`);
            console.log(`Computer Score: ${computerPoints}`);
        }else{
            console.log("Tie!!!");
            console.log(`Player score: ${playerPoints}`);
            console.log(`Computer Score: ${computerPoints}`);
        }
    }
    if(playerPoints > computerPoints){
        console.log(`Player win ${playerPoints} to ${computerPoints}`);
    }else if (computerPoints > playerPoints){
        console.log(`Computer win ${computerPoints} to ${playerPoints}`);
    }else{
        console.log(`Tie!! (${playerPoints} - ${computerPoints})`);
    }
}
const btnRock = document.querySelector("#rock");
const btnPaper = document.querySelector("#paper");
const btnScissors = document.querySelector("#scissors");
btnRock.addEventListener('click', ()=>{
    const playerType = "rock";
    console.log(singleRound(playerType, getComputerChoice()));
});
btnPaper.addEventListener('click', ()=>{
    const playerType = "paper";
    console.log(singleRound(playerType, getComputerChoice()));
});
btnScissors.addEventListener('click', ()=>{
    const playerType = "scissors";
    console.log(singleRound(playerType, getComputerChoice()));
});
//game();