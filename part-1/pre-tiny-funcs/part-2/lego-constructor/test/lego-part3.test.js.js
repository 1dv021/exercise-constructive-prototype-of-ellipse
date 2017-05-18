/**
 * Tests for lego-part3 module.
 *
 * @author Johan Leitet
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let LegoBrick = require('../src/lego-part3').LegoBrick;
let expect = require('chai').expect;

describe('Part 3 - Using "Constructor/Prototype Pattern" (file: lego-part3.js)', function() {

  describe('Testing LegoBrick constructor', function() {

    it('instantiated object should be instance of LegoBrick', function(done) {
      const legoBrick = new LegoBrick();
      expect(legoBrick).to.be.an.instanceof(LegoBrick);
      done();
    });

    it('new LegoBrick() should return {x: 2, y: 4, color: \'red\'}', function(done) {
      const legoBrick = new LegoBrick();
      expect(legoBrick).to.have.property('x', 2);
      expect(legoBrick).to.have.property('y', 4);
      expect(legoBrick).to.have.property('color', 'red');
      done();
    });

    it('new LegoBrick(5, 2, \'green\') should return {x: 5, y: 2, color: \'green\'}', function(done) {
      const legoBrick = new LegoBrick(5, 2, 'green');
      expect(legoBrick).to.have.property('x', 5);
      expect(legoBrick).to.have.property('y', 2);
      expect(legoBrick).to.have.property('color', 'green');
      done();
    });
  });

  describe('Testing LegoBrick prototype methods', function() {

    it('should have toString prototype function', function(done) {
      expect(LegoBrick.prototype).to.have.ownProperty('toString');
      expect(LegoBrick.prototype.toString).to.be.a('Function');
      done();
    });

    it('should have render prototype function', function(done) {
      expect(LegoBrick.prototype).to.have.ownProperty('render');
      expect(LegoBrick.prototype.render).to.be.a('Function');
      done();
    });
  });

  describe('Testing toString method', function() {

    it('toString() should return \'® ® ® ® ®\\nn® ® ® ® ®\'', function(done) {
      const legoBrick = new LegoBrick(5, 2, 'green');
      expect(legoBrick.toString()).eql('® ® ® ® ®\n® ® ® ® ®');
      done();
    });

    it('toString() should return \'® ® ®\\n® ® ®\\n® ® ®\'', function(done) {
      const legoBrick = new LegoBrick(3, 3);
      expect(legoBrick.toString()).eql('® ® ®\n® ® ®\n® ® ®');
      done();
    });
  });

});
