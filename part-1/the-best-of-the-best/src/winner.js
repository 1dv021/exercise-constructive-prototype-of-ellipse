/**
 * Winner module.
 *
 * @module src/winner
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Analyze the array with names and returns an object where the frequency of the name is showing.
 *
 * @param {string[]} data
 * @returns {Object.<string, number>} - The object as example: {'mats': 1, 'john': 3}
 */
function getFrequencyInArray (source) {
  // TODO: Write your code here. Start here!
}

/**
 * Takes an object with names and values and returns the name(s) with highest value.
 *
 * @param {Object.<string, number>} source
 * @returns {string[]}
 */
function getHighestValuesInFrequency (source) {
  // TODO: Write your code here
}

/**
 * Sorts an array with strings in ascending order.
 *
 * @param {string[]} source
 * @returns {string[]}
 */
function sortStringsAscending (source) {
  // TODO: Write your code here
}

/**
 * Analyze the array and returns an array with the name (in lowercase, ascending order) that is most
 * frequent.
 *
 * @param {string[]} source An array with all the winners.
 * @returns {string[]} An array with the most frequent winners.
 */
function getWinners (source) {
  // ---------------------------------------
  // Do not change the code in this function!
  // ---------------------------------------
  let sortedKeys
  let frequency

  frequency = getFrequencyInArray(source)
  sortedKeys = getHighestValuesInFrequency(frequency)

  return sortStringsAscending(sortedKeys)
}

// Exports
exports.getFrequencyInArray = getFrequencyInArray
exports.getHighestValuesInFrequency = getHighestValuesInFrequency
exports.sortStringsAscending = sortStringsAscending
exports.getWinners = getWinners
