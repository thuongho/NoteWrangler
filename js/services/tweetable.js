(function(){
  angular.module('NoteWrangler')
    .factory('Tweetable', function TweetableFactory($http){
      return function(potentialTweet) {
        return $http({
          method: 'POST',
          url: 'http://gentle-spire-1153.herokuapp.com/tweet',
          data: {
            description: potentialTweet
          }
        });
      };
    });
}());
