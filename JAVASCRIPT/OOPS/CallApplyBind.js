// 

let person1 = {
    firstname : 'parth',
    lastname : 'patel',
    age : '19',

 
}


let printDetails =  function (city,village){
    console.log(`Hi I am ${this.firstname} ${this.lastname} and I am ${this.age} years old and I am from ${city} and my village is ${village}`)
}

let person2 = {
    firstname : 'abhi',
    lastname : 'mistry',
    age : '21',

    
}

// call method :- In this method we are passing arguments in normal way


// printDetails.call(person2,'mumbai','ahmedabad')


// apply method :- In this method we are passing arguments in an array brackets[].
// printDetails.apply(person2,['mumbai','ahmedabad'])

//Bind method :- This method stores the function and call it at a later stage of time . It is like a call method omnly . It's one advantage is 

let myfn = printDetails.bind(person2,'mumbai','ahmedabad')
console.log(myfn)

myfn()
// person1.printdetails()
// person2.printdetails()