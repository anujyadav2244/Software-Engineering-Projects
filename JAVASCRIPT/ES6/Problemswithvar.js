//ES stands for ecma script
//Ecma stands for european computer manufactures association
//ES6 or the ECMAScript 2015 is the 6th and major edition of the ECMAScript language specification standard. It defines the standard for the implementation of javascript and it has become much more popular that the previous edition ES5.

// var a = 21
// var a = 35 // this is redeclareration variable and this in not allowed in other languages . In this it will assign this new value to the variable
// console.log(a) //35

// if (a==35){
//     var b = 40
//     console.log(b)//40
// }

// console.log(b)//40 this is the problem with the var because it cannot access the loop variable outside the loop
//this issue is known as scoping issue
//variables declare with var keyword they are not blocked scope they are function scoped

function test(){
    var c = 100
    console.log(c)
}

test()

console.log(c)//this is not allowed this will give that the c variable is not defined

