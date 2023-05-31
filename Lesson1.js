function factorial(tiv) {
    if (tiv === 1) return tiv;
    return tiv * factorial(tiv - 1);
}
console.log(factorial(5));