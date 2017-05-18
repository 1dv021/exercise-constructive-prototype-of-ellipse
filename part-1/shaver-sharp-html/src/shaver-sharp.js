/**
 * Module for the namespace ShaverSharp.
 *
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.0.1
 */

'use strict';

let ShaverSharp = {

  /**
   * Creates the specified starting tag.
   *
   * @param {string} tagName tagName is a string that specifies the type of starting tag to be created.
   * @returns {string} Returns a starting tag as a string.
   */
  createBeginTag: function(tagName) {

    return '<' + tagName + '>';
  },

  /**
   * Creates the specified closing tag.
   *
   * @param {string} tagName tagName is a string that specifies the type of closing tag to be created.
   * @returns {string} Returns a closing tag as a string.
   */
  createEndTag: function(tagName) {

    return '</' + tagName + '>';
  },

  /**
   * Creates the specified element with content. If no content is specified a self-closing element will be created.
   *
   * @param {string} tagName tagName is a string that specifies the type of element to be created.
   * @param {string=} [innerHTML = ''] innerHTML is a string that describes the element's descendants.
   * @returns {string} Returns an element as a string.
   */
  createElement: function(tagName, innerHTML = '') {

    let result = ShaverSharp.createBeginTag(tagName);

    if (innerHTML) {
      result += innerHTML;
      result += ShaverSharp.createEndTag(tagName);
    } else {
      // Extract everything but the ending > and make the element self-closing.
      result = result.substring(0, result.length - 1) + ' />';
    }

    return result;
  },

  /**
   * Creates the specified elements with contents. If a tagName is not paired with a content a self-closing element
   * will be created.
   *
   * @param  {Array.<object<string, string>>} elementData elementData is an array of objects.
   * @returns {string} Returns specified elements as a string.
   */
  createElements: function(elementData) {

    let result = '';

    elementData.forEach(function(current) {
      result += ShaverSharp.createElement(current.tagName, current.innerHTML);
    });

    return result;
  }
};

// Exports
module.exports = ShaverSharp;
