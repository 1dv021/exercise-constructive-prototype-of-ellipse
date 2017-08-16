/**
 * the starting point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const harshad = require('./src/harshad')

console.log(harshad.isValid(10))  // true
console.log(harshad.isValid(24))  // true
console.log(harshad.isValid(198)) // true

console.log(harshad.isValid(17))   // false
console.log(harshad.isValid(349))  // false
console.log(harshad.isValid(2197)) // false

console.log(harshad.getNext(14)) // 18

console.log(harshad.getSequence(3, 160)) // [ 162, 171, 180 ]
console.log(harshad.getSequence(15)) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24 ]
