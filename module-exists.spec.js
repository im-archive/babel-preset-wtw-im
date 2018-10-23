const exists = require('./module-exists');

test('returns true if module exists', () => {
  expect(exists('babel-plugin-styled-components')).toBe(true);
});

test('returns false if module does not exist', () => {
  expect(exists('styled-components')).toBe(false);
});
