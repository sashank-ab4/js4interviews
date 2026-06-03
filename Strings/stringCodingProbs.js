// strings
// CHECK WHETHER TWO STRINGS ARE ANAGRAMS or NOT
// FIND FIRST NON REPEATING CHARACTER: aabbcdde
// FIND MOST REPEATED FIRST CHARACTER & COUNT FROM a Given STRING!
// FIND MOST REPEATED CHARACTERS & COUNT FROM a Given STRING!
// REVERSE A STRING
// REVERSE A WORD(SENTENCE)
// FIND VOWELS IN A STRING
// CHECK WHETHER THE STRING IS A PALINDROME OR NOT'
// MAKE THE FIRST LETTER OF THE WORD, CAPITAL

// 1)
// anagrams: sort/split method

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
// this is when to find "First most repeated only!"
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

// 4)
// this is when to find all the repeated chars and their count!

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

// 5.1
function reverseTheWord(sentence) {
  return sentence
    .split(/(\s+)/)
    .map((part) => {
      return part.trim() ? part.split("").reverse().join("") : part;
    })
    .join("");
}

console.log(reverseTheWord("heylo  hello"));

function reverseTheStr(str) {
  if (str === "") return "";
  return reverseTheStr(str.slice(1)) + str[0];
}
console.log(reverseTheStr(str));

// 6)
function countVowels(str) {
  let count = 0;
  for (const elem of str.toLowerCase()) {
    if ("aeiou".includes(elem)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("positano"));

function findVowels(str) {
  let vowels = [];
  let vowelSounds = "aeiou";
  for (let char of str.toLowerCase()) {
    if (vowelSounds.includes(char)) {
      vowels.push(char);
    }
  }
  return vowels;
}
console.log(findVowels("positano"));

// 7)

function isPalindrome(str) {
  if (str === "") return "";
  let left = 0;
  let right = str.length - 1;
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(isPalindrome("racecar"));

function checkPalindrome(str) {
  if (str === "") return false;

  let clearedString = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");

  return clearedString === clearedString.split("").reverse().join("");
}
console.log(checkPalindrome("hannaH"));

// 8)
function makeFirstLetterCap(str) {
  if (!str) return;
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
console.log(makeFirstLetterCap("sashank akkabattula"));
