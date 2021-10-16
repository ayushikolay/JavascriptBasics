let arr=[1,2,3]

//let arr2 = arr;

let arr2 = [...arr]; //spread operator.... it spreads value and allocate new address to arr2.

arr2.push(4);

console.log(arr); //[ 1, 2, 3 ]
console.log(arr2); //[ 1, 2, 3, 4 ]

// console.log(arr); // [ 1, 2, 3 ]
// console.log(...arr); //1 2 3