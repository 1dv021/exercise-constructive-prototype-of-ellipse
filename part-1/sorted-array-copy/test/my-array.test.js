/**
 * Tests for the my-array module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.1
 */

'use strict'

let ma = require('../src/my-array')
let expect = require('chai').expect

describe('immutableSort', () => {
  it('Must throw a TypeError if the source parameter is not an Array.', done => {
    expect(() => { ma.immutableSort('Not an array.') }).to.throw(TypeError)
    done()
  })

  it('Must NOT return the same Array object the source parameter refers to.', done => {
    let arr = [4, 2, 3]
    let res = ma.immutableSort(arr)
    expect(res).to.an('array').and.to.not.eql(arr)
    done()
  })

  it('The source array must be untouched.', done => {
    let arr = [4, 2, 3]
    let res = ma.immutableSort(arr)
    expect(res).to.an('array')
    expect(arr).to.eql([4, 2, 3])
    done()
  })

  it('immutableSort([2, 30, 6, 1, 4]) must return [1, 2, 4, 6, 30].', done => {
    expect(ma.immutableSort([2, 30, 6, 1, 4])).to.eql([1, 2, 4, 6, 30])
    done()
  })

  it('immutableSort([4]) must return [4].', done => {
    expect(ma.immutableSort([4])).to.eql([4])
    done()
  })

  it('immutableSort([32817, -2, -4, 1987]) must return [-4, -2, 1987, 32817].', done => {
    expect(ma.immutableSort([32817, -2, -4, 1987])).to.eql([-4, -2, 1987, 32817])
    done()
  })
})

describe('immutableSortDescending', () => {
  it('Must throw a TypeError if the source parameter is not an Array.', done => {
    expect(() => { ma.immutableSortDescending('Not an array.') }).to.throw(TypeError)
    done()
  })

  it('Must NOT return the same Array object the source parameter refers to.', done => {
    let arr = [4, 20, 3]
    let res = ma.immutableSortDescending(arr)
    expect(res).to.be.an('array').and
      .to.not.eql(arr)
    done()
  })

  it('The source array must be untouched.', done => {
    let arr = [4, 2, 3]
    let res = ma.immutableSortDescending(arr)
    expect(res).to.be.an('array')
    expect(arr).to.eql([4, 2, 3])
    done()
  })

  it('immutableSortDescending([2, 30, 6, 1, 4]) must return [30, 6, 4, 2, 1].', done => {
    expect(ma.immutableSortDescending([2, 30, 6, 1, 4])).to.eql([30, 6, 4, 2, 1])
    done()
  })

  it('immutableSortDescending([4]) must return [4].', done => {
    expect(ma.immutableSortDescending([4])).to.eql([4])
    done()
  })

  it('immutableSortDescending([32817, -2, -4, 1987]) must return [32817, 1987, -2, -4].', done => {
    expect(ma.immutableSortDescending([32817, -2, -4, 1987])).to.eql([32817, 1987, -2, -4])
    done()
  })
})
