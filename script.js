

const types = ["rock", "paper", "scissors"]
function getComputerChoice(){
    return types[Math.floor(Math.random() * 3)];
}
const results = document.querySelector("#results");
let playerScore = 0;
let computerScore = 0;
function singleRound(playerSelection, computerSelection){
    const p1 = document.createElement('p');
    const p2 = document.createElement('p');
    const result = document.createElement('p');
    p1.textContent=`Computer choice: ${computerSelection}`;
    p2.textContent=`Player choice: ${playerSelection}`;
    results.appendChild(p1);
    results.appendChild(p2);
    if(playerSelection == "rock" && computerSelection == "scissors"){
        result.textContent = "Great Job! Rock beat scissors";
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        result.textContent = "Great Job! Paper beat rock";
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        result.textContent = "Great Job! Scissors beat paper";
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        result.textContent = "You Lose! Paper beat rock";
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        result.textContent = "You Lose! Scissors beat paper";
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        result.textContent = "You Lose! Rock beat scissors";
    }else{
        result.textContent = "Tie!!";
    }
    results.appendChild(result);
    
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
    singleRound(playerType, getComputerChoice());
});
btnPaper.addEventListener('click', ()=>{
    const playerType = "paper";
    singleRound(playerType, getComputerChoice());
    
});
btnScissors.addEventListener('click', ()=>{
    const playerType = "scissors";
    singleRound(playerType, getComputerChoice());
    
});
//game();