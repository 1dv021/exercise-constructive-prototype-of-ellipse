/**
 * Tests for the MyArray namespace.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let MyArray = require('../src/MyArray');
let expect = require('chai').expect;

describe('MyArray.sort()', function() {

  it('Must throw a TypeError if the source parameter is not an Array.', function(done) {
    expect(function() {MyArray.sort('Not an array.');}).to.throw(TypeError);
    done();
  });

  it('Must NOT return the same Array object the source parameter refers to.', function(done) {
    let arr = [4, 2, 3];
    let res = MyArray.sort(arr);
    expect(res).to.an('array').and
               .to.not.eql(arr);
    done();
  });

  it('The source array must be untouched.', function(done) {
    let arr = [4, 2, 3];
    let res = MyArray.sort(arr);
    expect(res).to.an('array');
    expect(arr).to.eql([4, 2, 3]);
    done();
  });

  it('MyArray.sort([2, 30, 6, 1, 4]) must return [1, 2, 4, 6, 30].', function(done) {
    expect(MyArray.sort([2, 30, 6, 1, 4])).to.eql([1, 2, 4, 6, 30]);
    done();
  });

  it('MyArray.sort([4]) must return [4].', function(done) {
    expect(MyArray.sort([4])).to.eql([4]);
    done();
  });

  it('MyArray.sort([32817, -2, -4, 1987]) must return [-4, -2, 1987, 32817].', function(done) {
    expect(MyArray.sort([32817, -2, -4, 1987])).to.eql([-4, -2, 1987, 32817]);
    done();
  });

});

describe('MyArray.sortDescending', function() {

  it('Must throw a TypeError if the source parameter is not an Array.', function(done) {
    expect(function() {MyArray.sortDescending('Not an array.');}).to.throw(TypeError);
    done();
  });

  it('Must NOT return the same Array object the source parameter refers to.', function(done) {
    let arr = [4, 20, 3];
    let res = MyArray.sortDescending(arr);
    expect(res).to.be.an('array').and
                  .to.not.eql(arr);
    done();
  });

  it('The source array must be untouched.', function(done) {
    let arr = [4, 2, 3];
    let res = MyArray.sortDescending(arr);
    expect(res).to.be.an('array');
    expect(arr).to.eql([4, 2, 3]);
    done();
  });

  it('MyArray.sortDescending([2, 30, 6, 1, 4]) must return [30, 6, 4, 2, 1].', function(done) {
    expect(MyArray.sortDescending([2, 30, 6, 1, 4])).to.eql([30, 6, 4, 2, 1]);
    done();
  });

  it('MyArray.sortDescending([4]) must return [4].', function(done) {
    expect(MyArray.sortDescending([4])).to.eql([4]);
    done();
  });

  it('MyArray.sortDescending([32817, -2, -4, 1987]) must return [32817, 1987, -2, -4].', function(done) {
    expect(MyArray.sortDescending([32817, -2, -4, 1987])).to.eql([32817, 1987, -2, -4]);
    done();
  });
});
