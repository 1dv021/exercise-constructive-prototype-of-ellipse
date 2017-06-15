/**
 * MostWanted module.
 *
 * @module src/mostWanted
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns names of dubious persons.
 *
 * @returns {Iterable.<string>}
 */
function * getNames () {
  yield 'Bugsy Malone'
  yield 'Frank Nitti'
  yield 'Stephanie St. Clare'
  yield 'Al Capone'
  yield 'Helen Gills'
  yield 'Johnny Torrio'
  yield 'Bonnie Parker'
}

/**
 * Returns the initials of a name.
 *
 * @param {string} name The name to get the initials of.
 * @returns {string}
 */
function getInitials (name) {
  // If it's a non empty string...
  if ((typeof name === 'string' || name instanceof String) && name.trim()) {
    // ...split it and concatenate the first character of each word.
    return name.split(' ').reduce((prev, next) => (prev += next.charAt(0)), '')
  }

  throw new Error(`The argument passed must be a string that's not empty.`)
}

exports.getNames = getNames
exports.getInitials = getInitials
