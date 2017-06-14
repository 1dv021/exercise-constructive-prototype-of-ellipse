/**
 * Team module.
 *
 * @module src/team
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

  /**
   *  Sorts the team objects of an array in place and returns the array. The team
   *  objects is sorted by descending points.
   *
   * @param {Object[]} teams An unordered array of team objects.
   * @returns {Object[]} An ordered array of team objects.
   */
function sortByPoints (teams) {
  if (!Array.isArray(teams)) {
    throw new TypeError('The argument passed must be an array.')
  }

  return teams.slice(0).sort(function (a, b) {
    return b.points - a.points
  })

  // return teams.slice(0).sort((a, b) => b.points - a.points)
}

exports.sortByPoints = sortByPoints
