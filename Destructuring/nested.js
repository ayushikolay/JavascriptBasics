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

// let {name} = obj;

// let {add:{country}} = obj;
// let {add:{country:abcd}} = obj;
// console.log(abcd);

// console.log(country);

let {add:{state:{code:cd}}} = obj;
console.log(cd);