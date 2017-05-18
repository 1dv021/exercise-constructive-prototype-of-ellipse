/**
 * Test for the calc module.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const calc = require('../src/calc')
const expect = require('chai').expect

describe('Test the function addNumbers', function () {
  it('should return 42', (done) => {
    expect(calc.addNumbers()).to.eql(42)
    done()
  })
})
