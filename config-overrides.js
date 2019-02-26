const { paths } = require('react-app-rewired');

paths.appIndexJs = 

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  Object.assign(config, {
    entry: {
      index: './package/index.tsx'
    }
  })
  return config;
}