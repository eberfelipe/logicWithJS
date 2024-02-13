const play1 = 5;
const play2 = 3;

function determineEvenOrOdd(play1, play2) {
    const sum = play1 + play2;
    if (sum % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

console.log(determineEvenOrOdd(play1, play2));
