/**
 * Module for reducedArray.
 *
 * @namespace bta
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Takes an Array Numbers and returns the sum of all numbers in the array.
 *
 * @param {Array.<Number>} data An array with numbers
 * @returns {Number} The total sum of the numbers in the array.
 */let getTotal = function(data) {

  // Important to set a start value and just treat sum as a Number
  // otherwise we get NaN.
  return data.reduce(function(sum, currentValue) {
    return sum + currentValue;
  }, 0); // 0 is the start value for sum
};

module.exports.getTotal = getTotal;
