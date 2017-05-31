/**
 * Tests for the shaverSharp module.
 *
 * @author John Häggerud
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const shaverSharp = require('../src/shaver-sharp')
const expect = require('chai').expect

describe('Tests for createBeginTag', () => {
  it(`shaverSharp.createBeginTag('h1') should return '<h1>'`, done => {
    expect(shaverSharp.createBeginTag('h1')).to.eql('<h1>')
    done()
  })

  it(`shaverSharp.startElement('p') should return '<p>'`, done => {
    expect(shaverSharp.createBeginTag('p')).to.eql('<p>')
    done()
  })

  it(`shaverSharp.startElement('div') should return '<div>'`, done => {
    expect(shaverSharp.createBeginTag('div')).to.eql('<div>')
    done()
  })
})

describe('Tests for createEndTag', () => {
  it(`shaverSharp.createEndTag('h1') should return '</h1>'`, done => {
    expect(shaverSharp.createEndTag('h1')).to.eql('</h1>')
    done()
  })

  it(`shaverSharp.createEndTag('p') should return '</p>'`, done => {
    expect(shaverSharp.createEndTag('p')).to.eql('</p>')
    done()
  })

  it(`shaverSharp.createEndTag('p') should return '</div>'`, done => {
    expect(shaverSharp.createEndTag('div')).to.eql('</div>')
    done()
  })
})

describe('Tests for createElement', () => {
  it(`shaverSharp.createElement('h1', 'This is my headline') should return '<h1>This is my headline</h1>'`, done => {
    expect(shaverSharp.createElement('h1', 'This is my headline')).to.eql('<h1>This is my headline</h1>')
    done()
  })

  it(`shaverSharp.createElement('p', 'This is a paragraph') should return '<p>This is a paragraph</p>'`, done => {
    expect(shaverSharp.createElement('p', 'This is a paragraph')).to.eql('<p>This is a paragraph</p>')
    done()
  })

  it(`shaverSharp.createElement('img') should return '<img />'`, done => {
    expect(shaverSharp.createElement('img')).to.eql('<img />')
    done()
  })
})

describe('Tests for createElements', () => {
  let arr = [
    { tagName: 'h1', innerHTML: 'This is a headline' },
    { tagName: 'p', innerHTML: 'This is a paragraph' },
    { tagName: 'h2', innerHTML: 'This is a sub headline' },
    { tagName: 'p', innerHTML: 'This is a paragraph' }
  ]
  const CORRECT = '<h1>This is a headline</h1><p>This is a paragraph</p>' +
    '<h2>This is a sub headline</h2><p>This is a paragraph</p>'

  it(`shaverSharp.createElements() should return a correct string`, done => {
    expect(shaverSharp.createElements(arr)).to.eql(CORRECT)
    done()
  })
})
