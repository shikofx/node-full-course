const squareFunction = function(x){
    return x * x;
}

const squareArrowSimpleFunction = (x) => x * x;

const squareArrowComplexFunction = (x) => {
    c = x;
    return c * c;
}

console.log(`Usual function syntax:             square(3) = ${squareFunction(3)}`);
console.log(`Simple arrow syntax (single line): square(3) = ${squareArrowSimpleFunction(3)}`);
console.log(`Complex arrow syntax:              square(3) = ${squareArrowComplexFunction(3)}`);

