let array = [1, 2, 3, 4, 5];

let prodArray = array.map((num) => num / 2);
//console.log(prodArray);

let arr2 = [4, 8, 9, 5, 7, 2];
let filteredArray = arr2.filter((i) => i >= 5);
//console.log(filteredArray.slice(0, 2));

let normal = [0, 1, 2, 3, 4, 5, 6];
//console.log(normal.splice(1, 2));
//console.log(normal.slice(2, 4));
// splice => brings out the indexed values

//Infy Array Problems

//separate strings and numbers into two different arrays
let mixedArr = [10, "u", 15, 30, "a", 75, "e", "i", 40, 61, 23, "o"];

let vowels = [];
let numbers = [];
for (let i = 0; i < mixedArr.length; i++) {
  if (typeof mixedArr[i] === "number") {
    numbers.push(mixedArr[i]);
  } else {
    vowels.push(mixedArr[i]);
  }
}
//console.log(vowels);
//console.log(numbers);

//find the longest string in an array

let arrayOfStrings = [
  "one",
  "b",
  "three",
  "five",
  "seventeen",
  "twentysix",
  "onlineCompiler",
  "a",
];

function findLongestString(arr) {
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}
console.log(findLongestString(arrayOfStrings));

// #REMOVE THE DUPLICATES IN AN ARRAY
const arrayWithDupes = [9, 9, 5, 1, 7, 0, 2, 5, 6, 7];

//using "Set"
const unqNums = [...new Set(arrayWithDupes)];
console.log(unqNums);

//using "filter method"
const unqNumerics = arrayWithDupes.filter((item, index) => {
  return arrayWithDupes.indexOf(item) === index;
});
console.log(unqNumerics);

//using "for loop" method
let unqNumerals = [];
for (let i = 0; i < arrayWithDupes.length; i++) {
  if (!unqNumerals.includes(arrayWithDupes[i])) {
    unqNumerals.push(arrayWithDupes[i]);
  }
}
console.log(unqNumerals);

// #FLATTEN AN ARRAY
let arrayTwo = [1, 2, 3, [4, 5, [6, 7], 8], 9, 10];
let flattenedArray = [];
function flatTheArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      flatTheArray(arr[i]);
    } else {
      flattenedArray.push(arr[i]);
    }
  }
}
flatTheArray(arrayTwo);
console.log(flattenedArray);

//FINDING THE MISSING NUMBER IN AN ARRAY!

let arrThree = [1, 2, 3, 4, 5];

function findTheMissingNum(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
  return arr.length + 1;
}
console.log(findTheMissingNum(arrThree));
