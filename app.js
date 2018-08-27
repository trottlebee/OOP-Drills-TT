// OOP Drills //

// Object Literals, Pseudo Classes and Methods - Questions 1 - 3 //

// function Person (name, city, age){
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// Person.prototype.greet = function(){
//     alert(`Hello! My name is ${this.name}. I am ${this.age} years old, and I live in ${this.city}.`)
// }

// let person1 = new Person('Tracy', 'Fairfield', 48);
// person1.greet()

// let person2 = new Person('Fannie', 'Hoover', 72);
// person2.greet()

// let person3 = new Person('Ben', 'Centerville', 71);
// person3.greet()

// let person4 = new Person('Teresa', 'Calera', 44);
// person4.greet();

// let person5 = new Person('LaDonna', 'Alabaster', 48);
// person5.greet()


// Object Literals, Pseudo Classes and Methods - Questions 4 - 5 //

// class Person {

//     constructor(name, age, location){
//         this.name = name;
//         this.age = age;
//         this.location = location;
//     }

//     greet(){
//         alert(`Hello, my name is ${this.name}, I am ${this.age} years old, and I live in ${this.location}.`)
//     }
// }

// let person1 = new Person('Tracy', 48,'Fairfield');
// person1.greet()

// let person2 = new Person('Fannie', 72, 'Hoover');
// person2.greet()

// let person3 = new Person('Ben', 71, 'Centerville');
// person3.greet()

// let person4 = new Person('Teresa', 44, 'Calera');
// person4.greet();

// let person5 = new Person('LaDonna', 48, 'Alabaster');
// person5.greet()


// Inheritance - Questions 1 & 2 //

class Vehicle {
    constructor(manufacturer, numberOfWheels){
        this.manufacturer = manufacturer;
        this.numberOfWheels = numberOfWheels;
    }

    aboutVehicle(){
        console.log(`This vehicle is produced by ${this.manufacturer} and rolls on ${this.numberOfWheels} wheels!`)
    }
}
// Test //
// let veh1 = new Vehicle('Land Rover', 4);
// veh1.aboutVehicle();

// let veh2 = new Vehicle('Suzuki', 2);
// veh2.aboutVehicle();


// Inheritance - Question 3 //

class Truck extends Vehicle{
    constructor(manufacturer, numberOfWheels, numberOfDoors, hasBed){
        super(manufacturer, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.hasTruckBed = true;
    }

    aboutVehicle(){
        console.log(`This vehicle is an old, reliable ${this.manufacturer} truck; and it features ${this.numberOfWheels} wheels, ${this.numberOfDoors} doors, and ${this.logTruckBed()}.`)
    }

    logTruckBed() {
        return this.hasTruckBed ? 'a truck bed' : 'no truck bed';
    }
}

// Test //
t1 = new Truck("Chevy", 4, 2, true);
t1.aboutVehicle();

t2 = new Truck("Ford", 4, 4, false);
t2.aboutVehicle();


// Inheritance - Question 4 //

class Sedan extends Vehicle {
    constructor(manufacturer, numberOfWheels, numberOfDoors, size, mpg){
        super(manufacturer, numberOfWheels);
        this.numberOfDoors = numberOfDoors;
        this.size = size;
        this.mpg = mpg;
    }

    aboutVehicle(){
        console.log(`This vehicle is a sedan, it is ${this.size} sized, gets ${this.mpg} miles per gallon, has ${this.numberOfWheels} wheels, ${this.numberOfDoors} doors, and is made by ${this.manufacturer}.`)
    }
}

s1 = new Sedan("Lexus", 4, 4, "medium", 28);
s1.aboutVehicle();



// Inheritance - Question 5 //

class Motorcycles extends Vehicle{

    constructor(manufacturer, numberOfWheels, handlebars, steeringWheel, nodoors){

        super(manufacturer, numberOfWheels);
        this.handlebars = handlebars;
        this.steeringWheel = steeringWheel;
        this.doors = nodoors;
    }

    aboutVehicle(){
        console.log(`This is a motorcycle, made by ${this.manufacturer}, has ${this.numberOfWheels} wheels, has handlebars ${this.handlebars}--- Is there a steeringwheel present? ${this.steeringWheel} And, are there doors present? ${this.doors}.`)
    }
}

m1 = new Motorcycles("Kawasaki", 2, true, false, false);
m1.aboutVehicle();



// Inheritance - Question 6 //