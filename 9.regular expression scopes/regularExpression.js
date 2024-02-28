// a regular expression is a sequence of characters that forms a search pattern.

// the search pattern can be used for text search and text replace operations

// a regular expression can be a single character or more complicated pattern

// syntax: /pattern/modifiers;

/w3schools/i; // here pattern is "w3schools" and i is modifiers. here i means case insensitive

// regular expression are often used with the two string methods. search() and replace()

// search() method return position where it is matched.
// replace() method return modified string wehre the pattern is replaced

let text = "Visit W3Schools!";
let n = text.search("W3Schools");
let m = text.search("w3Schools");
console.log(n); // 6
console.log(m); // -1, as case sensitive

// using regular expression inside search() method
console.log(text.search(/w3Schools/i)); // return 6 even w is small letter but in text W is capital letter. as i modifier for case insensitive.

// replace() method with regular expression
let str = "Visit Microsoft!";
let result = str.replace(/microsoft/i, "W3Schools");

/* Modifiers
i - case insensitive
g - perform a global match(find all)
m - perform multiple matching
d - perform start end matching
*/
// Note. str.match(expression); return an matching array. but search() return index

// brakets are used to find a range of characters
/*
[abc]
[0-9]
(x|y)
*/

// metacharacter are special meaningful character
/*
\d - find a digit
\s - find a whitespace character
\b - find a matching start with \bA A.
*/

/* Quantifier
n+ - one or more
n* - zero or more
n? - zero or one
*/

/*
In JavaScript, the RegExp object is a regular expression object wiht predefined method and properties

when we create any pattern and store this pattern into a variable. then this variable will be a regular expression object. or we can direct use pattern 
like /e/.test("this is a regular expression test method")

test() method is a RegExp expression method.
we can pass a string inside this test method. it return true if any matches found.
*/

const pattern = /e/;
const res = pattern.test("The best things in life are free!");
console.log(res); // return true as 'e' found

// exec() return a result object.
const ress = /e/.exec("this is an important method");
console.log(ress);
/*
[
  'e',
  index: 22,
  input: 'this is an important method',
  groups: undefined
]
*/
