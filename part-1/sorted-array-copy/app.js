/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let MyArray = require('./src/MyArray.js');

let originalArray = [2, 5, 1, 6];

try {
  console.log('Original array: ', originalArray);

  let result = MyArray.sort(originalArray); // returns [1, 2, 5, 6]
  console.log('\nOriginal array: ', originalArray);
  console.log('Sorted array: ', result);

  result = MyArray.sortDescending(originalArray); // returns [6, 5, 2, 1]
  console.log('\nOriginal array: ', originalArray);
  console.log('Sorted (descending) array: ', result);
} catch (e) {
  console.log(e);
}

console.log();

try {
  MyArray.sort(); // throws TypeError
  console.error('MyArray.sort throws no TypeError!');
} catch (e) {
  console.log(e);
}

try {
  MyArray.sortDescending(); // throws TypeError
  console.error('MyArray.sortDescending throws no TypeError!');
} catch (e) {
  console.log(e);
}

