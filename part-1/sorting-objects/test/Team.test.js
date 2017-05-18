/**
 * Tests for the Team module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

const repository = require('../src/Repository');
const team = require('../src/Team');
const expect = require('chai').expect;

describe('team.sortByPoints()', () => {

  const orderedTeams = [
    {'name': 'Manchester United', 'nickname': 'The Red devils', 'points': 9},
    {'name': 'Everton FC', 'nickname': 'The Toffees', 'points': 7},
    {'name': 'Tottenham Hotspur FC', 'nickname': 'Spurs', 'points': 5},
    {'name': 'Arsenal', 'nickname': 'The Gunners', 'points': 4},
    {'name': 'Liverpool FC', 'nickname': 'The Reds', 'points': 3}
  ];

  let teams;

  beforeEach(() => teams = repository.loadTeams());

  it('should throw an TypeError exception.', done => {
    expect(function() {team.sortByPoints();}).to.throw(TypeError);
    done();
  });

  it('should return a reference to the same array the argument refers to.', done => {
    const result = team.sortByPoints(teams);
    expect(teams).to.equal(result);
    done();
  });

  it('should return a correctly ordered array of team objects.', done => {
    expect(team.sortByPoints(teams)).to.eql(orderedTeams);
    done();
  });
});
