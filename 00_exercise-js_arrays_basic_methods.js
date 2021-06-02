/**
 * Solution of basic methods exercise
 */

//PRIMES

 function checkPrime(number) {
    if (number === 0 || number === 1) return false;
  
    for (let i = 2; i < number; i++) {
      if (number % i === 0) return false;
    }
    return true;
  }
  
  console.log(25, checkPrime(25));
  console.log(7, checkPrime(7));
  console.log(9, checkPrime(9));
  console.log(15, checkPrime(15));
  console.log(10, checkPrime(10));

  


// DIGIT SUM 

let number = 42;
console.log(number.toString().split('').reduce(function(r, n) { 
    return r + parseInt(n) }, 0));

  //console.log(sumDigits(42));
  
  //resultat 6