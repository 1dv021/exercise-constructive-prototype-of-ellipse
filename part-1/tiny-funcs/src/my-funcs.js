/**
 * My-funcs module.
 *
 * @module src/my-funcs
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of two local variables.
 *
 * @returns {Number}
 */
exports.add = function () {
  let a = 21
  let b = '21'

  b = Number.parseInt(b)

  return a + b
}

/**
 * Returns a string combined of multiple local variables.
 *
 * @returns {String} The string 'I'm going to learn how to program in 9 weeks.'.
 */
exports.concat = function () {
  let message = 'I\'m going to learn how to program in'
  let time = 9
  let weeks = 'weeks.'

  return message + ' ' + time + ' ' + weeks

  // ALTERNATIVE SOLUTION
  // Using template literals. Note the back-ticks!
  // return `${message} ${time} ${weeks}`
}

/**
 * Returns the sum of two local variables, rounded to the nearest integer.
 *
 * @returns {Number} The sum of two variables rounded to the nearest integer.
 */
exports.round = function () {
  let firstNumber = 12.24
  let secondNumber = 29.27

  return Math.round(firstNumber + secondNumber)
}

/**
 * Returns a string with the sequence of odd numbers from one up to the value of the parameter.
 *
 * @param {Number} max An integer greater than zero.
 * @returns {String} A string with comma separated odd values.
 */
exports.getOddNumbers = function (max) {
  let result = ''

  for (let i = 1; i <= max; i += 2) {
      // Add a comma (if not the first number)...
    if (result.length > 0) {
      result += ', '
    }
    // ...and the number.
    result += i
  }

  return result

  // ALTERNATIVE SOLUTION
  // Using template literal and the method slice to remove the last two characters.
  // let result = ''

  // for (let i = 1; i <= max; i += 2) {
  //   result += `${i}, `
  // }

  // return result.slice(0, -2)

  // ALTERNATIVE SOLUTION
  // Using an array and the method join.
  // let arr = []

  // for (let i = 1; i < max; i += 2) {
  //   arr.push(i)
  // }

  // return arr.join(', ')
}

/**
 * Returns a string with a greeting message according to the time of day.
 *
 * If hour is between 8 and 12 the message should be "Good morning!".
 * If hour is between 12 and 18 the message should be "Good afternoon!".
 * If hour is between 18 and 24 the message should be "Good evening!".
 * If hour is between 24 and 8 the message should be "Good night!".
 *
 * @returns {String} A greeting according to the time of day.
 */
exports.greetings = function () {
  let hour = new Date().getHours()
  let message = 'Good '

  if (hour >= 8 && hour < 12) {
    message += 'morning!'
  } else if (hour >= 12 && hour < 18) {
    message += 'afternoon!'
  } else if (hour >= 18 && hour < 24) {
    message += 'evening!'
  } else {
    message += 'night!'
  }

  return message
}

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str  The string being searched and replaced on.
 * @returns {string} - A new string with all matches of a hyphen replaced by a space.
 */
exports.replaceHyphensFor = function (str) {
  let result = ''

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (char === '-') {
      result += ' '
    } else {
      result += char
    }
  }

  return result

  // ALTERNATIVE SOLUTION
  // ...without a for loop though.
  // return str.replace('-', ' ')
}

/**
 * Returns a string where all hyphens (-) is replaced by a space.
 *
 * @param {string} str  The string being searched and replaced on.
 * @returns {string} - A new string with all matches of a hyphen replaced by a space.
 */
exports.replaceHyphensWhile = function (str) {
  let result = ''
  let i = 0

  while (i < str.length) {
    let char = str.charAt(i)
    if (char === '-') {
      result += ' '
    } else {
      result += char
    }

    i++
  }

  return result
}

/**
 * Returns a string containing a few number sequences.
 *
 * @returns {string} - A string '11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53'.
 */
exports.getNumberSequence = function () {
  const PAIR_MAX_VALUE = 5
  const NUMBER_MAX_VALUE = 3

  let result = ''

  for (let pair = 1; pair <= PAIR_MAX_VALUE; pair++) {
    for (let number = 1; number <= NUMBER_MAX_VALUE; number++) {
      // Result must be a string.
      result += pair.toString() + number.toString()
      // ALTERNATIVE SOLUTION
      // result += `${pair}${number}`

      // No '-' after the last.
      if (number !== NUMBER_MAX_VALUE) {
        result += '-'
      }
    }

    if (pair !== PAIR_MAX_VALUE) {
      result += ', '
    }
  }

  return result
}
