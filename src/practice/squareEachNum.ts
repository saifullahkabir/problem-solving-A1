//* Problem 13:  Square Each Number
// Create a new array with the square of each number in the array.

//* square([1,2,3]) // [1,4,9]

const square = (arr: number[]): number[] => {
  return arr.map((value) => value * value);
};

console.log(square([1, 2, 3])); // [1,4,9]
