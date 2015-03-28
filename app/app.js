'use strict';

// Declare app level module which depends on views, and components
angular.module('onlineUniversity', [
  'ngRoute',
  'onlineUniversity.view1',
  'onlineUniversity.view2',
  'onlineUniversity.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
