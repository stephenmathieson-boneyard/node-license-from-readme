
module.exports = process.env.LIC_COV
  ? require('./lib-cov/license-from-readme')
  : require('./lib/license-from-readme');

