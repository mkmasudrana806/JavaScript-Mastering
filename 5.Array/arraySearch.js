// indexOf(), lastIndexOf(),  find(), findIndex(), findLast(), findLastIndex(), includes(),

// indexOf()
// return index if found, else -1.
// return first occurrence index.
// indexOf(searchValue, startIndex) search from start index
const fruits = ["Apple", "Orange", "Apple", "Mango", NaN];
console.log(fruits.indexOf("Apple", 3)); // 0
console.log(fruits.indexOf("Apple", 3)); // -1 start from "Mango"
console.log(fruits.indexOf("apple")); // -1
// lastIndexOf() and lastIndexOf(value, start) return last occurrence index
console.log(fruits.lastIndexOf("Apple")); // 2

// includes() return true if found, else false.
// const fruits = ["Apple", "Orange", "Apple", "Mango", NaN];
console.log(fruits.includes(NaN)); // true
console.log(fruits.includes("masudo")); // false

// find((value, index, arr) => {}) return the value of first element that passes a condition
const numbers = [1, 9, 10, 11, 12, 13, 14];
console.log(numbers.find((num, index, arr) => num > 10)); // 11

// findIndex() similarly return the index of the first element that matches a condition
console.log(numbers.findIndex((value, index, arr) => value > 10)); // 3

// findLast() similar to the above function. it find end of the array
console.log(numbers.findLast((value, index, arr) => value > 10)); // 14
// similarly findLastIndex() return the last occurrence index

