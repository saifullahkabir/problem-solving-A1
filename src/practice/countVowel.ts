//* Problem 4:  Count Vowels
// Return how many vowels are in a string.

//* countVowel("hello") // 2


const countVowel = (str: string): number => {
    const vowels = "aeiouAEIOU";
    return str
        .split('')                // string কে array তে ভাগ করি
        .filter(char => vowels.includes(char))  // শুধু vowels রাখি
        .length;                  // array length হলো vowels সংখ্যা
}

console.log(countVowel("hello"));      // 2


// using for of

const countVowel = (str: string): number => {
  let count = 0;
  const vowels = "aeiouAEIOU";

  for (const chr of str) {
    if (vowels.includes(chr)) count++;
  }

  return count;
}

console.log(countVowel("hello"));
