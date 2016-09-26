/**
 * Starting  point of the application.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let repository = require('./src/Repository');
let team = require('./src/Team');

let teams = repository.loadTeams();

console.log('Unordered teams\n---------------');
console.log(teams);

console.log('\nOrdered teams\n-------------');
console.log(team.sortByPoints(teams));
