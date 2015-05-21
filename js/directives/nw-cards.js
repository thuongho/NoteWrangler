(function(){
  angular.module('NoteWrangler')
    .directive('nwCards', function(){
      return {
        retrict: 'E',
        templateUrl: '../../templates/pages/notes/nw-cards.html',
        // controller: function($scope){
          // $scope.header = "Note Title"
        // }
        scope: {
          // = mean two data binding
          header: '=',
          description: '=',
          tweeted: '='
        },
        // link function takes in scope, element, attr
        // this way it searches the directive after everything is loaded
        link: function(scope, element, attr){
          // add class tweeted to nw-card element for any card that has a tweeted property on its scope
          if (scope.tweeted){
            element.addClass('.tweeted');
          }
        }
      };
    });
}());