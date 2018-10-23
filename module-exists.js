module.exports = function exists(moduleName) {
  try {
    require.resolve(moduleName);
  } catch(e) {
    return false;
  }

  return true;
}
