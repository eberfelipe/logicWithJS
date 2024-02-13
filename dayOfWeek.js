const dayOfWeek = 3;

function printDayOfWeek(day) {
    const days = [
        "Sunday", // Index 0
        "Monday", // Index 1
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday" // Index 6
    ];

    // Adjusting the index to start from 1 (Monday) to 7 (Sunday)
    if (day >= 1 && day <= 7) {
        console.log(days[day - 1]);
    } else {
        console.log("The informed day of the week is not valid.");
    }
}

printDayOfWeek(dayOfWeek);
