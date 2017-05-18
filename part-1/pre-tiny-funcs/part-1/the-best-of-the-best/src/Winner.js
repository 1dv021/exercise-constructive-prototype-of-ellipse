/**
 * Winner namespace.
 *
 * @namespace Winner
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let Winner = (function() {

  /**
   * Analyze the array with names and returns an object where the frequency of the name is showing.
   *
   * @param {String[]} data
   * @returns {Object.<String, Number>} - The object as example: {'mats': 1, 'john': 3}
   */
  let getFrequencyInArray = function(data) {
    let frequency = {};
    let name;

    // Compute the mode by determine the frequency of each value,...
    for (let i = 0; i < data.length; i += 1) {
      name = data[i].toLowerCase();

      if (name in frequency) {
        frequency[name] += 1;
      } else {
        frequency[name] = 1;
      }
    }

    return frequency;
  };

  /**
   * Takes an object with names and values and returns the name(s) with highest value.
   *
   * @param {Object.<String, Number>} frequency
   * @returns {String[]}
   */
  let getHighestValuesInFrequency = function(frequency) {
    // Sort the frequencies object and put in a array...
    let sortedKeys = Object.keys(frequency).sort(function(a, b) {
      return frequency[b] - frequency[a];
    });

    //  ...filter the object attribute by the highest value, and return all values with the highest value.
    return Object.keys(frequency).filter(function(key) {
      // frequency[sortedKeys[0]] is always the highest value
      return frequency[key] === frequency[sortedKeys[0]];
    });
  };

  /**
   * Sorts an array with strings in ascending order.
   *
   * @param {String[]} data
   * @returns {String[]}
   */
  let sortStringsAscending = function(data) {
    return data.sort();
  };

  /**
   * Analyze the array and returns an array with the name (in lowercase, ascending order) that is most
   * frequent.
   *
   * @param {String[]} data An array with all the winners.
   * @returns {String[]} An array with the most frequent winners.
   */
  const getWinners =  function(data) {
    // ---------------------------------------
    // Do not be changed the in this function!
    // ---------------------------------------
    let sortedKeys;
    let frequency;

    frequency = getFrequencyInArray(data);
    sortedKeys = getHighestValuesInFrequency(frequency);

    return sortStringsAscending(sortedKeys);
  };

  return {
    getFrequencyInArray,
    getHighestValuesInFrequency,
    sortStringsAscending,
    getWinners
  };
})();

module.exports = Winner;
