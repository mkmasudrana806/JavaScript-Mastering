/*
=> JavaScript has only one type of number. numbers can be written with or without decimals.
let x = 3.14;
let y = 3;

=> extra large number using exponent let x = 10e5 // 1000000
=> JavaScript numbers are always 64-bit floating point numbers. it uses double precision
=> Integer number precision is 15 digit. more digit nuumber can not handle JavaScript.
=> The maximum number of decimals is 17.
=> Floating point arithmetic is not always 100% accurate:

let x = 0.2 + 0.1; => 0.3000000004

=> JavaScript uses the + operator for both addition and concatenation.

=> Numbers are added. Strings are concatenated.
=> if we add a number and a string, string concatenation will be done. 10+"masud" will be converted to 10masud

=> If you add a string and a number, the result will be a string concatenation: "hi"+10+20
explain: first hi and 10 will be hi10, then it concatenated with 20 so hi1020 will be the answer. here string priority is more.

=> A common mistake is to expect this result to be 102030: 
let x = 10;
let y = 20;
let z = "30";
let result = x + y + z;

explain: The JavaScript interpreter works from left to right.

First 10 + 20 is added because x and y are both numbers.

Then 30 + "30" is concatenated because z is a string.

Note: when a string and number or a number and string or a string and string with other than addition(+) operator comes. then JavaScript try to calculate neumerically.
ex: 
let x = "100";
let y = "10";
let z = x / y; return 10;

ex:
let x = "100";
let y = "10";
let z = x - y; return 90
ex:
let x = "100";
let y = "10";
let z = x * y; return 10000
ex:
let x = "100";
let y = "10";
let z = x + y; here JavaScript concatenate two number

=> NaN is a JavaScript reserved word indicating that a number is not a legal number.

*/
// >>>>>>>>>>>>>> NaN - Not a Number >>>>>>>>>>>>
console.log(100 / "Apple"); // return NaN
console.log(100 / "10"); // return neumeric answer

// JavaScript consider "10" as number. but "dk10324" NaN
console.log(isNaN("dk10324")); // return NaN
// isNaN() global function return true if value is not a valid number. else return false when nummber is valid number

//Note: NaN is a number.
// => If you use NaN in a mathematical operation, the result will also be NaN
console.log(NaN + 5); // return NaN
console.log(NaN + "10"); // return NaN10. because here string priority is higher than NaN.

console.log(typeof NaN); // return number

// >>>>>>>>>>> Infinity >>>>>>>>>>>>
// Infinity and -Infinity is number in JavaScript.
console.log(typeof Infinity); // return number
console.log(1 / 0); // return Infinity
console.log(-2 / 0); // return -Infinity

// >>>>>>>>>>> Hexadecimal >>>>>>>>>>>>
// Hexadecimal number is start with 0x. like 0xFFFF, 0x334H.

// number.toString(16) return equivalent hexadecimal of number.
let number = 10;
console.log(number.toString(16)); // return equivalent hexadecimal is A.

/*
Note: object comparing always return false.
== check only value. === check value as well as type

When using the == operator, x and y are equal:
let x = 500;
let y = new Number(500);


When using the === operator, x and y are not equal.
let x = 500;
let y = new Number(500);


Note the difference between (x==y) and (x===y).
(x == y) true or false?
let x = new Number(500);
let y = new Number(500);

(x === y) true or false?

let x = new Number(500);
let y = new Number(500);
*/

// bigint is used to store large number. type is bigint.
// put n at last of a number or call BigInt(number) method to create bigint number
let x = BigInt(34234324234);
console.log(typeof x);

// bigint can not have decimal number
// console.log(5n / 2); // return error

console.log(Number(5n) / 2); // we can convert bigint to number. it return result 2.5

// we can also use bigint data type with binary, decimal, hexadecimal and octal

// Number.isInteger(10) return true is value is an integer number
console.log(Number.isInteger(10)); // return true
console.log(Number.isFinite(Infinity)); // return false
console.log(Number.isInteger(10.2)); // return false
console.log(Number.isSafeInteger(1923423432)); // return true if argument if safe integer
