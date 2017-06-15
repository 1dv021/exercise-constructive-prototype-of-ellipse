/**
 * The starting point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const bugsy = require('./src/bugsy')

try {
  let result = bugsy.getGangster('AC')
  console.log(`AC: ${result}`)

  result = bugsy.getGangster('ÖÖ')
  console.log(`ÖÖ: ${result}`)
} catch (e) {
  console.error('ERROR: ', e.message)
}
