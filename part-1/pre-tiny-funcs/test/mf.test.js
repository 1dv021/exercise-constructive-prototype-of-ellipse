/**
 * Tests for the mf module.
 *
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const mf = require('../src/mf')
const expect = require('chai').expect

describe('Test roundUp()', () => {
  it('roundUp(12.4) should return 13', done => {
    expect(mf.roundUp(12.4)).to.eql(13)
    done()
  })
  it('roundUp(132.9) should return 133', done => {
    expect(mf.roundUp(132.9)).to.eql(133)
    done()
  })
})

describe('Test roundDown()', () => {
  it('roundDown(12.5) should return 12', done => {
    expect(mf.roundDown(12.5)).to.eql(12)
    done()
  })
  it('roundDown(132.9) should return 132', done => {
    expect(mf.roundDown(132.9)).to.eql(132)
    done()
  })
})

describe('Test round()', () => {
  it('round(12.5) should return 13', done => {
    expect(mf.round(12.5)).to.eql(13)
    done()
  })
  it('round(132.4) should return 132', done => {
    expect(mf.round(132.4)).to.eql(132)
    done()
  })
})

describe('Test getStringLength()', () => {
  it(`getStringLength('Hello, World!') should return 13`, done => {
    expect(mf.getStringLength('Hello, World!')).to.eql(13)
    done()
  })
  it(`getStringLength('I don\\'t need Google, my wife knows everything!') should return 46`, done => {
    expect(mf.getStringLength('I don\'t need Google, my wife knows everything!')).to.eql(46)
    done()
  })
})

describe('Test getFirstLetter()', () => {
  it(`getFirstLetter('Hello, World!') should return 'H'`, done => {
    expect(mf.getFirstLetter('Hello, World!')).to.eql('H')
    done()
  })
  it(`getFirstLetter('Byte me!') should return 'B'`, done => {
    expect(mf.getFirstLetter('Byte me!')).to.eql('B')
    done()
  })
})

describe('Test getIndexOfQuestionMark()', () => {
  it(`getPositionOfQuestionMark('What\\'s a programmer? An organism that turns caffiene and pizza into software.') should return 19`, done => {
    expect(mf.getIndexOfQuestionMark('What\'s a programmer? An organism that turns caffiene and pizza into software.')).to.eql(19)
    done()
  })
  it(`getIndexOfQuestionMark('In c<>de we trust.') should return -1`, done => {
    expect(mf.getIndexOfQuestionMark('In c<>de we trust.')).to.eql(-1)
    done()
  })
})

describe('Test isEqual()', () => {
  it(`isEqual('Potato', 'Potato') should return true`, done => {
    expect(mf.isEqual('Potato', 'Potato')).to.eql(true)
    done()
  })
  it(`isEqual('Apple', 'Pear'); should return false`, done => {
    expect(mf.isEqual('Apple', 'Pear')).to.eql(false)
    done()
  })
  it(`isEqual('potato', 'Potato') should return false`, done => {
    expect(mf.isEqual('potato', 'Potato')).to.eql(false)
    done()
  })
})

describe('Test isOdd()', () => {
  it('isOdd(13) should return true', done => {
    expect(mf.isOdd(13)).to.eql(true)
    done()
  })
  it('isOdd(12) should return false', done => {
    expect(mf.isOdd(12)).to.eql(false)
    done()
  })
})

describe('Test isEven()', () => {
  it('isEven(13) should return false', done => {
    expect(mf.isEven(13)).to.eql(false)
    done()
  })
  it('isEven(12) should return true', done => {
    expect(mf.isEven(12)).to.eql(true)
    done()
  })
})
