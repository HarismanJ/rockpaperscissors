const imageOne= document.querySelectorAll(".images>img");
const round = document.querySelector(".metadata>h1");
const playerPoints=document.querySelector(".player-points");
const computerPoints=document.querySelector(".computer-points");
let humanScore=0;
let computerScore=0;
let roundVal=1;



imageOne[0].addEventListener("mouseover", ()=>{
    imageOne[0].style.cssText="border-style: solid; border-width:10px; border-color:rgba(255, 255, 255, 0.82); border-radius:10px; opacity: 0.7";
});
imageOne[1].addEventListener("mouseover", ()=>{
    imageOne[1].style.cssText="border-style: solid; border-width:10px; border-color:rgba(255, 255, 255, 0.82); border-radius:10px; opacity: 0.7";
});
imageOne[2].addEventListener("mouseover", ()=>{
    imageOne[2].style.cssText="border-style: solid; border-width:10px; border-color:rgba(255, 255, 255, 0.82); border-radius:10px; opacity: 0.7";
});


imageOne[0].addEventListener("mouseout", ()=>{
    imageOne[0].style.removeProperty("border");
    imageOne[0].style.opacity="1";
});

imageOne[1].addEventListener("mouseout", ()=>{
    imageOne[1].style.removeProperty("border");
    imageOne[1].style.opacity="1";
});

imageOne[2].addEventListener("mouseout", ()=>{
    imageOne[2].style.removeProperty("border");
    imageOne[2].style.opacity="1";
});




imageOne[0].addEventListener("mousedown", ()=>{
    imageOne[0].style.cssText = "border-style:double; border-width:10px; border-color:lightgreen;";
    
});
imageOne[1].addEventListener("mousedown", ()=>{
    imageOne[1].style.cssText = "border-style:double; border-width:10px; border-color:lightgreen;";
});
imageOne[2].addEventListener("mousedown", ()=>{
    imageOne[2].style.cssText = "border-style:double; border-width:10px; border-color:lightgreen;";
    
});


function computerChoiceDisplay(temp){
    imageOne[temp].style.backgroundColor="#FFCCCB";
     setTimeout(()=>{
        imageOne[temp].style.backgroundColor="transparent";
     },3000);
}

imageOne[0].addEventListener("click", ()=>{
    const temp = compChoice();
    playRound(0,temp);
    computerChoiceDisplay(temp);
    
    
});
imageOne[1].addEventListener("click", ()=>{
    const temp=compChoice();
     playRound(1,temp);
     computerChoiceDisplay(temp);
     

});
imageOne[2].addEventListener("click", ()=>{
    const temp =compChoice();
     playRound(2,temp);
     computerChoiceDisplay(temp);
});





function compChoice(){
    return Math.floor(Math.random()*3);
}


function playRound(playerChoice,compChoice){
    const compTurn=compChoice;
    const humanTurn=playerChoice;
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
    
    if(roundVal<5){round.textContent=`Round ${++roundVal}`; computerPoints.textContent=computerScore; playerPoints.textContent=humanScore;}

}