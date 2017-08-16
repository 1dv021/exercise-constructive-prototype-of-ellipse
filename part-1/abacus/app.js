/**
 * The starting point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const abacus = require('./src/abacus.js')

console.log(abacus.add(2, 5, 19)) // 26

console.log(abacus.add(2, '21', 19)) // 42

console.log(abacus.add(2.5, '5', '3,5', '1.2')) // 12.2, OBS! Både decimalkomma(,) och decimalpunkt(.) ska fungera

try {
  console.log(abacus.add(3, 8, 5, true))
} catch (e) {
  console.error(e.message)
}

try {
  console.log(abacus.add(3, 8, 5, 'lorem ipsum'))
} catch (e) {
  console.error(e.message)
}

// console.log(abacus.addNestled([1, 2, 3], [[1, 2, 3, 4], 3, [1, 2, 3, 4, 5]], 2, 4, 6))
