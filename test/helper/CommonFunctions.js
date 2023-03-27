
exports.calculateFeeForP2PLocal=(amount, senderCountry, receiverCountry)=>{
    const total=0.00;
    if (senderCountry === "UAE" && receiverCountry === "UAE") {
        total = (amount >= 100) ? (amount + 2) : amount;
        return total;
    } else if (senderCountry === "KENYA" && receiverCountry === "KENYA") {
        total = amount + 35;
        return total;
    } else if (senderCountry === "INTL" && receiverCountry === "INTL") {
        let x =2, y =100;
        total = amount/(x*y);
        return total.toFixed(2);
    } else if(senderCountry === "UAE" && receiverCountry === "INTL"){
        return total.toFixed(2);
    } 
}

exports.calculateConversionRate = (amount,senderCountry, receiverCountry) =>{
    const total=0.00;
    if (senderCountry === "UAE" && receiverCountry === "INTL") {
        total = (amount * 0.27);
        return total.toFixed(2);
    }
}
