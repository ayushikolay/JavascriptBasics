let obj = {
    name: 'Ayushi',
    state: 'UP',
    country:'India'
}


// let name = obj.name;
// let state = obj['state'];

// let {name,state,country} = obj;

// let {name,state,country,extra='defaultval'} = obj;

let {name:firstname,state,country,extra='defaultval'} = obj;

console.log(firstname,state,country,extra);




