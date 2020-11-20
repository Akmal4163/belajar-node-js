// Berikut ini adalah cara membuat objek dengan javascript
// 1. Menggunakan Object litteral
// 2. Menggunakan function constructor
// 3. menggunakan class


//object litteral
const car = {
    color: 'red',
    personalCar: true,
    type: 'suv',
    detail: function() {
        return this.color + "" + this.personalCar + "" + this.type
    }
}

//using function constructor
function Car(color, type) {
    this.color = color;
    this.type = type;
    this.detail = () => {
        return this.color + "" + this.type
    }
}

const car1 = new Car("Black", "SUV")
console.log(car1);
car1.detail();

//using class
class Car {
    constructor(color, type) {
        this.color = color;
        this.type = type;
    }

    detail() {
        return this.color + "" + this.type
    }

}

const car2 = new Car("black", "SUV")
car2.detail();

//menggunakan object reference
let car3 = {
    color: 'black',
    personalCar: true,
    type: 'suv',
};

let car4 = car3;
car4.color = "red";
console.log(car4);


//menggunakan this object
let car5 = {
    color: 'black',
    personalCar: true,
    type: 'suv',
    //using function
    print: function() {
        console.log(this.color + " " + this.personalCar + " " + this.type);
        console.log(this === car5);
    }
};

car5.print();


//menggunakan this object
let car6 = {
    color: 'red',
    personalCar: true,
    type: 'suv',
    //using arrow function
    print: () => {
        console.log(this.color + " " + this.personalCar + " " + this.type);
        console.log(this === car6);
    }
};

car6.print();