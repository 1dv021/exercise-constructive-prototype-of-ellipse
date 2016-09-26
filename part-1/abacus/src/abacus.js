/**
 * Module for a very simple adding machine.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Returns the sum of the arguments passed.
 *
 * @param {...*} var_args
 * @returns {Number} The sum of an arbitrary number of numbers.
 */
exports.add = function(var_args) {

  let result = 0;

  for (let i = arguments.length - 1; i >= 0; i -= 1) {
    let value = arguments[i];

    // If the value is a string, and contains a decimal character, replace ',' with '.'.
    if (typeof value === 'string' && value.indexOf(',') > -1) {
      value = value.replace(',', '.');
    }

    // Parse all to float.
    value = parseFloat(value);

    // If the value is not a number return NaN.
    if (isNaN(value)) {
      return NaN;
    }

    // Add the value (will be a Number) to the result.
    result += value;
  }

  return result;
};
