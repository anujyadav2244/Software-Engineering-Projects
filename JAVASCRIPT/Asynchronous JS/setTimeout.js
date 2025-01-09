// setTimeout(cb,2000)

// This is asynchronous code execution 
console.log('Before')

function greet(){
    console.log('Hello World')
}

setTimeout(greet,5000) // 5 seconds delay

console.log('After')

