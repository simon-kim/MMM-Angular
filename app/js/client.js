'use strict';

require('angular/angular');
require('angular-route');

var mmmApp = angular.module('mmmApp', ['ngRoute']);

require('./services/mmm_service')(mmmApp);
require('./controllers/mmm_controller')(mmmApp);

mmmApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
  .when('/mmm', {
    templateUrl: 'templates/mmm/mmm_template.html',
    controller: 'mmmCtrl'
  })
  .otherwise({
    redirectTo: '/mmm'
  });
}]);
