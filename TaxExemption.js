const isRetired = false;
const hasSeriousIllness = false;
const totalIncomeInCents = 3000000; // in cents

function checkTaxExemption(isRetired, hasSeriousIllness, totalIncomeInCents) {
    if (isRetired || hasSeriousIllness) {
        return "EXEMPT";
    } else if (totalIncomeInCents <= 2855970) { // Converting the threshold to cents for comparison
        return "NO TAX REQUIRED";
    } else {
        return "TAXABLE";
    }
}

console.log(checkTaxExemption(isRetired, hasSeriousIllness, totalIncomeInCents));
