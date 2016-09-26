/**
 * Tests for the bugsy module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let bugsy = require('../src/bugsy');
let expect = require('chai').expect;

describe('Test the function getGangster', function() {

  it('getGangster(\'AC\'); should return \'Al Capone\'', function(done) {
    expect(bugsy.getGangster('AC')).to.eql('Al Capone');
    done();
  });

  it('getGangster(\'SSC\'); should return \'Stephanie St. Clare\'', function(done) {
    expect(bugsy.getGangster('SSC')).to.eql('Stephanie St. Clare');
    done();
  });

  it('getGangster(\'FN\'); should return \'Frank Nitti\'', function(done) {
    expect(bugsy.getGangster('FN')).to.eql('Frank Nitti');
    done();
  });

  it('getGangster(\'ÖÖ\'); should return \'No suspect found!\'', function(done) {
    expect(bugsy.getGangster('ÖÖ')).to.eql('No suspect found!');
    done();
  });

});
