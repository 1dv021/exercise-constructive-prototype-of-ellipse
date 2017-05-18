/**
 * Module for reducedArray.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Returns the sum of all object's numbers.
 *
 * @param {Object[]} data - An array of objects to analyze.
 * @param {Number} data[].nr - The number.
 * @returns {Number} - The total sum of the nr property of the objects in the provided array.
 */
let getTotal = function(data) {
  // 0 is the start value for sum.
  return data.reduce((sum, currentValue) => sum + currentValue.nr, 0);
};

module.exports.getTotal = getTotal;
