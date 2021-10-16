let arr = ["apple","mango","banana","orange"];

let narr=[];

// for(let i=0;i<arr.length;i++)
// {
//     let fruits = arr[i];
//     if(fruits.length > 5)
//     {
//         narr.push(fruits);
//     }
// };

narr = arr.filter(function(item){
    return item.length>5;
});

console.log(arr);
console.log(narr);

