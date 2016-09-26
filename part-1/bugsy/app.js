/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let bugsy = require('./src/bugsy');

try {
  let result = bugsy.getGangster('AC');
  console.log(result);
} catch (e) {
  console.error('ERROR:' , e.message);
}
