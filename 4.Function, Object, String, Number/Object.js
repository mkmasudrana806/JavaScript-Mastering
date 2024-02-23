const car = {
  name: "Fiat",
  model: 500,
  weight: "850kg",
  color: "white",
  start: function () {
    console.log(this.color, "car has started");
  },
  drive: function () {
    console.log("car is driving");
  },
};

// access object properties two ways
console.log(car.weight);
console.log(car["model"]);

// this scope: here we use 'this' keyword inside 'start' function. here 'this' scope is owner of this 'start' function that is car. so inside car, we can access everything using 'this' keyword.

console.log(car.start());

/*What is this?
In JavaScript, the this keyword refers to an object.

Which object depends on how this is being invoked (used or called).

The this keyword refers to different objects depending on how it is used:

=> In an object method, this refers to the object.
=> Alone, this refers to the global object.
=> In a function, this refers to the global object.
=> In a function, in strict mode, this is undefined.
=> In an event, this refers to the element that received the event.
=> Methods like call(), apply(), and bind() can refer this to any object.
*/

// we can declare string, number and boolean as object using new keyword, using constructor. but avoid it.
const x = new String("Masud Rana");
const y = new Number(10);
const z = new Boolean(false);

console.log(x, y, z); // these return object
