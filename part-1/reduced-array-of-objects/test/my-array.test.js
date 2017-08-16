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

describe('Test the getSum function', () => {
  it('should return 0 when called with []', done => {
    let sum = ma.getSum([])
    expect(sum).eql(0)
    done()
  })

  it('should return 9 when called with [{nr: 4}, {nr : 5}]', done => {
    let sum = ma.getSum([{nr: 4}, {nr: 5}])
    expect(sum).eql(9)
    done()
  })

  it('Should return 9 when called with [{nr: 3}, {nr : 3}, {nr: 3}]', done => {
    let sum = ma.getSum([{nr: 3}, {nr: 3}, {nr: 3}])
    expect(sum).eql(9)
    done()
  })

  it('Must throw a TypeError if the source parameter is not an Array.', done => {
    expect(() => { ma.getSum('Not an array.') }).to.throw(TypeError)
    done()
  })

  it('The source array must be untouched.', done => {
    let arr = [{nr: 3}, {nr: 42}, {nr: -3}]
    ma.getSum(arr)
    expect(arr).to.eql([{nr: 3}, {nr: 42}, {nr: -3}])
    done()
  })
})
