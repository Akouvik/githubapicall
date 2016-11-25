(function(){
  var app = angular.module("githubViewer");

app.controller('userController', function($scope, github, $routeParams) {

  var onUserComplete = function(data) {
    // $('body').hide();
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
  if($scope.username){
    $('.heading').hide();
  }
  $scope.repoSortOrder = "-stargazers_count";
  github.getUser($scope.username).then(onUserComplete, onError);

});
}())
