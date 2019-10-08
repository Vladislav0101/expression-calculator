function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    let sum = 0;
    const numbArr = expr.split(" + ");
    for(let i = 0; i < numbArr.length; i++){
        let numSum = Number(numbArr[i]);
        sum += numSum;
    }
    // const number = numbArr.map(noStr => +noStr);
    // const initialValue = 0.0;
    // let result = numbArr.reduce((sum, num) => sum + num, initialValue);
    return sum;
}

module.exports = {
    expressionCalculator
}