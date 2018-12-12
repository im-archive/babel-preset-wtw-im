const env = {
  modules: false,
  targets: { id: '11' }
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
