(function(){
  var app = angular.module("githubViewer");
  
app.controller('userController', function($scope, github, $routeParams) {

  var onUserComplete = function(data) {
    $scope.user = data;
    github.getRepos($scope.user).then(onRepos, onError);
  };

  var onRepos = function(data) {
    $scope.repos = data;
  }

  var onError = function(reason) {
    $scope.error = "An error occured";
  }

  

  $scope.username = $routeParams.username;
  $scope.repoSortOrder = "-stargazers_count";
  github.getUser($scope.username).then(onUserComplete, onError);



});
}())