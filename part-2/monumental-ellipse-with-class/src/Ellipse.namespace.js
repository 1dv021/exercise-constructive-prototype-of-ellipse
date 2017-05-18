/**
 * Module for Ellipse.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

// "namespace with WeakMap" - https://developer.mozilla.org/en-US/Add-ons/SDK/Guides/Contributor_s_Guide/Private_Properties#From_WeakMap_to_Namespace
let map = new WeakMap();
let internal = function(object) {
  if (!map.has(object)) {
    map.set(object, {});
  }
  return map.get(object);
};

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
    return internal(this).a;
  }

  set a(value) {
    const numberValue = Number(value);
    if (isNaN(numberValue) || numberValue < 0) {
      throw new Error('a must be a number greater than or equal to zero.');
    }
    internal(this).a = numberValue;
  }

  get b() {
    return internal(this).b;
  }

  set b(value) {
    const numberValue = Number(value);
    if (isNaN(numberValue) || numberValue < 0) {
      throw new Error('b must be a number greater than or equal to zero.');
    }
    internal(this).b = numberValue;
  }
}

/**
 *  Exports.
 */
module.exports = Ellipse;
