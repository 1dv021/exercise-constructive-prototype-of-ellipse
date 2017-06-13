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
 * Returns a numerically sorted copy of an array.
 *
 * @param {Number[]} source The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {Number[]} A sorted copy of the source array.
 */
function immutableSort (source) {
  // Is it an array?
  if (!Array.isArray(source)) {
    throw new TypeError('The argument must be an array.')
  }

  // Make a copy of the source array.
  let copy = source.slice()

  // Sort the copy numerically.
  copy.sort(function (a, b) {
    return a - b
  })

  // Return the copy.
  return copy
}

/**
 * Returns a numerically sorted copy (descending order) of an array.
 *
 * @param {Number[]} source The array to create a sorted copy of.
 * @throws {TypeError} The source parameter must be an Array.
 * @returns {Number[]} A sorted copy (descending order) of the source array.
 */
function immutableSortDescending (source) {
  // Is it an array?
  if (!Array.isArray(source)) {
    throw new TypeError('The argument must be an array.')
  }

  // Make a copy of the source array, sort the copy numerically and return the copy.
  return source.slice().sort(function (a, b) {
    return b - a
  })

  // ALTERNATIVE SOLUTION
  // Using an arrow function.
  // return source.slice().sort((a, b) => b - a)
}

exports.immutableSort = immutableSort
exports.immutableSortDescending = immutableSortDescending
