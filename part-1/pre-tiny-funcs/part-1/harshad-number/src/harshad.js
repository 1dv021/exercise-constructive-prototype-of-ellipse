/**
 * Namespace for Harshad numbers.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let Harshad = (function() {

  return {
    /**
    * Returns true when the given number is a valid Harshad number.
    *
    * @param {Number} number The given number.
    * @returns {Boolean}
    */
    isValid: function(number) {

      let strNumber = number.toString();
      let numArray = strNumber.split('').map(Number);

      let result = numArray.reduce(function(prev, current) {
        return prev + current;
      }, 0);

      return number % result === 0;
    },

    /**
    * Gets the next Harshad number after the given number.
    *
    * @param {Number} number The given number.
    * @returns {Number}
    */
    getNext: function(number) {

      do {
        number += 1;
      } while (!this.isValid(number));

      return number;
    },

    /**
    * Returns a sequence of Harshad numbers, starting after a given number.
    *
    * @param {Number} count The number of consecutive Harshad numbers to return.
    * @param {Number} [start = 0] The number after which the sequence should start; defaults to 0.
    * @returns {Array.<Number>}
    */
    getSequence: function(count, start = 0) {

      let result = [];

      for (let i = 0; i < count; i += 1) {
        start = this.getNext(start);
        result.push(start);
      }

      return result;
    }
  };
}());

module.exports = Harshad;
