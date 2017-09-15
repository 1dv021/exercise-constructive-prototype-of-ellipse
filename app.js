/**
 * The starting point of the application.
 *
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const legoMaker1 = require('./src/lego-1-factory-pattern.js')
const LegoBrick2 = require('./src/lego-2-constructor-pattern')
const LegoBrick3 = require('./src/lego-3-constructor-prototype-pattern')
const LegoBrick4 = require('./src/lego-4-class')
const legoMaker5 = require('./src/lego-5-object-create')

// Testing part 1
try {
  console.log('\n- 1 -------------------\n')
  let lego = legoMaker1.createLegoBrick()
  lego.render()
} catch (e) {
  console.error('ERROR: ', e.message)
}

// Testing part 2
try {
  console.log('\n- 2 -------------------\n')
  let lego = new LegoBrick2()
  lego.render()
  console.log()

  lego = new LegoBrick2(1, 3, 'blue')
  lego.render()
} catch (e) {
  console.error('ERROR: ', e.message)
}

// Testing part 3
try {
  console.log('\n- 3 -------------------\n')
  let lego = new LegoBrick3()
  lego.render()
  console.log()

  lego = new LegoBrick3(5, 2)
  lego.render()
} catch (e) {
  console.error('ERROR: ', e.message)
}

// Testing part 4
try {
  console.log('\n- 4 -------------------\n')
  let lego = new LegoBrick4()
  lego.render()
  console.log()

  lego = new LegoBrick4(3, 2)
  lego.render()
} catch (e) {
  console.error('ERROR: ', e.message)
}

// Testing part 5
try {
  console.log('\n- 1 -------------------\n')
  let lego = legoMaker5.createLegoBrick()
  lego.render()
} catch (e) {
  console.error('ERROR: ', e.message)
}
