/**
 * Starting  point of the application.
 *
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

const part1 = require('./src/lego-part1');
const part2 = require('./src/lego-part2');
const part3 = require('./src/lego-part3');

// Testing part 1
try {
  console.log('\n- 1 -------------------\n');
  let lego = part1.createLegoBrick();
  lego.render();
} catch (e) {
  console.error('ERROR: ' , e.message);
}

// Testing part 2
try {
  console.log('\n- 2 -------------------\n');
  let lego = new part2.LegoBrick();
  lego.render();
  console.log();

  lego = new part2.LegoBrick(1, 3, 'blue');
  lego.render();
} catch (e) {
  console.error('ERROR: ' , e.message);
}

// Testing part 3
try {
  console.log('\n- 3 -------------------\n');
  let lego = new part3.LegoBrick();
  lego.render();
  console.log();

  lego = new part3.LegoBrick(5, 2);
  lego.render();
} catch (e) {
  console.error('ERROR: ' , e.message);
}
