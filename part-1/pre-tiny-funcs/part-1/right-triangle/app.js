/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let Shape = require('./src/Shape.js');

let shape = Shape.createRightTriangle(5);
console.log(shape);

shape = Shape.createRightTriangle(10);
console.log(shape);
