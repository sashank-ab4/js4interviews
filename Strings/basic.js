let array = ["b" + "a" + +"a" + "a"];

console.log(array.map((idx) => idx.toLowerCase()));
console.log(array);

let string = "Sashank";
let str = [...string];

console.log(string.slice(1, 4));
console.log(str.splice(1, 4).join(""));
console.log(str);
