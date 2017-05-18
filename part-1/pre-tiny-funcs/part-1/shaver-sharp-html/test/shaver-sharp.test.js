/**
 * Tests for the ShaverSharp namespace.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let shaverSharp = require('../src/shaver-sharp');
let expect = require('chai').expect;

describe('Tests for createBeginTag', function() {

  it('ShaverSharp.createBeginTag(\'h1\') should return \'<h1>\'', function(done) {
    expect(shaverSharp.createBeginTag('h1')).to.eql('<h1>');
    done();
  });

  it('ShaverSharp.startElement(\'p\') should return \'<p>\'', function(done) {
    expect(shaverSharp.createBeginTag('p')).to.eql('<p>');
    done();
  });

  it('ShaverSharp.startElement(\'div\') should return \'<div>\'', function(done) {
    expect(shaverSharp.createBeginTag('div')).to.eql('<div>');
    done();
  });
});

describe('Tests for createEndTag', function() {

  it('ShaverSharp.createEndTag(\'h1\') should return \'</h1>\'', function(done) {
    expect(shaverSharp.createEndTag('h1')).to.eql('</h1>');
    done();
  });

  it('ShaverSharp.createEndTag(\'p\') should return \'</p>\'', function(done) {
    expect(shaverSharp.createEndTag('p')).to.eql('</p>');
    done();
  });

  it('ShaverSharp.createEndTag(\'p\') should return \'</div>\'', function(done) {
    expect(shaverSharp.createEndTag('div')).to.eql('</div>');
    done();
  });
});

describe('Tests for createElement', function() {

  it('ShaverSharp.createElement(\'h1\', \'This is my headline\') ' +
    'should return \'<h1>This is my headline</h1>\'', function(done) {
    expect(shaverSharp.createElement('h1', 'This is my headline')).to.eql('<h1>This is my headline</h1>');
    done();
  });

  it('ShaverSharp.createElement(\'p\', \'This is a paragraph\') ' +
    'should return \'<p>This is a paragraph</p>\'', function(done) {
    expect(shaverSharp.createElement('p', 'This is a paragraph')).to.eql('<p>This is a paragraph</p>');
    done();
  });

  it('ShaverSharp.createElement(\'img\') ' +
    'should return \'<img />\'', function(done) {
    expect(shaverSharp.createElement('img')).to.eql('<img />');
    done();
  });
});

describe('Tests for createElements', function() {

  let arr = [
    {tagName: 'h1', innerHTML: 'This is a headline'},
    {tagName: 'p', innerHTML:  'This is a paragraph'},
    {tagName: 'h2', innerHTML: 'This is a sub headline'},
    {tagName: 'p', innerHTML: 'This is a paragraph'}
  ];
  let correct = '<h1>This is a headline</h1><p>This is a paragraph</p>' +
    '<h2>This is a sub headline</h2><p>This is a paragraph</p>';

  it('ShaverSharp.createElements() should return a correct string ', function(done) {
    expect(shaverSharp.createElements(arr)).to.eql(correct);
    done();
  });
});
