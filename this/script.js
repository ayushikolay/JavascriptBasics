// console.log(this); //Windows

// function fn()
// {
//     console.log(this); //windows
// }


// fn();

// let obj = {
//     name:"Ayushi",
//     fun:fn
// }

// obj.fun();//self object

//////////////////////////

// function fn()
// {
//     console.log(this);
//     function abc()
//     {
//         console.log(this);
//     }
//     abc();
// }


// let obj = {
//     name:"Ayushi",
//     func:fn 
// }

// obj.func();

///////////////////////////////////

//Method 1: bind

// function fn()
// {
//     console.log(this);
//     function abc()
//     {
//         console.log(this);
//     }
//     let ret = abc.bind(this);
//     ret();
// }


// let obj = {
//     name:"Ayushi",
//     func:fn 
// }

// obj.func();


//Method 2: Arrow function

function fn()
{
    console.log(this);//object
    abc=() => {
        console.log(this); //object
    }
    
}


let obj = {
    name:"Ayushi",
    func:fn 
}

obj.func();







