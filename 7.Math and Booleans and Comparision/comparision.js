// comparision and logical operators are used to test for true or false
let x = 6;
let y = "6";
console.log(x == y); // true. == check value only
console.log(x === y); // false. === check value and type

console.log(x !== y); // true.
console.log(x != y); // false

// conditional operators are used in conditional statements to compare value and take actions depending on the result.
let age = 16;
if (age < 18) console.log("too young to buy alcohol");
else console.log("you can buy alcohol, as you have over the 18");

// logical operators
// logical &&, || and !
// && return true if both side true
// || return true if one of the condition is true
// ! return false for true and true for false value.

/*
	(x < 10 && y > 1) is true
	(x == 5 || y == 5) is false
    !(x == y) is true
*/

// ternary operator
// assign a value to a variable based on some condition
// variablename = (condition) ? value1:value2
let res = 10 > 5 ? "yes first value is greater" : "not second value is greater";
console.log(res);

// empty string "" convert to 0.
// numeric string convert to decimal number when one side is number.
// no numeric string convert to NaN. which is always false.
/*
2 < 12	true	
2 < "12"	true. numeric "12" string convert to decimal 12. as one side is number.	
2 < "John"	false	2<NaN
2 > "John"	false	2>NaN
2 == "John"	false	
"2" < "12"	false	as 1 comes first
"2" > "12"	true as 2 comes later
"2" == "12"	false 
*/

// Nullish Coalescing Operator(??)
// ?? return the first argument if it is not null or undefined. othewise it return the second argument

let name = null;
let text = "missing";
let result = name ?? text;
console.log(result); // missing. as name is null

// optional chaining operator(?.)
// return undefined if an object is undefined or null(instead throwing an error)

const car = { name: "BMW" };
console.log(car?.model);
