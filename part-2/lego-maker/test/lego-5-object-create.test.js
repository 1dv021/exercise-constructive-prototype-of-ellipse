/**
 * Tests for lego-1-factory-pattern module.
 *
 * @author John Leitet
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const legoMaker5 = require('../src/lego-5-object-create')
const expect = require('chai').expect

describe('Part 5 - Using "Factory Pattern with Object.create" (module: src/lego-5-object-create.js)', () => {
  describe(`Testing returned object's properties (egenskaper)`, () => {
    it(`createLegoBrick() should return {x: 2, y: 4, color: 'red', toString: [Function], render: [Function]}`, done => {
      const obj = legoMaker5.createLegoBrick()
      expect(obj).to.have.property('x', 2)
      expect(obj).to.have.property('y', 4)
      expect(obj).to.have.property('color', 'red')
      expect(obj).to.have.property('toString').that.is.a('function')
      expect(obj).to.have.property('render').that.is.a('function')
      done()
    })

    it(`createLegoBrick(10, 3, 'blue') should return {x: 10, y: 3, color: 'blue', toString: [Function], render: [Function]}`, done => {
      const obj = legoMaker5.createLegoBrick(10, 3, 'blue')
      expect(obj).to.have.property('x', 10)
      expect(obj).to.have.property('y', 3)
      expect(obj).to.have.property('color', 'blue')
      expect(obj).to.have.property('toString').that.is.a('function')
      expect(obj).to.have.property('render').that.is.a('function')
      done()
    })
  })

  describe(`Testing returned object's toString method`, () => {
    it(`toString() should return '® ® ® ®\\n® ® ® ®'`, done => {
      const result = legoMaker5.createLegoBrick(4, 2, 'green').toString()
      expect(result).eql('® ® ® ®\n® ® ® ®')
      done()
    })

    it(`toString() should return '® ® ®\\n® ® ®\\n® ® ®'`, done => {
      const result = legoMaker5.createLegoBrick(3, 3, 'green').toString()
      expect(result).eql('® ® ®\n® ® ®\n® ® ®')
      done()
    })
  })
})
