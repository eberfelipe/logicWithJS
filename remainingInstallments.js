const productValue = 100000; // Product value in cents
const installmentQuantity = 10;
const amountPaid = 30000; // Amount already paid, in cents

// Calculating the value of each installment in dollars
const installmentValueInDollars = (productValue / installmentQuantity) / 100;

// Calculating the total number of installments paid
const installmentsPaid = Math.floor(amountPaid / (productValue / installmentQuantity));

// Calculating how many installments remain
const remainingInstallments = installmentQuantity - installmentsPaid;

console.log(`There are ${remainingInstallments} installments of $${installmentValueInDollars.toFixed(2)} left.`);
