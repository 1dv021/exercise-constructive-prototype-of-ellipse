/**
 * Module for a very simple adding machine.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns the sum of the arguments passed.
 *
 * @param {...*} varArgs
 * @returns {Number} The sum of an arbitrary number of numbers.
 */
function add (varArgs) {
  let arr = [...arguments]
    .reduce((prev, curr) => prev.concat(curr), [])
    .map(x => Number.parseFloat(typeof x === 'string' && x.indexOf(',' > -1) ? x.replace(',', '.') : x))

  if (arr.some(x => Number.isNaN(x))) {
    throw new TypeError(`At least one of the arguments can't be parsed as a number.`)
  }

  return arr.reduce((sum, value) => sum + value, 0)

  // // ALTERNATIVE SOLUTION
  // // Old school kind of...
  // let result = 0
  // let arr = []

  // // Merge the arguments into an array.
  // for (let i = arguments.length - 1; i >= 0; i--) {
  //   arr = arr.concat(arguments[i])
  // }

  // for (let i = arr.length - 1; i >= 0; i--) {
  //   let value = arr[i]

  //   // If the value is a string, and contains a decimal character, replace ',' with '.'.
  //   if (typeof value === 'string' && value.indexOf(',') > -1) {
  //     value = value.replace(',', '.')
  //   }

  //   // Parse to float.
  //   value = Number.parseFloat(value)

  //   // If the value is not a number throw an exception.
  //   if (Number.isNaN(value)) {
  //     throw new TypeError(`At least one of the arguments can't be parsed as a number.`)
  //   }

  //   // Add the value (will be a Number) to the result.
  //   result += value
  // }

  // return result
}

 // Nestled arrays -----------------------------------------------------

/**
 * Returns the sum of the arguments passed.
 *
 * @param {...*} varArgs
 * @returns {Number} The sum of an arbitrary number of numbers.
 */
function addNestled (varArgs) {
  let arr = flatten([...arguments])
    .reduce((prev, curr) => prev.concat(curr), [])
    .map(x => Number.parseFloat(typeof x === 'string' && x.indexOf(',' > -1) ? x.replace(',', '.') : x))

  if (arr.some(x => Number.isNaN(x))) {
    throw new TypeError(`At least one of the arguments can't be parsed as a number.`)
  }

  return arr.reduce((sum, value) => sum + value, 0)
}

function flatten (...source) {
  return source.reduce((prev, curr) => {
    if (Array.isArray(curr)) {
      return prev.concat(flatten(...curr))
    } else {
      return prev.concat(curr)
    }
  }, [])
}

exports.add = add
exports.addNestled = addNestled
