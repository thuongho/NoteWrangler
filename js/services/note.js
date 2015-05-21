(function(){
  // template of a factory
  // .factory("ServiceName", function ServiceNameFactory)
  angular.module('NoteWrangler')
    .factory('Note', ['$http', function NoteFactory($http){
      return {
        all: function() {
          return $http({method: 'GET', url: '/notes'});
        },
        create: function() {
          return $http({method: 'POST', url: "/notes", data: note});
        }
      };
    }]);
}());