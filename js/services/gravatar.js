(function(){
  angular.module('NoteWrangler')
    // .factory('Gravatar', function GravatarFactory(){
    //   var avatarSize = 80; // default size
    //   var gravatarUrl = "http://gravatar.com/avatars/"
    //   return {
    //     generate: function(email) {
    //       return avatarUrl + CryptoJS.MD5(email) + "?size" + avatarSize.toString();
    //     }
    //   };
    // });

    // convert to Provider for configuration
    .provider('Gravatar', function GravatarProvider(){
      var avatarSize = 80;
      var gravatarUrl = "http://gravatar.com/avatars/"

      this.setSize = function(size) {
        avatarSize = size;
      };

      this.$get = function() {
        return {
          generate: function(email) {
            return avatarUrl + CryptoJS.MD5(email) + "?size" + avatarSize.toString();
          }
        };
      };
    });
}());