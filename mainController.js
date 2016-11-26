var app = angular.module("githubViewer");
app.controller('mainController', function($scope, $interval, $location) {




  var decrementCountdown = function() {
    $scope.countdown -= 1;
    if ($scope.countdown < 1) {
      $scope.search($scope.username);
    }
  };

  var countdownInterval = null

  var startCountdown = function() {
    countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown)
  }

  $scope.search = function(username) {
    if (countdownInterval) {
      $interval.cancel(countdownInterval);
      $scope.countdown = null;
    }
    $location.path("/user/" + username);
  };

  $scope.username = "Angular";
  $scope.countdown = 15;
  startCountdown();


    $scope.clearSpace = function(username){
      $scope.username = '';
      return $scope.username;
    }


});
