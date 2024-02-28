/* JavaScript have block, function and global scope.
only global variable with var keyword belong to window object.


*/
// var variable inside block scope belong to global access.
{
  var name = "masud";
}
// can be accessed here.
console.log(name);

// but inside function with var variable has only function scope.

function myFun() {
  var num = 10;
}

// num can not be accessed
console.log(num);
