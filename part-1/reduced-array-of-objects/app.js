/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let ra = require('./src/reducedArray');

let arr = [{nr: 4}, {nr: 5}];
let result = ra.getTotal(arr);
console.log(result);

arr.push({nr: 33});
result = ra.getTotal(arr);
console.log(result);
