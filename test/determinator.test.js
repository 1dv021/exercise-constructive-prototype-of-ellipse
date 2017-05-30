/**
 * Tests for the determinator module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const determinator = require('../src/determinator')
const expect = require('chai').expect

describe('Test the function tellType', () => {
  it(`Should return a string 'You sent me a number.' when called with a number.`, done => {
    let result = determinator.tellType(42)
    expect(result).eql('You sent me a number.')
    done()
  })

  it(`Should return a string 'You sent me a boolean.' when called with a boolean.`, done => {
    let result = determinator.tellType(true)
    expect(result).eql('You sent me a boolean.')
    done()
  })

  it(`Should return a string 'You sent me a string.' when called with a string.`, done => {
    let result = determinator.tellType('this is a string')
    expect(result).eql('You sent me a string.')
    done()
  })

  it(`Should return a string 'You sent me an undefined value.' when called with no parameter.`, done => {
    let result = determinator.tellType()
    expect(result).eql('You sent me an undefined value.')
    done()
  })

  it(`Should return a string 'You sent me a function.' when called with a function.`, done => {
    let result = determinator.tellType(() => {})
    expect(result).eql('You sent me a function.')
    done()
  })

  it(`Should return a string 'You sent me a null value.' when called with null.`, done => {
    let result = determinator.tellType(null)
    expect(result).eql('You sent me a null value.')
    done()
  })

  it(`Should return a string 'You sent me an array.' when called with an array.`, done => {
    let result = determinator.tellType([])
    expect(result).eql('You sent me an array.')
    done()
  })

  it(`Should return a string 'You sent me an object.' when called with an object.`, done => {
    let result = determinator.tellType({})
    expect(result).eql('You sent me an object.')
    done()
  })
})
