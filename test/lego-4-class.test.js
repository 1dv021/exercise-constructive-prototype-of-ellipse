/**
 * Tests for lego-4-class module.
 *
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const LegoBrick = require('../src/lego-4-class')
const expect = require('chai').expect

describe('Part 4 - Using "Class" (module: lego-4-class.js)', () => {
  describe('Testing LegoBrick constructor', () => {
    it('instantiated object should be instance of LegoBrick', done => {
      const legoBrick = new LegoBrick()
      expect(legoBrick).to.be.an.instanceof(LegoBrick)
      done()
    })

    it(`new LegoBrick() should return {x: 2, y: 4, color: 'red'}`, done => {
      const legoBrick = new LegoBrick()
      expect(legoBrick).to.have.property('x', 2)
      expect(legoBrick).to.have.property('y', 4)
      expect(legoBrick).to.have.property('color', 'red')
      done()
    })

    it(`new LegoBrick(5, 2, 'green') should return {x: 5, y: 2, color: 'green'}`, done => {
      const legoBrick = new LegoBrick(5, 2, 'green')
      expect(legoBrick).to.have.property('x', 5)
      expect(legoBrick).to.have.property('y', 2)
      expect(legoBrick).to.have.property('color', 'green')
      done()
    })
  })

  describe('Testing LegoBrick prototype methods', () => {
    it('should have toString prototype function', done => {
      expect(LegoBrick.prototype).to.have.ownProperty('toString')
      expect(LegoBrick.prototype.toString).to.be.a('Function')
      done()
    })

    it('should have render prototype function', done => {
      expect(LegoBrick.prototype).to.have.ownProperty('render')
      expect(LegoBrick.prototype.render).to.be.a('Function')
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
