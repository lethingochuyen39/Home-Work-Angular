
var app = angular.module('single-page-app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'hw_home.html'
        })
        .when('/hw_about', {
            templateUrl: 'hw_about.html'
        })
        .when('/hw_tutorial', {
            templateUrl: 'hw_tutorial.html'
        });
});
app.controller('SPAController', function ($scope) {
    $scope.message = "Single Page Application";
});