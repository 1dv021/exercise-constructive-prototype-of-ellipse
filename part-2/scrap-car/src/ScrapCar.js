/**
 * Module for ScrapCar.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Creates a JavaScript ScrapCar instance that represents a scrap car.
 *
 * @param {String} [petName = 'Skrotbilen'] - The car's pet name.
 * @constructor
 */
function ScrapCar(petName = 'Skrotbilen') {
  /**
   * The car's pet name.
   *
   * @type {String}
   */
  this.petName = petName;

  /**
   * The car's speed.
   *
   * @type {Number}
   */
  this.speed = 0;
}

/**
 * Changes the car's speed.
 *
 * @param {Number} deltaSpeed - The change of the speed of the car.
 * @returns {String} - A string indicating the car is changing the speed.
 */
ScrapCar.prototype.accelerate = function(deltaSpeed) {

  if (typeof deltaSpeed !== 'number' || deltaSpeed === 0) {
    return this.petName + 's hastighet är oförändrad!';
  }

  const oldSpeed = this.speed;
  this.speed += deltaSpeed;

  return this.petName + 's hastighet ' +
    ((deltaSpeed < 0) ? 'minskar' : 'ökar') +
    ' från ' + oldSpeed + ' km/h till ' + this.speed + ' km/h.';
};

/**
 * Changes the car's direction by turning it to the left.
 *
 * @returns {String} - A string indicating the car is turning to the left.
 */
ScrapCar.prototype.turnLeft = function() {
  return this.petName + ' svänger vänster.';
};

/**
 * Changes the car's direction by turning it to the right.
 *
 * @returns {String} - A string indicating the car is turning to the right.
 */
ScrapCar.prototype.turnRight = function() {
  return this.petName + ' svänger höger.';
};

/**
 * Starts the car.
 *
 * @returns {String} - A string indicating the car is starting.
 */
ScrapCar.prototype.start = function() {
  return this.petName + ' startar.';
};

/**
 * Stops the car.
 *
 * @returns {String} - A string indicating the car is stopping.
 */
ScrapCar.prototype.stop = function() {
  this.speed = 0;
  return this.petName + ' stannar.';
};

/**
 *  Exports.
 */
module.exports = ScrapCar;
