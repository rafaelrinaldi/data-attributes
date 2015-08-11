# data-attributes [![Build Status](https://travis-ci.org/rafaelrinaldi/data-attributes.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/data-attributes)

> Extract data attributes from a DOM node.

Follows the [`data-*` spec](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*). 

## Install

Via [Bower](http://bower.io):

```sh
$ bower install data-attributes --save
```

Via [npm](http://npmjs.com):

```sh
$ npm install data-attributes --save
```

## Usage

```html
<button data-loading-label="Loading..." data-color="#F06">Click me</button>
```

```javascript
var button = document.querySelector('button');
var data = dataAttributes(button);

data(button);
```

### API

### `dataAttributes(element)`

Returns an object with all data attributes.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
