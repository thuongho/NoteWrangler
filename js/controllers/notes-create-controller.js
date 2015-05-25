(function(){
  angular.module('NotesCreateController', ['$http', 'Note', function($http, Note){
    var controller = this;
    this.saveNote = function(note){
      // for errors
      controller.errors = null;
      // $http({method: 'POST', url: '/notes', data: note})
      // replace $http with NoteFactory
      Note.create()
        .catch(function(note){
          controller.errors = note.data.errors;
        });

      // instead of Note.create
      $scope.note = new Note();
      $scope.saveNote = function(note) {
        $scope.errors = null;
        $scope.updating = true;
        note.$save(note)
          .catch(function(note) {
            $scope.errors = note.data.errors;
          }).finally(function(){
            $scope.updating = false;
          });
      };
      
    };
  }]);
}());