const env = {
  modules: false,
  targets: { ie: '11' },
  useBuiltIns: 'usage'
};

// Enable JSX transform in Babel 7.9.0 for React 17
// https://reactjs.org/blog/2020/09/22/introducing-the-new-jsx-transform.html#manual-babel-setup
const react = {
  runtime: 'automatic'
};

// This allows jest to function normally
if (process.env.NODE_ENV === 'test') {
  env.modules = "auto";
}

module.exports = {
  env,
  react,
  extractFormatMessage: {
    outFile: "locales/en.json"
  },
  transformFormatMessage: {
    inline: false
  },
  styledComponents: {
    ssr: false,
    displayName: false
  }
};
