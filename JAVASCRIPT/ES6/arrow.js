
let test1 = ()=>{ // this an => is known as the fat arrow function which replaces the function keyword
    console.log(1)
}

let test2 = a=>{// for single parameter we do not require  braces in arrow function 
    console.log(a+2)
}

let test3 = (a,b)=>console.log(a+b) //for one liner function we do not require curly braces


test1()
test2(2)
test3(2,4)