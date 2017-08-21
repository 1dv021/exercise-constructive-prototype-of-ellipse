/**
 * Tests for the winner module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

let winner = require('../src/winner')
let expect = require('chai').expect

describe('Test the getFrequencyInArray function', () => {
  it('should return correct object', done => {
    let obj =
      {
        mats: 1,
        john: 3,
        johan: 2,
        jacob: 2
      }
    let result = winner.getFrequencyInArray(['Mats', 'john', 'John', 'john', 'johan', 'jacob', 'Jacob', 'Johan'])
    expect(result).eql(obj)
    done()
  })

  it('should return correct object', done => {
    let obj =
      {
        mats: 1,
        john: 3,
        johan: 3,
        jacob: 2
      }
    let result = winner.getFrequencyInArray(['Mats', 'john', 'johan', 'John', 'john', 'johan', 'jacob', 'Jacob', 'Johan'])
    expect(result).eql(obj)
    done()
  })
})
//

describe('Test the getHighestValuesInFrequency function', () => {
  it('should return correct array', done => {
    let obj = {
      mats: 1,
      john: 3,
      johan: 2,
      jacob: 2
    }

    let res = ['john']
    let result = winner.getHighestValuesInFrequency(obj)
    expect(result).eql(res)
    done()
  })

  it('should return correct array when two or more have same value', done => {
    let obj = {
      mats: 1,
      john: 3,
      johan: 3,
      jacob: 2
    }

    let res = ['john', 'johan']
    let result = winner.getHighestValuesInFrequency(obj)
    expect(result).eql(res)
    done()
  })
})

describe('Test the sortStringsAscending function', () => {
  it('should return correct array', done => {
    let arr = ['john', 'mats', 'johan', 'jacob']
    let result = winner.sortStringsAscending(arr)
    expect(result).eql(['jacob', 'johan', 'john', 'mats'])
    done()
  })
})

describe('Test the getwinner function', () => {
  it(`should return ['john'] when called with ` +
    `['Mats', 'john', 'John', 'johan', 'jacob', 'john', 'jacob']`, done => {
    let result = winner.getwinners(['Mats', 'john', 'John', 'johan', 'jacob', 'john', 'jacob'])
    expect(result).eql(['john'])
    done()
  })

  it(`return ['jacob', 'johan', 'john'] when called with ` +
    `['Mats', 'Johan', 'John', 'johan', 'jacob', 'john', 'jacob']`, done => {
    let result = winner.getwinners(['Mats', 'Johan', 'John', 'johan', 'jacob', 'john', 'jacob'])
    expect(result).eql(['jacob', 'johan', 'john'])
    done()
  })
})
