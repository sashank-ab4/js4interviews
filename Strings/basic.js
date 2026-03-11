/* let array = ["b" + "a" + +"a" + "a"];

console.log(array.map((idx) => idx.toLowerCase()));
console.log(array);

let string = "Sashank";
let str = [...string];

console.log(string.slice(1, 4));
console.log(str.splice(1, 4).join(""));
console.log(str); */

function lettersInName(str) {
  if (!str) return { length: 0, letters: [] };
  const characterArray = str.split("");
  return {
    length: characterArray.length,
    letters: characterArray,
  };
}
const result = lettersInName("sashank");
console.log(result.letters);
console.log(result.length);
