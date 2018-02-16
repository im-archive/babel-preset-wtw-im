module.exports = function(context, options) {
  let presets = [
    require('babel-preset-env'),
    (options && options.react === false ? null : require('babel-preset-react'))
  ];

  const plugins = [
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread'),
    [require('babel-plugin-extract-format-message'), Object.assign({
      outFile: "locales/en.json"
    }, options.extractFormatMessage || {}],
    [require('babel-plugin-transform-format-message'), Object.assign({
      inline: false
    }, options.transformFormatMessage || {}]
  ];

  return {
    presets,
    plugins
  }
};