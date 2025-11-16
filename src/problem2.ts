type Input = string | unknown[];

const getLength = (input: Input): number => {
  if (typeof input === "string") {
    return input.length;
  } else {
    return input.length;
  }
};

console.log(getLength("typescript"));
console.log(getLength([10, 20, 30, 40]));
