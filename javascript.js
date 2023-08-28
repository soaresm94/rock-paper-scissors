let computerPoints = 0;
let playerPoints = 0;

alert("YOU'LL BE PLAYING A 'BEST OF 3' MATCH OF ROCK, PAPER, SCISSORS AGAINST THE COMPUTER, GOOD LUCK!")

function game (){

    let arr = ["Rock", "Paper", "Scissors"];

    function getComputerChoice(){
        return (arr[(Math.floor(Math.random() * arr.length))]);
    }

    let computerChoice = getComputerChoice();
    let playerChoice = prompt("Do you choose Rock, Paper or Scissors?");

    if(playerChoice === computerChoice){
    console.log("You chose " + playerChoice + ". Computer chose " + computerChoice +". You draw!");
    
    }else if(playerChoice ==="Rock" && computerChoice === "Paper"){
    console.log("You chose Rock. Computer chose Paper. You lose!")
    computerPoints = computerPoints+1;

    }else if(playerChoice ==="Rock" && computerChoice === "Scissors"){
    console.log("You chose Rock. Computer chose Scissors. You win!")
    playerPoints = playerPoints+1;
    
    }else if(playerChoice ==="Paper" && computerChoice === "Rock"){
    console.log("You chose Paper. Computer chose Rock. You win!")
    playerPoints = playerPoints+1;
    
    }else if(playerChoice ==="Paper" && computerChoice === "Scissors"){
    console.log("You chose Paper. Computer chose Scissorss. You lose!")
    computerPoints = computerPoints+1;
    
    }else if(playerChoice ==="Scissors" && computerChoice === "Paper"){
        console.log("You chose Scissors. Computer chose Paper. You win!")
        playerPoints = playerPoints+1;
            
    }else if(playerChoice ==="Scissors" && computerChoice === "Rock"){
        console.log("You chose Scissor. Computer chose Rock. You lose!")
        computerPoints = computerPoints+1;
    }
}

while((playerPoints<2)&&(computerPoints<2)){
    game();
    console.log("Player points is: " + playerPoints + ". Computer points is: " + computerPoints + ".");
}

if(playerPoints > computerPoints){
    console.log("CONGRATULATIONS! YOU WIN!!!");
}else{
    console.log("YOU LOSE!");   
}
