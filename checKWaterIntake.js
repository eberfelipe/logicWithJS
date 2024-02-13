// Amount of water ingested in liters.
const waterIntake = 2;

function checkWaterIntake(waterIntake) {
    if (waterIntake < 1.5) {
        return "High Risk - You are drinking very little water, drink more water!";
    } else if (waterIntake <= 3) {
        return "Moderate Risk - You are drinking too little water, drink more!";
    } else {
        return "Low Risk - You are drinking a good amount of water, congratulations!";
    }
}

console.log(checkWaterIntake(waterIntake));
