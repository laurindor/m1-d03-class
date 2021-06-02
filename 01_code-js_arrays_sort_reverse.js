/**
 * Code along Array sort() reverse()
 */

// Naive explanation
const numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];

numbers.sort();

console.log(numbers);
// [ 0, 1, 112, 18, 22, 223, 23, 64, 68, 9, 99 ]

function compare(a, b) {
  if (a < b) return -1; // a is less than b
  if (a > b) return 1; // a is greater than b
  if (a === b) return 0; // a equals b
}

// Detailed explanation
numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
// ES5
numbers.sort(function (a, b) {
  return a - b;
});

// ES6
numbers.sort((a, b) => a - b);

console.log(numbers);
// [ 0, 1, 9, 18, 22, 23, 64, 68, 99, 112, 223 ]

// Inverting the function
numbers = [22, 23, 99, 68, 1, 0, 9, 112, 223, 64, 18];
// ES5
numbers.sort(function (a, b) {
  return b - a;
});

// ES6
numbers.sort((a, b) => b - a);

console.log(numbers);
// [ 223, 112, 99, 68, 64, 23, 22, 18, 9, 1, 0 ]

// Sorting strings
// Naive methods
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

words.sort();

console.log(words);
// ["A", "AA", "First", "Goodbye", "Hello", "Second", "Third", "a", "b"]

// Inverte sort for strings
// Option one with reverse()

words = ["Hello", "Goodbye", "AA", "First", "A", "a", "Second", "b", "Third"];

words.sort().reverse();

console.log(words);
// ["b", "a", "Third", "Second", "Hello", "Goodbye", "First", "AA", "A"]

// Option two with custome compare
words = ["Hello", "Goodbye", "AA", "First", "A", "a", "Second", "b", "Third"];

words.sort(function (a, b) {
  if (a < b) return 1; //  1 here (instead of -1 for ASC)
  if (a > b) return -1; // -1 here (instead of  1 for ASC)
  if (a === 0) return 0;
});

console.log(words);
// ["b", "a", "Third", "Second", "Hello", "Goodbye", "First", "AA", "A"]

// *** EXERCISE *** //

// Find the longest word by using sort() and pop()
words = ["b", "a", "Third", "Second", "Hello", "Goodbye", "First", "AA", "A"];

words.sort(function (a, b) {
  if (a.length < b.length) return 1; //  1 here (instead of -1 for ASC)
  if (a.length > b.length) return -1; // -1 here (instead of  1 for ASC)
  if (a.length === b.length) return 0;
});

console.log(words);
// ["Goodbye", "Second", "Hello", "First", "Third", "AA", "A", "a", "b"]
