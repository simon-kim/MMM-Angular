'use strict';

require('../../app/js/client');
require('angular-mocks');

describe('App Controllers', function() {
  var $controllerConstructor;
  var $scope;

  beforeEach(angular.mock.module('mmmApp'));

  beforeEach(angular.mock.inject(function($rootScope, $controller) {
    $scope = $rootScope.$new();
    $controllerConstructor = $controller;
  }));

  it('should create a mmmCtrl', function() {
    var mmmController = $controllerConstructor('mmmCtrl', {$scope: $scope});
    expect(typeof mmmController).toBe('object');
  });

  describe('REST tests', function() {

    it('should get the mean, median, and mode', function() {
      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.user = {input: '10 10 20 30 40'};
      $scope.findMMM();

      expect(typeof $scope.answers).toBe('object');
    });
  });
});
