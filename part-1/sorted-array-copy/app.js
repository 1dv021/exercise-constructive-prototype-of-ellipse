/**
 * The starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const ma = require('./src/my-array.js')

let originalArray = [2, 5, 1, 6]

try {
  console.log('Original array: ', originalArray)

  let result = ma.immutableSort(originalArray) // should return [1, 2, 5, 6]
  console.log('\nOriginal array: ', originalArray)
  console.log('Sorted array: ', result)

  result = ma.immutableSortDescending(originalArray) // should return [6, 5, 2, 1]
  console.log('\nOriginal array: ', originalArray)
  console.log('Sorted (descending) array: ', result)
} catch (e) {
  console.log(e)
}

console.log()

try {
  ma.immutableSort() // should throw a TypeError
  console.error('ma.immutableSort throws no TypeError!')
} catch (e) {
  console.log(e)
}

try {
  ma.immutableSortDescending() // should throw a TypeError
  console.error('ma.immutableSortDescending throws no TypeError!')
} catch (e) {
  console.log(e)
}
