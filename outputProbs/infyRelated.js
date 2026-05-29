// closures example
function outer() {
  let count = 0;
  return function inner() {
    console.log(count);
  };
}
//outer()();
const foo = outer();
foo();

//The outer function returns another function, but it doesn’t execute it. We need to explicitly call the returned function to see the output. or do:  outer()()
/* 

"Finished executing” means:
The function is done running, but its variables are still kept alive because another function is using them. 

*/

// Event loop example

console.log("one");
setTimeout(() => {
  console.log("second");
}, 2000);
console.log("three");
Promise.resolve().then(() => {
  console.log("four");
});
console.log("five");
// one, three, five, four and waits for 2 seconds then second

//callback function example
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function calculate(x, y, operation) {
  return operation(x, y);
}
console.log(calculate(2, 3, multiply));
//2
function greet(name) {
  console.log("Hello " + name);
}
function processInput(cbfunc) {
  const name = "Sashank!";
  cbfunc(name);
}
processInput(greet);
//4 synchronous callback
[1, 2, 3].forEach((num) => console.log(num));

//3 asynchronous callback
setTimeout(() => {
  console.log("Done!");
}, 5000);

// HOF in terms of retuning a function as per defintion!
function multiplyBy(x) {
  return function (y) {
    return x * y;
  };
}
const doubleItUp = multiplyBy(3);
console.log(doubleItUp(9));

// arrow function and its main difference from normal function

const obj = {
  name: "Vinnu",
  normalOne: function () {
    console.log(this.name);
  },
  arrowOne: () => {
    console.log(this.name);
  },
};

obj.normalOne(); // vinnu
obj.arrowOne(); // undefined

//iife or self invoking function
(function (name) {
  console.log("Hi " + name + " Good Morning!");
})("Shammi");

//Promise Syntax and example using (async await)
const fetchNewData = () => {
  return new Promise((resolve, reject) => {
    let success = !false;
    if (success) {
      resolve("Data Fetched");
    } else {
      reject("Failed to fetch");
    }
  });
};
const handleData = async () => {
  try {
    const data = await fetchNewData();
    console.log(data);
  } catch (err) {
    console.log(err);
  } finally {
    console.log("operations done!");
  }
};
handleData();

const numbers = [12, 24, 36, 48, 60];
// finding the SUM of an Array using .reduce()

const totNum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(totNum);

// normal way using the loops!
let anotherWayToFindTotal = 0;
for (let i = 0; i < numbers.length; i++) {
  anotherWayToFindTotal += numbers[i];
}
console.log(anotherWayToFindTotal);

//finding the middle element of the array

function middleElement(numbers) {
  let mid = Math.floor(numbers.length / 2);
  return numbers[mid];
}
console.log(middleElement([12, 24, 36, 48, 60]));

//When an array has an odd number of elements (like 5), dividing the length by 2 gives you a decimal (2.5). Since array indexes must be whole numbers, Math.floor() rounds that down to 2 so you can actually use it to grab an item.

//masking an email: s*********a@gmail.com
function maskingEmail(email) {
  const index = email.indexOf("@");
  const username = email.slice(0, index);
  const firstCharacter = email.slice(0, 1);
  const lastCharacter = email.slice(username.length - 1);
  const middleCharacters = email.slice(1, index - 1);
  const mask = "*".repeat(middleCharacters.length);

  if (username.length === 1) {
    return "Please enter the valid Email!";
  } else if (username.length === 2) {
    return firstCharacter + "***" + lastCharacter;
  } else {
    return firstCharacter + mask + lastCharacter;
  }
}

console.log(maskingEmail(`sashankakkabattula@gmail.com`));

//masking a phoneNumber: 9******7
function maskingNumber(phnNum) {
  let firstDigit = phnNum.slice(0, 1);
  let lastDigit = phnNum.slice(-1);
  let middleDigits = phnNum.slice(1, -1);
  let mask = "*".repeat(middleDigits.length);

  if (phnNum < 10 || phnNum > 10) {
    return "Please enter a valid Phone Number!";
  } else {
    return firstDigit + mask + lastDigit;
  }
}
console.log(maskingNumber("9951702567"));

// REVERSE A STRING
// using loop method
let str = "campus";
let result = "";
function reverseStr(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
//console.log(reverseStr(str));

// using .reverse() method
function reverseString(str) {
  return str.split("").reverse().join("");
}
//console.log(reverseString(str));
//using recursion method

function reverseTheStr(str) {
  if (str === "") return "";
  return reverseTheStr(str.slice(1)) + str[0];
}
console.log(reverseTheStr(str));

// FIND MOST REPEATED CHARACTER FROM a Given STRING!
// normal frequency method!
// this one gives "First most repeated only!"
function findMostRepeatedChar(str) {
  let freqObj = {};
  let maxCount = 0;
  let repeatedChar = "";

  for (const char of str.toLowerCase()) {
    freqObj[char] = (freqObj[char] ?? 0) + 1;
    if (freqObj[char] > maxCount) {
      maxCount = freqObj[char];
      repeatedChar = char;
    }
  }
  return { maxCount, repeatedChar };
}
console.log(findMostRepeatedChar("Shamshad"));

// this gives all the repeated chars and their count!

function findMostRepeatedChars(str) {
  let freq = {};

  for (const char of str.toLowerCase()) {
    freq[char] = (freq[char] ?? 0) + 1;
  }

  let result = [];
  for (let char in freq) {
    if (freq[char] > 1) {
      result.push({
        char,
        count: freq[char],
      });
    }
  }
  return result;
}
console.log(findMostRepeatedChars("Mississippi"));
