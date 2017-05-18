/**
 * Starting  point of the application.
 *
 * @fileOverview Test drives a scrap car.
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

try {
  const ScrapCar = require('./src/ScrapCar');
  const car = new ScrapCar('Bettan');

  console.log(car.start());
  console.log(car.accelerate(30));
  console.log(car.turnLeft());
  console.log(car.turnRight());
  console.log(car.accelerate(60));
  console.log(car.turnRight());
  console.log(car.accelerate(-10));
  console.log(car.stop());
} catch (e) {
  console.error('ERROR: ', e.message);
}
