/**
 * The starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const mf = require('./src/mf')

console.log(`${mf.roundUp(12.4)} [90m=> [32m13[39m`)
console.log(`${mf.roundUp(132.9)} [90m=> [32m133[39m`)
console.log(`${mf.roundDown(12.5)} [90m=> [32m12[39m`)
console.log(`${mf.roundDown(132.9)} [90m=> [32m132[39m`)
console.log(`${mf.round(12.5)} [90m=> [32m13[39m`)
console.log(`${mf.round(132.4)} [90m=> [32m132[39m`)
console.log(`${mf.getStringLength('Hello, World!')} [90m=> [32m13[39m`)
console.log(`${mf.getStringLength('I don\'t need Google, my wife knows everything!')} [90m=> [32m46[39m`)
console.log(`${mf.getFirstLetter('Hello, World!')} [90m=> [32mH[39m`)
console.log(`${mf.getFirstLetter('Byte me!')} [90m=> [32mB[39m`)
console.log(`${mf.getIndexOfQuestionMark('What\'s a programmer? An organism that turns caffiene and pizza into software.')} [90m=> [32m19[39m`)
console.log(`${mf.getIndexOfQuestionMark('In c<>de we trust.')} [90m=> [32m-1[39m`)
console.log(`${mf.isEqual('Potato', 'Potato')} [90m=> [32mtrue[39m`)
console.log(`${mf.isEqual('Apple', 'Pear')} [90m=> [32mfalse[39m`)
console.log(`${mf.isEqual('potato', 'Potato')} [90m=> [32mfalse[39m`)
console.log(`${mf.isOdd(13)} [90m=> [32mtrue[39m`)
console.log(`${mf.isOdd(12)} [90m=> [32mfalse[39m`)
console.log(`${mf.isEven(13)} [90m=> [32mfalse[39m`)
console.log(`${mf.isEven(12)} [90m=> [32mtrue[39m`)
