// 1
var a = 10;
function multiply() {
  var a; // Hoisted! It exists now, but has no value (undefined)
  console.log(a); // logs undefined here!
  a = 20; // value is finally assigned here
  console.log(a); // logs 20
}
multiply();
console.log(a); //10

// 2

for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000); // 3,3,3 -- all appearing at once after 1 second)
}
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000); // 0,1,2-- with a 1-second delay between each)
}
