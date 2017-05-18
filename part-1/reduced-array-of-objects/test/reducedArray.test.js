/**
 * Tests for the reducedArray module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let ra = require('../src/reducedArray');
let expect = require('chai').expect;

describe('Test the getTotal function', function() {

  it('should return 0 when called with []', function(done) {
    let sum = ra.getTotal([]);
    expect(sum).eql(0);
    done();
  });

  it('should return 9 when called with [{nr: 4}, {nr : 5}]', function(done) {
    let sum = ra.getTotal([{nr: 4}, {nr: 5}]);
    expect(sum).eql(9);
    done();
  });

  it('Should return 9 when called with [{nr: 3}, {nr : 3}, {nr: 3}]', function(done) {
    let sum = ra.getTotal([{nr: 3}, {nr: 3}, {nr: 3}]);
    expect(sum).eql(9);
    done();
  });
});
