/**
 * The starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const myFuncs = require('./src/my-funcs')

console.log(`${myFuncs.roundUp(12.4)} [90m=> [32m13[39m`)
console.log(`${myFuncs.roundUp(132.9)} [90m=> [32m133[39m`)
console.log(`${myFuncs.roundDown(12.5)} [90m=> [32m12[39m`)
console.log(`${myFuncs.roundDown(132.9)} [90m=> [32m132[39m`)
console.log(`${myFuncs.round(12.5)} [90m=> [32m13[39m`)
console.log(`${myFuncs.round(132.4)} [90m=> [32m132[39m`)
console.log(`${myFuncs.getStringLength('Hello, World!')} [90m=> [32m13[39m`)
console.log(`${myFuncs.getStringLength('I don\'t need Google, my wife knows everything!')} [90m=> [32m46[39m`)
console.log(`${myFuncs.getFirstLetter('Hello, World!')} [90m=> [32mH[39m`)
console.log(`${myFuncs.getFirstLetter('Byte me!')} [90m=> [32mB[39m`)
console.log(`${myFuncs.getIndexOfQuestionMark('What\'s a programmer? An organism that turns caffiene and pizza into software.')} [90m=> [32m19[39m`)
console.log(`${myFuncs.getIndexOfQuestionMark('In c<>de we trust.')} [90m=> [32m-1[39m`)
console.log(`${myFuncs.isEqual('Potato', 'Potato')} [90m=> [32mtrue[39m`)
console.log(`${myFuncs.isEqual('Apple', 'Pear')} [90m=> [32mfalse[39m`)
console.log(`${myFuncs.isEqual('potato', 'Potato')} [90m=> [32mfalse[39m`)
console.log(`${myFuncs.isOdd(13)} [90m=> [32mtrue[39m`)
console.log(`${myFuncs.isOdd(12)} [90m=> [32mfalse[39m`)
console.log(`${myFuncs.isEven(13)} [90m=> [32mfalse[39m`)
console.log(`${myFuncs.isEven(12)} [90m=> [32mtrue[39m`)
