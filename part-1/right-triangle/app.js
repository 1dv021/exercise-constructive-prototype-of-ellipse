/**
 * The starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const shape = require('./src/shape.js')

let triangle = shape.createRightTriangle(5)
console.log(triangle)

triangle = shape.createRightTriangle(10)
console.log(triangle)
