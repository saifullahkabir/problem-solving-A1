//* Problem 3:  Array Sum
// Given an array of numbers, find the sum of all of them.

//* sum([1, 2, 3, 4]) // 10

const sum = (arr: number[]) : number => {
    return arr.reduce((acc, current) => acc + current, 0);
}

console.log(sum([1, 2, 3, 4]));  // 10

//* using forEach
// const sum = (arr: number[]): number => {
//   let total = 0;
//   arr.forEach((num) => {
//     return (total += num);
//   });
//   return total;
// };


//* using for loop
// const sum = (arr: number[]): number => {
//   let total: number = 0;
//   for (let i: number = 0; i < arr.length; i++) {
//     total += arr[i] ?? 0;
//   }
//   return total;
// };
