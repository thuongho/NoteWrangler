(function(){
  angular.module('NoteWrangler',['ngRoute'])
    .config(['$routeProvider', function($routeProvider, GravatarProvider){
      $routeProvider
        .when('/notes', {
          templateUrl: 'templates/pages/notes/index.html',
          controller: 'NotesIndexController',
          controllerAs: 'indexController'
        })
        .when('/users', {
          templateUrl: 'templates/pages/users/index.html'
        })
        .when('/notes/new', {
          templateUrl: 'templates/pages/notes/edit.html',
          controller: 'NotesCreateController',
          controllerAs: 'createController'
        })
        // params id
        .when('/notes/:id', {
          templateUrl: 'templates/pages/notes/show.html',
          controller: 'NotesShowController',
          controllerAs: 'showController'
        })
        .when('/', {
          redirectTo: '/users'
        })
        .otherwise({
          redirectTo: '/notes'
        });

      GravatarProvider.setSize(100);
    }])
}());