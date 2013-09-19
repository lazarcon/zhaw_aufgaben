// Generated by CoffeeScript 1.3.3
(function() {
  var infoEntropie, informationsGehalt, log2, logWithBase;

  logWithBase = function(base, arg) {
    if (!(arg != null)) {
      return function(x) {
        return logWithBase(base, x);
      };
    }
    return Math.log(arg) / Math.log(base);
  };

  log2 = logWithBase(2);

  informationsGehalt = function(p) {
    return -log2(p);
  };

  infoEntropie = function(ps) {
    var entropie, p, _i, _len;
    entropie = 0;
    for (_i = 0, _len = ps.length; _i < _len; _i++) {
      p = ps[_i];
      entropie += informationsGehalt(p) * p;
    }
    return entropie;
  };

  module.exports.logWithBase = logWithBase;

  module.exports.informationsGehalt = informationsGehalt;

  module.exports.infoEntropie = infoEntropie;

}).call(this);