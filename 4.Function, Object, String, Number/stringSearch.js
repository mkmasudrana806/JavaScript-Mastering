/* string search methods. all methods are case sensitive
indexOf(), lastIndexOf(), search(), endsWith(), startsWith(), match(), includes(), matchAll()


*/
// The indexOf() method returns the index (position) of the first occurrence of a string in a string, or it returns -1 if the string is not found

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("Locate"); // case sensitive
console.log(index);

console.log(text.lastIndexOf("locate")); // return last occurrence. return -1 if the string is not found
// indexOf(), lastIndexOf() both takes second parameter.
// cannot take regular expressions.

// search() accepts regular expressions.
console.log(text.search("locate")); // case sensitive
console.log(text.search(/locate/)); // case sensitive
// match(), matchAll() both return matches occurrences array.

// includes() return true if found, else false.
console.log("masud rana".includes("masud")); // true. case sensitive
// include(value, start position);

// startsWith() return true if a string start with a specified value.
// endsWith() similar to the startWith() method

console.log("this is masud rana".startsWith("this")); // true
console.log("this is masud rana".endsWith("nana")); // false
// startsWith("masud", 5); search from 5 position. similar endsWith();
