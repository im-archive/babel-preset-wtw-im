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

## Via CLI
````bash
$ babel script.js --presets wtw-im
````