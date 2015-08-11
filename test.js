'use strict';

var dataAttributes = require('./');
var test = require('tape');
var injectMarkup = require('inject-markup');
var fixture = '<button data-loading-label="Loading..." data-color="#F06">Click me</button>';

injectMarkup(fixture);

console.log(document.body.innerHTML);

