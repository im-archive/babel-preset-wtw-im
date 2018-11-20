const defaultSettings = require('./default-settings');
const exists = require('./module-exists');

module.exports = function(context, options = {}) {
  const { env, react, extractFormatMessage, transformFormatMessage, styledComponents } = options;

  const presets = [
    [
      require('@babel/preset-env'),
      Object.assign({}, defaultSettings.env, env)
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

  if (exists('styled-components')) {
    plugins.push([
      require('babel-plugin-styled-components'),
      Object.assign({}, defaultSettings.styledComponents, styledComponents)
    ]);
  }

  return {
    presets,
    plugins
  }
};