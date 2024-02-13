const studentAge = 16;
const hasGuardian = false;

function checkReenrollment(studentAge, hasGuardian) {
    if (studentAge >= 18 || hasGuardian) {
        console.log("Reenrollment completed successfully");
    } else {
        console.log("It is not possible to reenroll");
    }
}

checkReenrollment(studentAge, hasGuardian);
