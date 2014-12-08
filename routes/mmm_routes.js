'use strict';

var mmm = require('../lib/mmm');

module.exports = function(app) {
  app.post('/mmm', function(req, res) {
    var calc = function(input, callback) {
      var answers = {};
      answers.mean = mmm.mean(input);
      answers.median = mmm.median(input);
      answers.mode = mmm.mode(input);
      callback(answers);
    };
    calc(req.body.input, function(data) {
      res.json(data);
    });
  });
};
