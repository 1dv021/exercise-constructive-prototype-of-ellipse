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
 * @param {string[]} source
 * @returns {Object.<string, number>} - The object as example: {mats: 1, john: 3}
 */
function getFrequenciesOfNames (source) {
  // Is it an array of strings?
  if (!Array.isArray(source) ||
    !source.every(x => typeof x === 'string')) {
    throw new TypeError('The argument passed must be an array of strings.')
  }

  // Compute the the frequency of each name.
  return source
    .reduce((obj, name) => {
      name = name.toLowerCase()
      obj[name] = (obj[name] || 0) + 1
      return obj
    }, {})

  // // ALTERNATIVE SOLUTIONS
  // let frequency = {}
  //
  // --- for statement.
  // for (let i = 0; i < source.length; i++) {
  //   let name = source[i].toLowerCase()
  //
  //   if (name in frequency) {
  //     frequency[name]++
  //   } else {
  //     frequency[name] = 1
  //   }
  // }
  //
  // --- for...of statement.
  // for (let name of source) {
  //   name = name.toLowerCase()
  //   frequency[name] = (frequency[name] || 0) + 1
  // }
  //
  // return frequency
}

/**
 * Takes an object with names and values and returns the name(s) with the highest count.
 *
 * @param {Object.<string, number>} obj
 * @returns {string[]}
 */
function getMostFrequentNames (obj) {
   // Get the highest count of frequency and...
  let highestCount = Math.max(...(Object.values(obj)))

  //  ...filter the object properties by the highest value.
  return Object.keys(obj).filter(key => obj[key] === highestCount)
}

/**
 * Sorts an array with strings in ascending order.
 *
 * @param {string[]} source
 * @returns {string[]}
 */
function sortNamesAscending (source) {
  return source.slice(0).sort()
}

/**
 * Analyze the array and returns an array with the name (in lowercase, ascending order) that is most
 * frequent.
 *
 * @param {string[]} source An array with all the winners.
 * @returns {string[]} An array with the most frequent winners.
 */
function getNamesOfWinners (source) {
  // ---------------------------------------
  // Do not change the code in this function!
  // ---------------------------------------
  let frequencies
  let names

  frequencies = getFrequenciesOfNames(source)
  names = getMostFrequentNames(frequencies)

  return sortNamesAscending(names)
}

// Exports
exports.getFrequenciesOfNames = getFrequenciesOfNames
exports.getMostFrequentNames = getMostFrequentNames
exports.sortNamesAscending = sortNamesAscending
exports.getNamesOfWinners = getNamesOfWinners
