/**
 * Tests for some tiny functions.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.0.1
 */

'use strict';

let mf = require('../src/my-funcs');
let expect = require('chai').expect;

describe('Test add()', function() {
  it('add(); should return 24', function(done) {
    expect(mf.add()).to.eql(24);
    done();
  });
});

describe('Test concat()', function() {
  it('concat(); should return \'\'m going to learn how to program in 9 weeks.\'', function(done) {
    expect(mf.concat()).to.eql('I\'m going to learn how to program in 9 weeks.');
    done();
  });
});

describe('Test round()', function() {
  it('round(); should return 25', function(done) {
    expect(mf.round()).to.eql(25);
    done();
  });

});

describe('Test getOddNumbers', function() {

  it('getOddNumbers(10) should return 1, 3, 5, 7, 9', function(done) {
    expect(mf.getOddNumbers(10)).to.eql('1, 3, 5, 7, 9');
    done();
  });

  it('getOddNumbers(1) should return 1', function(done) {
    expect(mf.getOddNumbers(1)).to.eql('1');
    done();
  });

  it('getOddNumbers(0) should return \'\'', function(done) {
    expect(mf.getOddNumbers(0)).to.eql('');
    done();
  });

  it('getOddNumbers(25) should return \'1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25,\'', function(done) {
    expect(mf.getOddNumbers(25)).to.eql('1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25');
    done();
  });
});

describe(`Test greetings()`, function() {
  it('greetings(); should return the right message', function(done) {
    let hour = new Date().getHours();
    let result = mf.greetings();
    if (hour >= 8 && hour <= 12) {
      expect(result).to.eql('Good morning!');
    } else if (hour > 12 && hour <= 18) {
      expect(result).to.eql('Good afternoon!');
    } else if (hour > 18 && hour <= 24) {
      expect(result).to.eql('Good evening!');
    } else {
      expect(result).to.eql('Good night!');
    }
    done();
  });
});

describe('Test replaceHyphensFor()', function() {
  it('replaceHyphensFor(\'Hello-World!\') should return \'Hello World!\'', function(done) {
    expect(mf.replaceHyphensFor('Hello-World!')).to.eql('Hello World!');
    done();
  });

  it('replaceHyphensFor("Hello-JavaScript-World!") should return \'Hello Javascript World!\'', function(done) {
    expect(mf.replaceHyphensFor('Hello-JavaScript-World!')).to.eql('Hello JavaScript World!');
    done();
  });

  it('replaceHyphensFor("Hello World!") should return \'Hello World!\'', function(done) {
    expect(mf.replaceHyphensFor('Hello World!')).to.eql('Hello World!');
    done();
  });
});

describe('Test replaceHyphensWhile()', function() {
  it('replaceHyphensWhile(\'Hello-World!\') should return \'Hello World!\'', function(done) {
    expect(mf.replaceHyphensWhile('Hello-World!')).to.eql('Hello World!');
    done();
  });

  it('replaceHyphensWhile(\'Hello-JavaScript-World!\') should return \'Hello Javascript World!\'', function(done) {
    expect(mf.replaceHyphensWhile('Hello-JavaScript-World!')).to.eql('Hello JavaScript World!');
    done();
  });

  it('replaceHyphensWhile(\'Hello World!\') should return \'Hello World!\'', function(done) {
    expect(mf.replaceHyphensWhile('Hello World!')).to.eql('Hello World!');
    done();
  });

  it('replaceHyphensWhile(\'-Hello-World-!-\') should return \' Hello World ! \'', function(done) {
    expect(mf.replaceHyphensWhile('-Hello-World-!-')).to.eql(' Hello World ! ');
    done();
  });
});

describe('Test firstThree', function() {
  it('firstThree() should return \'11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53\'', function(done) {
    expect(mf.getNumberSequence()).to.eql('11-12-13, 21-22-23, 31-32-33, 41-42-43, 51-52-53');
    done();
  });
});
