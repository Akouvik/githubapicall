(function(){
  var module = angular.module("githubViewer");

  var repoController = function($scope, $routeParams, github){

    var onRepo = function(data){
      $scope.repo = data;
    };

    var onError = function(reason){
      $scope.error = reason;
    }


    var reponame = $routeParams.reponame;
    if(reponame){
      $('.heading').hide();
    }
    var username = $routeParams.username;

    github.getRepoDetails(username, reponame)
        .then(onRepo, onError);
  };


  module.controller("repoController", repoController);
}())
