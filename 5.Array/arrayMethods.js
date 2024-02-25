// length, toString(), join(), slice(), splice(), push(), pop(), shift(), unshift(), delete(), split(),

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// find length
let size = fruits.length;
console.log(size);

// array into string with comma separated
console.log(fruits.toString());

// get specific element using at() method
console.log(fruits.at(-2)); // negative index allowed

// join() array element into string, with custom separator
console.log(fruits.join("*")); // Banana*Orange*Apple*Mango

//push() and pop() at last
console.log(fruits.push("bel")); // return new array length
console.log(fruits.pop()); // return poped value

// shift() remove first element from array
console.log(fruits.shift()); // return shifted value

// unshift() add element at first position to array
console.log(fruits.unshift("bel")); // return new array length

// splice() remove element at specified position
// array.splice(index, element to delete);
console.log(fruits.splice(0, 1));
// add element at specified position
console.log(fruits.splice(0, 0, "kola"));
console.log(fruits);

// merge two array
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];

const myChildren = myGirls.concat(myBoys);
console.log(myChildren);

// 2D array to 1D array convert flat()
const nums = [
  [1, 2],
  [3, 4],
  [5, 6],
];
console.log(nums.flat()); // return new array
