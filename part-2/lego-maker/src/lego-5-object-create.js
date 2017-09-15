/**
 * Module for lego part 5.
 *
 * @module src/lego-5-object-create
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const legoBrickPrototype = {
  /**
   * Renders the object to the console.
   */
  render: function () {
    console.log(this.toString())
  },

  /**
   * Returns a string representing the object.
   *
   * @returns {string} - A string representing the object.
   */
  toString: function () {
    let str = ''

    for (let y = 0; y < this.y; y++) {
      for (let x = 0; x < this.x; x++) {
        str += '®'
        if (x < this.x - 1) {
          str += ' '
        }
      }

      if (y < this.y - 1) {
        str += '\n'
      }
    }

    return str
  }
}

/**
 * Returns an object representing a lego brick.
 *
 * @param {number} [x = 2] - The horizontal number of knobs of the brick.
 * @param {number} [y = 4] - The vertical number of knobs of the brick.
 * @param {string} [color = 'red'] - Color of the brick ('blue', 'red', 'green', etc.).
 * @returns {object} obj - Object representing a brick.
 * @returns {number} obj.x - Horizontal number of horizontal nobs of the brick.
 * @returns {number} obj.y - Vertical number of vertical nobs of the brick.
 * @returns {string} obj.color - Color of the brick.
 * @returns {function} obj.toString - A function returning a string representing the object.
 * @returns {function} obj.render - A function rendering the object.
 */
let createLegoBrick = function (x = 2, y = 4, color = 'red') {
  return Object.create(legoBrickPrototype, {
    'x': {
      enumerable: true,
      value: x,
      writable: true
    },
    'y': {
      enumerable: true,
      value: y,
      writable: true
    },
    'color': {
      enumerable: true,
      value: color,
      writable: true
    }
  })
}

// Exports
exports.createLegoBrick = createLegoBrick
