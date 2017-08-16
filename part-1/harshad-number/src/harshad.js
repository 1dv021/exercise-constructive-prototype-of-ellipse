/**
 * Harshad module.
 *
 * @module src/harshad
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
* Returns true when the given number is a valid Harshad number.
*
* @param {number} number The given number.
* @returns {boolean}
*/
function isValid (number) {
  let strNumber = number.toString()
  let numArray = strNumber.split('').map(Number)
  let result = numArray.reduce((sum, value) => sum + value, 0)

  return number % result === 0
}

/**
* Gets the next Harshad number after the given number.
*
* @param {number} number The given number.
* @returns {number}
*/
function getNext (number) {
  do {
    number++
  } while (!isValid(number))

  return number
}

/**
* Returns a sequence of Harshad numbers, starting after a given number.
*
* @param {number} count The number of consecutive Harshad numbers to return.
* @param {number} [start = 0] The number after which the sequence should start; defaults to 0.
* @returns {number[]}
*/
function getSequence (count, start = 0) {
  let result = []

  for (let i = 0; i < count; i++) {
    start = getNext(start)
    result.push(start)
  }

  return result
}

// Exports
exports.isValid = isValid
exports.getNext = getNext
exports.getSequence = getSequence
