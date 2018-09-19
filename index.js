const defaultSettings = require('./default-settings');

module.exports = function(context, options = {}) {
  const { env, react, extractFormatMessage, transformFormatMessage } = options;

  const presets = [
    [
      require('@babel/preset-env'),
      Object.assign({}, env)
    ]
  ];

  if (react !== false) {
    presets.push(require('@babel/preset-react'));
  }

  const plugins = [
    require('babel-plugin-lodash'),
    require('@babel/plugin-proposal-class-properties'),
    require('@babel/plugin-proposal-object-rest-spread'),
    [require('babel-plugin-transform-react-remove-prop-types'), { mode: 'wrap' }],
    require('@babel/plugin-transform-runtime')
  ];

  if (extractFormatMessage !== false) {
    plugins.push([
      require('babel-plugin-extract-format-message'),
      Object.assign({}, defaultSettings.extractFormatMessage, extractFormatMessage)
    ]);
  }

  if (transformFormatMessage !== false) {
    plugins.push([
      require('babel-plugin-transform-format-message'),
      Object.assign({}, defaultSettings.transformFormatMessage, transformFormatMessage)
    ]);
  }

  return {
    presets,
    plugins
  }
};