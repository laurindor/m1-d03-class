/**
 * Solution of basic methods exercise
 */

 const unsortedNumbers = [100, 1974, 56, 0, -1, 25, 7, 9, 15, 10];
 const words = [
   "Hello",
   "Goodbye",
   "AA",
   "First",
   "A",
   "a",
   "Second",
   "b",
   "Third",
 ];
 
 console.log("unsorted", unsortedNumbers);
 
 unsortedNumbers.sort(function (a, b) {
   return a - b;
 });
 0
 console.log("sorted", unsortedNumbers);
 
 let numbersPrimes = [25, 7, 9, 15, 10];
 
 numbersPrimes.forEach(function (value) {
   console.log(checkPrime(value));
 });
 
 // for (number of numbersPrimes) console.log(checkPrime(number));
 
 function checkPrime(number) {
   if (number === 0 || number === 1) return false;
 
   for (let i = 2; i <= Math.sqrt(number); i++) {
     if (number % i === 0) return false;
   }
   return true;
 }
 
 function checkPalindrome(string) {
   const result = string.split("").reverse().join("") === string;
   return result;
 }
 
 //console.log(checkPalindrome("anna"));
 
 const arrayOfNumbers = [1, 2, 3, 4, 5, 6];
 
 function sumArray(arrayOfNumbers) {
   let sum = 0;
   for (num of arrayOfNumbers) {
     sum += num;
   }
   return sum;
 }
 
 //console.log(sumArray(arrayOfNumbers));
 

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
console.log(number.toString().split('').reduce(function(r, n) { return r + parseInt(n) }, 0));

  //resultat 6

//SECOND NUMBERS

//Second lowest
let someNumbers = [4,2,6,9,5];



someNumbers.sort(function (b,a){
  return b-a
}); 


console.log(someNumbers[1]); //result: 4


let someNumbers = [4,2,6,9,5];

//Second Highest

someNumbers.sort(function(a,b){
    return b-a;
});

console.log(someNumbers[1]); //the second highest: 6

