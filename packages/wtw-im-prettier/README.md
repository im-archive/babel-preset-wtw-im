# wtw-im-prettier

> Prettier configuration for Willis Towers Watson Individual Marketplace

For all the available options, see the [Prettier options documentation](https://prettier.io/docs/en/options.html)

## Installation

````bash
$ npm install --save-dev wtw-im-prettier
````

## Usage

### CLI

````bash
$ prettier --config ./node_modules/wtw-im-prettier/index.js "src/**/*.js"
````

### Overrides

If the config from this project is in use, settings can be overridden using the CLI

````bash
$ prettier --config ./node_modules/wtw-im-prettier/index.js --no-semi false "src/**/*.js"
````