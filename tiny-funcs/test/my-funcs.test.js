/**
 * Tests for the my-funcs module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const myFuncs = require('../src/my-funcs')
const expect = require('chai').expect

describe('Test add()', () => {
  it('add(); should return 24', done => {
    expect(myFuncs.add()).to.eql(24)
    done()
  })
})

describe('Test concat()', () => {
  it('concat(); should return \'\'m going to learn how to program in 9 weeks.\'', done => {
    expect(myFuncs.concat()).to.eql('I\'m going to learn how to program in 9 weeks.')
    done()
  })
})

describe('Test round()', () => {
  it('round(); should return 25', done => {
    expect(myFuncs.round()).to.eql(25)
    done()
  })
})

describe('Test getOddNumbers', () => {
  it('getOddNumbers(10) should return 1, 3, 5, 7, 9', done => {
    expect(myFuncs.getOddNumbers(10)).to.eql('1, 3, 5, 7, 9')
    done()
  })

  it('getOddNumbers(1) should return 1', done => {
    expect(myFuncs.getOddNumbers(1)).to.eql('1')
    done()
  })

  it('getOddNumbers(0) should return \'\'', done => {
    expect(myFuncs.getOddNumbers(0)).to.eql('')
    done()
  })

  it('getOddNumbers(25) should return \'1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25,\'', done => {
    expect(myFuncs.getOddNumbers(25)).to.eql('1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25')
    done()
  })
})

describe(`Test greetings()`, () => {
  it('greetings(); should return the right message', done => {
    let hour = new Date().getHours()
    let result = myFuncs.greetings()
    if (hour >= 8 && hour <= 12) {
      expect(result).to.eql('Good morning!')
    } else if (hour > 12 && hour <= 18) {
      expect(result).to.eql('Good afternoon!')
    } else if (hour > 18 && hour <= 24) {
      expect(result).to.eql('Good evening!')
    } else {
      expect(result).to.eql('Good night!')
    }
    done()
  })
})

describe('Test replaceHyphensFor()', () => {
  it('replaceHyphensFor(\'Hello-World!\') should return \'Hello World!\'', done => {
    expect(myFuncs.replaceHyphensFor('Hello-World!')).to.eql('Hello World!')
    done()
  })

  it('replaceHyphensFor("Hello-JavaScript-World!") should return \'Hello Javascript World!\'', done => {
    expect(myFuncs.replaceHyphensFor('Hello-JavaScript-World!')).to.eql('Hello JavaScript World!')
    done()
  })

  it('replaceHyphensFor("Hello World!") should return \'Hello World!\'', done => {
    expect(myFuncs.replaceHyphensFor('Hello World!')).to.eql('Hello World!')
    done()
  })
})

describe('Test replaceHyphensWhile()', () => {
  it('replaceHyphensWhile(\'Hello-World!\') should return \'Hello World!\'', done => {
    expect(myFuncs.replaceHyphensWhile('Hello-World!')).to.eql('Hello World!')
    done()
  })

  it('replaceHyphensWhile(\'Hello-JavaScript-World!\') should return \'Hello Javascript World!\'', done => {
    expect(myFuncs.replaceHyphensWhile('Hello-JavaScript-World!')).to.eql('Hello JavaScript World!')
    done()
  })

  it('replaceHyphensWhile(\'Hello World!\') should return \'Hello World!\'', done => {
    expect(myFuncs.replaceHyphensWhile('Hello World!')).to.eql('Hello World!')
    done()
  })

  it('replaceHyphensWhile(\'-Hello-World-!-\') should return \' Hello World ! \'', done => {
    expect(myFuncs.replaceHyphensWhile('-Hello-World-!-')).to.eql(' Hello World ! ')
    done()
  })
})

describe('Test firstThree', () => {
  it('firstThree() should return \'11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53\'', done => {
    expect(myFuncs.getNumberSequence()).to.eql('11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53')
    done()
  })
})
