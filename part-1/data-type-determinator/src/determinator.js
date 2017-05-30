/**
 * Determinator module.
 *
 * @module src/determinator
 * @author John Häggerud
 * @author Mast Loock
 * @version 1.1.0
 */

'use strict'

/**
 * Returns a string indicating the type of the data sent to the function.
 *
 * @param {any} data The data whose type is to be returned.
 * @returns {string} The data type of the parameter.
 */
function tellType (data) {
  let result = 'You sent me a'
  let type = typeof data

  if (type === 'undefined') {
    result += 'n undefined value.'
  } else if (type === 'function' ||
      type === 'string' ||
      type === 'number' ||
      type === 'boolean') {
    result += ` ${type}.`
  } else if (type === 'object') {
    if (data === null) {
      result += ' null value.'
    } else if (Array.isArray(data)) {
      result += 'n array.'
    } else {
      result += 'n object.'
    }
  }

  return result
}

exports.tellType = tellType
