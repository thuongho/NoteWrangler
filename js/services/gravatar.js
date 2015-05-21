(function(){
  angular.module('NoteWrangler')
    .factory('Gravatar', function GravatarFactory(){
      var avatarSize = 80; // default size
      var gravatarUrl = "http://gravatar.com/avatars/"
      return {
        generate: function(email) {
          return avatarUrl + CryptoJS.MD5(email) + "?size" + avatarSize.toString();
        }
      };
    });
}());