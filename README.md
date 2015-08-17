# data-attributes [![Build Status](https://travis-ci.org/rafaelrinaldi/data-attributes.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/data-attributes)

> Extract data attributes from a DOM node.

Follows the [`data-*` spec](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*). 

## Install

Via [npm](http://npmjs.com):

```sh
$ npm install data-attributes --save
```

Via [Bower](http://bower.io):

```sh
$ bower install data-attributes --save
```

## Usage

```html
<button data-loading-label="Loading..." data-color="#F06">Click me</button>

<script>
  var button = document.querySelector('button');
  var data = dataAttributes(button);

  data(button); // {loadingLabel: "Loading...", color: "#F06"}
</script>
```

### API

### `dataAttributes(element)`

Returns an object containing all data attributes (with camel case keys) from a given DOM node.

## Motivation

I needed something like [jQuery's `$.data()`](http://api.jquery.com/data) to simply retrieve data attributes from DOM elements. It was for a very old project that needs to support IE7.

If you do not care about IE7, you can simply use [`dataset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset).

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
