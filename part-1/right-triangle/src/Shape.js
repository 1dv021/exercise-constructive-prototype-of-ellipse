/**
 * Namespace for Shape.
 *
 * @namespace Shape
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let Shape = (function() {

  return {
    /**
     * Returns a string representing a right triangle.
     *
     * @param {Number} base The number of characters in the triangle's base.
     * @returns {String}
     */
    createRightTriangle: function(base) {

      let triangle = '';

      for (let row = '#'; row.length <= base; row += '#') {
        triangle += row + '\n';
      }

      return triangle;
    }
  };
}());

module.exports = Shape;
