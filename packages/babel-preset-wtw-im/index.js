module.exports = function(context, options) {
  let presets = [
    require('babel-preset-env'),
    (options && options.react === false ? null : require('babel-preset-react'))
  ];

  const plugins = [
    require('babel-plugin-transform-class-properties'),
    require('babel-plugin-transform-object-rest-spread')
  ];

  return {
    presets,
    plugins
  }
};