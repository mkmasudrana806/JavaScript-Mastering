// random number from 0 to 1(exclude)
console.log(Math.random());

// random number from 0 to 9
console.log(Math.floor(Math.random() * 10));

// random number from 0 to 10
console.log(Math.floor(Math.random() * 11));

// 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);

// a proper function to generate random numbers

// min (included) and max (excluded)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// min (included) and max (excluded)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
console.log("min include and max exclude: ", getRandomNumber(5, 10)); // 5 to 9

// min (included) and max (included)
function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}
console.log("min and max included: ", getRandomNum(5, 10)); // 5 to 10

// min (exluded) and max (excluded)
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min - 1)) + min + 1;
}
console.log("min and max excluded: ", getRandom(5, 10)); // 6 to 9

// min (exluded) and max (included)
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min + 1;
}
console.log("min and max excluded: ", getRandom(5, 10)); // 6 to 9
