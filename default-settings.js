const env = {
  modules: false,
  targets: { ie: '11' },
  useBuiltIns: 'usage'
};

// This allows jest to function normally
if (process.env.NODE_ENV === 'test') {
  env.modules = "auto";
}

module.exports = {
  env,
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
