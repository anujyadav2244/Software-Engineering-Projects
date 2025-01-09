// function test(){
//     let a = 2

//     function test1(){
//         console.log(a)
//     }

//     return test1
// }

// let fun = test()
// console.log(fun)


// fun()

function greet(){
    let name = 'parth'

    function displayName(){
        console.log('Hi', +name)

        let age = 26
        function displayaAge(){
            console.log('My age is ', +age)
        }
        return displayaAge
    }
    return displayName
}

let g1 = greet()

console.log(g1)

g1()  // calling displayname function

let g2 = g1()

console.log(g2)

g2()

