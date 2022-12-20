const ROCK="ROCK";
const PAPER="PAPER";
const SCISSORS="SCISSORS";
const DEFAULT_USER_CHOICE= ROCK;
let gameIsRunning=false;
const startGameBtn = document.getElementById('start-game-btn');


const getPlayerChoice=function(){
    const selection=prompt(`${ROCK},${PAPER} or ${SCISSORS}?`,ROCK).toUpperCase;

    if(
selection !== ROCK &&
selection !== PAPER &&
selection !== SCISSORS
    ){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
}

const getComputerChoice= function(){
    const randomValue= Math.random();
    if(randomValue<0.34){
        return ROCK;
    } 
    else if(randomValue<0.67){
        return PAPER;
    }
    else{
        return SCISSORS;
    }
}

const getWinner=function(cChoice,pChoice){
 if(cChoice===pChoice){
return "Its a Draw";
 }
 else if(
    cChoice===ROCK && pChoice===PAPER ||
    cChoice===PAPER && pChoice===SCISSORS ||
    cChoice===SCISSORS && pChoice===ROCK 
 ){
    return "You Won";
 }
 else{
    return "You Lost";
 }
}
const start=function startGame(){
 console.log('Game is starting....')
}
startGameBtn.addEventListener("click",function(){
    if(gameIsRunning){
        return;
    }
    gameIsRunning=true;
    console.log('Game is starting...');
    const playerChoice= getPlayerChoice();
    const computerChoice = getComputerChoice();
    getWinner(computerChoice,playerChoice);
    console.log(winner);
}
 
);





