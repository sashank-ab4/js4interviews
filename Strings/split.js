// split (): divides a string into an array of substrings based on a separator.

const fruits = "apple, banana, cherry";
const result = fruits.split("");
console.log(result);
// made every letter as a indvidual string in an array

const result2 = fruits.split(",");
console.log(result2);
// separated by ", " and put the words of strings into an array

const sentence = "hi how are you";
const words = sentence.split(" ");
console.log(words);
//[ 'hi', 'how', 'are', 'you' ]

const filtered = words.filter((i) => {
  return i.includes("h");
});
console.log(filtered);

const email = "sashank@gmail.com";
const domain = email.split("@")[0];
console.log(domain);
//[ 'sashank', 'gmail.com' ]
//[0] => sashank

//reverse a string
const reversed = "sashank".split("").reverse().join("");
console.log(reversed);
// with a function
function reverseTheString(str) {
  if (!str) return;
  const reversedString = str.split("").reverse().join("");

  return reversedString;
}

console.log(reverseTheString("mummy daddy"));

function makeFirstLetterCap(str) {
  if (!str) return;
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(makeFirstLetterCap("sashank akkabattula"));

let arr = new Set();
arr.add(1);
arr.add(2);
console.log(arr);

const numbers = [23, 4, 3, 4];
const unique = [...new Set(numbers)];
console.log(unique);

const months = [...numbers, 1, 4, 4, 1];
console.log(months);

const multiplied = months.map((month) => month * 3);
console.log(multiplied);
const vals = [4, 8, 6, 12, 14, 16];
const fourthTable = vals.filter((value) => {
  return value % 2 !== 0;
});
console.log(fourthTable);

fourthTable.push(15, 20);
console.log(fourthTable);
