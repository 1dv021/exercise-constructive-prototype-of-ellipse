/**
 * my-array module
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Takes an array of numbers and returns the sum of all numbers in the array.
 *
 * @param {number[]} source An array with numbers
 * @returns {number} The total sum of the numbers in the array.
*/
function getSum (source) {
  // Is it an array?
  if (!Array.isArray(source)) {
    throw new TypeError('The argument passed must be an array.')
  }

  return source.reduce((prev, curr) => prev + curr, 0)
}

exports.getSum = getSum
