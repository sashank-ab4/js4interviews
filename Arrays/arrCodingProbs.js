// arrays
// FINDING THE MISSING NUMBER IN AN ARRAY!
// FLATTEN AN ARRAY
// REMOVE THE DUPLICATES IN AN ARRAY
// FIND THE SUM OF AN ARRAY

// 1)
// if the array's elements start from (1-n) numbers
function findMissingNum(arr) {
  let n = arr.length + 1;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  /*  for (const i of arr) {
    actualSum += i;
  } */

  let expectedSum = (n * (n + 1)) / 2;
  return expectedSum - actualSum;
}
console.log(findMissingNum([1, 2, 3, 5]));

// if the array's elements are not (1-n), any arbituary range ([5,6,7,9])
function findMissingValue(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let set = new Set(arr);
  for (let i = min; i <= max; i++) {
    if (!set.has(i)) {
      return i;
    }
  }
}
console.log(findMissingValue([9, 10, 11, 13]));

// 2)
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

// 3)
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

// 4)

function findTheSum(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  // return arr.reduce((sum, curr)=> sum + curr, 0)
  let sum = 0;
  for (const elem of arr) {
    if (typeof elem !== "number" || !Number.isFinite(elem)) return false;
    sum += elem;
  }
  return sum;
}
console.log(findTheSum([-1, -2, 3, -4, "5"]));

// 5)
function findTheLargest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  let max;
  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (typeof value !== "number" || !Number.isFinite(value)) return false;
    if (max === undefined || value > max) {
      max = value;
    }
  }
  return max;
}

console.log(findTheLargest([-1, -2, -5, 0]));

function findSecondLargest(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return null;

  let largest = -Infinity;
  let secondLargest = -Infinity;

  for (const num of arr) {
    if (typeof num !== "number" || !Number.isFinite(num)) return false;
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest && num !== largest) {
      secondLargest = num;
    }
  }
  return secondLargest;
}
console.log(findSecondLargest([-5, -9, -7, -68, -1]));
