/**
 * The starting point of the application.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const repository = require('./src/repository')
const team = require('./src/team')

try {
  let teams = repository.loadTeams()

  console.log('Unordered teams\n---------------')
  console.log(teams)

  console.log('\nOrdered teams\n-------------')
  console.log(team.sortByPoints(teams))
} catch (e) {
  console.error(e.message)
}
