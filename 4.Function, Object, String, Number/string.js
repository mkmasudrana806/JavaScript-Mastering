// A JavaScript string is zero or more characters written inside quotes.
// we can use single or double quotes
const car = "volvo";
const car2 = "BMW";

// we can use single quote inside double quotes. and vice versa
const str = "this is 'single quote' string";
const str2 = 'this is "single quote" string';

// Templates string allow single and double quotes inside a templates string
const person = `this is 'masud' rana, from "sirajganj"`;
console.log(person);

// find length of the string
const text = "this is text";
console.log(text.length);

// six escape characters are valid in JavaScript. special characters avoid in string. we can use escape. escape turns special characters into string characeters
const escape = 'this is "escape" string';
console.log(escape);

/*
\b backspace
\f form feed
\n newline
\t tab
\r carriage return
\v vertical tabulator
*/

// break up a string is by using string addition or back slash.

// == check only equality, not type
let x = "masud";
let y = new String("masud");
console.log(x == y); // return true. only value check == operator.

// JavaScript object cannot be compared.
let a = new String("masud");
let b = new String("masud");
console.log(a == b); // return false.
