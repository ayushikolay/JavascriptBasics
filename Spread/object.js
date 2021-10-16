let obj = {

    name: "ayushi",
    add: {
        country:"India",
        state:{
            code:"AG",
            pin:"282001"
        }
    }

}

// let obj2 = obj;

// let obj2 = {...obj}; //shallow copy

// obj2.name="abcd";

// let obj2 = {...obj,add:{...obj.add}}; //spread the address...

// obj2.add.country="USA";

// let obj2 = {...obj,add:{...obj.add,state:{...obj.add.state}}}; //Deep copy

// obj2.add.state.code=10;

// console.log(obj);
// console.log(obj2);



let obj2 = JSON.parse(JSON.stringify(obj));  //shortcut 

obj2.add.state.code=10;

console.log(obj);
console.log(obj2);
