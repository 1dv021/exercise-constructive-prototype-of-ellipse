/**
 * Tests for the MyArray namespace.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let ra = require('../src/reducedArray');
let expect = require('chai').expect;

describe('Test the getTotal function', function() {

  it('Should return 20 when called with [4, 5, 6, 5]', function(done) {
    let sum = ra.getTotal([4, 5, 6, 5]);
    expect(sum).eql(20);
    done();
  });

  it('Should return 20 when called with [4, 5, -6, 5, 12]', function(done) {
    let sum = ra.getTotal([4, 5, -6, 5, 12]);
    expect(sum).eql(20);
    done();
  });

  it('Should return 1 when called with [1]', function(done) {
    let sum = ra.getTotal([1]);
    expect(sum).eql(1);
    done();
  });

  it('Should return 0 when called with []', function(done) {
    let sum = ra.getTotal([]);
    expect(sum).eql(0);
    done();
  });
});
