const character = "E";

function classifyCharacter(character) {
    const vowels = "AEIOUaeiou";
    const numbers = "0123456789";

    if (vowels.includes(character)) {
        if (character === character.toUpperCase()) {
            return "Uppercase vowel";
        } else {
            return "Lowercase vowel";
        }
    } else if (numbers.includes(character)) {
        return "Number";
    } else {
        return "Consonant";
    }
}

console.log(classifyCharacter(character));
