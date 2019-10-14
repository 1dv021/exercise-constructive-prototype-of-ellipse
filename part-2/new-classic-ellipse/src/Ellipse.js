/**
 * Module for Ellipse.
 *
 * @module src/Ellipse
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Represents an ellipse.
 *
 * @class Ellipse
 */
class Ellipse {
/**
 * Creates a JavaScript Ellipse instance that represents an ellipse.
 *
 * @param {number} a - The ellipse's major-axis radius.
 * @param {number} b - The ellipse's minor-axis radius.
 * @constructor
 */
  constructor (a, b) {
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
   * Gets the area of the current object.
   *
   * @returns {number} - A number.
   */
  get area () {
    return Math.PI * Math.abs(this.a) * Math.abs(this.b)
  }

  /**
   * Gets the circumference of the current object.
   *
   * @returns {number} - A number.
   */
  get circumference () {
    return Math.PI * Math.sqrt(2 * this.a * this.a + 2 * this.b * this.b)
  }

  /**
   * Returns a string that represents the current object.
   *
   * @returns {string} - A string that represents the current object.
   */
  toString () {
    return `a: ${this.a}, b: ${this.b}, area: ${this.area.toFixed(1)}, circumference: ${this.circumference.toFixed(1)}`
  }
}

// Exports.
module.exports = Ellipse
