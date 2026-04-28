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

//The outer function returns another function, but it doesn’t execute it. We need to explicitly call the returned function to see the output. or do outer()()

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
