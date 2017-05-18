/**
 * Starting  point of the application.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let ShaverSharp = require('./src/shaver-sharp');
let html;
let arr;

html = ShaverSharp.createBeginTag('p');
console.log(html);

html = ShaverSharp.createEndTag('p');
console.log(html);

html = ShaverSharp.createElement('div', 'In nature there are few sharp lines.');
console.log(html);

html = ShaverSharp.createElement('img');
console.log(html);

arr = [
  {tagName: 'h1', innerHTML: 'A Brainy Quote'},
  {tagName: 'p', innerHTML: 'The sharp employ the sharp.'},
  {tagName: 'h1', innerHTML: 'Another Brainy Quote'},
  {tagName: 'p', innerHTML: 'The pen is mightier than the sword if the sword is very short, and the pen is very sharp.'}
];
html = ShaverSharp.createElements(arr);
console.log(html);
