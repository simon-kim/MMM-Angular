'use strict';

var chai = require('chai');
var expect = chai.expect;
var mmm = require('../../lib/mmm');

describe('Mean', function() {
  it('gets an accurate mean', function() {
    expect(mmm.mean([10, 10, 20, 30, 40])).to.eql(22);
  });
});

describe('Median', function() {
  it('gets an accurate median', function() {
    expect(mmm.median([10, 10, 20, 30, 40])).to.eql(20);
  });
});

describe('Mode', function() {
  it('gets an accurate mode', function() {
    expect(mmm.mode([10, 10, 20, 30, 40])).to.eql(10);
  });
});
