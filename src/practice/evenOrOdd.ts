const isEven = (num: number): string => {
  if (num % 2 === 0) {
    return "even";
  }
  return "odd";
};

console.log(isEven(7));  // "odd"
console.log(isEven(10)); // "even"

