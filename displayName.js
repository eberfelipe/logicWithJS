const firstName = "Mario";
const lastName = "";
const nickname = "";

function displayName(firstName, lastName, nickname) {
    console.log(nickname || `${firstName} ${lastName}`.trim() || firstName);
}

displayName(firstName, lastName, nickname);
