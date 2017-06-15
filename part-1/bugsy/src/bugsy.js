/**
 * Bugsy module.
 *
 * @module src/bugsy
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const mostWanted = require('./mostWanted')

/**
 * Returns the first gangster whoes full name matching the initials.
 *
 * @param {string} initials The initials of the full name to be found.
 * @returns {string} The first full name found matching the initials.
 */
function getGangster (initials) {
  let names = mostWanted.getNames()
  let name = names.next().value

  while (name) {
    if (initials === mostWanted.getInitials(name)) {
      return name
    }

    name = names.next().value
  }

  return 'No suspect found!'

  // // A lot nicer solution!
  // for (let name of mostWanted.getNames()) {
  //   if (initials === mostWanted.getInitials(name)) {
  //     return name
  //   }
  // }

  // return 'No suspect found!'

  // // An interesting solution!
  // const [...names] = mostWanted.getNames() // Drawback - must transform the generator to an array!

  // return names
  //   .filter(n => initials === mostWanted.getInitials(n))
  //   .shift() || 'No suspect found!'
}

exports.getGangster = getGangster
