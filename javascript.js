let humanScore = 0;
let computerScore = 0;

const btn = document.querySelectorAll("button");
const roundResultDiv = document.querySelector("#result");
const scoreboard = document.querySelector(".score");

btn.forEach(elem => elem.addEventListener("click", (event) =>{
    let target = event.target;

    switch(target.id){
        case "rock":
            playRound("rock",getComputerChoice());
            upDateScoreboard();
            if (winnerFound())endGame();
            break;
        case "paper":
            playRound("paper",getComputerChoice());
            upDateScoreboard();
            if(winnerFound())endGame();
            break;
        case "scissors":
            playRound("scissors",getComputerChoice());
            upDateScoreboard();
            if(winnerFound())endGame();
            break;
        default:
            alert("error");
    }
}));

function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    if (choice == 0){
        return "rock";
    }
    else if (choice == 2){
        return "paper";
    }
    return "scissors";
}

function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice){
        updateResult("It's a draw! Both of you played " + humanChoice);
    }
    else if ((humanChoice === "rock") && (computerChoice==="scissors")){
        updateResult(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    }
    else if (humanChoice.length > computerChoice.length){
        updateResult(`You win! ${humanChoice} beats ${computerChoice}`);
        ++humanScore;
    }
    else {
        updateResult(`You lose! ${computerChoice} beats ${humanChoice}`);
        ++computerScore;
    }
}

function updateResult(message){
    roundResultDiv.textContent = message;
}

function upDateScoreboard(){
    scoreboard.textContent = `You score: ${humanScore} Computer score: ${computerScore}`;
}

function winnerFound(){return (humanScore===5||computerScore===5);}

function endGame(){
    if (humanScore===5){
        alert("Congratulations! You win!");
    }
    else alert("Unfortunately, the computer won this time.");
    reset();
}

function reset(){
    humanScore = 0;
    computerScore = 0;
    upDateScoreboard();
    updateResult("Select your move by pressing one of the buttons");
}