//A javascript, the for-in loop allows you to loop through the properties of the obeject
//The statement of code found within the loop body will be executed once for each property of the object.

// var colors = {
//     primary : 'Blue',
//     secondary : 'Red',
//     tertiary: 'white'
// }
// for(var a in colors){
//     console.log(a+'->'+colors[a])
// }

var arr = ['yellow','red','pink','white']// here it prints the color with there index
for(var a in arr){
    console.log(a+ ' -> ' +arr[a])
}