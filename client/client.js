var app = angular.module('MyApp', ['ngRoute']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
    $routeProvider
        .when('/', {
            templateUrl:'views/main.html'
            //controller: 'ResumeController'
        })
        .when('/main', {
            templateUrl:'views/main.html'
            //controller: 'ResumeController'
        })
        .when('/resume', {
            templateUrl:'views/resume.html'
            //controller: 'ResumeController'
        })
        .when('/profile', {
            templateUrl:'views/profile.html'
            //controller: 'ResumeController'
        })
        .when('/contact', {
            templateUrl:'views/contact.html'
            //controller: 'ResumeController'
        });

    $locationProvider.html5Mode(true);
}]);

// Controllers: usually these would be sourced in, each from a different file
//app.controller('SampleController', ['$scope', function($scope){
//}]);