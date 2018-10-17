/**
 * Module for Circle.
 *
 * @module src/Circle
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const Ellipse = require('./Ellipse')

/**
 * Represents a circle.
 *
 * @class Circle
 * @extends {Ellipse}
 */
class Circle extends Ellipse {
  /**
   * Creates a JavaScript Circle instance that represents an circle.
   *
   * @param {number} radius - The circle's radius.
   * @constructor
   */
  constructor (radius) {
    super(radius, radius)
  }

  get radius () {
    return this.a
  }

  set radius (value) {
    this.a = this.b = value
  }

  /**
   * Returns a string that represents the current object.
   *
   * @returns {string} - A string that represents the current object.
   */
  toString () {
    return `radius: ${this.radius}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`
  }
}

// Exports.
module.exports = Circle
