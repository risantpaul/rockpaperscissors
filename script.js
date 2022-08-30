function getComputerChoice(){
    let computerChoice=Math.floor(Math.random()*3);
    if(computerChoice==0){
        computerChoice="rock";
    } else if(computerChoice==1){
        computerChoice="paper";
    } else {
        computerChoice="scissors";
    }
    return computerChoice;
}

function playRound(playerChoice, computerChoice){
    if(playerChoice==computerChoice){
        return 0;
    } else if(playerChoice=="rock" && computerChoice=="scissors" || 
    playerChoice=="paper" && computerChoice=="rock" ||
    playerChoice=="scissors" && computerChoice=="paper"){
        return 1;
    } else if(computerChoice=="rock" && playerChoice=="scissors" || 
    computerChoice=="paper" && playerChoice=="rock" ||
    computerChoice=="scissors" && playerChoice=="paper"){
        return 2;
    }
}

function game(){
    let playerScore=0;
    let computerScore=0;

    for(let i=0; i<5; i++) {
        let playerChoice="rock"
        notReady=true
        while(notReady) {
            playerChoice=prompt("Pick rock, paper, or scissors please!")
            playerChoice=playerChoice.toLowerCase();
            if(playerChoice!="rock" && playerChoice!="paper" && playerChoice!="scissors") {
                continue;
            } else {
                break;
            }
        }

        const computerChoice = getComputerChoice();
        winner = playRound(playerChoice, computerChoice);
        if (winner==1){
            playerScore++;
            console.log(`Good job, you won! The score is ${playerScore} to ${computerScore}`);
        } else if (winner==2){
            computerScore++;
            console.log(`Unfortunate, you lost to the computer! The score is ${playerScore} to ${computerScore}`);
        } else{
            console.log(`Tied! The score is ${playerScore} to ${computerScore}`);
        }
    }
}