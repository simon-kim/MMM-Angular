'use strict';

module.exports = function(app) {
  app.controller('mmmCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.user = {};

    $scope.findMMM = function() {
      console.log('update running!');
      var input = $scope.user.input.split(' ');
      for (var i = 0; i < input.length; i++) {
        input[i] = +input[i];
      }
      $http({
        method: 'POST',
        url: '/mmm',
        data: {input: input}
      })
      .success(function(data) {
        console.log(data);
        $scope.answers = data;
      })
      .error(function(data) {
        console.log(data);
      });
    };
  }]);
};
