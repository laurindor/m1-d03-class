/*
 * Code along Array split() join() indexOf() includes()
 */

const someWords = ["cappucino", "caffé", "te", "aranciata", 23, false];
const someString = "cappucino;caffé;te;aranciata;23;false";

let result = someWords.join(" ");
result = someString.split(";");

console.log(result);
