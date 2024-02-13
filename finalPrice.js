const paymentType = "credit";
const productValue = 13000; // in cents

function calculateFinalPrice(paymentType, productValue) {
    let discount;

    switch (paymentType) {
        case "credit":
            discount = productValue * 0.05;
            break;
        case "check":
            discount = productValue * 0.03;
            break;
        case "debit":
        case "cash":
            discount = productValue * 0.10;
            break;
        default:
            console.log("Invalid payment method.");
            return;
    }

    const finalPrice = (productValue - discount) / 100; // Converting to dollars
    return `Amount to be paid: $${finalPrice.toFixed(2)}`;
}

console.log(calculateFinalPrice(paymentType, productValue));
