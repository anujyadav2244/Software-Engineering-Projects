//constructor function is useful to create multiple objects where the key names are same 
//the  function  below is called as template
function createCar(name , Model , color){ 
    this.name = name
    this.Model = Model
    this.color = color

    this.drive = function(){ //method of function
        console.log(`I am driving ${this.name} and it is of ${this.color} color`)
    }
}

let car1 = new createCar('Mercedes','Benz','white')

let car2 = new createCar('Mercedes','G-WAGON','black')
// console.log(car1.name)

// console.log(car2)

car1.drive()