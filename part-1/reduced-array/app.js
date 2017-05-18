/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let ra = require('./src/reducedArray');

let result = ra.getTotal([1, 2, 3]);

console.log(result);
