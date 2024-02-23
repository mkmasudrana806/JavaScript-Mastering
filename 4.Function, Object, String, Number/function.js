/*
=> A JavaScript function is a block of code designed to perform a particular task.

=> function is defined with 'function' keyword, followed by a name, followed by a parenthesis()

=> augument: that we pass to a function, myFun(name, age, id => these are arguments);
=> parameter: that a function receive, function myFun(name, age, id => these are parameters){
    stm1.. 
 };

Note: inside a function, if we use var keyword to define variables. this var only this function scope. there was not any global scope to the var.



*/
function myFun(names) {
  console.log("this is ", names);
}
myFun("Masud Rana");

// accessing funciton without invoking, it return function itself
let x = myFun; // here myFun return function itself and assign to x.

// function scope
function myFun2() {
  var carName = "volvo"; // here carName has function scope only.these are local to this function
  console.log(carName);
}
console.log(carName); // give reference error.
