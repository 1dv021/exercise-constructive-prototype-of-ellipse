/**
 * Tests for the Shape module.
 *
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let Shape = require('../src/Shape');
let expect = require('chai').expect;

describe('Shape.createRightTriangle', function() {

    it('Shape.createRightTriangle(3); should return "#\\n##\\n###\\n"', function(done) {
        expect(Shape.createRightTriangle(3)).to.equal('#\n##\n###\n');
        done();
      });

    it('Shape.createRightTriangle(5); should return "#\\n##\\n###\\n####\\n#####\\n"', function(done) {
        expect(Shape.createRightTriangle(5)).to.equal('#\n##\n###\n####\n#####\n');
        done();
      });

    it('Shape.createRightTriangle(7); should return "#\\n##\\n###\\n####\\n#####\\n######\\n#######\\n"', function(done) {
        expect(Shape.createRightTriangle(7)).to.equal('#\n##\n###\n####\n#####\n######\n#######\n');
        done();
      });
  });
