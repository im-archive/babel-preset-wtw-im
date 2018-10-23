const mockExists = jest.fn();
jest.mock('./module-exists', () => mockExists);

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
  expect(presets[1]).toBe(require('@babel/preset-react'));

  ({ presets } = configPreset(null, { react: false }));
  expect(presets[1]).toBeUndefined();
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

describe('babel-plugin-styled-components', () => {
  const plugin = require('babel-plugin-styled-components');

  it('is excluded if project is not using styled-components', () => {
    const { plugins } = configPreset();
    expect(findPlugin(plugins, plugin)).toBeFalsy();
  });

  it('is inlcuded if styled-components is present', () => {
    mockExists.mockReturnValueOnce(true);
    const { plugins } = configPreset();
    expect(findPlugin(plugins, plugin)[0]).toBe(plugin);
  });
});
