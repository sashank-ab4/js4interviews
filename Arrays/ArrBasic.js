let array = [1, 2, 3, 4, 5];

//CUSTOM forEach()
Array.prototype.myForEach = function (callback) {
  for (i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};
let arr = [10, 20, 30];

arr.myForEach((item) => {
  console.log(item);
});

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
