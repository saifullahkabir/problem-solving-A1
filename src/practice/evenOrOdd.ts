//* problem1:  Even or Odd

// Write a function that returns whether a number is even or odd.

//* Example:
// isEven(7)  // "odd"
// isEven(10) // "even"


const isEven = (num: number): string => {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
};

console.log(isEven(7));  // "odd"
console.log(isEven(10)); // "even"

