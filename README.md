# babel-preset-wtw-im
[![Build Status](https://travis-ci.com/WTW-IM/babel-preset-wtw-im.svg?branch=master)](https://travis-ci.com/WTW-IM/babel-preset-wtw-im)
[![npm version](https://badge.fury.io/js/babel-preset-wtw-im.svg)](https://badge.fury.io/js/babel-preset-wtw-im)
[![dependencies Status](https://david-dm.org/wtw-im/babel-preset-wtw-im/status.svg)](https://david-dm.org/wtw-im/babel-preset-wtw-im)
[![devDependencies Status](https://david-dm.org/wtw-im/babel-preset-wtw-im/dev-status.svg)](https://david-dm.org/wtw-im/babel-preset-wtw-im?type=dev)

> Babel preset for Willis Towers Watson Individual Marketplace

# Install

```bash
$ npm install --save-dev babel-preset-wtw-im
```

# Usage

## Via `.babelrc` (Recommended)

### .babelrc
```json
{
  "presets": ["wtw-im"]
}
```

## Via CLI

```bash
$ babel script.js --presets wtw-im
```

The preset includes the following plugins and presets:

* [babel-preset-react](https://babeljs.io/docs/plugins/preset-react/)
* [babel-preset-env](https://babeljs.io/docs/plugins/preset-env/)
* [babel-plugin-lodash](https://www.npmjs.com/package/babel-plugin-lodash)
* [babel-plugin-extract-format-message](https://www.npmjs.com/package/babel-plugin-extract-format-message)
* [babel-plugin-transform-format-message](https://www.npmjs.com/package/babel-plugin-transform-format-message)
* [babel-plugin-styled-components](https://www.npmjs.com/package/babel-plugin-styled-components)

### The React preset is included by default, there is an option to turn it off

```json
{
  "presets": [["wtw-im", { "react": false }]]
}
```

### babel-preset-env is included. To customize pass in your env options

For more information on available options, please refer to the [babel-preset-env documentation](https://babeljs.io/docs/plugins/preset-env/).

#### .babelrc
```json
{
  "presets": [["wtw-im", {
    "env": {
      "targets": { "browsers": "IE11" }
    }
  }]]
}
```

#### Node API
```js
require("babel-core").transform("code", {
  presets: [ ["wtw-im", {
    env: {
      targets: { browsers: "IE11" }
    }
  }] ]
});
```

### extract-format-message

The [extract-format-message](https://github.com/format-message/format-message/tree/master/packages/babel-plugin-extract-format-message) plugin writes
to `locales/en.json` using the default id generator.

#### .babelrc
```json
{
  "presets": [["wtw-im", { 
    "extractFormatMessage": {
      "generateId": "literal",
      "outFile": "my/locales/path.json"
    }
  }] ]
}
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

The plugin can be disabled by setting `extractFormatMessage` to false

```json
{
  "presets": [["wtw-im", {
    "extractFormatMessage": false
  }]]
}
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

The plugin can be disabled by setting `transformFormatMessage` to false

```json
{
  "presets": [["wtw-im", {
    "transformFormatMessage": false
  }]]
}
```

### babel-plugin-styled-components

The [styled-components plugin](https://www.styled-components.com/docs/tooling#babel-plugin) provides support for better minification and style debugging. The default for this preset
turns off server side rendering and using components' displayName in the generated class names. You can override this behavior as needed. Refer to the linked documentation for
more information on the available options.

If your project does not use the `styled-components` package this plugin will not be included with the preset.

#### .babelrc

```json
{
  "presets": [ ["wtw-im", {
    "styledComponents": {
      "ssr": true,
      "displayName": true
    }
  }] ]
}
```

```js
require("babel-core").transform("code", {
  presets: [ ["wtw-im", {
    styledComponents: {
      ssr: true,
      displayName: true
    }
  }] ]
})
```

#### code

# Contributing

This package uses `semantic-release`. Changes will be compiled into a changelog and the package  versioned, tagged and published automatically.
Please ensure your commit messages adhere to the following structure:

```
<type>: <subject>
<BLANK LINE>
<body>
```

Only the header is mandatory. The supported types are based off of the [ESLint Convention](https://github.com/conventional-changelog/conventional-changelog/tree/35e279d40603b0969c6d622514f5c0984c5bf309/packages/conventional-changelog-eslint).
