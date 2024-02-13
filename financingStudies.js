const monthlyIncomeInCents = 300000; // $3000.00
const elapsedMonths = 12;
const totalAlreadyPaidByStudent = 1000000; // $10,000.00

function calculateInstallment(monthlyIncomeInCents, elapsedMonths, totalAlreadyPaidByStudent) {
    if (elapsedMonths > 60 || totalAlreadyPaidByStudent >= 1800000) {
        return "The installment for this month is $0.00. You don't owe anything anymore!";
    } else if (monthlyIncomeInCents < 200000) { // $2000.00
        return "The installment for this month is $0.00. No payment is due because the student's income is below the minimum of $2000.";
    } else {
        const installmentValue = (monthlyIncomeInCents * 18) / 100;
        return `The installment for this month is $${(installmentValue / 100).toFixed(2)}`;
    }
}

console.log(calculateInstallment(monthlyIncomeInCents, elapsedMonths, totalAlreadyPaidByStudent));
