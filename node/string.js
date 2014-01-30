exports.addNumString = function (numString) {
  if (numString === '') return 0;

  var specifiedDelimiter = getSpecifiedDelimiter(numString),
  numString = removePrefix(numString, specifiedDelimiter);
  var delimiter = createDelimiter(specifiedDelimiter);

  //if specifiedDelimiter
  return numString.split(delimiter)
                  .reduce(aggregateNumbers, 0);
};

var aggregateNumbers = function (initialValue, currentValue) {
  var num = parseInt(currentValue);
  return (isNumberValid(num))
    ? num + initialValue
    : initialValue;
};

var isNumberValid = function (number) {
  if (number < 0) throw 'foo';
  return number < 1000;
};

var getSpecifiedDelimiter = function(numString) {
  var specifiedDelimiterMatcherString = numString.match(/^\/\/(.*?)\n/);
  console.log(specifiedDelimiterMatcherString);
  var specifiedDelimiterMatcher = specifiedDelimiterMatcherString ? specifiedDelimiterMatcherString[1].match(/\[(.*?)\]/g) : null;
  console.log(specifiedDelimiterMatcher);
  return (specifiedDelimiterMatcher === null) ? null : specifiedDelimiterMatcher.slice[1,specifiedDelimiterMatcher.length];
};

var createDelimiter = function (specifiedDelimiter) {
  if (!specifiedDelimiter) return /,|\n/;
  else {
    return new RegExp(specifiedDelimiter + '|\n');
  }
};

var removePrefix = function (numString, delimiter) {
  if (!delimiter) return numString;
  return numString.slice(4, numString.length);
  
};

exports.getSpecifiedDelimiter = getSpecifiedDelimiter;

