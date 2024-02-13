function determineVolleyballPosition(heightInCm) {
    if (heightInCm < 180) return "REJECTED";
    if (heightInCm <= 185) return "LIBERO";
    if (heightInCm <= 195) return "WINGER";
    if (heightInCm <= 205) return "OPPOSITE";
    return "CENTER";
}

const heightInCm = 185;
console.log(determineVolleyballPosition(heightInCm));
