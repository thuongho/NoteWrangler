(function(){
  angular.module('NoteWrangler')
    .controller('UsersIndexController', ['$scope', 'Gravatar', function($scope, Gravatar){
      $scope.gravatarUrl = function(email) {
        return Gravatar.generate(email);
      }
    }]);
}());