/**
 * my-array module.
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of all object's numbers.
 *
 * @param {Object[]} source - An array of objects to analyze.
 * @param {number} source[].nr - The number.
 * @returns {number} - The total sum of the nr property of the objects in the provided array.
 */
function getSum (source) {
  // Is it an array?
  if (!Array.isArray(source)) {
    throw new TypeError('The argument passed must be an array.')
  }

  // Important to set a start value and just treat sum as a Number
  // otherwise we get NaN.
  return source.reduce(function (sum, value) {
    return sum + value.nr
  }, 0) // 0 is the start value for sum

  // ALTERNATIVE SOLUTION
  // Using an arrow function.
  // return source.reduce((sum, value) => sum + value.nr, 0)
}

// Exports
exports.getSum = getSum
