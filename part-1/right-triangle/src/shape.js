/**
 * Shape module.
 *
 * @module src/shape
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string representing a right triangle.
 *
 * @param {number} base The number of characters in the triangle's base.
 * @returns {string} A string of hash characters.
 */
function createRightTriangle (base) {
  let triangle = ''

  for (let row = '#'; row.length <= base; row += '#') {
    triangle += `${row}\n`
  }

  return triangle
}

exports.createRightTriangle = createRightTriangle
