let input = 'Hello Whale World!';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = []

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; i++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}

console.log(resultArray);
console.log("Hello World!");