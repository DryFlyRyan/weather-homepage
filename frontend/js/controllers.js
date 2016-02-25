angular.module("weather_app")
.controller('forcastController', forcastController)

// forcastController.$inject = ['$scope'];

function forcastController($scope) {
  var latitude;
  var longitude;
  $scope.message = "forcast controller";
  $scope.getLocation = function() {
    return new Promise(function(resolve, reject){
      navigator.geolocation.getCurrentPosition(function (position) {
        resolve(position)
      })
    })
  }
  $scope.getWeather = function(latitude, longitude) {
  }

  console.log(latitude, longitude);

}
