/**
 * Tests for the determinator module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let determinator = require('../src/determinator');
let expect = require('chai').expect;

describe('Test the function tellType', function() {
  it('Should return a string \'You sent me a number.\' ' +
    'when check is called with a number.', function(done) {
    let result = determinator.tellType(42);
    expect(result).eql('You sent me a number.');
    done();
  });

  it('Should return a string \'You sent me a boolean.\' ' +
    'when check is called with a boolean.', function(done) {
    let result = determinator.tellType(true);
    expect(result).eql('You sent me a boolean.');
    done();
  });

  it('Should return a string \'You sent me a string.\' ' +
    'when check is called with a string.', function(done) {
    let result = determinator.tellType('this is a string');
    expect(result).eql('You sent me a string.');
    done();
  });

  it('Should return a string \'You sent me an undefined value.\' ' +
    'when check is called with no parameter.', function(done) {
    let result = determinator.tellType();
    expect(result).eql('You sent me an undefined value.');
    done();
  });

  it('Should return a string \'You sent me a function.\' ' +
    'when check is called with a function.', function(done) {
    let result = determinator.tellType(function() {});
    expect(result).eql('You sent me a function.');
    done();
  });

  it('Should return a string \'You sent me a null value.\' ' +
    'when check is called with null.', function(done) {
    let result = determinator.tellType(null);
    expect(result).eql('You sent me a null value.');
    done();
  });

  it('Should return a string \'You sent me an array.\' ' +
    'when check is called with an array.', function(done) {
    let result = determinator.tellType([]);
    expect(result).eql('You sent me an array.');
    done();
  });

  it('Should return a string \'You sent me an object.\' ' +
    'when check is called with an object.', function(done) {
    let result = determinator.tellType({});
    expect(result).eql('You sent me an object.');
    done();
  });
});
