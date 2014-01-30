var expect = require('chai').expect,
    addNumString = require('../string').addNumString,
    getSpecifiedDelimiter = require('../string').getSpecifiedDelimiter;

describe('String Calc', function () {
  beforeEach(function () {
  });

  // addNumString specs

  xit('should take empty string and return 0', function () {
    expect(addNumString('')).to.equal(0);
  });

  xit('should take a single number as a string and return the numnber', function () {
    expect(addNumString('1')).to.equal(1);
  });

  xit('should take a comma separate string of numbers and add it', function () {
    expect(addNumString('1,2,4,9')).to.equal(16);
  });

  xit('should take a newline separated string of numbers and add it', function () {
    expect(addNumString('1\n2\n4,9')).to.equal(16);
  });

  xit('should support configurable delimiters', function () {
    expect(addNumString('//;\n1\n2\n4;9')).to.equal(16);
  });

  // getSpecifiedDelimiter

  xit('should get specified delimiters when one is specified', function () {
    expect(getSpecifiedDelimiter('//...\n1\n2\n4;9')).to.equal(['...']);
  });

  it('should get mulitple specified delimiters when they are specified', function () {
    expect(getSpecifiedDelimiter('//[%][;][,]\n1\n,4%9')).to.equal(['%',';',',']);
  });

  xit('should return null if no specified delimiters', function () {
    expect(getSpecifiedDelimiter('\n1\n2\n4;9')).to.be.null;
  });

  xit('should throw an error if a negative number is passed', function () {
    expect(getSpecifiedDelimiter,'1,9').to.throw(Error);
  });

  xit('should ignore numbers greater than 1000', function () {
    expect(addNumString('1002,4,9')).to.equal(13);
  });

});
