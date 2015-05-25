(function(){
  // template of a factory
  // .factory("ServiceName", function ServiceNameFactory)
  angular.module('NoteWrangler')
    .factory('Note', ['$http', '$resource' function NoteFactory($http, $resource){
      // return {
      //   all: function() {
      //     return $http({method: 'GET', url: '/notes'});
      //   },
      //   find: function(id) {
      //     return $http({method: 'GET', url: '/notes' + id});
      //   },
      //   update: function(noteObj) {
      //     return $http({method: 'PUT', url: '/notes', data: noteObj});
      //   },
      //   create: function() {
      //     return $http({method: 'POST', url: "/notes", data: note});
      //   }
      // };

      return {
        // this one line returns the same as above
        return $resource("/notes/:id", {}, {
          update: {
            method: 'PUT'
          }
        });
      }
    }]);
}());