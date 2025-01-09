// //Destructuring arrays
// // The destructuring assignment syntax is a ajavascript expression that makes it possible to unpack values from arrays, or propertise from objects, into distinc variables.
// //Destructuring will help in frontend,backend and javascript framework,libraries etc

// let arr = ['Hi','I', ,'AM',]

// // let a = arr[1] 
// // let b = arr[2]

// // console.log(a)
// // console.log(b)

// let [a , b , c , d , e] = arr // this is how the destructuring works

// console.log(a)
// console.log(e) // undefined
// console.log(c) // it it has an emppty object it gives undefined

//Destructuring objects

let myObj = {
    name : 'Parth',
    Age : '19',
    gender : 'M',
    adress : { //nested object
        country:'India',
        city: 'Mumbai'
    }
}

//after destructuring myObj

let{name :n, Age: a, gender:g , adress:{country : c}} = myObj //for destructuing obj we cannot specify a b c d for accessing the obj value we need to specify the name only of obj
//for accessing value through diff name we can provide through colon(:) where we are accessing the object through there name
console.log(n)
console.log(a)
console.log(g)
console.log(c)

