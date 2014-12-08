'use strict';

require('./../../app/js/client');
require('angular-mocks');

describe('App Controllers', function() {
  var $controllerConstructor;
  var $scope;
  var $httpBackend;

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
    beforeEach(angular.mock.inject(function(_$httpBackend_) {
      $httpBackend = _$httpBackend_;
    }));

    afterEach(function() {
      $httpBackend.verifyNoOutstandingExpectation();
      $httpBackend.verifyNoOutstandingRequest();
    });

    it('should post to the server', function() {
      $httpBackend.expectPOST('/mmm').respond(200,
        {mean: 22, median: 20, mode:'10'});

      $controllerConstructor('mmmCtrl', {$scope: $scope});
      $scope.user = {input: '10 10 20 30 40'};
      $scope.findMMM();
      $httpBackend.flush();

      expect(typeof $scope.answers).toBe('object');
    });
  });
});
