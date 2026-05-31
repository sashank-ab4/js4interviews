// basic
// MASK AN EMAIL ADDRESS
// MASK A PHONE NUMBER

// vowels
function countVowels(str) {
  let count = 0;
  let vowels = "aeiou";
  for (const char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log(countVowels("Vivekananda"));
// returning all vowels
function findVowels(str) {
  let vowels = [];
  for (const char of str.toLowerCase()) {
    if ("aeiou".includes(char)) {
      vowels.push(char);
    }
  }
  return vowels;
}
console.log(findVowels("Vivekananda"));

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

// 8)
