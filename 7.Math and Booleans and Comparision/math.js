// Math object has no constructor function
// math object is static
// all methods and properties can be used without creating a math object

// there are 8 static properties math object provides
console.log(Math.E); // return euler's number
console.log(Math.PI); // return PI value 3.141592653589793
console.log(Math.SQRT2); // return square root of 2
console.log(Math.SQRT1_2); // return  square root of 1/2
console.log(Math.LN2); // return natural logarithm of 2
console.log(Math.LN10); // return natural logarithm of 10

Math.E; // returns Euler's number
Math.PI; // returns PI
Math.SQRT2; // returns the square root of 2
Math.SQRT1_2; // returns the square root of 1/2
Math.LN2; // returns the natural logarithm of 2
Math.LN10; // returns the natural logarithm of 10
Math.LOG2E; // returns base 2 logarithm of E
Math.LOG10E; // returns base 10 logarithm of E

// math methods
// 4 ways to round a number
console.log(Math.round(3.2)); // 3
console.log(Math.round(3.6)); // 4
console.log(Math.ceil(3.2)); // 4
console.log(Math.floor(3.2)); // 3
console.log(Math.trunc(3.9)); // 3 return only integer value

console.log(Math.ceil(-4.2)); // -4 as -4 is larger than the -4.2

console.log(Math.floor(-4.2)); // -5 as -5 is smallest compared to -4.

console.log(Math.sign(3)); // return -1 if number is negative, 0 if number is 0, 1 if number is positive.

console.log(Math.pow(2, 4)); // return 16
console.log(Math.sqrt(2)); // return 1.414
console.log(Math.abs(-20)); // return absolute value always means positive value always

console.log(Math.sin(90)); // return radians value
// Angle in radians = Angle in degrees x PI / 180.
console.log(Math.sin(90 * Math.PI / 180)); // 1

// max and min and random (return between 0 and 1)
console.log(Math.max(12, 1, 9, 39, 9)); // 39
console.log(Math.min(12, 1, 9, 39, 9)); // 1
