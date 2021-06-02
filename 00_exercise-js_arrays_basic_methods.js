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

function sumDigits



  console.log(sumDigits(42));

  
  //resultat 6