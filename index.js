(function(exports) {
  'use strict';

  function toUpperCase(string) {
    return string.toUpperCase();
  }

  function toLowerCase(string) {
    return string.toLowerCase();
  }

  // Shout out to MOUT: https://github.com/mout/mout
  function camelize(string) {
    return string
                .toString()
                .trim()
                .replace(/[\-_]/g, ' ')
                .replace(/\s[a-z]/g, toUpperCase)
                .replace(/\s+/g, '')
                .replace(/^[A-Z]/g, toLowerCase);
  }

  function dataAttributes(node) {
    var attributes = {};
    var matchDataAttribute = /^data\-/;
    var total = node.attributes.length;
    var isDataAttribute;
    var attribute;
    var name;
    var i = -1;

    while(++i < total) {
      attribute = node.attributes[i];
      name = attribute.name;
      isDataAttribute = matchDataAttribute.test(name);

      if(isDataAttribute) {
        name = name.replace(matchDataAttribute, '');
        name = camelize(name);

        attributes[name] = attribute.value;
      }
    }

    return attributes;
  }

  if(typeof define === 'function' && define.amd) {
    define(function() { return dataAttributes; });
  } else if(typeof module !== 'undefined' && module.exports) {
    module.exports = dataAttributes;
  } else {
    exports.dataAttributes = dataAttributes;
  }

})(this);
