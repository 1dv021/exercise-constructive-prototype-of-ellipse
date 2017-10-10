/**
 * Tests for the Circle type.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const expect = require('chai').expect

describe('Circle - Using public properties (file: Circle.js)', () => {
  let Circle

  describe('Type', () => {
    it('type Circle should be defined', done => {
      Circle = require('../src/Circle')
      done()
    })

    it('should be instance of Circle', done => {
      let circle = new Circle()
      expect(circle).to.be.an.instanceOf(Circle)
      done()
    })
  })

  describe('Constructor', () => {
    it('should set the property a to 11.7', done => {
      let circle = new Circle(11.7, 42.4)
      expect(circle).to.have.property('a', 11.7)
      done()
    })

    it('should set the property b to 58.9', done => {
      let circle = new Circle(3.8, 58.9)
      expect(circle).to.have.property('b', 58.9)
      done()
    })
  })

  describe('Prototype', () => {
    describe('getArea method', () => {
      it('should be defined', done => {
        expect(Circle.prototype).to.have.property('getArea').that.is.a('Function')
        done()
      })

      it('{ a = 78.2, b = 7.4 } should return 1817.9768367793415', done => {
        let circle = new Circle(78.2, 7.4)
        expect(circle.getArea()).to.equal(1817.9768367793415)
        done()
      })
    })

    describe('circumference method', () => {
      it('should be defined', done => {
        expect(Circle.prototype).to.have.property('getCircumference').that.is.a('Function')
        done()
      })

      it('{ a = 6, b = 9.7 } should return 50.67419139044478', done => {
        let circle = new Circle(6, 9.7)
        expect(circle.getCircumference()).to.equal(50.67419139044478)
        done()
      })
    })

    describe('toString method', () => {
      it('should be defined as an own property', done => {
        expect(Circle.prototype.hasOwnProperty('toString')).to.equal(true)
        expect(Circle.prototype.toString).to.be.a('Function')
        done()
      })

      it(`{ a = 13.2, b = 42.1 } should return 'a: 13.2, b: 42.1, area: 1745.8, circumference: 196.0'`, done => {
        let circle = new Circle(13.2, 42.1)
        expect(circle.toString()).to.equal('{ a: 13.2, b: 42.1, area: 1745.8, circumference: 196.0 }')
        done()
      })
    })
  })
})
