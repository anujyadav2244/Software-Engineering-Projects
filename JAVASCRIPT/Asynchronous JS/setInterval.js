function hello(){
    console.log('Hello World')
}

let timer = setInterval(hello,1000) // 1 seconds delay

setTimeout(function(){
    clearInterval(timer)
},3000) 