(function(){
  angular.module('NotesCreateController', function($http){
    var controller = this;
    this.saveNote = function(note){
      // for errors
      controller.errors = null;
      $http({method: 'POST', url: '/notes', data: note})
        .catch(function(note){
          controller.errors = note.data.errors;
        })
    };
  });
}());