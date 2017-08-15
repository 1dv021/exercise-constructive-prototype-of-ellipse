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
  it('Should return 20 passing [4, 5, 6, 5] as an argument', done => {
    expect(ma.getSum([4, 5, 6, 5])).eql(20)
    done()
  })

  it('Should return 20 passing [4, 5, -6, 5, 12] as an argument', done => {
    expect(ma.getSum([4, 5, -6, 5, 12])).eql(20)
    done()
  })

  it('Should return 1 passing [1] as an argument', done => {
    expect(ma.getSum([1])).eql(1)
    done()
  })

  it('Should return 0 passing [] as an argument', done => {
    expect(ma.getSum([])).eql(0)
    done()
  })

  it('Must throw a TypeError if the source parameter is not an Array.', done => {
    expect(() => { ma.getSum('Not an array.') }).to.throw(TypeError)
    done()
  })

  it('The source array must be untouched.', done => {
    let arr = [4, 2, 3]
    ma.getSum(arr)
    expect(arr).to.eql([4, 2, 3])
    done()
  })
})
