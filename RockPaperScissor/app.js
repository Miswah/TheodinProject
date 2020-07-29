var userScore = 0;
var cpuScore = 0;
var drawScore = 0;




function computerPlay(){
    let computerTurn = Math.floor(Math.random()*3);
    
    if(computerTurn === 0) {
        return "r";
    } else if (computerTurn === 1) {
        return "p";
    } else {
        return "s";
    }


}



function win(playerSelection, computerSelection) {
    console.log("You Win " + playerSelection+ " beats "+computerSelection+".");
    return userScore++;
}

function lose(playerSelection, computerSelection) {
    console.log("You lost "+playerSelection+" beats "+computerSelection+".");
    return cpuScore++;
}

function draw(playerSelection, computerSelection) {
    console.log("it's a draw "+playerSelection+" is same as "+computerSelection); 
    return drawScore++;
}




function game () {
    

    for (let i =0; i<5; i++) {
        const playerSelection = prompt("chose r , p , s");    
        const computerSelection = computerPlay();
        switch (playerSelection+computerSelection) {
            case "pr" :
            case "sp" :
            case "rs" :
                win(playerSelection, computerSelection);
                break;
            case "rp":
            case "ps":
            case "sr":
                lose(playerSelection, computerSelection);
                break;
            case "rr" :
            case "ss" :
            case "pp" :
                draw(playerSelection, computerSelection);
                break;
        }
    }
    console.log("******************************************************************");
    console.log("user Score is : "+userScore);
    console.log("cps score is : "+cpuScore);
    console.log("it was draw "+drawScore+" times.");
    
    if(userScore > cpuScore) {
        console.log("You win");
    } else if(cpuScore > userScore) {
        console.log("You lose");
    } else {
        console.log("It's a draw");
    }

    console.log("********************************************************************");
}
