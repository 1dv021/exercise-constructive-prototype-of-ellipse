/**
 * Module for Ellipse.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Creates a JavaScript Ellipse instance that represents an ellipse.
 *
 * @param {Number} a - The ellipse's major-axis radius.
 * @param {Number} b - The ellipse's minor-axis radius.
 * @constructor
 */
function Ellipse(a, b) {
  /**
   * The ellipse's major-axis radius.
   *
   * @type {Number}
   */
  this.a = a;

  /**
   * The ellipse's minor-axis radius.
   *
   * @type {Number}
   */
  this.b = b;
}

/**
 * Returns the area of the current object.
 *
 * @returns {Number} - A number.
 */
Ellipse.prototype.area = function() {
  return Math.PI * Math.abs(this.a) * Math.abs(this.b);
};

/**
 * Returns the circumference of the current object.
 *
 * @returns {Number} - A number.
 */
Ellipse.prototype.circumference = function() {
  return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b);
};

/**
 * Returns a string that represents the current object.
 *
 * @returns {String} - A string that represents the current object.
 */
Ellipse.prototype.toString = function() {
  return '{ a: ' + this.a +
    ', b: ' + this.b +
    ', area: ' + this.area().toFixed(1) +
    ', circumference: ' + this.circumference().toFixed(1) +
    ' }';
};

/**
 *  Exports.
 */
module.exports = Ellipse;
