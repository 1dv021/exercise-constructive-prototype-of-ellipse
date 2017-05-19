/**
 * Tests for the shape module.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const shape = require('../src/shape')
const expect = require('chai').expect

describe('shape.createRightTriangle', function () {
  it('createRightTriangle(3); should return "#\\n##\\n###\\n"', done => {
    expect(shape.createRightTriangle(3)).to.equal('#\n##\n###\n')
    done()
  })

  it('createRightTriangle(5); should return "#\\n##\\n###\\n####\\n#####\\n"', done => {
    expect(shape.createRightTriangle(5)).to.equal('#\n##\n###\n####\n#####\n')
    done()
  })

  it('createRightTriangle(7); should return "#\\n##\\n###\\n####\\n#####\\n######\\n#######\\n"', done => {
    expect(shape.createRightTriangle(7)).to.equal('#\n##\n###\n####\n#####\n######\n#######\n')
    done()
  })
})
