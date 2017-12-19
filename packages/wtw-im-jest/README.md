# wtw-im-jest

> Jest configuration for Willis Towers Watson Individual Market

## Installation

````bash
$ npm install --save-dev wtw-im-jest
````

## Usage

### CLI
````bash
$ jest --config=node_modules/wtw-im-jest/index.js
````
### Conventions
This package assumes a convention of writing tests in a `__tests__` directory with a filename matching the pattern `<test_name>.spec.js` or `<test_name>.test.js`.


If the conventions do need meet a projects requirements, individual options can also be placed in a `jest` section within the package.json and the default Jest configuration provided by this package will be overridden. See the [options for configuring Jest](https://facebook.github.io/jest/docs/en/configuration.html).
