//* Problem 3:  Array Sum
// Given an array of numbers, find the sum of all of them.

//* sum([1, 2, 3, 4]) // 10


const sum = (arr: number[]) : number => {
    return arr.reduce((acc, current) => acc + current, 0);
}

console.log(sum([1, 2, 3, 4]));  // 10