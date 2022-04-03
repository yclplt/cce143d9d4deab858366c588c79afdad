let req = require.context(".", true, /\.\/[^/]+\/[^/]+\/index\.js$/);

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/index\.js/, "$1");
  module.exports[componentName] = req(key).default;
});

req = require.context(".", true, /\.\/[^/]+\/[^/]+\/props\.js$/);

req.keys().forEach((key) => {
  const componentName = key.replace(/^.+\/([^/]+)\/props\.js/, "$1");
  module.exports[componentName + "Props"] = req(key).default;
});
