/**
 * Tests for the my-array module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const ma = require('../src/my-array')
const expect = require('chai').expect
const assert = require('chai').assert

describe('Test the filterBettarThanAverage function', () => {
  it('should throw a TypeError if the parameter is not an array', done => {
    expect(() => { ma.filterBetterThanAverage('not an array') }).to.throw(TypeError)
    done()
  })

  it('should return empty array if the argument is an empty array', done => {
    let result = ma.filterBetterThanAverage([])
    assert(Array.isArray(result), 'Did not return an array!')
    expect(result).eql([])
    done()
  })

  it('should return the correct users', done => {
    let arr = [
      { name: 'Stina', points: 1 },
      { name: 'Erik', points: 2 },
      { name: 'Maja', points: 3 },
      { name: 'Sven', points: 4 }
    ]

    let result = ma.filterBetterThanAverage(arr)
    assert(Array.isArray(result), 'Did not return an array!')
    expect(result).eql(['Maja', 'Sven'])
    done()
  })

  it('should return the correct users (first and last)', done => {
    let arr = [
      { name: 'Stina', points: 4 },
      { name: 'Erik', points: 2 },
      { name: 'Maja', points: 1 },
      { name: 'Sven', points: 4 }
    ]

    let result = ma.filterBetterThanAverage(arr)
    assert(Array.isArray(result), 'Did not return an Array!')
    let correct = ['Stina', 'Sven']
    expect(result).eql(correct)
    done()
  })

  it('should return the students with points equal to the mean point', done => {
    let arr = [
      { name: 'Stina', points: 3 },
      { name: 'Erik', points: 3 },
      { name: 'Maja', points: 3 }
    ]

    let result = ma.filterBetterThanAverage(arr)
    assert(Array.isArray(result), 'Did not return an Array!')
    let correct = ['Stina', 'Erik', 'Maja']
    expect(result).eql(correct)
    done()
  })

  it(`Must NOT return the same array object the source parameter refers to (don't forget to make a copy of the source array).`, done => {
    let arr = [
      { name: 'Stina', points: 1 },
      { name: 'Erik', points: 2 },
      { name: 'Maja', points: 3 },
      { name: 'Sven', points: 4 }
    ]

    let result = ma.filterBetterThanAverage(arr)
    expect(arr).to.not.eql(result)
    done()
  })

  it('The source array must be untouched.', done => {
    let arr = [
      { name: 'Stina', points: 1 },
      { name: 'Erik', points: 2 },
      { name: 'Maja', points: 3 },
      { name: 'Sven', points: 4 }
    ]
    const ORIGINAL = JSON.parse(JSON.stringify(arr))
    ma.filterBetterThanAverage(arr)
    expect(arr).to.eql(ORIGINAL)
    done()
  })
})
