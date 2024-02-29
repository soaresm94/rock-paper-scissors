let computerPoints = 0;
let playerPoints = 0;

alert("YOU'LL BE PLAYING A 'BEST OF 3' MATCH OF ROCK, PAPER, SCISSORS AGAINST THE COMPUTER, GOOD LUCK!")

const scorePlayer = document.querySelector("#scorePlayer");
const scoreComputer = document.querySelector("#scoreComputer");
const results = document.querySelector("#resultsContainer");
const btn = document.querySelectorAll("button");





function playGameRock (){

    const arr = ["Rock", "Paper", "Scissors"];

    function getComputerChoice(){
        return (arr[(Math.floor(Math.random() * arr.length))]);
    }

    let computerChoice = getComputerChoice();
    let playerChoice = "rock";

    if(playerChoice.toLowerCase() === computerChoice.toLowerCase()){
    results.textContent=("You chose " + playerChoice.toLowerCase() + ". Computer chose " + computerChoice.toLowerCase() +". You draw!");
    
    }else if(playerChoice.toLowerCase() ==="rock" && computerChoice.toLowerCase() === "paper"){
    results.textContent=("You chose rock. Computer chose paper. You lose!")
    computerPoints = computerPoints+1;

    }else if(playerChoice.toLowerCase() ==="rock" && computerChoice.toLowerCase() === "scissors"){
    results.textContent=("You chose rock. Computer chose scissors. You win!")
    playerPoints = playerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="paper" && computerChoice.toLowerCase() === "rock"){
    results.textContent=("You chose paper. Computer chose rock. You win!")
    playerPoints = playerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="paper" && computerChoice.toLowerCase() === "scissors"){
    results.textContent=("You chose paper. Computer chose scissorss. You lose!")
    computerPoints = computerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="scissors" && computerChoice.toLowerCase() === "paper"){
        results.textContent=("You chose scissors. Computer chose paper. You win!")
        playerPoints = playerPoints+1;
            
    }else if(playerChoice.toLowerCase() ==="scissors" && computerChoice.toLowerCase() === "rock"){
        results.textContent=("You chose scissors. Computer chose rock. You lose!")
        computerPoints = computerPoints+1;
    }
    
    scorePlayer.textContent = "PLAYER " + playerPoints;
    scoreComputer.textContent = "COMPUTER " + computerPoints;
    
    if(playerPoints === 5){
        resultsContainer.textContent = ("PLAYER IS THE WINNER!");
        btn.forEach((button)=>{
            button.disabled = true;})
    }else if(computerPoints === 5){
        resultsContainer.textContent = ("COMPUTER IS THE WINNER!");
        btn.forEach((button)=>{
            button.disabled = true;})
    }

   
}

function playGamePaper (){

    const arr = ["Rock", "Paper", "Scissors"];

    function getComputerChoice(){
        return (arr[(Math.floor(Math.random() * arr.length))]);
    }

    let computerChoice = getComputerChoice();
    let playerChoice = "paper";

    if(playerChoice.toLowerCase() === computerChoice.toLowerCase()){
    results.textContent=("You chose " + playerChoice.toLowerCase() + ". Computer chose " + computerChoice.toLowerCase() +". You draw!");
    
    }else if(playerChoice.toLowerCase() ==="rock" && computerChoice.toLowerCase() === "paper"){
    results.textContent=("You chose rock. Computer chose paper. You lose!")
    computerPoints = computerPoints+1;

    }else if(playerChoice.toLowerCase() ==="rock" && computerChoice.toLowerCase() === "scissors"){
    results.textContent=("You chose rock. Computer chose scissors. You win!")
    playerPoints = playerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="paper" && computerChoice.toLowerCase() === "rock"){
    results.textContent=("You chose paper. Computer chose rock. You win!")
    playerPoints = playerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="paper" && computerChoice.toLowerCase() === "scissors"){
    results.textContent=("You chose paper. Computer chose scissorss. You lose!")
    computerPoints = computerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="scissors" && computerChoice.toLowerCase() === "paper"){
        results.textContent=("You chose scissors. Computer chose paper. You win!")
        playerPoints = playerPoints+1;
            
    }else if(playerChoice.toLowerCase() ==="scissors" && computerChoice.toLowerCase() === "rock"){
        results.textContent=("You chose scissors. Computer chose rock. You lose!")
        computerPoints = computerPoints+1;
    }
   
    scorePlayer.textContent = "PLAYER " + playerPoints;
    scoreComputer.textContent = "COMPUTER " + computerPoints;

    if(playerPoints === 5){
        resultsContainer.textContent = ("PLAYER IS THE WINNER!");
        btn.forEach((button)=>{
            button.disabled = true;})
    }else if(computerPoints === 5){
        resultsContainer.textContent = ("COMPUTER IS THE WINNER!");
        btn.forEach((button)=>{
            button.disabled = true;})
    }
}

function playGameScissors (){

    const arr = ["Rock", "Paper", "Scissors"];

    function getComputerChoice(){
        return (arr[(Math.floor(Math.random() * arr.length))]);
    }

    let computerChoice = getComputerChoice();
    let playerChoice = "scissors";

    if(playerChoice.toLowerCase() === computerChoice.toLowerCase()){
    results.textContent=("You chose " + playerChoice.toLowerCase() + ". Computer chose " + computerChoice.toLowerCase() +". You draw!");
    
    }else if(playerChoice.toLowerCase() ==="rock" && computerChoice.toLowerCase() === "paper"){
    results.textContent=("You chose rock. Computer chose paper. You lose!")
    computerPoints = computerPoints+1;

    }else if(playerChoice.toLowerCase() ==="rock" && computerChoice.toLowerCase() === "scissors"){
    results.textContent=("You chose rock. Computer chose scissors. You win!")
    playerPoints = playerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="paper" && computerChoice.toLowerCase() === "rock"){
    results.textContent=("You chose paper. Computer chose rock. You win!")
    playerPoints = playerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="paper" && computerChoice.toLowerCase() === "scissors"){
    results.textContent=("You chose paper. Computer chose scissorss. You lose!")
    computerPoints = computerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="scissors" && computerChoice.toLowerCase() === "paper"){
        results.textContent=("You chose scissors. Computer chose paper. You win!")
        playerPoints = playerPoints+1;
            
    }else if(playerChoice.toLowerCase() ==="scissors" && computerChoice.toLowerCase() === "rock"){
        results.textContent=("You chose scissors. Computer chose rock. You lose!")
        computerPoints = computerPoints+1;
    }

    scorePlayer.textContent = "PLAYER " + playerPoints;
    scoreComputer.textContent = "COMPUTER " + computerPoints;

    if(playerPoints === 5){
        resultsContainer.textContent = ("PLAYER IS THE WINNER!");
        btn.forEach((button)=>{
            button.disabled = true;})
    }else if(computerPoints === 5){
        resultsContainer.textContent = ("COMPUTER IS THE WINNER!");
        btn.forEach((button)=>{
            button.disabled = true;})
    }
}

const rock = document.querySelector("#rock");
rock.addEventListener("click",playGameRock);


const paper = document.querySelector("#paper");
paper.addEventListener("click",playGamePaper);

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click",playGameScissors);



 


 




