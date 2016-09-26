/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict';

let mf = require('./src/my-funcs');

console.log(mf.roundUp(12.4) + ' => 13');
console.log(mf.roundUp(132.9) + ' => 133');
console.log(mf.roundDown(12.5) + ' => 12');
console.log(mf.roundDown(132.9) + ' => 132');
console.log(mf.round(12.5) + ' => 13');
console.log(mf.round(132.4) + ' => 132');
console.log(mf.getStringLength('Hello, World!') + ' => 13');
console.log(mf.getStringLength('I don\'t need Google, my wife knows everything!') + ' => 46');
console.log(mf.getFirstLetter('Hello, World!') + ' => H');
console.log(mf.getFirstLetter('Byte me!') + ' => B');
console.log(mf.getIndexOfQuestionMark('What\'s a programmer? An organism that turns caffiene and pizza into software.') + ' => 19');
console.log(mf.getIndexOfQuestionMark('In c<>de we trust.') + ' => -1');
console.log(mf.isEqual('Potato', 'Potato') +  ' => true');
console.log(mf.isEqual('Apple', 'Pear') + ' => false');
console.log(mf.isEqual('potato', 'Potato') + ' => false');
console.log(mf.isOdd(13) + ' => true');
console.log(mf.isOdd(12) + ' => false');
console.log(mf.isEven(13) + ' => false');
console.log(mf.isEven(12) + ' => true');
