const age = 18;
const hasHeartCondition = false;
const height = 180;
const isStudent = false;

function determineAccessAndPrice(age, hasHeartCondition, height, isStudent) {
    if (age < 12 || age > 65 || hasHeartCondition || height < 150) {
        return "ACCESS DENIED";
    } else if (isStudent || age < 18) {
        return "$10";
    } else {
        return "$20";
    }
}

console.log(determineAccessAndPrice(age, hasHeartCondition, height, isStudent));
