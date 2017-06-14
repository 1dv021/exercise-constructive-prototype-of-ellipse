/**
 * Tests for the team module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const repository = require('../src/repository')
const team = require('../src/team')
const expect = require('chai').expect

describe('team.sortByPoints', () => {
  const ORDERED_TEAMS = [
    {'name': 'Tottenham Hotspur FC', 'nickname': 'Spurs', 'points': 86},
    {'name': 'Liverpool FC', 'nickname': 'The Reds', 'points': 76},
    {'name': 'Arsenal', 'nickname': 'The Gunners', 'points': 75},
    {'name': 'Manchester United', 'nickname': 'The Red devils', 'points': 69},
    {'name': 'Everton FC', 'nickname': 'The Toffees', 'points': 61}
  ]

  let teams

  beforeEach(() => { teams = repository.loadTeams() })

  it('should throw an TypeError exception.', done => {
    expect(() => { team.sortByPoints() }).to.throw(TypeError)
    done()
  })

  it('Must NOT return the same Array object the source parameter refers to.', done => {
    const res = team.sortByPoints(teams)
    expect(res).to.an('array').and.to.not.eql(teams)
    done()
  })

  it('The source array must be untouched.', done => {
    const original = JSON.parse(JSON.stringify(teams))
    team.sortByPoints(teams)
    expect(teams).to.eql(original)
    done()
  })

  it('should not return a reference to the same array the argument refers to.', done => {
    const result = team.sortByPoints(teams)
    expect(teams).not.to.equal(result)
    done()
  })

  it('should return a correctly ordered array of team objects.', done => {
    expect(team.sortByPoints(teams)).to.eql(ORDERED_TEAMS)
    done()
  })
})
