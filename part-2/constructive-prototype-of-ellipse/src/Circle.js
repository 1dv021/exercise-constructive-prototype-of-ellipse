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
 * Creates a JavaScript Circle instance that represents an circle.
 *
 * @param {number} a - The circle's major-axis radius.
 * @constructor
 */
function Circle (radius) {
  Ellipse.call(this, radius, radius)

  Object.defineProperty(this, 'radius', {
    enumerable: true,
    configurable: true,
    get: function () {
      return this.a
    },
    set: function (value) {
      this.a = this.b = value
    }
  })
}

Circle.prototype = Object.create(Ellipse.prototype)
Circle.prototype.constructor = Circle

/**
 * Returns a string that represents the current object.
 *
 * @returns {string} - A string that represents the current object.
 */
Circle.prototype.toString = function () {
  return `radius: ${this.a}, area: ${this.getArea().toFixed(1)}, circumference: ${this.getCircumference().toFixed(1)}`
}

// Exports.
module.exports = Circle
