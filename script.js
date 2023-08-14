

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
    
    if(playerSelection == "rock" && computerSelection == "scissors"){
        result.textContent = "Great Job! Rock beat scissors";
        playerScore ++;
    }else if(playerSelection == "paper" && computerSelection == "rock"){
        result.textContent = "Great Job! Paper beat rock";
        playerScore ++;
    }else if(playerSelection == "scissors" && computerSelection == "paper"){
        result.textContent = "Great Job! Scissors beat paper";
        playerScore ++;
    }else if(playerSelection == "rock" && computerSelection == "paper"){
        result.textContent = "You Lose! Paper beat rock";
        computerScore++;
    }else if(playerSelection == "paper" && computerSelection == "scissors"){
        result.textContent = "You Lose! Scissors beat paper";
        computerScore++;
    }else if(playerSelection == "scissors" && computerSelection == "rock"){
        result.textContent = "You Lose! Rock beat scissors";
        computerScore++;
    }else{
        result.textContent = "Tie!!";
    }
    p1.textContent=`Computer choice: ${computerSelection}, score: ${computerScore}`;
    p2.textContent=`Player score: ${playerScore}`;
    results.appendChild(p1);
    results.appendChild(p2);
    results.appendChild(result);
    if(playerScore == 5){
        results.textContent = "Player Win!!!";
    }else if(computerScore == 5){
        results.textContent = "Computer Win!!";
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
