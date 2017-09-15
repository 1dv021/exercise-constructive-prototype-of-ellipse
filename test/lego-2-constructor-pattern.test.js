/**
 * Tests for lego-2-constructor-pattern module.
 *
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const LegoBrick = require('../src/lego-2-constructor-pattern')
const expect = require('chai').expect

describe('Part 2 - Using "Constructor Pattern" (module: lego-2-constructor-pattern.js)', () => {
  describe('Testing LegoBrick constructor', () => {
    it('instantiated object should be instance of LegoBrick', done => {
      const legoBrick = new LegoBrick()
      expect(legoBrick).to.be.an.instanceof(LegoBrick)
      done()
    })

    it(`new LegoBrick() should return {x: 2, y: 4, color: 'red', toString: [Function], render: [Function]}`, done => {
      const legoBrick = new LegoBrick()
      expect(legoBrick).to.have.property('x', 2)
      expect(legoBrick).to.have.property('y', 4)
      expect(legoBrick).to.have.property('color', 'red')
      expect(legoBrick).to.have.property('toString').that.is.a('function')
      expect(legoBrick).to.have.property('render').that.is.a('function')
      done()
    })

    it(`new LegoBrick(5, 2, 'green') should return {x: 5, y: 2, color: 'green', toString: [Function], render: [Function]}`, done => {
      const legoBrick = new LegoBrick(5, 2, 'green')
      expect(legoBrick).to.have.property('x', 5)
      expect(legoBrick).to.have.property('y', 2)
      expect(legoBrick).to.have.property('color', 'green')
      expect(legoBrick).to.have.property('toString').that.is.a('function')
      expect(legoBrick).to.have.property('render').that.is.a('function')
      done()
    })
  })

  describe('Testing toString method', () => {
    it(`toString() should return '® ® ® ® ®\\n® ® ® ® ®'`, done => {
      const legoBrick = new LegoBrick(5, 2, 'green')
      expect(legoBrick.toString()).eql('® ® ® ® ®\n® ® ® ® ®')
      done()
    })

    it(`toString() should return '® ® ®\\n® ® ®\\n® ® ®'`, done => {
      const legoBrick = new LegoBrick(3, 3)
      expect(legoBrick.toString()).eql('® ® ®\n® ® ®\n® ® ®')
      done()
    })
  })
})
