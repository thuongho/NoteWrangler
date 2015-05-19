(function(){
  angular.module('NoteWrangler')
    .controller('NotesIndexController', function($http, $routeParams){
      var controller = this;
      $http({method: 'GET', url: '/notes' + $routeParams.id}).success(function(data){
        controller.notes = data;
      });
    });
}());