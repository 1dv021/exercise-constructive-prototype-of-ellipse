/**
 * The starting point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const ma = require('./src/my-array')

let arr = [{nr: 4}, {nr: 5}]
let result = ma.getSum(arr)
console.log(result) // 9

arr.push({nr: 33})
result = ma.getSum(arr)
console.log(result) // 42
