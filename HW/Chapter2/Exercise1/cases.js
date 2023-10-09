const factorial = (n) => {    
    if (n < 1) return 1;
    return n * factorial (n-1);
};

const permutation = (n, r) => factorial(n) / factorial(n-r);
const combination = (n, r) => (factorial(n) / factorial(n-r)) / factorial(r);
const multiPermutation = (n, r) => n ** r;
const multiCombination = (n, r) => combination(n + r - 1, r);

module.exports = {

permutation,
combination,
multiPermutation,
multiCombination,

};