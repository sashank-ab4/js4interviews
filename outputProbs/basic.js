// 1
var a = 10;
function multiply() {
  var a; // Hoisted! It exists now, but has no value (undefined)
  //console.log(a); // logs undefined here!
  a = 20; // value is finally assigned here
  //console.log(a); // logs 20
}
multiply();
//console.log(a); //10

// 2

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    // console.log(i);
  }, 1000); // 3,3,3 -- all appearing at once after 1 second)
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    //console.log(i);
  }, 1000); // 0,1,2-- with a 1-second delay between each)
}

console.log(typeof NaN); // prints: number
console.log(typeof value === "number" && isNaN(value)); // FALSE
console.log(Number.isNaN(NaN)); // TRUE
console.log({} + []); // [object Object]
console.log(typeof {} + []); // object
console.log({} === {}); //false
console.log({} == {}); //false
console.log([] == ![]); //true
console.log({} == !{}); //false
console.log(5 == "5"); // true
console.log(5 === "5"); //false
console.log(1 == true); //true
console.log(1 === true); //false

// generate a random integer within a specific range (min to max)
// application: Six Faced Dice
function getRandomInteger(max, min) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInteger(0, 7));
