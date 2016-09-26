/**
 * Tests for the MyArray namespace.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let bta = require('../src/betterThanAverage');
let expect = require('chai').expect;
let assert = require('chai').assert;

describe('Test the bettarThanAverage function', function() {

  it('should throw a TypeError if the parameter is not an Array', function(done) {
    expect(function() {bta('not an array');}).to.throw(TypeError);
    done();
  });

  it('should throw an Error if the parameter is an empty Array', function(done) {
    expect(function() {bta([]);}).to.throw(Error);
    done();
  });

  it('should return the correct users', function(done) {

    let arr = [
      {name: 'Stina', points: 1},
      {name: 'Erik', points: 2},
      {name: 'Maja', points: 3},
      {name: 'Sven', points: 4}
    ];

    let result = bta(arr);
    assert(Array.isArray(result), 'Did not return an Array!');
    let correct = ['Maja', 'Sven'];
    expect(result).eql(correct);
    done();
  });

  it('should return the correct users (first and last)', function(done) {

    let arr = [
      {name: 'Stina', points: 4},
      {name: 'Erik', points: 2},
      {name: 'Maja', points: 1},
      {name: 'Sven', points: 4}
    ];

    let result = bta(arr);
    assert(Array.isArray(result), 'Did not return an Array!');
    let correct = ['Stina', 'Sven'];
    expect(result).eql(correct);
    done();
  });

  it('should return the students with points equal to the mean point', function(done) {

    let arr = [
      {name: 'Stina', points: 3},
      {name: 'Erik', points: 3},
      {name: 'Maja', points: 3}
    ];

    let result = bta(arr);
    assert(Array.isArray(result), 'Did not return an Array!');
    let correct = ['Stina', 'Erik', 'Maja'];
    expect(result).eql(correct);
    done();
  });
});
