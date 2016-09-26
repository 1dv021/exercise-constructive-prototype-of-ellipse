/**
 * Test for the calc module.
 *
 * @author Mats Loock
 * @version 1.0.0
 */

'use strict';

let calc = require('../src/calc');
let expect = require('chai').expect;

describe('Test the function addNumbers', function() {
  it('addNumbers(); should return 42', function(done) {
    expect(calc.addNumbers()).to.eql(42);
    done();
  });
});
