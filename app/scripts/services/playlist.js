'use strict';

/**
 * @ngdoc service
 * @name yoMamaApp.playlist
 * @description
 * # playlist
 * Factory in the yoMamaApp.
 */
angular.module('yoMamaApp')
  .factory('playlist', function () {
    // Service logic
    // ...

    var playlist = {

      tracks: [
        {
          title: "left hand free",
          url: "/music/left_hand_free.mp3"
        },
        {
          title: "every other freckle",
          url: "/music/every_other_freckle.mp3"
        }
      ],

      next: function () {
        // make the index next song start playing
        console.log('NEXT');
        }
      };

    return playlist
  });
