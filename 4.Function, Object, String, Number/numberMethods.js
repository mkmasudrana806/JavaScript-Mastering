/*
toString(), toFixed(), toExponential(), toPrecision(), ValueOf()

*/

// toString() return a number as string
let x = 10234;
console.log(typeof x.toString()); // return type as string
// literal, variable or expression we can convert
console.log((10 + 1).toString());
// also we can pass parameter to toString() method.

// toExponential() a string. a parameter define number of characters behind the decimal point
let a = 9.624;
console.log(a.toExponential()); // return 9.624+0
console.log(a.toExponential(2)); // return 9.62+0

// toFixed()
console.log(a.toFixed(2)); // return 9.62 with specified decimal point

// toPrecision() return a string, with a number written with specified length
console.log((323.82561).toPrecision(5)); // return total length of 5 with decimal

// number conversion with global method: parseInt(), parseFloat(), Number();
// >>> Number() global method
console.log(Number(true)); // return 1
console.log(Number(false)); // return 0
console.log(Number("10")); // return 10
console.log(Number("  10")); // return 10
console.log(Number("10  ")); // return 10
console.log(Number(" 10  ")); // return 10
console.log(Number("10.33")); // return 10.33
console.log(Number("10,33")); // return NaN
console.log(Number("10 33")); // return NaN
console.log(Number("John")); // return NaN
// => Number() can also convert a date to a number.
console.log(Number(new Date("1970-01-02"))); // return time is milisecond. it count from 1970-01-01 date
// The Date() method returns the number of milliseconds since 1.1.1970.

// parseInt()
// => parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:

console.log(parseInt("-10")); // return -10
console.log(parseInt("-10.33")); // return -10
console.log(parseInt("10")); // return 10
console.log(parseInt("10.33")); // return 10
console.log(parseInt("10 20 30")); // return 10(only first part is allowed)
console.log(parseInt("10 years")); // return 10
console.log(parseInt("years 10")); // return NaN(when number is not converted then return NaN)

// => parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:
console.log(parseFloat("10")); // return 10
console.log(parseFloat("10.33")); // return 10.33
console.log(parseFloat("years 10")); // return NaN
console.log(parseFloat("10 20 30")); // return 10
console.log(parseFloat("10 years")); // return 10

// these are "Number" methods. don't use with number variable like x.isInteger() wrong x
// these methods belong to "Number" object.
// Number.isInteger(), Number.isSafeInteger(), Number.parseInt(), Number.parseFloat()

console.log(Number.isInteger(10), Number.isInteger(10.5)); // return true false.

// some Number object properties
console.log(Number.MAX_VALUE); // return largest possible number
console.log(Number.MIN_VALUE); // return smallest possible number
console.log(Number.MAX_SAFE_INTEGER); // return largest safe integer number
// similarly: Number.MIN_SAFE_INTEGER,
console.log(Number.POSITIVE_INFINITY);
// Number.NEGATIVE_INFINITY
console.log(Number.NaN); // return NaN number
