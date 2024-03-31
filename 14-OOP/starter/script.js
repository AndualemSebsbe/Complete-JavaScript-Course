'use strict';
/*
Coding Challenge #1

Your tasks:

1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
'speed' property. The 'speed' property is the current speed of the car in
km/h

2. Implement an 'accelerate' method that will increase the car's speed by 10,
and log the new speed to the console

3. Implement a 'brake' method that will decrease the car's speed by 5, and log
the new speed to the console

4. Create 2 'Car' objects and experiment with calling 'accelerate' and
'brake' multiple times on each of them

Test data:
  Data car 1: 'BMW' going at 120 km/h
  Data car 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

// const Car = function (speed, make) {
//   this.speed = speed;
//   this.make = make;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car(120, 'MBW');
// const mercedes = new Car(95, 'Mercedes');

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();
// bmw.brake();
// console.log(`--------------- CAR 2 --------------`);
// mercedes.accelerate();
// mercedes.accelerate();
// mercedes.brake();
// mercedes.accelerate();
// mercedes.brake();
// console.log(mercedes);

/*
Coding Challenge #2

Your tasks:

1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')

2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6)

3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6)

4. Create a new car and experiment with the 'accelerate' and 'brake' methods, and with the getter and setter.

Test data:
  Data car 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

// class carCl {
//   constructor(make, speed) {
//     this.speed = speed;
//     this.make = make;
//   }

//   get speedUS() {
//     const speed = this.speed / 1.6;
//     return speed;
//   }

//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} going at ${this.speed} km/h`);
//   }
// }

// const ford = new carCl('Ford', 120);

// console.log(`${ford.speedUS} mi/h`);

// // accelerate
// ford.accelerate();
// ford.accelerate();
// ford.accelerate();
// // brake
// ford.brake();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

/*
Coding Challenge #3

Your tasks:

1. Use a constructor function to implement an Electric Car (called 'EV') as a child "class" of 'Car'. Besides a make and current speed, the 'EV' also has the current battery charge in % ('charge' property)

2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo'

3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%'

4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! 


Test data:
Data car 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

// Hint: Review the definiton of polymorphism 😘
*/

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} going at ${this.speed} km/h`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// linking prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge -= 1;
  console.log(
    `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const tesla = new EV('Tesla', 120, 23);
tesla.accelerate();
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();

/*
Coding Challenge #4

Your tasks:

1. Re-create Challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class

2. Make the 'charge' property private

3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. Then experiment with chaining!

Test data:
  Data car 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/
