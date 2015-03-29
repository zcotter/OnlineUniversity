'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('onlineUniversity', ['ui.bootstrap']);

app.controller("OnlineUniversityController", function ($scope, $http)
{


  var getCourses = function(){
    $http.get("http://localhost:3000/api/courses").success(
      function (data, status, headers, config) {
        $scope.courses = data;
      }
    )
  }

  getCourses();

  $scope.addCourse = function()
  {
    $scope.selectedCourse = null;
    $scope.newCourse = null;
  }

  $scope.editCourse = function(targetCourse)
  {
    $scope.selectedCourse = targetCourse;
    $scope.newCourse = targetCourse;
  }

  $scope.updateCourse = function(newCourse)
  {
    if ($scope.selectedCourse == null){
      var clone = {name: newCourse.name,
                   category: newCourse.category,
                   dateCreated: newCourse.dateCreated,
                   description: newCourse.description};
      $scope.courses.push(clone);
      $http.post("http://localhost:3000/api/courses", JSON.stringify({course: clone}));
      newCourse = null;
    }
    else{
      var index = $scope.courses.indexOf($scope.selectedCourse);
      $scope.courses[index] = newCourse
    }
    $scope.selectedCourse = null;
    $scope.newCourse = null;
  }

  $scope.removeCourse = function(course)
  {
    $scope.selectedCourse = course;
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
