# babel-preset-wtw-im

> Babel preset for Willis Towers Watson Individual Marketplace

# Install

````bash
$ npm install --save-dev babel-preset-wtw-im
````

# Usage

## Via `.babelrc` (Recommended)

### .babelrc
````json
{
  "presets": ["wtw-im"]
}
````

### The React preset is included by default, there is an option to turn it off

````json
{
  "presets": [["wtw-im", { react: false }]]
}
````

### extract-format-message

The [extract-format-message](https://github.com/format-message/format-message/tree/master/packages/babel-plugin-extract-format-message) plugin writes
to `locales/en.json` using the default id generator.

#### .babelrc
```
{
  "presets": [["wtw-im", { 
    "extractFormatMessage": {
      "generateId": "literal",
      "outFile": "my/locales/path.json"
    }
  }] ]
```

#### Node API
```js
require("babel-core").transform("code", {
  presets: [ ["wtw-im", {
    extractFormatMessage: {
      generateId: message => messageId, // custom generator function
      outFile: "my/locales/path.json"
    }
  }] ]
})
```

### transform-format-message

The [transform-format-message](https://github.com/format-message/format-message/tree/master/packages/babel-plugin-transform-format-message) plugin will not inline the text by default. Modify this as translations are introduced

#### .babelrc

```
{
  "presets": [ ["wtw-im", {
    "transformFormatMessage": {
      "inline": true
    }
  }] ]
}
```

#### Node API

```js
require("babel-core").transform("code", {
  presets: [ ["wtw-im", {
    transformFormatMessage: {
      generateId: message => messageId,
      inline: true,
      translations: require('path/to/translations'),
      locale: 'es-US'
    }
  }] ]
})
```

## Via CLI
````bash
$ babel script.js --presets wtw-im
````