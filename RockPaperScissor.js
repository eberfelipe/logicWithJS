const play1 = "rock";
const play2 = "scissors";

function determineWinner(play1, play2) {
    const rules = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (play1 === play2) {
        return "tie";
    } else if (rules[play1] === play2) {
        return play1;
    } else {
        return play2;
    }
}

console.log(determineWinner(play1, play2));
