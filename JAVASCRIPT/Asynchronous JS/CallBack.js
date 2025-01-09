const fs = require('fs')

console.log('firstline')



// let data = fs.readFileSync('callbackf1.txt')

// console.log('File 1 Data ->' +data)

// let data2 = fs.readFileSync('callbackf2.txt')

// console.log('File 2 Data ->' +data2)

fs.readFile('callbackf1.txt',CallBack1)

function CallBack1(err,data){
    if(err){
        console.log(err)
    }
    console.log('file 1 data ->'+data)
    fs.readFile('callbackf2.txt',CallBack2) // for serial data processing
}


function CallBack2(err,data){
    if(err){
        console.log(err)
    }
    console.log('file 2 data ->'+data)
    fs.readFile('callbackf3.txt',CallBack3)
}

function CallBack3(err,data){
    if(err){
        console.log(err)
    }
    console.log('file 3 data ->'+data)
}


console.log('lastline')


//This output is before the serial data processing

//like this 

// function CallBack2(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log('file 2 data ->'+data)
    
// }

// fs.readFile('callbackf3.txt',CallBack3)
// function CallBack3(err,data){
//     if(err){
//         console.log(err)
//     }
//     console.log('file 3 data ->'+data)
// }

//output of the code : It produces in any manner at some time the first function comes first or it will be the last also on the other hand the second comes some time first or it can be last also and so on.

// PS D:\JAVASCRIPT\Asynchronous JS> node CallBack.js
// firstline
// lastline
// file 1 data ->I am file 1
// file 2 data ->I am file 2
// PS D:\JAVASCRIPT\Asynchronous JS> node CallBack.js
// firstline
// lastline
// file 1 data ->I am file 1
// file 2 data ->I am file 2
// PS D:\JAVASCRIPT\Asynchronous JS> node CallBack.js
// firstline
// lastline
// file 1 data ->I am file 1
// file 2 data ->I am file 2
// PS D:\JAVASCRIPT\Asynchronous JS> node CallBack.js
// firstline
// lastline
// file 2 data ->I am file 2
// file 1 data ->I am file 1
// PS D:\JAVASCRIPT\Asynchronous JS> node CallBack.js
// firstline
// lastline
// file 2 data ->I am file 2
// file 1 data ->I am file 1
// PS D:\JAVASCRIPT\Asynchronous JS> node CallBack.js
// firstline
// lastline
// file 1 data ->I am file 1
// file 2 data ->I am file 2
// PS D:\JAVASCRIPT\Asynchronous JS> node CallBack.js
// firstline
// lastline
// file 1 data ->I am file 1
// file 2 data ->I am file 2
// PS D:\JAVASCRIPT\Asynchronous JS> node CallBack.js
// firstline
// lastline
// file 1 data ->I am file 1
// file 2 data ->I am file 2
// PS D:\JAVASCRIPT\Asynchronous JS> 

