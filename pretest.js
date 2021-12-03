
var app = angular.module('single-page-app', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'baitap_index.html'
        })
        .when('/hw_about', {
            templateUrl: 'baitap_table.html'
        })
        .when('/hw_tutorial', {
            templateUrl: 'baitap_pretest.html'
        });
});
var app2= angular .module('single-page-app', []);
app2.controller('SPAController', function ($scope, $http) {
    $http.get("pretest.json").then(function (response) {
        $scope.ds = response.data;
    });
    $scope.addRow = function () {
        $scope.ds.push({ "ID": $scope.ID, "Name": $scope.Name, "Price": $scope.Price });

        alert("Add new food successfully");
    }

});
