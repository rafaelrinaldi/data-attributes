# data-attributes [![Build Status](https://travis-ci.org/rafaelrinaldi/data-attributes.svg?branch=master)](https://travis-ci.org/rafaelrinaldi/data-attributes)

> Extract data attributes from a DOM node.

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
<button data-loading-label="Loading..." data-color="#F06" data-trigger="">Click me</button>

<script>
  var button = document.querySelector('button');
  var data = dataAttributes(button);
</script>
```

### API

### `dataAttributes([options])`

#### `shouldGuessType`

Type: `boolean`  
Default: `false`  

Whether or not to perform a guess type on data attribute values and convert them.

#### `shouldCammelCase`

Type: `boolean`  
Default: `true`  

Whether or not to convert data attribute keys to cammel case as jQuery does. 

#### `shouldStripData`

Type: `boolean`  
Default: `true`

Whether or not to strip the `data-` prefix from object keys.

## License

MIT © [Rafael Rinaldi](http://rinaldi.io)
