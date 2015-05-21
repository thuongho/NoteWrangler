(function(){
  angular.module('NoteWrangler')
    .controller('NotesIndexController', 
      [
        '$scope'
        '$http', 
        '$routeParams', 
        'Note', 
        'Tweetable',
        function($scope, $http, $routeParams, Note, Tweetable){
          var controller = this;
          $http({
            method: 'GET', 
            url: '/notes' + $routeParams.id
          }).success(function(data){
            controller.notes = data;
          });

          $scope.tweetThatNote = function(noteToTweet) {
            Tweetable(noteToTweet).success(function(status){
              console.log(status);
            });
          };
        }
      ]
    );
}());