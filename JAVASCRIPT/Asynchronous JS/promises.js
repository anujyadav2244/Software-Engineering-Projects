// // how to produce a promise

// let myPromise = new Promise(function(resolve, reject){

//     const a = 4
//     const b = 3

//     setTimeout(()=>{
//         if(a===b){
//             resolve('The values are equal')
//         }
//         else{
//             reject('The values are not equal')
//         }
//     } , 2000)
// })



// //Pending state
// // console.log(myPromise)

// //Fulfilled state using then

// myPromise.then(function(result){

//     console.log(result)
// }) // fullfilled state

// //Rejected state using catch
// myPromise.catch(function(error){
//     console.log(error)
// })// rejected state


//Promise scenario of coffee shop

function placeorder(drink) {
    return new Promise(function(resolve, reject) {
        if (drink === 'coffee') {
            resolve('Order for coffee received');
        } else {
            reject('Other order rejected');
        }
    });
}

function processOrder(order) {
    return new Promise(function(resolve) {
        console.log('Order is being Processed');
        resolve(`${order} served`);
    });
}

// placeorder('coffee').then(function(orderPlaced){
//     console.log(orderPlaced)
//     let order= processOrder(orderPlaced)
//     return order
// }).then(function(processOrder){
//     console.log(processOrder)
// }).catch(function(error){
//     console.log(error)
// }) // solution with promises

// Async await

async function serveOrder() {
    try {
        let orderPlaced = await placeorder('coffee');
        console.log(orderPlaced);
        let processedOrder = await processOrder(orderPlaced); // Renamed variable to avoid conflict
        console.log(processedOrder);
    } catch (error) {
        console.log(error);
    }
}

serveOrder();