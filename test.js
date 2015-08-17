'use strict';

var dataAttributes = require('./');
var test = require('tape');
var injectMarkup = require('inject-markup');
var fixture = '<button data-loading-label="Loading..." data-color="#F06">Click me</button>';

test('data attributes', function(t) {
  var button = injectMarkup(fixture).children[0];
  var actual = dataAttributes(button);
  var expected = {
    loadingLabel: 'Loading...',
    color: '#F06'
  };

  t.deepLooseEqual(actual, expected, 'result should be a literal object with camelized keys');
  t.end();
});
