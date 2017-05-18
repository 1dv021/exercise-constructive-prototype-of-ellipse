/**
 * The starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const myFuncs = require('./src/my-funcs')

console.log(myFuncs.roundUp(12.4) + ' => 13')
console.log(myFuncs.roundUp(132.9) + ' => 133')
console.log(myFuncs.roundDown(12.5) + ' => 12')
console.log(myFuncs.roundDown(132.9) + ' => 132')
console.log(myFuncs.round(12.5) + ' => 13')
console.log(myFuncs.round(132.4) + ' => 132')
console.log(myFuncs.getStringLength('Hello, World!') + ' => 13')
console.log(myFuncs.getStringLength('I don\'t need Google, my wife knows everything!') + ' => 46')
console.log(myFuncs.getFirstLetter('Hello, World!') + ' => H')
console.log(myFuncs.getFirstLetter('Byte me!') + ' => B')
console.log(myFuncs.getIndexOfQuestionMark('What\'s a programmer? An organism that turns caffiene and pizza into software.') + ' => 19')
console.log(myFuncs.getIndexOfQuestionMark('In c<>de we trust.') + ' => -1')
console.log(myFuncs.isEqual('Potato', 'Potato') + ' => true')
console.log(myFuncs.isEqual('Apple', 'Pear') + ' => false')
console.log(myFuncs.isEqual('potato', 'Potato') + ' => false')
console.log(myFuncs.isOdd(13) + ' => true')
console.log(myFuncs.isOdd(12) + ' => false')
console.log(myFuncs.isEven(13) + ' => false')
console.log(myFuncs.isEven(12) + ' => true')
