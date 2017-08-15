/**
 * The starting point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const abacus = require('./src/abacus.js')

let sum

sum = abacus.add(2, 5, 19)
console.log(sum) // 26

sum = abacus.add(2, '21', 19)
console.log(sum) // 42

sum = abacus.add(2.5, '5', '3,5', '1.2') // OBS! Både decimalkomma(,) och decimalpunkt(.) ska fungera
console.log(sum) // 12.2

sum = abacus.add(3, 8, 5, true)
console.log(sum) // NaN

sum = abacus.add(3, 8, 5, 'lorem ipsum')
console.log(sum) // NaN
