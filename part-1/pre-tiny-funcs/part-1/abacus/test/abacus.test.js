/**
 * Tests for the abacus module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let abacus = require('../src/abacus');
let expect = require('chai').expect;

describe('Test the module with kind values', function() {

  it('Should return 9 when called with 3, 6', function(done) {
    expect(abacus.add(3, 6)).eql(9);
    done();
  });

  it('Should return 50 when called with five arguments a 10', function(done) {
    expect(abacus.add(10, 10, 10, 10, 10)).eql(50);
    done();
  });

  it('Should return 5 when called with just one argument (5)', function(done) {
    expect(abacus.add(5)).eql(5);
    done();
  });

  it('Should return 0 when called without argument', function(done) {
    expect(abacus.add()).eql(0);
    done();
  });

  it('Should handle 0 as a parameter', function(done) {
    expect(abacus.add(2, 3, 0)).eql(5);
    done();
  });

  it('Should return 0 when called -1 and 1', function(done) {
    expect(abacus.add(1, -1)).eql(0);
    done();
  });

  it('Should handle negative results', function(done) {
    expect(abacus.add(-1, -1, -1, -1)).eql(-4);
    expect(abacus.add(1, -1, -1)).eql(-1);
    done();
  });
});

describe('Test the module with non Number values', function() {

  it('Should return 12 when called with with three strings ' +
    'that are text as numbers e.g. (\'4\', \'4\', \'4\')', function(done) {
    expect(abacus.add('4', '4', '4')).eql(12);
    done();
  });

  it('Should return 6.5 when called with decimal number (as dot) as strings', function(done) {
    expect(abacus.add('3.5', 3)).eql(6.5);
    done();
  });

  it('Should return correct when called with decimal number (with a comma) as strings', function(done) {
    expect(abacus.add(2.5, '3,5')).eql(6);
    done();
  });

  it('Should return NaN (Not-A-Number) when called with a string that cannot be converted to a Number.', function(done) {
    expect(abacus.add(1, 'lorem ipsum', 1)).eql(NaN);
    done();
  });

  it('Should return NaN (Not-A-Number) when called with a boolean', function(done) {
    expect(abacus.add(3, 3, true)).eql(NaN);
    done();
  });

});
