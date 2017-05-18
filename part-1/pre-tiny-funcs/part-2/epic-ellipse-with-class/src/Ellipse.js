/**
 * Module for Ellipse.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

class Ellipse {

  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  area() {
    return Math.PI * Math.abs(this.a) * Math.abs(this.b);
  }

  circumference() {
    return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b);
  }

  toString() {
    return '{ a: ' + this.a +
      ', b: ' + this.b +
      ', area: ' + this.area().toFixed(1) +
      ', circumference: ' + this.circumference().toFixed(1) +
      ' }';
  }
}

/**
 * Exports
 */
module.exports = Ellipse;

