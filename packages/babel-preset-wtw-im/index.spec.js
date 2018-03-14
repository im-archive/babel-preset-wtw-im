const configPreset = require('./index');
const defaultSettings = require('./default-settings');

function findPlugin(pluginList, expectedPlugin) {
  return pluginList.find(plugin =>
    Array.isArray(plugin)
      ? plugin[0] === expectedPlugin
      : plugin === expectedPlugin
  );
}

it('can exclude react preset', () => {
  let { presets } = configPreset();
  expect(presets[1]).not.toBeNull();

  ({ presets } = configPreset(null, { react: false }));
  expect(presets[1]).toBeNull();
});

describe('babel-plugin-extract-format-message', () => {
  const plugin = require('babel-plugin-extract-format-message');

  it('can be excluded', () => {
    let { plugins } = configPreset();
    expect(findPlugin(plugins, plugin)).not.toBeFalsy();

    ({ plugins } = configPreset(null, { extractFormatMessage: false }));
    expect(findPlugin(plugins)).toBeFalsy();
  });

  it('consumes the default options', () => {
    const { plugins } = configPreset();
    const settings = findPlugin(plugins, plugin)[1]
    expect(settings).toMatchObject(defaultSettings.extractFormatMessage);
  });
});

describe('babel-plugin-transform-format-message', () => {
  const plugin = require('babel-plugin-transform-format-message');

  it('can be excluded', () => {
    let { plugins } = configPreset();
    expect(findPlugin(plugins, plugin)).not.toBeFalsy();

    ({ plugins } = configPreset(null, { transformFormatMessage: false }));
    expect(findPlugin(plugins, plugin)).toBeFalsy();
  });

  it('consume the default options', () => {
    const { plugins } = configPreset();
    const settings = findPlugin(plugins, plugin)[1]
    expect(settings).toMatchObject(defaultSettings.transformFormatMessage);
  });
});
