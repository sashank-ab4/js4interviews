// CHECK WHETHER TWO STRINGS ARE ANAGRAMS or NOT
// FIND FIRST NON REPEATING CHARACTER: aabbcdde
// FIND MOST REPEATED FIRST CHARACTER & COUNT FROM a Given STRING!
// FIND MOST REPEATED CHARACTERS & COUNT FROM a Given STRING!
// REVERSE A STRING
// MASK AN EMAIL ADDRESS
// MASK A PHONE NUMBER

// 1) anagrams: sort/split method

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  return (
    str1.toLowerCase().split("").sort().join("") ===
    str2.toLowerCase().split("").sort().join("")
  );
}
console.log(isAnagram("listen", "SilenT"));

// anagrams: frequency/loop method

function checkAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let freq = {};
  for (const element of str1.toLowerCase()) {
    freq[element] = (freq[element] ?? 0) + 1;
  }

  for (const element of str2.toLowerCase()) {
    if (!freq[element]) {
      return false;
    }
    freq[element]--;
  }
  return true;
}

console.log(checkAnagram("earth", "HEART"));

//2)
function findFirstNonRepeatingChar(str) {
  let freq = {};
  for (const char of str) {
    freq[char] = (freq[char] ?? 0) + 1;
  }
  for (const char of str) {
    if (freq[char] === 1) {
      return char;
    }
  }
  return null;
}

console.log(
  "First Non repeated character:",
  findFirstNonRepeatingChar("aabbccdde"),
);

//3
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

// 4) this gives all the repeated chars and their count!

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
        repeatedFor: freq[char],
      });
    }
  }
  return result;
}
console.log(findMostRepeatedChars("Mississippi"));

// 5)
// using loop method
let str = "campus";
let result = "";
function reverseStr(str) {
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}
console.log(reverseStr(str));

// using .reverse() method
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString(str));
//using recursion method

function reverseTheStr(str) {
  if (str === "") return "";
  return reverseTheStr(str.slice(1)) + str[0];
}
console.log(reverseTheStr(str));

// 6)
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

// 7)
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
