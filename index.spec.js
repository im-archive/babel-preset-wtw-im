const configPreset = require('./index');
const defaultSettings = require('./default-settings');

it('can exclude react preset', () => {
  let { presets } = configPreset();
  expect(presets[1]).not.toBeNull();

  ({ presets } = configPreset(null, { react: false }));
  expect(presets[1]).toBeNull();
});

describe('babel-plugin-extract-format-message', () => {
  const extractFormatMessageIndex = 2;

  it('can be excluded', () => {
    let { plugins } = configPreset();
    expect(plugins[extractFormatMessageIndex]).not.toBeNull();

    ({ plugins } = configPreset(null, { extractFormatMessage: false }));
    expect(plugins[extractFormatMessageIndex]).toBeFalsy();
  });

  it('consumes the default options', () => {
    const { plugins } = configPreset();
    const settings = plugins[extractFormatMessageIndex][1];
    expect(settings).toMatchObject(defaultSettings.extractFormatMessage);
  });
});

describe('babel-plugin-transform-format-message', () => {
  const transformFormatMessageIndex = 3;

  it('can be excluded', () => {
    let { plugins } = configPreset();
    expect(plugins[transformFormatMessageIndex ]).not.toBeNull();

    ({ plugins } = configPreset(null, { transformFormatMessage: false }));
    expect(plugins[transformFormatMessageIndex]).toBeFalsy();
  });

  it('consume the default options', () => {
    const { plugins } = configPreset();
    const settings = plugins[transformFormatMessageIndex][1];
    expect(settings).toMatchObject(defaultSettings.transformFormatMessage);
  });
});
