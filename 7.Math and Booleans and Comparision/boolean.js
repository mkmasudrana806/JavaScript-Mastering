// boolean represent true or false
// Boolean() function to find out if an expression (or a variable) is true:
console.log(Boolean(1 > 0));
console.log(10 > 9); // also it return true

// everything with value is true except 0, NaN, undefined, null
console.log(Boolean(null)); // false

// comparision done by boolean value
console.log(Boolean(Infinity)); // true
console.log(Boolean(-Infinity)); // true

console.log(Boolean(-0)); // false
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(false)); // false

// normally boolean are primitive values
// we can defined as object using new keyword

let x = false;
let y = new Boolean(false);
console.log(x == y); // true. double equal check only value
console.log(x === y); // false. triple equal check value as well type. here x is primitive but y is object.

let z = new Boolean(false);
console.log(y == z); // false. although double equal check only value. but here both y and z are object. object can not be compared
