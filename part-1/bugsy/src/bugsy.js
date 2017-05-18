/**
 * Module for searching for a gangster.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let MostWanted = require('./MostWanted');

/**
 * Returns the first gangster whoes full name matching the initials.
 *
 * @param {String} initials The initials of the full name to be found.
 * @returns {String} The first full name found matching the initials.
 */
let getGangster = function(initials) {

  let names = MostWanted.getNames();
  let name = names.next().value;

  while (name) {
    if (initials === MostWanted.getInitials(name)) {
      return name;
    }

    name = names.next().value;
  }

  return 'No suspect found!';

  // // A lot nicer solution!
  // for (let name of MostWanted.getNames()) {
  //   if (initials === MostWanted.getInitials(name)) {
  //     return name;
  //   }
  // }
  //
  // return 'No suspect found!';
  //
  // // An interesting solution!
  // const [...names] = MostWanted.getNames(); // Drawback - must transform the generator to an array!
  //
  // return names
  //     .filter(n => initials === MostWanted.getInitials(n))
  //     .shift() ||
  //   'No suspect found!';
};

module.exports.getGangster = getGangster;
