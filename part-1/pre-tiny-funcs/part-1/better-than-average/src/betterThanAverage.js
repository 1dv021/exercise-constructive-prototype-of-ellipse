/**
 * Module for betterThanAverage.
 *
 * @namespace bta
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Returns the name of the students whose points is greater than,
 * or equal to, the average of the points.

 * @param {Array<object>} students
 * @returns {Array<string>} *
 */
let betterThanAverage = function(students) {

  if (!Array.isArray(students)) {
    throw TypeError('The argument is not an array.');
  }

  if (students.length === 0) {
    throw Error('The argument can not be an empty array.');
  }

  // Calculate the average.
  let average = students.reduce(function(current, next) {
      return current + next.points;
    }, 0) / students.length;

  // First get the one with points over or equal to the mean point (filter)
  // then just return the names (map).
  return students.filter(function(current) {
    return current.points >= average;
  }).map(function(current) {
    return current.name;
  });
};

module.exports = betterThanAverage;
