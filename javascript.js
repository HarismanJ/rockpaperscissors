const prompt = require("prompt-sync")({sigint:true});
let humanScore=0;
let computerScore=0;
function compChoice(){
    return Math.floor(Math.random()*3);
}

function humanChoice(){
    let input;
    while(true){
        input= prompt("Choose Rock(0), Paper(1), or Scissors(2): ");
        if(!isNaN(input) && +input>=0 && +input<=2){
            return +input;
        }
    }
}

function playRound(){
    const arr=["Rock","Paper","Scissors"];
    const compTurn=compChoice();
    const humanTurn=humanChoice();
    console.log(`The computer chose ${arr[compTurn]}`);
    console.log(`You choose ${arr[humanTurn]}`);
    if(compTurn===humanTurn){
        console.log("No points.");
    }
    else if((humanTurn-compTurn)==1){
        console.log("Your point!");
        humanScore++;
    }
    else{
        console.log("Computer Point!");
        computerScore++;
    }
    console.log(`Current Score: You: ${humanScore}, Computer: ${computerScore}.`);

}


function playGame(){
    //let replay=prompt("Do you want to continue? (y/n)");
    for(let i=0; i<5; i++){
        playRound();
    }
    console.log("Game Over...");
    console.log("Player score: "+humanScore);
    console.log("Computer score: "+computerScore);
    if(humanScore==computerScore){
        console.log("It's a draw!")
    }
    else{computerScore>humanScore?console.log("Computer Wins!"):console.log("You win!!!")};
}


playGame();