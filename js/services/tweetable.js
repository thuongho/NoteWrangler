(function(){
  angular.module('NoteWrangler')
    // .factory('Tweetable', function TweetableFactory($http){
    //   return function(potentialTweet) {
    //     return $http({
    //       method: 'POST',
    //       url: 'http://gentle-spire-1153.herokuapp.com/tweet',
    //       data: {
    //         description: potentialTweet
    //       }
    //     });
    //   };
    // });

    // convert to Provider
    .provider('Tweetable', function TweetableProvider(){
      var characterLength = 144;
      this.setLength = function(charLen) {
        characterLength = charLen;
      };

      this.get = function($http) {
        return function(potentialTweet){
          return $http({
            method: 'POST',
            url: 'http://gentle-spire-1153.herokuapp.com/tweet',
            data: {
              description: potentialTweet
            }
          });
        }
      };
    });
}());
