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

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
