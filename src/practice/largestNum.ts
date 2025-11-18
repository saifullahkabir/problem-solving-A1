
const max = (num1: number, num2: number): number => {
  if (num1 > num2) {
    return num1;
  } else if (num2 > num1) {
    return num2;
  } else {
    return num1;
  }
};

console.log(max(10, 1)); // 10
