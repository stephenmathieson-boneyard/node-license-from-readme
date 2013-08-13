
var license = require('..');

describe('license-from-readme', function () {

  it('should expose its "patterns"', function () {
    license.patterns.should.be.an.instanceof(Array);
  });

  it('should return an empty array with no matches', function () {
    license('the unsupported license').should.be.an.instanceof(Array);
    license('the unsupported license').should.be.empty;
  });

  it('should match on BSD', function () {
    license('The BSD License').should.be.eql([ 'BSD' ]);
    license('blah BSD blah').should.be.eql([ 'BSD' ]);
    license('blah BSD\n').should.be.eql([ 'BSD' ]);
    license('\nBSD blah').should.be.eql([ 'BSD' ]);
    license('blah BSD').should.be.eql([ 'BSD' ]);
    license('## License\n\nBSD').should.be.eql([ 'BSD' ]);
  });

  it('should match on GPL', function () {
    license('The GPL License').should.be.eql([ 'GPL' ]);
    license('blah GPL blah').should.be.eql([ 'GPL' ]);
    license('blah GPL\n').should.be.eql([ 'GPL' ]);
    license('\nGPL blah').should.be.eql([ 'GPL' ]);
    license('blah GPL').should.be.eql([ 'GPL' ]);
    license('## License\n\nGPL').should.be.eql([ 'GPL' ]);
  });

  it('should match on LGPL', function () {
    license('The LGPL License').should.be.eql([ 'LGPL' ]);
    license('blah LGPL blah').should.be.eql([ 'LGPL' ]);
    license('blah LGPL\n').should.be.eql([ 'LGPL' ]);
    license('\nLGPL blah').should.be.eql([ 'LGPL' ]);
    license('blah LGPL').should.be.eql([ 'LGPL' ]);
    license('## License\n\nLGPL').should.be.eql([ 'LGPL' ]);
  });

  it('should match on MIT', function () {
    license('The MIT License').should.be.eql([ 'MIT' ]);
    license('blah MIT blah').should.be.eql([ 'MIT' ]);
    license('blah MIT\n').should.be.eql([ 'MIT' ]);
    license('\nMIT blah').should.be.eql([ 'MIT' ]);
    license('blah MIT').should.be.eql([ 'MIT' ]);
    license('## License\n\nMIT').should.be.eql([ 'MIT' ]);
  });

  it('should match on MPL', function () {
    license('The MPL License').should.be.eql([ 'MPL' ]);
    license('blah MPL blah').should.be.eql([ 'MPL' ]);
    license('blah MPL\n').should.be.eql([ 'MPL' ]);
    license('\nMPL blah').should.be.eql([ 'MPL' ]);
    license('blah MPL').should.be.eql([ 'MPL' ]);
    license('## License\n\nMPL').should.be.eql([ 'MPL' ]);
  });

  it('should match on Apache', function () {
    license('The Apache License').should.be.eql([ 'Apache' ]);
    license('blah Apache License blah').should.be.eql([ 'Apache' ]);
    license('blah Apache License\n').should.be.eql([ 'Apache' ]);
    license('\nApache License').should.be.eql([ 'Apache' ]);
    license('## License\n\nApache License').should.be.eql([ 'Apache' ]);
  });

  it('should match on WTFPL', function () {
    license('The WTFPL').should.be.eql([ 'WTFPL' ]);
    license('blah WTFPL blah').should.be.eql([ 'WTFPL' ]);
    license('blah WTFPL\n').should.be.eql([ 'WTFPL' ]);
    license('\nWTFPL').should.be.eql([ 'WTFPL' ]);
    license('## License\n\nWTFPL').should.be.eql([ 'WTFPL' ]);

    license('## License\n\nDO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE').should.be.eql([ 'WTFPL' ]);
  });

  it('should match multiple licenses', function () {
    license('the MIT and the GPL licenses').should.be.eql([ 'MIT', 'GPL' ]);
    license('the LGPL and the GPL licenses').should.be.eql([ 'LGPL', 'GPL' ]);
    license('the WTFPL and the GPL licenses').should.be.eql([ 'WTFPL', 'GPL' ]);
    license('the BSD and the GPL licenses').should.be.eql([ 'GPL', 'BSD' ]);
  });

});
