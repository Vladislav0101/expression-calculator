function eval() {
    // Do not use eval!!!
    return;
}

function expressionCalculator(expr) {
    
    const parseMultiply = (expr) => {
        const numbArr = expr.split(' * ');
        const number = numbArr.map(noStr => +noStr);
        const initialValue = 1.0;
        const result = number.reduce((acc, no) => acc * no, initialValue);
        return result;
    };
  
    const parsePlus = (expr) => {
      const numbArr = expr.split(' + ');
      const number = numbArr.map(noStr => parseMultiply(noStr));
      const initialValue = 0.0;
      const result = number.reduce((acc, no) => acc + no, initialValue);
      return result;
    };
    const parseMinus = (expr) => {
        const numbArr = expr.split(' - ');
        const number = numbArr.map(noStr => parsePlus(noStr));
        const initialValue = number[0];
        const result = number.slice(1).reduce((acc, no) => acc - no, initialValue);
        return result;
    };

    return (parseMinus(expr));
}


// let sum = 0;
    // for(let i = 0; i < numbArr.length; i++){
    //     let numSum = Number(numbArr[i]);
    //     sum += numSum;
    // }
module.exports = {
    expressionCalculator
}