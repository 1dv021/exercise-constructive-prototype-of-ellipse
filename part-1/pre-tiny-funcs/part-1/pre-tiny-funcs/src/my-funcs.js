/**
 * Module for some tiny functions.
 *
 * @author Johan Leitet
 * @author Mast Loock
 * @version 1.0.1
 */

'use strict';

/**
 * Returns the value of a number rounded upward to its nearest integer.
 *
 * @param {Number} number  A number.
 * @returns {Number} The smallest integer greater than or equal to the given number.
 */
exports.roundUp = function(number) {

  let roundedNumber;

  roundedNumber = Math.ceil(number);

  return roundedNumber;
};

/**
 * Returns the value of a number rounded downward to its nearest integer.
 *
 * @param {Number} number A number.
 * @returns {Number} The smallest integer less than or equal to the given number.
 */
exports.roundDown = function(number) {

  let roundedNumber;

  roundedNumber = Math.floor(number);

  return roundedNumber;
};

/**
 * Returns the value of a number rounded to the nearest integer.
 *
 * @param {Number} number A number.
 * @returns {Number} The value of the given number rounded to the nearest integer.
 */
exports.round = function(number) {

  let roundedNumber;

  roundedNumber = Math.round(number);

  return roundedNumber;
};

/**
 * Returns the length of a string.
 *
 * @param {String} str The string to get the length of.
 * @returns {Number} Returns the the length of the sequence of characters of the given string.
 */
exports.getStringLength = function(str) {

  return str.length;
};

/**
 *  Returns the first character from a string.
 *
 * @param {String} str The string to get the first character from.
 * @returns {String} A string representing the first character.
 */
exports.getFirstLetter = function(str) {

  return str.charAt(0);
};

/**
 * Returns the index of the first occurrence of the question mark character (?).
 *
 * @param {String} str The string to search.
 * @returns {Number} The index of the first occurrence of the question mark character; -1 if not found.
 */
exports.getIndexOfQuestionMark = function(str) {

  return str.indexOf('?');
};

/**
 * Determines whether two strings have the same value.
 *
 * @param {String} str1 The first string to compare.
 * @param {String} str2 The second string to compare.
 * @returns {Boolean} true if the value of the str1 parameter is the same as the value of the str2 parameter; otherwise, false.
 */
exports.isEqual = function(str1, str2) {

  return str1 === str2;
};

/**
 * Returns true if number is odd, or false if number is even.
 *
 * @param {Number} number The number to test.
 * @returns {Boolean} true if number is odd; otherwise, false.
 */
exports.isOdd = function(number) {

  return number % 2 === 1;
};

/**
 * Returns true if number is even, or false if number is odd.
 *
 * @param {Number} number The number to test.
 * @returns {Boolean} true if number is even; otherwise, false.
 */
exports.isEven = function(number) {

  return number % 2 === 0;
};
