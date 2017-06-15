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
 * Returns the name of the students whose points is greater than,
 * or equal to, the average of the points.

 * @param {object[]} students
 * @returns {string[]}
 */
function filterBetterThanAverage (students) {
  if (!Array.isArray(students)) {
    throw TypeError('The argument passed is not an array.')
  }

  // Calculate the average.
  let average = students.reduce(function (current, next) {
    return current + next.points
  }, 0) / students.length

  // First get the one with points over or equal to the mean point (filter)
  // then just return the names (map).
  return students
    .filter(function (current) {
      return current.points >= average
    })
    .map(function (current) {
      return current.name
    })

  // // ALTERNATIVE SOLUTION
  // // Using arrow functions.
  // // Calculate the average.
  // let average = students.reduce((current, next) => current + next.points, 0) / students.length

  // // First get the one with points over or equal to the mean point (filter)
  // // then just return the names (map).
  // return students.filter(current => current.points >= average).map(current => current.name)
}

exports.filterBetterThanAverage = filterBetterThanAverage
