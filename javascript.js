let computerPoints = 0;
let playerPoints = 0;

alert("YOU'LL BE PLAYING A 'BEST OF 3' MATCH OF ROCK, PAPER, SCISSORS AGAINST THE COMPUTER, GOOD LUCK!")

function playGame (){

    const arr = ["Rock", "Paper", "Scissors"];

    function getComputerChoice(){
        return (arr[(Math.floor(Math.random() * arr.length))]);
    }

    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Do you choose Rock, Paper or Scissors?");

    if(playerChoice.toLowerCase() === computerChoice.toLowerCase()){
    console.log("You chose " + playerChoice.toLowerCase() + ". Computer chose " + computerChoice.toLowerCase() +". You draw!");
    
    }else if(playerChoice.toLowerCase() ==="rock" && computerChoice.toLowerCase() === "paper"){
    console.log("You chose rock. Computer chose paper. You lose!")
    computerPoints = computerPoints+1;

    }else if(playerChoice.toLowerCase() ==="rock" && computerChoice.toLowerCase() === "scissors"){
    console.log("You chose rock. Computer chose scissors. You win!")
    playerPoints = playerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="paper" && computerChoice.toLowerCase() === "rock"){
    console.log("You chose paper. Computer chose rock. You win!")
    playerPoints = playerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="paper" && computerChoice.toLowerCase() === "scissors"){
    console.log("You chose paper. Computer chose scissorss. You lose!")
    computerPoints = computerPoints+1;
    
    }else if(playerChoice.toLowerCase() ==="scissors" && computerChoice.toLowerCase() === "paper"){
        console.log("You chose scissors. Computer chose paper. You win!")
        playerPoints = playerPoints+1;
            
    }else if(playerChoice.toLowerCase() ==="scissors" && computerChoice.toLowerCase() === "rock"){
        console.log("You chose scissors. Computer chose rock. You lose!")
        computerPoints = computerPoints+1;
    }
}

while((playerPoints<2)&&(computerPoints<2)){
    playGame();
    console.log("Player points is: " + playerPoints + ". Computer points is: " + computerPoints + ".");
}

if(playerPoints > computerPoints){
   alert("CONGRATULATIONS! YOU WIN!!!");
}else{
    alert("YOU LOSE!");   
}

//this has been merged