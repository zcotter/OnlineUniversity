'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('onlineUniversity', ['ui.bootstrap']);

app.controller("OnlineUniversityController", function ($scope)
{
  $scope.courses = [ { name : "Java 101", category : "PROG", dateCreated : "1/1/2015", description : "Wow" },
  { name : "MongoDB 101", category : "DB", dateCreated : "2/1/2015", description : "Good" },
  { name : "Express 101", category : "PROG", dateCreated : "3/1/2015", description : "Better" },
  { name : "AngularJS 101", category : "WEB", dateCreated : "4/1/2015", description : "Best" },
  { name : "NodeJS 101", category : "PROG", dateCreated : "5/1/2015", description : "Awesome" } ];

  //$scope.selected = {
    //item: $scope.courses[0]
  //}

  $scope.addCourse = function()
  {
    alert("something");
  }

  $scope.removeCourse = function(course)
  {
    $scope.selectedCourse = course
  }

  $scope.deleteCourse = function()
  {
    var index = $scope.courses.indexOf($scope.selectedCourse);
    $scope.courses.splice(index, 1);
  }
});
//config(['$routeProvider', function($routeProvider) {
  //$routeProvider.otherwise({redirectTo: '/view1'});
//}]);
