(function(){
  angular.module('NoteWrangler')
    .controller('NotesShowController', ['$routeParams', '$http', '$scope', 'Note', function($routeParams, $http, $scope, Note){
      // var controller = this;
      // $http({method: 'GET', url: '/notes/' + $routeParams.id})
      //   .success(function(data){
      //     controller.note = data;
      //   });

      Note.find($routeParams.id).success(function(data) {
        $scope.note = data;
      });
    }]);
}());