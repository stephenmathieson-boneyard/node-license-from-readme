
/**
 * Identifies potential license(s) from the given `readme` text
 *
 * @api public
 * @param {String} readme
 * @return {Array}
 */
exports = module.exports = function (readme) {
  var patterns = exports.patterns,
      res = [];

  // hack: let the regexes assume newlines at end of files
  readme += '\n';

  for (var i = patterns.length - 1; i >= 0; i--) {
    var license = exports.pattern(readme, patterns[i]);
    if (license) res.push(license);
  }

  return res;
};


/**
 * Test the given `pattern` against `str`, returning
 * the matching `pattern.name`
 *
 * @api private
 * @param {String} str
 * @param {RegExp|Array} pattern
 * @return {String}
 */
exports.pattern = function (str, pattern) {
  if (!Array.isArray(pattern.regex)) {
    if (pattern.regex.test(str)) {
      return pattern.name;
    }
  }

  for (var i = pattern.regex.length - 1; i >= 0; i--) {
    var p = pattern.regex[i];
    if (p.test(str)) {
      return pattern.name;
    }
  }

  return null;
};

/**
 * Expose the `patterns`
 *
 * Note: originally from in iandotkelly/nlf (MIT)
 *
 * @api private
 * @type {Array}
 */
exports.patterns = [
  {
    name: 'BSD',
    regex:  /\sBSD\s/
  },
  {
    name: 'GPL',
    regex: [
      /\sGPL\s/,
      /\sGPLv2\s/
    ]
  },
  {
    name: 'LGPL',
    regex: /\sLGPL\s/
  },
  {
    name: 'MIT',
    regex : [
      /\sMIT\s/,
      /\s\(MIT\)\s/
    ]
  },
  {
    name: 'Apache',
    regex: /\sApache\sLicen[cs]e\s/
  },
  {
    name: 'MPL',
    regex: /\sMPL\s/
  },
  {
    name: 'WTFPL',
    regex: [
      /\sDO\sWHAT\sTHE\sFUCK\sYOU\sWANT\sTO\sPUBLIC\sLICEN[CS]E\s/i,
      /\sWTFPL\s/
    ]
  }
];
