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

const Car = function (speed, make) {
  this.speed = speed;
  this.make = make;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`${this.make} is going at ${this.speed}`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`${this.make} is going at ${this.speed}`);
};

const bmw = new Car(120, 'MBW');
const mercedes = new Car(95, 'Mercedes');

bmw.accelerate();
bmw.accelerate();
bmw.brake();
bmw.accelerate();
bmw.brake();
console.log(`--------------- CAR 2 --------------`);
mercedes.accelerate();
mercedes.accelerate();
mercedes.brake();
mercedes.accelerate();
mercedes.brake();
