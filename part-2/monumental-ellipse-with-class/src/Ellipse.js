/**
 * Module for Ellipse.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

const _a = new WeakMap();
const _b = new WeakMap();

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

  get a() {
    return _a.get(this);
  }

  set a(value) {
    const numberValue = Number(value);
    if (isNaN(numberValue) || numberValue < 0) {
      throw new Error('a must be a number greater than or equal to zero.');
    }
    _a.set(this, numberValue);
  }

  get b() {
    return _b.get(this);
  }

  set b(value) {
    const numberValue = Number(value);
    if (isNaN(numberValue) || numberValue < 0) {
      throw new Error('b must be a number greater than or equal to zero.');
    }
    _b.set(this, numberValue);
  }
}

/**
 *  Exports.
 */
module.exports = Ellipse;
