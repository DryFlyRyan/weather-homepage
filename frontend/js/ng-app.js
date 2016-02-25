angular.module("weather_app", ['ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
  console.log("Angular's working");

  $urlRouterProvider.otherwise('/');

  $stateProvider.state('dashboard', {
    templateUrl: 'partials/dashboard.html',
    controller: 'forcastController',
    url:'/'
  })



  $locationProvider.html5Mode(true);
});
