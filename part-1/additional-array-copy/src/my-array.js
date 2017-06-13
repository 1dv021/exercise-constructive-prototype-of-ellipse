/**
 * My-array module.
 *
 * @module src/my-array
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a copy of an array where a number has been added to the end of the copy.
 *
 * @param {Array} source The array to create a copy of.
 * @param {Number} number The number to add to the end of the copy of the array.
 * @throws {TypeError} The source parameter must be an Array; number parameter must be a Number.
 * @returns {Array} A copy of the source array with an additional number.
 */
function immutablePushNumber (source, number) {
  let copy

  // Validate the parameter values.
  if (!Array.isArray(source)) {
    throw new TypeError('The first argument passed must be an Array.')
  }

  if (typeof number !== 'number') {
    throw new TypeError('The second argument passed must be a Number.')
  }

  // Make a copy of the source array and add the number to the end of the copy.
  copy = source.slice(0)
  copy.push(number)

  return copy
}

exports.immutablePushNumber = immutablePushNumber
