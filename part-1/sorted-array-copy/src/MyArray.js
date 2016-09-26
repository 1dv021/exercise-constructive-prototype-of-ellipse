/**
 * MyArray namespace.
 *
 * @namespace MyArray
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let MyArray = (function() {

  return {
    /**
     * Returns a numerically sorted copy of an array.
     *
     * @param {Array} source The array to create a sorted copy of.
     * @throws {TypeError} The source parameter must be an Array.
     * @returns {Array} A sorted copy of the source array.
     */
    sort: function(source) {

      // Is it an array?
      if (!Array.isArray(source)) {
        throw new TypeError('The argument must be an Array.');
      }

      // Make a copy of the source array.
      let copy = source.slice();

      // Sort the copy numerically.
      copy.sort(function(a, b) {
        return a - b;
      });

      // Return the copy.
      return copy;
    },

    /**
     * Returns a numerically sorted copy (descending order) of an array.
     *
     * @param {Array} source The array to create a sorted copy of.
     * @throws {TypeError} The source parameter must be an Array.
     * @returns {Array} A sorted copy (descending order) of the source array.
     */
    sortDescending: function(source) {

      // Is it an array?
      if (!Array.isArray(source)) {
        throw new TypeError('The argument must be an Array.');
      }

      // Make a copy of the source array, sort the copy numerically and return the copy.
      return source.slice().sort(function(a, b) {
        return b - a;
      });
    }

  };
})();

module.exports = MyArray;
