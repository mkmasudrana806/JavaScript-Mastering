// sort() method by default sort string ascending order
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

// reverse() reverse element
console.log(fruits.reverse());

// sort descending order using sort() and reverse()
const months = ["Jan", "Feb", "Mar", "Apr"];
months.sort();
months.reverse();
console.log(months);

// toSorted() method doesn't change the original array, it creates a new array instead. but sort() method alter the original array.
const mnths = ["Jan", "Feb", "Mar", "Apr"];
console.log(mnths.toSorted());
console.log(mnths);

// similarly for toReverse() method creates a new array.
// => By default, the sort() function sorts values as strings.

// sorting number ascending order
console.log([3, 1, 9, 4, 7, 2].sort((a, b) => a - b));

// sorting number descending order b-a
console.log([3, 1, 9, 4, 7, 2].sort((a, b) => b - a));

// max, min from array. 3 ways: sort array, use Math.max or min and made a looping function
const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
// now points[0] contains the lowest value
// and points[points.length-1] contains the highest value

//Note: sorting whole array to find max or min is inefficient

// Math.max(), Math.min()
console.log(Math.max(...points));

// maximum and minimum find using loop

function myArrayMin(arr) {
  let len = arr.length;
  let min = Infinity;
  while (len--) {
    if (arr[len] < min) {
      min = arr[len];
    }
  }
  return min;
}
console.log(myArrayMin(points));

// sort object
const cars = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];
console.log(cars.sort((a, b) => a.year - b.year));
