// string in JS are primitive and immutable. all string methods return new string.

let text = "amar sonar bangla, ami tomay valobashi";

// find length of a string
console.log(text.length);

// #### extracting characters 4 ways
// charAt(position), at(position), [position], charCodeAt(position).
console.log(text.charAt(0));
console.log(text.at(1));
console.log(text.charCodeAt(2)); // return ascii code at this position.
console.log(text[3]);
// text.at(-2); allow negative index
console.log(text.at(-2));

// ### extracting string parts 3 ways
// str.slice(start, end), text.subString(start, end), text.subStr(start, length);

// str.slice() take negative index also.
let str = "Apple, Banana, Kiwi";
console.log(str.slice(7, 13)); // return 7 to 13 index
console.log(str.slice(3)); // return 3 to rest of the string
console.log(str.slice(-4, -7)); // doesn't return any value. since end index is more negative to start index

// str.slice() take negative index. str.subString() doestn't take negative index. others is same
console.log(str.substring(-12, -6)); // return nothing.
console.log(str.substr(2, 10)); // return index 2 to 10 length string.
console.log(str.substr(-2)); // count end of the string.

// toUpperCase() and toLowerCase()
console.log(str.toUpperCase());
console.log(str.toLowerCase());

/*
Note
All string methods return a new string. They don't modify the original string.

Formally said:

Strings are immutable: Strings cannot be changed, only replaced.
*/

// remove white space from both side of string
console.log(" masud ".trim()); // return "masud". ignore space
// trimStart(), trimEnd(),trim()

// "masud".padStart(10, '0'); add 0 until text is reaches 10 length.

// str.repeat(how many times)... it return repeated value
console.log("masud ".repeat(4)); // return "masud" 4 times

// str.replace("masud", "soton"); replace first occurance masud with soton.
console.log("i love masud rana, masud sheik".replace("masud", "soton"));
//Note: replace() first occurance and case sensitive.
console.log("masud rana, masud sheikh".replace(/masud/g, "soton"));

// replaceAll()
// string to array: str.split(seperator);
console.log("this is masud rana".split("")); // return an array of each word seperatedy by a space

// if split("") no space, it return characters array.
