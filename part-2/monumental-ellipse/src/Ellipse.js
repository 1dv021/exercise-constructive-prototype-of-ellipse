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
   * @private
   * @type {Number}
   */
  let _a;

  /**
   * The ellipse's minor-axis radius.
   *
   * @private
   * @type {Number}
   */
  let _b;

  /**
   * Gets or sets the ellipse's major-axis radius.
   *
   * @public
   * @type Number
   * @name Ellipse#a
   */
  Object.defineProperty(this, 'a', {
    get: function() {
      return _a;
    },

    set: function(value) {
      const numberValue = Number(value);
      if (isNaN(numberValue) || numberValue < 0) {
        throw new Error('a must be a number greater than or equal to zero.');
      }
      _a = numberValue;
    }
  });

  /**
   * Gets or sets the ellipse's major-axis radius.
   *
   * @public
   * @type Number
   * @name Ellipse#b
   */
  Object.defineProperty(this, 'b', {
    get: function() {
      return _b;
    },

    set: function(value) {
      const numberValue = Number(value);
      if (isNaN(numberValue) || numberValue < 0) {
        throw new Error('b must be a number greater than or equal to zero.');
      }
      _b = numberValue;
    }
  });

  // Initialize the private properties through the setters.
  this.a = a;
  this.b = b;
}

/**
 * Returns the area of the current object.
 *
 * @returns {Number} - A number representing the current object's area.
 */
Ellipse.prototype.area = function() {
  return Math.PI * Math.abs(this.a) * Math.abs(this.b);
};

/**
 * Returns the circumference of the current object.
 *
 * @returns {Number} - A number representing the current object's circumference.
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
