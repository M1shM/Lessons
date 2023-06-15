let diapazon = function(number1, number2) {
    if (number2 - number1 === 2) {
        return [number1 +1];
    }
    if (number2 - number1 < 2) {
        return "Please, write bigger numbers"
    }
    else {
        let x = diapazon (number1, number2 -1)
        x.push (number2 -1)
    return x;
}
}
console.log(diapazon(1, 1));
