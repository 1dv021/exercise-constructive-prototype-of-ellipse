/**
 * The starting  point of the application.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const mf = require('./src/mf')

console.log(`${mf.add()} [90m=> [32m42[39m`)
console.log(`${mf.concat()} [90m=> [32mI'm going to learn how to program in 9 weeks.[39m`)
console.log(`${mf.round()} [90m=> [32m42[39m`)
console.log(`${mf.getOddNumbers(12)} [90m=> [32m1, 3, 5, 7, 9, 11[39m`)
console.log(`${mf.greetings()} [90m=> [32mGood morning/afternoon/evening/night![39m`)
console.log(`${mf.replaceHyphensFor('to-be-or-not-to-be')} [90m=> [32mto be or not to be[39m`)
console.log(`${mf.replaceHyphensWhile('to-be-or-not-to-be')} [90m=> [32mto be or not to be[39m`)
console.log(`${mf.getNumberSequence()} [90m=> [32m11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53[39m`)
