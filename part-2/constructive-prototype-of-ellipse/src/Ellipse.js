/**
 * Module for Ellipse.
 *
 * @module src/Ellipse
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Creates a JavaScript Ellipse instance that represents an ellipse.
 *
 * @param {number} a - The ellipse's major-axis radius.
 * @param {number} b - The ellipse's minor-axis radius.
 * @constructor
 */
function Ellipse (a, b) {
  /**
   * The ellipse's major-axis radius.
   *
   * @type {number}
   */
  this.a = a

  /**
   * The ellipse's minor-axis radius.
   *
   * @type {number}
   */
  this.b = b
}

/**
 * Returns the area of the current object.
 *
 * @returns {number} - A number.
 */
Ellipse.prototype.getArea = function () {
  return Math.PI * Math.abs(this.a) * Math.abs(this.b)
}

/**
 * Returns the circumference of the current object.
 *
 * @returns {number} - A number.
 */
Ellipse.prototype.getCircumference = function () {
  return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b)
}

/**
 * Returns a string that represents the current object.
 *
 * @returns {string} - A string that represents the current object.
 */
Ellipse.prototype.toString = function () {
  return `a: ${this.a}, b: ${this.b}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`
}

// Exports.
module.exports = Ellipse
