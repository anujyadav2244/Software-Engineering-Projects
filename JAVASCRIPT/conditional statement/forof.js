//The for of statement creates a loop iterating over iterable objects,including : built-in string, Array, array-like objects and also map and set

// var score = [50,60,70,80,90]
// for(var [index,scores] of score.entries()){
//     console.log(index+' -> '+scores)
// }

//for accessing the indexes in the forof loop there is a method called entries()

// var color = ['Red','Green','Blue','Orange','White']
// for(var [index,a] of color.entries()){
//     console.log(index+' -> '+a)
// }

// var str = 'Parth'
// for(var a of str){
//     console.log(a)
// }

var score = [50,60,70,80,90]
for(var [index,scores] of score.entries()){
    scores = scores + 5
    console.log(index+' -> '+scores)
}