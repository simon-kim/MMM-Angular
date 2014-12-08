'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', 'MnMedMod', function($scope, MnMedMod) {
    var calc = new MnMedMod();
    $scope.user = {};
    $scope.answers = {};

    $scope.findMMM = function() {
      var input = $scope.user.input.split(' ');
      for (var i = 0; i < input.length; i++) {
        input[i] = +input[i];
      }
      $scope.answers.mean = calc.mean(input);
      $scope.answers.median = calc.median(input);
      $scope.answers.mode = calc.mode(input);
    };
  }]);
};
