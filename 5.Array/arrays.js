// speccial variable that can hold more than one value
const cars = ["Saab", "Volvo", "BMW"]; // literal way

// using new keyword to create an array
const car = new Array("Saab", "Volvo", "BMW");

// access array element using index number
console.log(car[0]); // return "Saab"

// changing an array element
car[0] = "Toyota";

// convert array to string comma separated
console.log(car.toString()); // return "Saab", "Volvo", "BMW"

// type of array is object
console.log(typeof car); // object;

// an array can have multiple data type like number, string, boolean, object and an array
const x = [true, "masud", { name: "shihab" }, [1, 3, 9]];
console.log(x);

// find length
console.log(x.length);

// sort
console.log(x.sort());

// for loop
for (let i = 0; i < car.length; i++) {
  console.log(car[i]);
}

// use pre calculated value instead car.length inside loop. because each time it calculate length.
const len = car.length;
for (let i = 0; i < len; i++) {
  console.log(car[i]);
}

// forEach() loop
cars.forEach((value) => {
  console.log(value);
});

// => Adding elements with high indexes can create undefined "holes" in an array
const fruits = ["Banana", "Orange", "Apple"];
// fruits[6] = "Lemon"; // ["Banana", "Orange", "Apple", undefined, undefined, undefined, "lemon"]

// push()
fruits.push("lemon"); // single element
fruits.push(...["Banana", "Orange", "Apple"]); // multiple element(must be destructure it)
console.log(fruits);

// Associative Arrays(JavaScript doesn't support it)
const person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
console.log(person.length); //return 0. because named index make array to special kind of object
person[0]; // Will return undefined
console.log(person["firstName"]); // "john"

// difference between array and object
// array uses numbered indexes. special kind of object
// object uses named indexes

// A Common Error
const points = [40];
// is not the same as:

const point = new Array(40); //it create 40 size undefined array.
// if we pass more than one parameter inside new Array(10, 20, 30); // it create array of 3 element.

// recognize an array
console.log(typeof fruits); // return object. this way is wrong

console.log(new Array(40).length); // return 40 size undefined array.

// solutino 1:
console.log(Array.isArray(fruits));
// solution 2:
console.log(fruits instanceof Array); //true // return true if fruits instanceof Array. else return false.
console.log({} instanceof Array);
