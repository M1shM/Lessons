function multy(b) {
    return function arg(a){
        return a * b;
    }
}
const ar = multy(2)

console.log(ar(140.7));