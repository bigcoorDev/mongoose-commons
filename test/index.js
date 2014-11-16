// Generated by CoffeeScript 1.8.0
(function() {
  var chai, config, fixtures, fs, mongoose;

  mongoose = require('mongoose');

  fs = require('fs');

  config = require('./config');

  fixtures = require('./fixtures');

  chai = require('chai');

  chai.config.includeStack = true;

  mongoose.connect(config.MONGO);

  describe(null, function() {
    var endsWithJs, testDir;
    beforeEach(fixtures.refresh);
    endsWithJs = /\.js$/;
    testDir = __dirname + '/cases';
    return fs.readdirSync(testDir).forEach(function(file) {
      if (endsWithJs.test(file)) {
        return require('./cases/' + file);
      }
    });
  });

}).call(this);
