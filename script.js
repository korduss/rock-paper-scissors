const types = ["rock", "paper", "scissors"]
function getComputerChoice(){
    return types[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice());