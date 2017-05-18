/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let bta = require('./src/betterThanAverage.js');

let arr = [
  {name: 'Stina', points: 1},
  {name: 'Erik', points: 2},
  {name: 'Maja', points: 3},
  {name: 'Sven', points: 4}
];

let result = bta(arr);
console.log(result); // ['Maja', 'Erik']
