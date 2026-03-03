let array = [1, 2, 3, 4, 5];

let prodArray = array.map((num) => num / 2);
console.log(prodArray);

let arr2 = [4, 8, 9, 5, 7, 2];
let filteredArray = arr2.filter((i) => i >= 5);
console.log(filteredArray.slice(0, 2));

let normal = [0, 1, 2, 3, 4, 5, 6];
console.log(normal.splice(1, 2));
console.log(normal.slice(2, 4));
// splice => brings out the indexed values
