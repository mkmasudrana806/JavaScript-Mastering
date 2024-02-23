// ES2020 features: bigint, str.matchAll("dsf"), nullish coalescing ??
/* ther are many data types
1. string
2. number
3. bigint
4. boolean
5. undefined
6. null
7. symbol
8. object

the object data type can contain
 -> An object
 -> An array
 -> A date


=> When adding a number and a string, JavaScript will treat the number as a string.
let x = "16" + "Volvo";

=> JavaScript evaluates expressions from left to right. Different sequences can produce different results:
example: let x = 16 + 4 + "Volvo";
Result: 20Volvo

let x = "Volvo" + 16 + 4;
Result: Volvo164

*Note: here left to right, and string priority is high.
so volvo and 16 treat both as strings. then again this answer and 4 treat both as strings.

=> JavaScript is dynamic typed language. it means same variable can be used to hold different data types.
let x;       // Now x is undefined
x = 5;       // Now x is a Number
x = "John";  // Now x is a String

=> a variable without a value, has the value undefined. The type is also undefined
let car; // Value is undefined, type is undefined

=> although this is empty, empty is string. so type is string.
 let car = "";    // The value is "", the typeof is "string"



