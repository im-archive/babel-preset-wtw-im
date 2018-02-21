const defaultSettings = require('./default-settings');

module.exports = function(context, options = {}) {
  const { react, extractFormatMessage, transformFormatMessage } = options;

  const presets = [
    require('babel-preset-env'),
    (react === false ? null : require('babel-preset-react'))
  ];

  const plugins = [
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread'),
    extractFormatMessage !== false && [
      require('babel-plugin-extract-format-message'),
      Object.assign({}, defaultSettings.extractFormatMessage, extractFormatMessage)
    ],
    transformFormatMessage !== false && [
      require('babel-plugin-transform-format-message'),
      Object.assign({}, defaultSettings.transformFormatMessage, transformFormatMessage)
    ]
  ];

  return {
    presets,
    plugins
  }
};