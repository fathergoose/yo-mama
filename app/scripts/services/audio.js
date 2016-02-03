'use strict';

/**
 * @ngdoc service
 * @name yoMamaApp.audio
 * @description
 * # audio
 * Factory in the yoMamaApp.
 */
angular.module('yoMamaApp')
  .factory('audio', function () {
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
