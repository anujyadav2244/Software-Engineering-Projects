// "This" Keyword refers to ana object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, "this" references the global object. If the function that is being referenced is a method in an object, "this " references the object itself.

// The javascript "this" keyword is one of the most widely used keywords. We can seem complex at first, but once you start using "this" keyword, everything will become clear.


// this in nodejs with non-strict mode:-

// console.log(this) //{} - Empty object


// function displayThis(){ // produces Global Object
//     console.log(this)
// }

// displayThis()

// let myObj = { 
//     name:'Parth',
//     age:19,
//     myFn:function(){
//         console.log(this.name)
//     }
// }
// myObj.myFn()

// let myObj = { //object has inside function also it has inside function which produces global object
//     name : 'Parth',
//     age : 19,
//     myFn : function(){
//         function InsideFN(){
//             console.log(this)
//         }
//         InsideFN()
//     }
// }
// myObj.myFn() //Gives Global Object

//this in nodejs with strict mode:-

// 'use strict'
// console.log(this)

// function displayThis(){
//     console.log(this)
// }
// displayThis()

// let myObj = { 
//     name:'Parth',
//     age:19,
//     myFn:function(){
//         console.log(this)
//     }
// }
// myObj.myFn()

// let myObj = { //object has inside function also it has inside function which gives undefined
//     name : 'Parth',
//     age : 19,
//     myFn : function(){
//         function InsideFN(){
//             console.log(this)
//         }
//         InsideFN()
//     }
// }
// myObj.myFn() //Gives undefined

//this in browser in non-strict mode:-

// console.log(this) //window obj

// function displayThis(){
//     console.log(this)
// }
// displayThis() //window obj

// let myObj = { 
//     name:'Parth',
//     age:19,
//     myFn:function(){
//         console.log(this)
//     }
// }
// myObj.myFn()  // Object Itself

// let myObj = { //object has inside function also it has inside function which gives undefined
//     name : 'Parth',
//     age : 19,
//     myFn : function(){
//         function InsideFN(){
//             console.log(this)
//         }
//         InsideFN()
//     }
// }
// myObj.myFn() //Gives undefined


//this in browser in strict mode:-

'use strict'
// console.log(this) //window obj

// function displayThis(){
//     console.log(this)
// }
// displayThis() //window obj

// let myObj = { 
//     name:'Parth',
//     age:19,
//     myFn:function(){
//         console.log(this)
//     }
// }
// myObj.myFn()  // Object Itself

let myObj = { //object has inside function also it has inside function which gives undefined
    name : 'Parth',
    age : 19,
    myFn : function(){
        function InsideFN(){
            console.log(this)
        }
        InsideFN()
    }
}
myObj.myFn() //Gives undefined