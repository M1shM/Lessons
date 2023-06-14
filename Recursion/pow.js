
function pow(tiv, exp) {
 if (exp === 0){
   return 1;
 } 
 return tiv * pow (tiv, exp - 1)
}
console.log(pow(4, 0));


